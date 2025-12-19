const items = [
  {
    title: 'Onboarding Revamp',
    impact: '↑36% activation rate within 60 days',
    summary:
      'Led discovery, defined hypotheses, and shipped guided onboarding with progressive disclosure and checklists.',
  },
  {
    title: 'Usage-Based Pricing',
    impact: '↓18% churn and ↑22% ARPU',
    summary:
      'Partnered with finance and GTM to design packaging, ran price tests, and launched new tiers.',
  },
  {
    title: 'Analytics Dashboard',
    impact: '↑3x weekly active admins',
    summary:
      'Defined north-star metrics, built instrumentation plan, and shipped customizable dashboards.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {items.map((p) => (
            <article key={p.title} className="card">
              <div className="card__title">{p.title}</div>
              <p className="muted">Impact: {p.impact}</p>
              <p>{p.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
