import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function TravelList() {
  return (
    <div>
      <Logo />
      <Form />
      <PackageItem />
      <State />
    </div>
  );
}

function Logo() {
  return <h1>Far away</h1>;
}
function Form() {
    const [description ,setDescription] = useState("");
    const [quantity ,setQuantity] = useState(1);
    function handleSubmit(e){
        if(!description) return;
        e.preventDefault();
    }
  return (
    <div className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need to the trip?</h3>
      <form>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>                      
          {Array.from({ length: 20 }, (_, i) => i + 1).map(    //first argument and the second is the index
            (value, key) => (
              <option key={key}>{value}</option>
            ),
          )}
        </select>
        <input type="text" placeholder="Item..." value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <button className="button" >Add</button>
      </form>
    </div>
  );
}
function PackageItem() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item, key) => (
          <Item item={item} key={key} />
        ))}
      </ul>
    </div>
  );
}


function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="button">&times;</button>
    </li>
  );
}
function State() {
  return (
    <footer className="stats">
      <em>You have X items</em>
    </footer>
  );
}
