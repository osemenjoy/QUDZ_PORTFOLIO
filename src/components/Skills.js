import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Core PM Skills',
      skills: ['Product Strategy', 'Roadmapping', 'User Research', 'Competitive Analysis', 'Market Fit']
    },
    {
      category: 'Execution & Delivery',
      skills: ['Agile/Scrum', 'Prioritization (RICE)', 'OKRs', 'Sprint Planning', 'Stakeholder Management']
    },
    {
      category: 'Analytics & Data',
      skills: ['Data Analysis', 'A/B Testing', 'Metrics Design', 'SQL Basics', 'Google Analytics']
    },
    {
      category: 'Go-to-Market',
      skills: ['GTM Strategy', 'Pricing Strategy', 'Product Launch', 'User Acquisition', 'Retention']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-category">
              <h3>{cat.category}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
