import React, { useEffect, useState } from "react";

import styled from "styled-components";

function ButtonLink({ isRed }) {
  const [ButtonLink, setButtonLink] = useState(styled.div``);
  const [ImageLink, setImageLink] = useState(styled.img``);

  useEffect(() => {
    if (isRed) {
      setButtonLink(styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

        display: flex;
        flex-direction: column;
      `);
      setImageLink(styled.img`
        width: 70px;
        height: 70px;
        margin: 10px;
        background-color: #760e0e9d;
        padding: 10px;
        border-radius: 10px;
      `);
    } else {
      setButtonLink(styled.div`
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;

        display: flex;
        flex-direction: column;
      `);

      setImageLink(styled.img`
        width: 70px;
        height: 70px;
        margin: 10px;
        background-color: #0066af;
        padding: 10px;
        border-radius: 10px;
      `);
    }
  }, [isRed]);

  return (
    <ButtonLink>
      <a href="https://github.com/GuilhermeCustodioNieto">
        <ImageLink src="../../../public/github-link.png" alt="" />
      </a>
    </ButtonLink>
  );
}

export default ButtonLink;
