import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-glass">
        <img
          className="hero-character"
          src="Gojo-Satoru.png"
          alt="Gojo Satoru"
        />
        <h1 className="hero-title">Unleash Your UI Power</h1>
        <p className="hero-subtitle">
          Build anime-inspired, futuristic interfaces lightning fast.
        </p>

        <button className="hero-btn">Explore Components</button>
      </div>
    </section>
  );
};

export default Hero;
