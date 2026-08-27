import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function EatAndSplit() {
  const [isOpen, setIsOpen] = useState(false);
  const [friends, setFriend] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setIsOpen((show) => !show);
  }
  function handleAddFriend(newFriend) {
    setFriend((friends) => [...friends, newFriend]);
    setIsOpen(false);
  }
  function handleSelected(newFriend) {
    setSelectedFriend((cur) => (cur?.id === newFriend.id ? null : newFriend));
    setIsOpen(false);
  }
  function handleSplitBill(value) {
    setFriend((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelected}
          selectedFriend={selectedFriend}
        />
        {isOpen && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {isOpen ? "close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSubmitSplit={handleSplitBill}
        />
      )}
    </div>
  );
}

function FriendList({ friends, onSelection, selectedFriend }) {
  //read the friends prop and map over it to render a list of Friend components
  return (
    <div className="friend-list">
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </div>
  );
}
function Friend({ friend, onSelection, selectedFriend }) {
  return (
    <ul>
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            you own {friend.name} {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owns you {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>you and {friend.name} are even</p>}
        <Button onClick={() => onSelection(friend)}>
          {selectedFriend?.id == friend.id ? "Close" : "Select"}
        </Button>
      </li>
    </ul>
  );
}
function Button({ children, onClick, type = "button" }) {
  return (
    <button className="button" onClick={onClick} type={type}>
      {children}
    </button>
  );
}
function FormAddFriend({ onAddFriend }) {
  //write a function that takes in a prop called onAddFriend
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
function FormSplitBill({ selectedFriend, onSubmitSplit }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const expenseCal = bill ? bill - expense : "";
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !expense) return;
    onSubmitSplit(whoIsPaying === "user" ? expenseCal : -expense);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>Your Expense</label>
      <input
        value={expense}
        onChange={(e) =>
          setExpense(
            Number(e.target.value) > bill ? expense : Number(e.target.value),
          )
        }
      />
      <label>{selectedFriend.name}'s Expense</label>
      <input type="text" disabled value={expenseCal} />
      <label>Who's paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button type="submit">Split Bill</Button>
    </form>
  );
}
