import React, { useEffect, useRef, useState } from "react";
import styles from "./TimerContainer.module.css";
import styled from "styled-components";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

function TimerContainer({ seconds, isRunning, onFinish, isRed }) {
  const [countDown, setCountDown] = useState(seconds);
  const [totalTime, setTotalTime] = useState(0);
  const [Timer, setTimer] = useState(styled.div``);
  const [TotalHour, setTotalHour] = useState(styled.div``);
  const timerId = useRef();

  console.log(isRed);

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
  }, [isRunning]);

  useEffect(() => {
    if (countDown <= 0) {
      onFinish();
      clearInterval(timerId.current);
    }
  }, [countDown]);

  useEffect(() => {
    if (isRed) {
      setTimer(styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 80px 100px;
        background-color: #760e0e9d;
        border-radius: 10px;
        width: 450px;
      `);
      setTotalHour(styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 30px;
        background-color: #760e0e9d;
        border-radius: 0px 0px 10px 10px;
        width: 250px;
      `);
    } else {
      setTimer(styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 80px 100px;
        background-color: #0066af;
        border-radius: 10px;
        width: 450px;
      `);
      setTotalHour(styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 30px;
        background-color: #0066af;
        border-radius: 0px 0px 10px 10px;
        width: 250px;
      `);
    }
  }, [isRed]);

  return (
    <div className={styles.timer_container}>
      <Timer>
        <h2>{formatTime(countDown)}</h2>
      </Timer>
      <TotalHour>
        <h3>{formatTime(totalTime)}</h3>
      </TotalHour>
    </div>
  );
}

export default TimerContainer;
