import React from "react";
import Navel from "./Navel";
import "./index.css";

function Nav() {
  const handleHomeClick = (e) => {
    e.preventDefault();
    document.querySelector(".header").scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    document.querySelector(".section4").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav>
      <div className="menu-button" onClick={handleHomeClick}>
        <h2 className="text">
          <a href="#22">Ajay</a>
        </h2>
        <h2 className="text-hover">
          <a href="#33">Ajay</a>
        </h2>
      </div>
      <ul>
        <Navel>
          <li>
            <a href="#22">
              Home
            </a>
          </li>
        </Navel>
        <Navel>
          <li>
            <a onClick={handleAboutClick} href="#24">
              Projects
            </a>
          </li>
        </Navel>
      </ul>
    </nav>
  );
}

export default Nav;
