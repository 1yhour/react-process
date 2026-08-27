import Steps from "./page/Steps.jsx";
import Counter from "./page/Counter.tsx";
import TravelList from "./page/TravelList.jsx";
import FlashCard from "./page/FlashCard.jsx";
import CounterV2 from "./page/CounterV2.jsx";
import Intro from "./components/Intro.jsx";
import Header from "./components/Header.jsx";
import Avator from "./components/Avator.jsx";
import Skillslist from "./components/Skillslist.jsx";
import Footer  from "./components/Footer.jsx";
import Accordion from "./page/Accordion.jsx";
import TipCalculate from './page/TipCalcalate.jsx'
import EatAndSplit from "./page/EatAndSplit.jsx";
import Calculate from "./page/Calculate.jsx";
import TextExpander from "./page/TextExpand.jsx";
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
              <li
                key={index}
                className={`pizza ${pizzaData.soldOut ? "sold-out" : ""}`}
              >
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

      <Steps />

      <Footer />

      <div className="card">
        <Avator photoName="pizzas/salamino.jpg" name="Pizza Prosciutto" />
        <div className="data">
          <Intro />
          <Skillslist />
        </div>
      </div>
      <CounterV2 />
      <Counter />
      <TravelList />
      <FlashCard />
      <Accordion/>
      <TipCalculate/>
      <EatAndSplit/>
      <Calculate/>
      <TextExpander/>
    </div>
  );
}
