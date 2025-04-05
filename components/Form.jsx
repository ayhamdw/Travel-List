import { useState } from "react";
import "../src/App.css";
import List from "./List";

export default function Form() {
  const [count, setCount] = useState(1);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);

  function increment(e) {
    e.preventDefault();
    setCount((count) => count + 1);
  }

  function decrement(e) {
    e.preventDefault();
    if (count > 1) setCount((count) => count - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !count) return;

    const newItem = {
      description,
      quantity: count,
      id: Date.now(),
      packed: false,
    };

    setItems((prevItems) => [...prevItems, newItem]);

    setDescription("");
    setCount(1);
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip? </h3>
        <button onClick={decrement}>-</button>
        <h4>{count}</h4>
        <button onClick={increment}>+</button>
        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>

      <List items={items} setItems={setItems} />
    </>
  );
}
