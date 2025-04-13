import React, { useEffect, useState } from "react";
import styles from "./SettingsLink.module.css";
import styled from "styled-components";

function SettingsLink({ isRed }) {
  const [SettingsLink, setSettingsLink] = useState(styled.div``);

  useEffect(() => {
    if (isRed) {
      setSettingsLink(styled.div`
        background-color: #760e0e9d;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
      `);
    } else {
      setSettingsLink(styled.div`
        background-color: #0066af;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
      `);
    }
  }, [isRed]);

  return (
    <SettingsLink>
      <a href="/settings">
        <img
          src="../../../public/settings_icon.png"
          alt=""
          className={styles.settings_link_img}
        />
      </a>
    </SettingsLink>
  );
}

export default SettingsLink;
