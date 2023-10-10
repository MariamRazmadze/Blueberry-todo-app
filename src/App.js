import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { Stats } from "./components/Stats";
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <TodoList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
