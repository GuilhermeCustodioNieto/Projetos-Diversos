import React from "react";
import styled from "styled-components";

function BlueButton({ text, width, height, onClick }) {
  const Button = styled.button`
    width: ${width}px;
    height: ${height}px;
    background-color: #008be1;
    color: #fff;
    border-radius: 10px;
    border-style: none;
    font-size: 17px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  `;

  return <Button onClick={onClick}>{text}</Button>;
}

export default BlueButton;
