import React, { useEffect, useRef, useState } from "react";
import styles from "./TimerContainer.module.css";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

function TimerContainer({ seconds, isRunning }) {
  const [countDown, setCountDown] = useState(seconds);
  const [totalTime, setTotalTime] = useState(0);
  const timerId = useRef();

  useEffect(() => {
    setCountDown(seconds);
  }, [seconds]);

  useEffect(() => {
    if (!isRunning) {
      return () => clearInterval(timerId.current);
    } else {
      timerId.current = setInterval(() => {
        setCountDown((prev) => prev - 1);
        setTotalTime((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(timerId.current);
    }
  });

  useEffect(() => {
    if (countDown <= 0) {
      clearInterval(timerId.current);
    }
  });

  return (
    <div className={styles.timer_container}>
      <div className={styles.timer}>
        <h2>{formatTime(countDown)}</h2>
      </div>
      <div className={styles.total_hour}>
        <h3>{formatTime(totalTime)}</h3>
      </div>
    </div>
  );
}

export default TimerContainer;
