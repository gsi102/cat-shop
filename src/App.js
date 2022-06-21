import React from "react";
import styles from "./styles/index.module.css";
import FoodBlock from "./components/FoodBlock";

function App() {
  return (
    <div className={styles.wrapper}>
      <h1>Ты сегодня покормил кота?</h1>
      <FoodBlock />
    </div>
  );
}

export default App;
