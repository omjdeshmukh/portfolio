import React from 'react';
import { ExperienceItem } from '../../types';

interface ExperienceTimelineProps {
  experience: ExperienceItem[];
}

export default function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <section id="experience" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Career Milestones</div>
          <h2 className="section-title font-formal">
            5+ Years of <span className="text-gradient">Production Impact</span>
          </h2>
          <p className="section-desc">
            A proven record of engineering excellence across high-scale telecom platforms, omnichannel retail, global recruitment suites, and real-time automation.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-track" />

          {experience.map((item, idx) => (
            <div key={idx} className="timeline-entry">
              <div className="timeline-node" />
              <div className="timeline-panel card-glint">
                <div className="timeline-panel-header">
                  <div>
                    <h3 className="timeline-job-title font-formal">{item.role}</h3>
                    <div className="timeline-company-sub">
                      <span>{item.company}</span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <span className="timeline-time-badge">{item.period}</span>
                </div>

                <div className="timeline-domain-meta">
                  <span>Domain: {item.domain}</span>
                  <span>•</span>
                  <span>Scope: {item.type}</span>
                </div>

                <ul className="timeline-points">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="timeline-bullet">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="timeline-tech-row">
                  {item.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="timeline-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline-wrapper {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
        }
        .timeline-track {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 28px;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-indigo) 50%, var(--accent-purple) 100%);
          border-radius: var(--radius-full);
        }
        .timeline-entry {
          position: relative;
          padding-left: 76px;
          margin-bottom: 48px;
        }
        .timeline-entry:last-child {
          margin-bottom: 0;
        }
        .timeline-node {
          position: absolute;
          top: 0;
          left: 17px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 3px solid var(--accent-cyan);
          box-shadow: 0 0 12px var(--accent-cyan);
          z-index: 2;
        }
        .timeline-panel {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 32px;
          backdrop-filter: blur(14px);
          transition: all var(--transition-normal);
        }
        .timeline-panel:hover {
          border-color: var(--border-glow);
          box-shadow: var(--shadow-md);
          transform: translateX(6px);
        }
        .timeline-panel-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 12px;
        }
        .timeline-job-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .timeline-company-sub {
          font-size: 1rem;
          font-weight: 600;
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
        }
        .timeline-time-badge {
          font-size: 0.82rem;
          font-family: var(--font-mono);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          background: rgba(99, 102, 241, 0.12);
          color: var(--accent-indigo);
          border: 1px solid var(--border-glow);
          font-weight: 600;
        }
        .timeline-domain-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          color: var(--text-dim);
          font-size: 0.85rem;
          font-family: var(--font-mono);
          margin-bottom: 20px;
        }
        .timeline-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
          padding: 0;
        }
        .timeline-bullet {
          position: relative;
          padding-left: 24px;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .timeline-bullet::before {
          content: '';
          position: absolute;
          top: 9px;
          left: 4px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-cyan);
        }
        .timeline-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }
        .timeline-tech-pill {
          font-size: 0.78rem;
          font-family: var(--font-mono);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-cyan);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        @media (max-width: 768px) {
          .timeline-track { left: 18px; }
          .timeline-node { left: 7px; }
          .timeline-entry { padding-left: 48px; }
        }
      `}</style>
    </section>
  );
}
