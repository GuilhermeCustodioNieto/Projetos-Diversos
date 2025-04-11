import React from "react";
import styles from "./Title.module.css";

function Title() {
  return (
    <div className={styles.title}>
      <h1>Focus Timer</h1>
      <img src="../../../public/Line.png" alt="Line" />
    </div>
  );
}

export default Title;
