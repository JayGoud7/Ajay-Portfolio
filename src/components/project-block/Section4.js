import React from "react";
import Projects from "./project-box";
import "./index.css";

const Section4 = () => {
  return (
    <section className="section4">
      <div>
        <h5>some of my recent works</h5>
        <h1>Projects</h1>
      </div>
      <div className="pro_con">
        <Projects />
      </div>
    </section>
  );
};

export default Section4;
