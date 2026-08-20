import { useState } from "react";
import Item from "./Item";

export default function PackageItem({
  items,
  onDelete,
  onTogglePacked,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortItemby;

  if (sortBy === "input") sortItemby = items;
  if (sortBy === "description")
    sortItemby = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortItemby = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortItemby.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelete={onDelete}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by Input</option>
        <option value="description">Sort by Description</option>
        <option value="packed">Sort by Packed</option>
      </select>
      <button onClick={onClearList}>Clear</button>
    </div>
  );
}
