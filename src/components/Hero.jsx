import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../assets/logo.png";

export default function Hero() {
  const titleRef = useRef();
  const textRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        btnRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.4"
      );
  }, []);

  return (
    <section className="hero">

      <img src={logo} className="hero-logo" />

      <h1 ref={titleRef} className="gradient-text">
        Creo esperienze digitali che prendono vita.
      </h1>

      <p ref={textRef}>
        Siti web moderni, veloci e progettati per trasformare visitatori in clienti reali.
      </p>

      <div ref={btnRef} className="hero-buttons">

        <a
          href="https://wa.me/393393542788"
          className="btn-primary"
          target="_blank"
        >
          Scrivimi su WhatsApp
        </a>

        <a
          href="mailto:serenileonardo.web@gmail.com"
          className="btn-secondary"
        >
          Scrivimi via Email
        </a>

      </div>

    </section>
  );
}