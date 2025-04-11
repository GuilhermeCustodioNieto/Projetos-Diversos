import React from "react";
import styles from "./StartBtn.module.css";

function StartBtn({ startFunction }) {
  return (
    <div>
      <button className={styles.button} onClick={startFunction}>
        START
      </button>
    </div>
  );
}

export default StartBtn;
