export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">Product Manager</p>
          <h1>Ajibade Qudirat</h1>
          <p className="lead">
            I build lovable products end-to-end — from user insights to
            strategy, roadmaps, and GTM — driving outcomes that matter.
          </p>
          <div className="hero__cta">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn" href="#contact">Contact Me</a>
          </div>
        </div>
        <div className="hero__badge">
          <div className="badge-card">
            <div className="badge-dot" />
            <div>
              <strong>Outcome-focused</strong>
              <div>Roadmaps anchored in measurable impact</div>
            </div>
          </div>
          <div className="badge-card">
            <div className="badge-dot" />
            <div>
              <strong>User-first</strong>
              <div>Deep research and rapid iteration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
