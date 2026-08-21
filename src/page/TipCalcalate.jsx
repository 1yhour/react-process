import { useState } from "react";

export default function TipCalculator() {
  const [bill, setCallBill] = useState("");
  const [service, setService] = useState(0);
  const [friendService, setFriendService] = useState(0);
  const billAmount = parseInt(bill);
  const tipService = bill * (service /100);
    const tipFriend = bill * (friendService /100);

  const total = billAmount + tipService + tipFriend;
  function handleReset(){
    setCallBill("");
    setFriendService(0);
    setService(0);
  }
  return (
    <div>
      <Bill input={bill} onInput={setCallBill} />
      <div>
      <ServiceComponent percent={service} onPercentChange={setService}>
        {"you like the services?"}
      </ServiceComponent>
      <ServiceComponent
        percent={friendService}
        onPercentChange={setFriendService}
      >
        {"your friend like the services?"}
      </ServiceComponent>
    </div>
    <p>You pay ${total} (${tipFriend.toFixed(2)} & ${tipService.toFixed(2)})</p>
    <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function Bill({ input, onInput }) {
  return (
    <div className="flex">
      <p>how much was the bill?</p>
      <input
        type="text"
        value={input}
        onChange={(e) => onInput(e.target.value)}
      />
    </div>
  );
}

function ServiceComponent({ children, percent, onPercentChange }) {
  return (
    <div className="flex">
      <p>how did {children}</p>
      <select
        value={percent}
        onChange={(e) => onPercentChange(parseFloat(e.target.value))}
      >
        <option value={0}>Dissatified (0%)</option>
        <option value={5}>It's okey (5%)</option>
        <option value={20}>Absolute awazing (20%)</option>
      </select>
    </div>
  );
}
