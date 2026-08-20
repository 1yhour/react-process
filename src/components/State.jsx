export default function State({ items }) {
  if (items.length === 0) return <p className="stats">Start add your items</p>;
  const numsItem = items.length;
  const numsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numsPacked / numsItem) * 100, 0);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to go"
          : `You have ${numsItem} items , packed ${numsPacked} and percentage:
        ${percentage}%`}
      </em>
    </footer>
  );
}
