import Accordion from "../components/Accordion/Accordion";
import AccordionItem from "../components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
      </section>
      <Accordion className="accordion">
        <AccordionItem
          id="1"
          className="accordion-item"
          title="We got 20 years of experience"
        >
          <article>
            <p>You can&apos;t go wrong with us.</p>
            <p>
              We are in the business of planning highly individualized vacation.
            </p>
          </article>
        </AccordionItem>
        <AccordionItem
          id="2"
          className="accordion-item"
          title="We're working with local guides"
        >
          <article>
            <p>You can&apos;t go wrong with us.</p>
            <p>
              We are in the business of planning highly individualized vacation.
            </p>
          </article>
        </AccordionItem>
      </Accordion>
    </main>
  );
}

export default App;
