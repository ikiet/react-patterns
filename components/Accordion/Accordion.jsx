import { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";

const AccordionContext = createContext();

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw Error("Accordion-related components must be wrapped by <Accordion>.");
  }
  return context;
};

const Accordion = ({ children, className }) => {
  const [openItemId, setOpenElementId] = useState(null);

  const toggleItem = (id) => {
    setOpenElementId((currentState) => {
      if (currentState === id) {
        return null;
      }
      return id;
    });
  };

  const value = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={value}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;

export default Accordion;
