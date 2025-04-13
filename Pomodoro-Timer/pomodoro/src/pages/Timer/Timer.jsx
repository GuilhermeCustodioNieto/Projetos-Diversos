import { React, useEffect, useState } from "react";
import styles from "./Timer.module.css";
import Title from "../../components/Title/Title";

import TimerContainer from "../../components/TimerContainer/TimerContainer";
import History from "../../components/History/History";
import StartBtn from "../../components/StartBtn/StartBtn";
import styled from "styled-components";

import ButtonLink from "../../components/ButtonLink/ButtonLink";

function Timer() {
  // 1. o tempo limite de minutos e segundos
  // 2. o valor que vai ser mostrado na tela
  // 3. função de iniciar o cronometro
  // 4. função de resetar o cronometro
  // 5. função de pausar o cronometro

  const [timerValue, setTimerValue] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [isRed, setIsRed] = useState(true);
  const [Page, setPage] = useState(styled.div``);
  const [historyData, setHistoryData] = useState([]);

  function onFinish() {
    setIsRunning(false);
    if (isRed) {
      setIsRed(false);
      setHistoryData((prev) => [...prev, "25:00"]);
      setTimerValue(300);
    } else {
      setIsRed(true);
      setHistoryData((prev) => [...prev, "05:00"]);
      setTimerValue(1500);
    }
  }

  function start() {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  }

  useEffect(() => {
    if (isRed) {
      setPage(styled.div`
        background-color: #cc2041;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100vw;
        height: 100vh;
      `);
    } else {
      setPage(styled.div`
        background-color: #2084cc;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100vw;
        height: 100vh;
      `);
    }
  }, [isRed]);

  return (
    <Page>
      <ButtonLink isRed={isRed}></ButtonLink>
      <div className={styles.main_infos}>
        <Title></Title>
        <TimerContainer
          seconds={timerValue}
          isRunning={isRunning}
          onFinish={onFinish}
          isRed={isRed}
        ></TimerContainer>
        <StartBtn
          startFunction={start}
          isRunning={isRunning}
          isRed={isRed}
        ></StartBtn>
      </div>

      <History isRed={isRed} historyData={historyData}></History>
    </Page>
  );
}

export default Timer;
