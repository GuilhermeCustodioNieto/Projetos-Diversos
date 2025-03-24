import React from "react";
import NavBar from "../../layouts/NavBar/NavBar";
import BlueButton from "../../components/BlueButton/BlueButton";
import styled from "styled-components";
import styles from "./Home.module.css";
import Footer from "../../layouts/Footer/Footer";

function Home() {
  return (
    <div>
      <NavBar></NavBar>

      <Container>
        <DivTexts className={styles.div_text}>
          <h2>Organize suas tarefas</h2>
          <p>
            Com a nossa lista de tarefas, tudo fica muito mais fácil! Economize
            horas de planejamento e simplifique sua vida!
          </p>
          <BlueButton text="Começar agora" width="9.555" height="7.5"></BlueButton>
        </DivTexts>

        <DivImgs>
          <IconImg
            src="../../../public/assets/welcome/welcome-left 1.png"
            alt="Welcome icon 1"
          />
          <IconImg
            src="../../assets/welcome/welcome-right 1.png"
            alt="Welcome icon 2"
          />
        </DivImgs>
      </Container>

      <Footer></Footer>
    </div>
  );
}

const IconImg = styled.img`

  `;

const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 78vh;
`;

const DivTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 400px;
  height: 400px;
  margin: 0px 50px;
`;

const DivImgs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 50px;
  width: 22.656vw;
  height: 49.8vh;
`;

export default Home;
