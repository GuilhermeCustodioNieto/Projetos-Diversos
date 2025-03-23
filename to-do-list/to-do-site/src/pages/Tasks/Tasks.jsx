import React from "react";
import BlueButton from "../../components/BlueButton/BlueButton";
import TasksHeader from "../../components/TasksHeader/TasksHeader";
import styles from "./Tasks.module.css";
import LateralBar from "../../components/LateralBar/LateralBar";

function Tasks() {
  return (
    <main className={styles.page}>
      <TasksHeader></TasksHeader>
      <div>
        <LateralBar></LateralBar>
      </div>
    </main>
  );
}

export default Tasks;
