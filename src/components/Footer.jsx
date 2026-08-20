import Order from "./Order.jsx";

export default function Footer() {
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
