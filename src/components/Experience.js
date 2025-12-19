import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior Product Manager',
      company: 'Tech Innovators Inc.',
      period: '2021 - Present',
      description: 'Led product strategy and roadmap for mobile app with 2M+ DAU. Increased user retention by 35% through targeted feature releases.'
    },
    {
      role: 'Product Manager',
      company: 'Digital Solutions Ltd.',
      period: '2019 - 2021',
      description: 'Managed cross-functional team to launch 3 major product features. Achieved 25% growth in monthly active users.'
    },
    {
      role: 'Associate Product Manager',
      company: 'StartUp Hub Co.',
      period: '2018 - 2019',
      description: 'Conducted user research and competitive analysis. Supported product launches and A/B testing initiatives.'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="exp-header">
                <h3>{exp.role}</h3>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
