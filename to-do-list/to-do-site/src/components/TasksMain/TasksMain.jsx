import React from "react";
import TaskRow from "./TaskRow/TaskRow.jsx";
import styles from "./TasksMain.module.css";

function TasksMain({ tasks }) {
  return (
    <section>
      <table className={styles.tasks_table}>
        <tr className={styles.tasks_head}>
          <th></th>
          <th>Titulo</th>
          <th>Data de Conclusão</th>
          <th>Importância</th>
        </tr>
        {tasks.map((task) => (
          <TaskRow
            isFinished={task.isFinished}
            title={task.title}
            date={task.dueDate}
            isImportant={task.isImportant}
          ></TaskRow>
        ))}
      </table>
    </section>
  );
}

export default TasksMain;
