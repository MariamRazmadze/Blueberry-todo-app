import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Form.module.css";

export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;
    const newItem = { description, complete: false, id: uuidv4() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
  }
  return (
    <form className={styles["add-form"]} onSubmit={handleSubmit}>
      <h3>What are your plans for today?</h3>
      <div className={styles["input-wrapper"]}>
        <input
          type="text"
          placeholder="type here..."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button>
          <span className={styles["small-icon"]}>
            <AiOutlinePlus />
          </span>
        </button>
      </div>
    </form>
  );
}
