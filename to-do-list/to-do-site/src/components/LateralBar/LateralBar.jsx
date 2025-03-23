import React from "react";
import LateralLink from "../LateralLink/LateralLink";
import styles from "./LateralBar.module.css";

function LateralBar() {
  return (
    <section className={styles.lateralBarContainer}>
      <LateralLink
        imgPath="../../../public/assets/lateral-link/start.png"
        onClickAction={() => {}}
        text="Importante"
      ></LateralLink>

      <LateralLink
        imgPath="../../../public/assets/lateral-link/done.png"
        onClickAction={() => {}}
        text="Concluído"
      ></LateralLink>

      <LateralLink
        imgPath="../../../public/assets/lateral-link/house.png"
        onClickAction={() => {}}
        text="Tarefas"
      ></LateralLink>
    </section>
  );
}

export default LateralBar;
