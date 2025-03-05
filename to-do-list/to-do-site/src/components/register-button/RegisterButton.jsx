import React from "react";
import styled from "styled-components";

function RegisterButton({ text, width, height, color }) {
  return (
    <div>
      <Paragraph>{text}</Paragraph>
    </div>
  );
}

const Paragraph = styled.button`
  width: ${width}px;
  height: ${height}px;
  color: ${color}px;
`;

export default RegisterButton;
