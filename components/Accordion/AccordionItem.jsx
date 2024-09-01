import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      "AccordionItem-related components must be wrapped by <Accordion.Item>.",
    );
  }

  return context;
};

export default ({ className, children, id }) => {
  return (
    <AccordionItemContext.Provider value={{ id }}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
};
