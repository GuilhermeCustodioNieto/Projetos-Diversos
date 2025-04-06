import React from "react";
import BlueButton from "../../components/BlueButton/BlueButton";
import TasksHeader from "../../components/TasksHeader/TasksHeader";
import styles from "./Tasks.module.css";
import LateralBar from "../../components/LateralBar/LateralBar";
import TasksMain from "../../components/TasksMain/TasksMain";

function Tasks() {
  const tasks = [
    {
      title: "Comprar pão",
      dueDate: "11/09/2001",
      isFinished: "true",
      isImportant: "true",
    },
  ];

  return (
    <main className={styles.page}>
      <TasksHeader></TasksHeader>
      <div className={styles.secondMain}>
        <LateralBar></LateralBar>
        <TasksMain tasks={tasks}></TasksMain>
      </div>
    </main>
  );
}

export default Tasks;
