import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <h2>Blueberry Todo</h2>
        <img
          src="blueberry.svg"
          style={{ width: "40px" }}
          alt="blueberry-icon"
        />
      </header>
      <div className={styles["main-image"]}>
        <img src="blueberry.jpg" alt="blueberry" />
      </div>
    </>
  );
}
