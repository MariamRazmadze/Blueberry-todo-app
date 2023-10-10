import { FaRegTrashAlt } from "react-icons/fa";
import styles from "./Item.module.css";

export function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <span
        style={
          item.complete
            ? { textDecoration: "line-through", textDecorationColor: "#00ff00" }
            : {}
        }
      >
        {item.description}
      </span>
      <input
        className={styles.checkbox}
        type="checkbox"
        value={item.complete}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <button onClick={() => onDeleteItem(item.id)}>
        <span className={styles["small-icon"]}>
          <FaRegTrashAlt />
        </span>
      </button>
    </li>
  );
}
