import React from "react";
import Logo from "../../components/Logo/Logo";
import Title from "../../components/Title/Title";
//import styled from "styled-components";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.title_div}>
        <Title text="To-Do List" size="24"></Title>
        <Logo></Logo>
      </div>

      <div className={styles.links_div}>
        <div>
          <h4>Veja mais projetos</h4>
          <div className={styles.links}>
            <a href="https://github.com/GuilhermeCustodioNieto/E-commerce-API">
              E-Commerce
            </a>
            <a href="https://gl-crypto-site-9i3ji7xfj-guilherme-custodio-nietos-projects.vercel.app/index.html">
              GL-Cripto
            </a>
            <a href="https://github.com/GuilhermeCustodioNieto/Spring-Blog">
              Spring-Blog
            </a>
          </div>
        </div>
        <div>
          <h4>Sobre a equipe</h4>
          <div className={styles.links}>
            <a href="https://guilherme-nieto.000webhostapp.com/">Portifólio</a>
            <a href="https://github.com/GuilhermeCustodioNieto">GitHub</a>
            <a href="https://www.linkedin.com/in/guilherme-cust%C3%B3dio-nieto/">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
