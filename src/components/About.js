import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Product Manager with 5+ years of experience building digital products that delight users and drive business growth. 
              My approach combines strategic thinking, data-driven insights, and a deep empathy for user needs.
            </p>
            <p>
              Throughout my career, I've led cross-functional teams through product discovery, design, and launch. 
              I'm passionate about creating products that solve real problems and create meaningful impact.
            </p>
            <p>
              When I'm not working on products, you can find me reading about latest trends in tech, mentoring aspiring PMs, 
              or exploring new technologies that could transform industries.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>20+</h3>
              <p>Products Launched</p>
            </div>
            <div className="stat-card">
              <h3>100M+</h3>
              <p>Users Impacted</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Team Members Led</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
