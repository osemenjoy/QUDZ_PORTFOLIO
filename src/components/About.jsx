export default function About() {
  return (
    <section id="about" className="section">
      <div className="container two-col">
        <div>
          <h2>About</h2>
          <p>
            I am a Product Manager with a passion for uncovering user pain
            points and turning them into delightful experiences. I partner
            closely with design, engineering, and go-to-market teams to ship
            products that balance user value and business impact.
          </p>
          <p>
            My experience spans discovery, prioritization, roadmap planning,
            experimentation, and launch. I thrive in ambiguous spaces and enjoy
            bringing clarity with crisp narratives and data-informed choices.
          </p>
        </div>
        <div className="about__highlights">
          <div className="card">
            <div className="card__title">Strengths</div>
            <ul className="list">
              <li>Structured problem solving</li>
              <li>Stakeholder alignment</li>
              <li>Data-driven decisions</li>
              <li>Clear communication</li>
            </ul>
          </div>
          <div className="card">
            <div className="card__title">Focus Areas</div>
            <ul className="list">
              <li>Activation & retention</li>
              <li>Monetization & packaging</li>
              <li>New product incubation</li>
              <li>Platform & integrations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
