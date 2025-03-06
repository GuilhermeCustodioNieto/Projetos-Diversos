import React from "react";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <>
      <img
        className={styles.logo}
        src="../../assets/logo.png"
        alt="WebSite Logo"
      />
    </>
  );
}

export default Logo;
