import React from "react";
import styles from "./SettingsLink.module.css";

function SettingsLink() {
  return (
    <div className={styles.settings_link}>
      <a href="/settings">
        <img src="../../../public/settings_icon.png" alt="" />
      </a>
    </div>
  );
}

export default SettingsLink;
