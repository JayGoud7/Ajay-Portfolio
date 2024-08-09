import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Navel({ children }) {
  const magRef = useRef(null);
  useEffect(() => {
    const magel = magRef;
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { top, left, width, height } =
        magel.current.getBoundingClientRect();
      const x = clientX - left - width / 2;
      const y = clientY - top - height / 2;
      gsap.to(magel.current, { x: x });
      gsap.to(magel.current, { y: y });
    };

    const mouseleave = (e) => {
      gsap.to(magel.current, { x: 0 });
      gsap.to(magel.current, { y: 0 });
    };

    magel.current.addEventListener("mousemove", mouseMove);
    magel.current.addEventListener("mouseleave", mouseleave);

    return () => {
      magel.current.removeEventListener("mousemove", mouseMove);
      magel.current.removeEventListener("mouseleave", mouseleave);
    };
  }, []);
  return React.cloneElement(children, { ref: magRef });
}
