import React, { useState } from "react";
import Footer from "./Footer";

export default function List({ items, setItems }) {
  const [checkedItems, setCheckedItems] = useState(0);

  function removeItem(id) {
    setItems((prevItems) =>
      prevItems.filter((item) => (item.id !== id ? item : null)),
    );
  }

  function removeManyItems() {
    setCheckedItems(0);
    const newItemList = items.filter((item) => !item.packed);
    setItems(newItemList);
  }

  function convertToPackedItem(id) {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item,
    );
    setItems(updatedItems);

    const checkedItemCount = updatedItems.filter((item) => item.packed).length;
    setCheckedItems(checkedItemCount);
  }

  function Item({ item }) {
    return (
      <li>
        <input
          type="checkbox"
          name="toggle"
          value="checked"
          checked={item.packed}
          onChange={() => {
            convertToPackedItem(item.id);
          }}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => removeItem(item.id)}>❌</button>
      </li>
    );
  }

  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>

        <button onClick={() => removeManyItems()}>Remove Packed Items</button>
      </div>

      <Footer items={items.length} checkedItems={checkedItems} />
    </>
  );
}
