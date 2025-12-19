import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-subtitle">Welcome to my portfolio</h2>
          <h1 className="hero-title">Ajibade Qudirat</h1>
          <p className="hero-description">
            Product Manager | Strategic Thinker | User-Centric Innovator
          </p>
          <p className="hero-subtext">
            I transform user insights into impactful products. Passionate about solving complex problems,
            driving product strategy, and building teams that ship exceptional results.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar">
            <span>AQ</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
