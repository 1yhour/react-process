import { useState } from "react";
import Logo from "../components/Logo";
import Form from "../components/Form";
import PackageItem from "../components/PackageItem";
import State from "../components/State";

export default function TravelList() {
  const [items, setItems] = useState([]);
  function handleClearList() {
    const confirm = window.confirm(
      "Are you sure you want to delete all items?",
    );
    if (confirm) setItems([]);
  }
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleClear(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleTogglePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackageItem
        items={items}
        onDelete={handleClear}
        onTogglePacked={handleTogglePacked}
        onClearList={handleClearList}
      />
      <State items={items} />
    </div>
  );
}
