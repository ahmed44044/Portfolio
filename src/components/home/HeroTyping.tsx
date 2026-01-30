import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./hero.css";

export default function HeroTyped() {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: ["Hello, I am Ahmed", "I am a Web Developer"],
      typeSpeed: 90,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero">
    <h1 className="typed-wrapper">
  <span className="placeholder">
    Hello, I am Ahmed Web Developer
  </span>
  <span ref={el} className="typed-text"></span>
</h1>
    </section>
  );
}