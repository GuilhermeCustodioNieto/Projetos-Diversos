import React from "react";
import Logo from "../../components/Logo/Logo";
import Title from "../../components/Title/Title";
import BlueButton from "../../components/BlueButton/BlueButton";
import styles from "./NavBar.module.css";
import { Redirect } from "react-router-dom";
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

      <div>
        <a href="">
          <BlueButton
            text="Registrar"
            width="120"
            height="50"
            onClick={registerRedirection}
          ></BlueButton>
          <a href="/login">Login</a>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
