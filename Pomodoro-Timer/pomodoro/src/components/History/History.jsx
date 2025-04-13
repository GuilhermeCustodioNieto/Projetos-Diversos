import React, { useEffect, useState } from "react";
import styles from "./History.module.css";
import styled from "styled-components";

function History({ isRed, historyData }) {
  const [StyledHistoryContainer, setStyledHistoryContainer] = useState(
    styled.div``
  );

  useEffect(() => {
    if (isRed) {
      setStyledHistoryContainer(styled.div`
        background-color: #760e0e9d;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 2px;
        color: #fff;
        height: 400px;
        width: 280px;
        align-self: center;
        margin: 100px 0px 0px 0px;
        border-radius: 15px;
      `);
    } else {
      setStyledHistoryContainer(styled.div`
        background-color: #0066af;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 2px;
        color: #fff;
        height: 400px;
        width: 280px;
        align-self: center;
        margin: 100px 0px 0px 0px;
        border-radius: 15px;
      `);
    }
  }, [isRed]);

  return (
    <StyledHistoryContainer>
      <h3 className={styles.history_title}>Histórico</h3>
      <div className={styles.history_div}>
        {historyData.map((data, index) => {
          return <p key={index}>{data}</p>;
        })}
      </div>
    </StyledHistoryContainer>
  );
}

export default History;
