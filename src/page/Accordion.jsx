import { useState } from "react";

export const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
export default function Accordion() {
  return (
    <div>
      <AccordionHelper data={faqs} />
    </div>
  );
}
function AccordionHelper({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          num={i}
          key={el.title}
          onOpen={setCurOpen}
          curOpen={curOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        title='Testing'
        num={22}
        key='Testing'
        onOpen={setCurOpen}
        curOpen={curOpen}
      >
        <p>ecacae</p>
        <li>
          <ul>eac</ul>
        </li>
      </AccordionItem>
    </div>
  );
}
function AccordionItem({ num, title, children, onOpen, curOpen }) {
  const isOpen = num === curOpen;
  function handleIsOpen() {
    onOpen(isOpen ? null : num); // this update the parent state. it act as a reference to the parent state
  }

  return (
    <div className={`item ${isOpen ? "open" : "text"}`} onClick={handleIsOpen}>
      <p className="number">{num < 9 ? `0${num + 1}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
