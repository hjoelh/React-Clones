import React from "react";
import Companies from "./components/companies";
import Footer from "./components/footer";
import BackgroundGrid from "./components/BackgroundGrid";
import Header from "./components/header";
import Hero from "./components/hero";
import Hero2 from "./components/hero2";
import Hero3 from "./components/hero3";
import Hero4 from "./components/hero4";
import Hero5 from "./components/hero5";
import Hero6 from "./components/hero6";
import Shape from "./components/shape";
import { IconContext } from "react-icons";

function App() {
  return (
    <div className="App">
      <IconContext.Provider value={{ size: "1.9em" }}>
        <BackgroundGrid />
        <Shape />
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
    </div>
  );
}

export default App;
