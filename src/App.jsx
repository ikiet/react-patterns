import Accordion from "../components/Accordion/Accordion";
import Place from "../components/Place/Place";
import SearchableList from "../components/SearchableList/SearchableList";

import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

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
      <SearchableList
        items={PLACES}
        children={(item) => <Place item={item} />}
      />
      <SearchableList
        items={[
          {
            id: "1",
            content: "item 1",
          },
          { id: "2", content: "item 2" },
        ]}
        children={(item) => {
          return <div>{item.content}</div>;
        }}
      />
    </main>
  );
}

export default App;
