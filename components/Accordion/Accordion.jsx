import { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccordionContext = createContext();

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion-related components must be wrapped by <Accordion>.");
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
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;

export default Accordion;
