import React from "react";
import StarsBackground from "../components/StarBackground";
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles["square-container"]}>
      <StarsBackground />
      <div className={styles["shooting-star"]}>
        {[...Array(10)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
      <div className={styles.txt}>
        <h2>Welcome</h2>
        <p>To my starry background</p>
      </div>
    </div>
  );
};

export default App;
