import "../src/App.css";

export default function Footer({ items, checkedItems }) {
  const percentage = ((checkedItems ?? 0 / items) * 100).toFixed(1);
  return (
    <footer className="stats">
      <em>
        You have items {items} on your list, and you already packed{" "}
        {checkedItems} ({percentage}%)
      </em>
    </footer>
  );
}
