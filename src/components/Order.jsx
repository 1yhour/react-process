export default function Order({ openHours }) {
  return (
    <div className="order">
      <h2>We are opening at {openHours}:00</h2>
      <button className="btn">Order now</button>
    </div>
  );
}
