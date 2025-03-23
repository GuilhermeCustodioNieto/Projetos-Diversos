import React from "react";
import styles from "./LateralLink.module.css";

function LateralLink({ imgPath, onClickAction, text }) {
  return (
    <button onClick={onClickAction} className={styles.lateralLinkContainer}>
      <img src={imgPath} alt="img icon" />
      <p>{text}</p>
    </button>
  );
}

export default LateralLink;
