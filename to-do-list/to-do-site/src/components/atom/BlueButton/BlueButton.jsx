import React from "react";
import styled from 'styled-components'

function BlueButton({ text, width, height }) {
  const Button = styled.button`
    width: ${width}px;
    height: ${height}px;
    background-color: #008BE1;
    color: #fff;
    border-radius: 10px;
    border-style: none;
  `

  return <Button>{text}</Button>;
}

export default BlueButton;
