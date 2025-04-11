import { React, useState } from "react";
import styles from "./Timer.module.css";
import Title from "../../components/Title/Title";
import SettingsLink from "../../components/SettingsLink/SettingsLink";
import TimerContainer from "../../components/TimerContainer/TimerContainer";
import History from "../../components/History/History";
import StartBtn from "../../components/StartBtn/StartBtn";

function Timer() {
  // 1. o tempo limite de minutos e segundos
  // 2. o valor que vai ser mostrado na tela
  // 3. função de iniciar o cronometro
  // 4. função de resetar o cronometro
  // 5. função de pausar o cronometro

  const [timerValue, setTimerValue] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  function start() {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
      setTimerValue(1500);
    }
  }

  return (
    <div className={styles.page}>
      <h1></h1>
      <SettingsLink></SettingsLink>
      <div className={styles.main_infos}>
        <Title></Title>
        <TimerContainer seconds={timerValue}></TimerContainer>
        <StartBtn startFunction={start} isRunning={isRunning}></StartBtn>
      </div>

      <History></History>
    </div>
  );
}

export default Timer;
