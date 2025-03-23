import React from "react";
import BlueButton from "../../components/BlueButton/BlueButton";
import styles from "./TasksHeader.module.css";

function TasksHeader() {
  return (
    <section className={styles.tasksHeaderContainer}>
      <BlueButton
        text="Adicionar tarefa"
        width="250"
        height="55"
        onClick={() => {}}
      ></BlueButton>

      <div className={styles.searchContainer}>
        <button>
          <img src="../../../public/assets/search.png" alt="Search button" />
        </button>
        <input type="text" placeholder="Ex. comprar pão" />
      </div>

      <button className={styles.exitButton}>
        <img src="../../../public/assets/exit icon.png" alt="Exit icon" />
      </button>
    </section>
  );
}

export default TasksHeader;
