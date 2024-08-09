import React from "react";
import Cursor from "./components/cursor/cursor";
import Nav from "./components/navbar/Nav";
import Header from "./components/header/Header";
import Section1 from "./components/Section1/Section1";
import "./components/cursor/Cursor.css";
import LocomotiveScroll from "locomotive-scroll";
import Skill from "./components/Skills/Skill";
import Connect from "./components/connect/connect";
import Section4 from "./components/project-block/Section4";

new LocomotiveScroll();

function App() {
  
  return (
    <main>
      <Cursor />
      <Nav />
      <Header />
      <Section1 />
      <Skill />
      <Section4 />
      <Connect />
    </main>
  );
}

export default App;
