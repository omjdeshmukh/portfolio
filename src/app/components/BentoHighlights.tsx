import React from 'react';

export default function BentoHighlights() {
  return (
    <section id="about" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Core Engineering Standards</div>
          <h2 className="section-title font-formal">
            Architected for <span className="text-gradient">Scale, Performance & Compliance</span>
          </h2>
          <p className="section-desc">
            Bridging rigorous enterprise front-end architecture with modern full-stack resilience, accessible compliance, and micro-frontend speed.
          </p>
        </div>

        <div className="bento-grid-container">
          {/* Card 1: SSR / Next.js Architecture */}
          <div className="bento-box bento-large card-glint">
            <div className="bento-icon-wrapper">▲</div>
            <h3 className="bento-headline font-formal">Next.js App Router & Hybrid SSR/SSG</h3>
            <p className="bento-body">
              Deep expertise structuring modular React & Next.js applications. Utilizing Server Components, Server-Side Rendering (SSR), and Static Site Generation (SSG) to maximize search visibility, streamline bundle size, and achieve near-zero First Input Delay (FID).
            </p>
            <div className="bento-tags">
              <span>Next.js 14+</span>
              <span>TypeScript</span>
              <span>React Hooks</span>
              <span>SSR / SSG</span>
              <span>Webpack Optimization</span>
            </div>
          </div>

          {/* Card 2: WCAG Accessibility */}
          <div className="bento-box bento-medium card-glint">
            <div className="bento-icon-wrapper" style={{ color: 'var(--accent-emerald)', background: 'rgba(16, 185, 129, 0.12)' }}>
              ♿
            </div>
            <h3 className="bento-headline font-formal">WCAG 2.1 Inclusive Architecture</h3>
            <p className="bento-body">
              Verified with NVDA & VoiceOver screen readers. Full keyboard navigation, semantic ARIA landmarks, and focus management ensuring inclusive digital experiences.
            </p>
            <div className="lighthouse-mini-scores">
              <div className="score-item">
                <div className="score-ring">100</div>
                <span>A11y</span>
              </div>
              <div className="score-item">
                <div className="score-ring">99</div>
                <span>Perf</span>
              </div>
              <div className="score-item">
                <div className="score-ring">100</div>
                <span>SEO</span>
              </div>
              <div className="score-item">
                <div className="score-ring">100</div>
                <span>Best</span>
              </div>
            </div>
          </div>

          {/* Card 3: Real-Time Telemetry */}
          <div className="bento-box bento-small card-glint">
            <div className="bento-icon-wrapper" style={{ color: 'var(--accent-cyan)', background: 'rgba(6, 182, 212, 0.12)' }}>
              📡
            </div>
            <h3 className="bento-headline font-formal">Real-Time Telemetry</h3>
            <p className="bento-body">
              Sub-second sensor dashboards with WebSockets, Chart.js, and D3.js for mission-critical telemetry.
            </p>
            <div className="bento-tags">
              <span>WebSockets</span>
              <span>Chart.js</span>
              <span>D3.js</span>
            </div>
          </div>

          {/* Card 4: Fullstack Node.js & Resilient State */}
          <div className="bento-box bento-wide card-glint">
            <div className="bento-icon-wrapper" style={{ color: 'var(--accent-purple)', background: 'rgba(139, 92, 246, 0.12)' }}>
              ⚡
            </div>
            <h3 className="bento-headline font-formal">Fullstack APIs & Redux State Pipelines</h3>
            <p className="bento-body">
              Constructing authenticated Node.js & Express RESTful services backed by MongoDB and MySQL. Managing complex UI state using Redux Toolkit and Context API, with continuous Kibana telemetry and unit testing in Jest.
            </p>
            <div className="bento-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>Redux Toolkit</span>
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>Kibana</span>
              <span>Jest</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bento-grid-container {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
        }
        .bento-box {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 32px;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(12px);
          transition: all var(--transition-normal);
        }
        .bento-box:hover {
          transform: translateY(-5px);
          border-color: var(--border-glow);
          box-shadow: var(--shadow-glow);
          background: var(--bg-card-hover);
        }
        .bento-large { grid-column: span 7; }
        .bento-medium { grid-column: span 5; }
        .bento-small { grid-column: span 4; }
        .bento-wide { grid-column: span 8; }

        .bento-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid var(--border-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: var(--accent-cyan);
          margin-bottom: 20px;
        }
        .bento-headline {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }
        .bento-body {
          font-size: 0.98rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .bento-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }
        .bento-tags span {
          font-size: 0.8rem;
          font-family: var(--font-mono);
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
        }
        .lighthouse-mini-scores {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          background: rgba(0, 0, 0, 0.25);
          padding: 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
          margin-top: auto;
        }
        .score-item {
          text-align: center;
        }
        .score-ring {
          width: 52px;
          height: 52px;
          margin: 0 auto 6px auto;
          border-radius: 50%;
          border: 3px solid var(--accent-emerald);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1rem;
          color: var(--accent-emerald);
          background: rgba(16, 185, 129, 0.08);
          font-family: var(--font-mono);
        }
        .score-item span {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
        }
        @media (max-width: 1024px) {
          .bento-large, .bento-medium, .bento-small, .bento-wide {
            grid-column: span 12;
          }
        }
      `}</style>
    </section>
  );
}
