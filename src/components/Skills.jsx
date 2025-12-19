const skills = [
  'Product Strategy',
  'Roadmapping',
  'User Research',
  'Experimentation',
  'Agile / Scrum',
  'Stakeholder Management',
  'Analytics & Metrics',
  'Go-to-Market (GTM)',
  'Prioritization (RICE/MoSCoW)',
  'Product Discovery',
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills">
          {skills.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
