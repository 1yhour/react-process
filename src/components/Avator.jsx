export default function Avator({ photoName, name }) {
  return (
    <div>
      <img src={photoName} alt={name} />
    </div>
  );
}
