import React from "react";
import Companies from "./components/2_HeroMain/Companies";
import Footer from "./components/Footer.js";
import BackgroundGrid from "./components/Misc/Grid";
import Header from "./components/1_Header/Header";
import Hero from "./components/2_HeroMain/Hero";
import Hero2 from "./components/3_Heros/Hero2";
import Hero3 from "./components/3_Heros/Hero3";
import Hero4 from "./components/3_Heros/Hero4";
import Hero5 from "./components/3_Heros/Hero5";
import Hero6 from "./components/3_Heros/Hero6";
import HeaderBackground from "./components/1_Header/headerBackground";
import { IconContext } from "react-icons";
import styled from "styled-components";

export default function App() {
  return (
    <MainApp>
      <IconContext.Provider value={{ size: "1.9em" }}>
        <BackgroundGrid />
        <HeaderBackground />
        <Header />
        <Hero />
        <Companies />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
        <Hero6 />
      </IconContext.Provider>
      <Footer />
    </MainApp>
  );
}

const MainApp = styled.div`
  position: relative;
  overflow: hidden;
`;
