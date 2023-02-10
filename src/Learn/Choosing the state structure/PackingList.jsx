import "./styles.css";

export default function PackingList({ items, onChangeItem, onDeleteItem }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={onChangeItem}
          />{" "}
          {item.title} <button onClick={onDeleteItem}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
