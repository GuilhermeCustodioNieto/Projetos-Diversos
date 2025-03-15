import React from "react";
import styled from 'styled-components'

function Title({ text, size }) {
  const H2 = styled.h2`
  font-size: ${size}px;
  font-weight: bold;
  color: #000;
`


  return <h2 className={H2}>{text}</h2>;
}

export default Title;
