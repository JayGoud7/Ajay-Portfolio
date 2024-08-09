import { React, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

function Section() {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);
  const text =
    '"I bring a decade of industry passion and a proven track record of collaborating with prestigious organizations. I am eager to apply my skills to create impactful user experiences and contribute effectively to project success, driven by a relentless pursuit of excellence."';

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 6,
        start: "top 60%",
        end: "bottom 85%",
      },
      color: "#2A2A2A",

      stagger: 0.1,
    });
    return () => {
      anim.kill();
    };
  });

  return (
    <section className="section1">
      <div className="a">
        <h1>About Me</h1>
        <h2>My introduction</h2>
      </div>
      <div className="reveal">
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span className="reveal-text" key={index} ref={setlettersRef}>
              {letter}
            </span>
          ))}
        </div>
      </div>

      <div className="m-s">
        <div className="m1">
          <h2>200+</h2>
          <h3>PROBLEM SOLVING</h3>
        </div>
        <div className="m1">
          <h2>1+</h2>
          <h3>YEARS OF EXPERIENCE</h3>
        </div>
        <div className="m1">
          <h2>4+</h2>
          <h3>PROJECTS COMPLETED</h3>
        </div>
      </div>
    </section>
  );
}

export default Section;
