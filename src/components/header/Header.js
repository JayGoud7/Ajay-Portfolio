import { useEffect, useRef } from "react";
import "./index.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import img1 from "./img1.jpg";
import gsap from "gsap";

function Header() {
  const uRef1 = useRef(null);
  const uRef2 = useRef(null);
  const uRef3 = useRef(null);
  const uRef4 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(uRef1.current, {
      duration: 1.3,
      opacity: 0,
      y: 20,
      stagger: {
        each: 0.5,
      },
    })
      .from(
        uRef2.current,
        {
          duration: 1,
          opacity: 0,
          x: 20,
          stagger: {
            each: 0.5,
          },
        },
        "-=0.5"
      ) // stagger starting 0.5s after the first animation
      .from(
        uRef3.current,
        {
          duration: 1,
          opacity: 0,
          y: -10,
          stagger: {
            each: 0.5,
          },
        },
        "-=0.5"
      ) // stagger starting 0.5s after the second animation
      .from(
        uRef4.current,
        {
          duration: 1,
          opacity: 0,
          y: -10,
          stagger: {
            each: 0.5,
          },
        },
        "-=0.7"
      ); // stagger starting 0.5s after the third animation

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="header">
      <div className="h-f">
        <div className="img-div">
          <img src={img1} alt="" />
        </div>
        <h1 ref={uRef1}>
          Hello, <span>I'm Ajay Goud</span>
        </h1>
        <h2 ref={uRef2}>Frontend Developer</h2>
        <div ref={uRef3} className="anc-button">
          <a href="#44">Download Resume</a>
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ajay-b-606630266/">Hire Me</a>
        </div>
        <div className="icon" ref={uRef4}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JayGoud7?tab=repositories"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ajay-b-606630266/"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
