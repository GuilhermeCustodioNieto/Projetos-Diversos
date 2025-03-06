import React from "react";
import styles from "./BlueButton.module.css";

function BlueButton({ text, size }) {
  return <div className={`${styles.blue_button} ${styles[size]}`}>{text}</div>;
}

export default BlueButton;
