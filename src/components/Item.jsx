export default function Item({ item, onDelete, onTogglePacked }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onTogglePacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="text-2xl text-black" onClick={() => onDelete(item.id)}>
        &times;
      </button>
    </li>
  );
}
