import styles from "./Stats.module.css";

export function Stats({ items }) {
  if (!items.length)
    return <p className={styles.stats}>No todos yet. Start adding!</p>;
  const numItems = items.length;
  const numCompleted = items.filter((item) => item.complete).length;
  const percentage = Math.round((numCompleted / numItems) * 100);
  return (
    <footer className={styles.stats}>
      {percentage === 100
        ? "All Todos complete, congratulations!"
        : ` You
      have completed ${numCompleted} items (${percentage}%) of all ${numItems}
      Todos.`}
    </footer>
  );
}
