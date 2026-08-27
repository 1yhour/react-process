import { useState } from "react";
const userList =[
    {
        id: 1,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 2,
        name: "Diana",
        image: "https://i.pravatar.cc/48?u=118837",
        balance: 15,
    },
    {
        id: 3,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=118838",
        balance: 0,
    }

]
export default function Calculate() {
    const [initialUsers, setInitialUsers] = useState(userList);
    const [users, setUsers] = useState(null);
    function handleAddUser(newUser){
        setUsers((prev)=>[...prev, newUser])
    }
  return (
    <div>
      <h1>Calculate</h1>
      <InputValue />
      <UserList initialUsers={initialUsers} onAddUser={handleAddUser}/>
      <AddUser/>
    </div>
  );
}
function InputValue(){
     const [value1 , setValue1]= useState(0);
     
     const [value2 , setValue2]= useState(0);
     const result = value1 + value2;
     function handleSubmit(e){
        e.preventDefault();
     }
    return(
        <form onSubmit={handleSubmit}>
            <label>Number 1</label>
            <input type="text" value={value1} onChange={(e)=>setValue1(Number(e.target.value))}/>
            <label>Number 2</label>
            <input type="text" value={value2} onChange={(e)=>setValue2(Number(e.target.value))}/>
            <p>Result: {result}</p>
        </form>
    )
}
function User({user}){
    return(
        <div>
            <img src={user.image} alt={user.name}/>
            <p>Name: {user.name}</p>
            <p>Balance: {user.balance}</p>
        </div>
    )
}
function UserList({ initialUsers }){
    return(
        <ul>
            <li>
                {initialUsers.map((user)=>(
                    <User key={user.id} user={user} />
                ))}
            </li>
            <Button>Add User</Button>
        </ul>
    )
}
function AddUser({onAddUser}){
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48?u=');
    const [balance, setBalance] = useState(0);

    function handleSubmit(e){
        e.preventDefault();
        const newUser = {
            id: crypto.randomUUID(),
            name: name,
            image: `${image}${crypto.randomUUID()}`,
            balance: Number(balance ||0)
        }
        onAddUser(newUser);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            <label>Image</label>
            <input value={image} onChange={(e)=>setImage(e.target.value)}/>
            <label>Balance</label>
            <input value={balance} onChange={(e)=>setBalance(e.target.value)}/>
            <Button type='submit'>ADD User</Button>
        </form>
    )
}
function Button({children}){
    return(
        <button>{children}</button>
    )
}