import { React, useEffect, useState } from "react";

import styled from "styled-components";

function StartBtn({ startFunction, isRunning, isRed }) {
  const [Button, setButton] = useState(styled.button``);

  useEffect(() => {
    if (isRed) {
      setButton(styled.div`
        background-color: #760e0e9d;
        border: none;
        padding: 20px 80px;
        border-radius: 10px;
        color: #fff;
        font-size: 30px;
        cursor: pointer;
      `);
    } else {
      setButton(styled.div`
        background-color: #0066af;
        border: none;
        padding: 20px 80px;
        border-radius: 10px;
        color: #fff;
        font-size: 30px;

        cursor: pointer;
      `);
    }
  }, [isRed]);

  return (
    <div>
      <Button onClick={startFunction}>{isRunning ? "PAUSE" : "START"}</Button>
    </div>
  );
}

export default StartBtn;
