import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'User Onboarding Redesign',
      category: 'Product Strategy',
      impact: '↑ 40% activation rate',
      description: 'Led complete redesign of onboarding flow using user research and data analytics. Implemented gamification elements and progressive disclosure.'
    },
    {
      title: 'Pricing Model Optimization',
      category: 'Monetization',
      impact: '↑ 35% revenue growth',
      description: 'Designed and tested new pricing tiers based on user segmentation. Launched usage-based pricing model.'
    },
    {
      title: 'Analytics Dashboard MVP',
      category: 'Data & Insights',
      impact: '3x user engagement',
      description: 'Built custom analytics dashboard helping users track key metrics. Reduced support tickets by 30%.'
    },
    {
      title: 'Mobile App Expansion',
      category: 'Growth',
      impact: '2M+ downloads',
      description: 'Managed product roadmap for iOS and Android expansion. Coordinated with design and engineering teams.'
    },
    {
      title: 'Enterprise Feature Launch',
      category: 'B2B',
      impact: '↑ 50% enterprise adoption',
      description: 'Led discovery, design, and launch of enterprise-focused features. Conducted stakeholder interviews and user testing.'
    },
    {
      title: 'Retention Campaigns',
      category: 'User Engagement',
      impact: '↓ 25% churn rate',
      description: 'Developed retention strategy with personalized email campaigns and in-app messaging based on user behavior.'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-category">{project.category}</div>
              <h3>{project.title}</h3>
              <p className="project-impact">{project.impact}</p>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
