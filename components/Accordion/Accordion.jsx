import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw Error("Accordion-related components must be wrapped by <Accordion>.");
  }
  return context;
};

export default ({ children, className }) => {
  const [openItemId, setOpenElementId] = useState(null);

  const openItem = (id) => {
    setOpenElementId(id);
  };

  const closeItem = () => {
    setOpenElementId(null);
  };
  const value = {
    openItemId,
    openItem,
    closeItem,
  };

  return (
    <AccordionContext.Provider value={value}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};
