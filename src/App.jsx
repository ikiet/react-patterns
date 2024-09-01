import Accordion from "../components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
      </section>
      <Accordion className="accordion">
        <Accordion.Item id="1" className="accordion-item">
          <Accordion.Title className="accordion-item-title">
            We got 20 years of experience
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            <article>
              <p>You can't go wrong with us.</p>
              <p>
                We are in the business of planning highly individualized
                vacation.
              </p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item id="2" className="accordion-item">
          <Accordion.Title className="accordion-item-title">
            We're working with local guides
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            <article>
              <p>You can't go wrong with us.</p>
              <p>
                We are in the business of planning highly individualized
                vacation.
              </p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </main>
  );
}

export default App;
