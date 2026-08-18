import Steps from "./Steps.tsx";
import Counter from "./Counter.tsx"
import TravelList from "./TravelList.jsx";
import FlashCard from "./FlashCard.jsx";
import CounterV2 from "./CounterV2.jsx";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
const profileData = [
  {
    name: "Seng Lyhour",
    bio: `I'm Seng Lyhour, a full-stack software development student based in Phnom Penh, Cambodia.
        I focus on building functional, user-centric web applications and actively expanding my technical skillset.
        If there is a complex routing or deployment issue to solve, chances are I'll build a system around it and ship it.
        My main tech stack is React, TypeScript, Tailwind, Next.js, and Laravel. My go-to tools are Docker, Git, and Vercel, and I am currently diving deep into PHP.`,
  },
];

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
export default function App() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <div className="container">
      <Header />
      <h2 className="text-2xl border-t border-b py-2">Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p className="text-4xl">
            Authentic italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizzaData, index) => (
              <li key={index} className={`pizza ${pizzaData.soldOut ? "sold-out" : ""}`}>
                <img src={pizzaData.photoName} alt={pizzaData.name} />
                <div>
                  <h2>{pizzaData.name}</h2>
                  <p>{pizzaData.ingredients}</p>
                  <span>{pizzaData.soldOut ? "SOLDOUT" : pizzaData.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}

      <Steps/>
      
      <Footer />

      <div className="card">
        <Avator photoName="pizzas/salamino.jpg" name="Pizza Prosciutto" />
        <div className="data">
          <Intro />
          <Skillslist />
        </div>
      </div>
      <CounterV2/>
      <Counter/>
      <TravelList/>
      <FlashCard/>
      
    </div>
  );
}
function Avator({ photoName, name }) {
  return (
    <div>
      <img src={photoName} alt={name} />
    </div>
  );
}
function Skillslist() {
  return (
    <div>
      {skills.map(({ skill, color, level }) => (
        <div key={skill} className="skill-list">
          <Skill skill={skill} color={color} level={level} />
        </div>
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ background: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
function Intro() {
  return (
    <div>
      {profileData.map(({ name, bio }) => (
        <div key={name}>
          <h2 className="text-4xl font-bold py-5">{name}</h2>
          <p className="text-xl font-medium">{bio}</p>
        </div>
      ))}
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>FAST REACT PIZZA CO.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHours={openHour} />
      ) : (
        <h2>Sorry our shop is closing</h2>
      )}
    </footer>
  );
}

function Order({ openHours }) {
  return (
    <div className="order">
      <h2>We are opening at {openHours}:00</h2>
      <button className="btn">Order now</button>
    </div>
  );
}
