import { React, useEffect, useState } from "react";
import styles from "./TasksRow.module.css";

function TaskRow({ isFinished, title, date, isImportant }) {
  const [finishedImage, setFinishedImage] = useState(
    "../../../public/assets/task-unfinished.png"
  );

  const [importantImage, setImportantImage] = useState(
    "../../../public/assets/task-important-icon.png"
  );

  function isFinishedTest() {
    if (isFinished == "true") {
      setFinishedImage("../../../../public/assets/task-finished.png");
    } else {
      setFinishedImage("../../../../public/assets/task-unfinished.png");
    }
  }

  function isImportantTest() {
    if (isImportant == "true") {
      setImportantImage("/assets/task-important-icon.png");
    } else {
      setImportantImage("/assets/task-inimporant-icon.png");
    }
  }

  useEffect(() => {
    isFinishedTest();
    isImportantTest();
  }, [isFinished, isImportant]);

  return (
    <tr className={styles.tasks_row}>
      <td>
        <img src={finishedImage} alt="Task state" />
      </td>
      <td>{title}</td>
      <td>{date}</td>
      <td>
        <img src={importantImage} alt="Task important" />
      </td>
    </tr>
  );
}

export default TaskRow;
