import { useState } from "react";
import { Item } from "./Item";
import styles from "./TodoList.module.css";

export function TodoList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "completion")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.complete) - Number(a.complete));
  return (
    <div className={styles.list}>
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className={styles["buttons-wrapper"]}>
        <div className={styles["custom-select"]}>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="completion">Sort by completion</option>
          </select>
          <span className={styles["custom-arrow"]}></span>
        </div>
        <button className={styles["clear-all-button"]} onClick={onClearList}>
          Clear all
        </button>
      </div>
    </div>
  );
}
