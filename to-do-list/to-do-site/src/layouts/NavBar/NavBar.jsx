import React from "react";
import Logo from "../../components/Logo/Logo";
import Title from "../../components/Title/Title";
import BlueButton from "../../components/BlueButton/BlueButton";
import styles from "./NavBar.module.css";

import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  function registerRedirection() {
    navigate("/register");
  }

  return (
    <header className={styles.navbar}>
      <Logo></Logo>

      <Title text="To Do List" size="10"></Title>

      <div className={styles.buttons}>
        <BlueButton
          text="Registrar"
          width="7.25"
          height="6.5"
          onClick={registerRedirection}
        ></BlueButton>

        <a className={styles.loginButton} href="/login">
          Login
        </a>
      </div>
    </header>
  );
}

export default NavBar;
