import React from 'react';
import { EducationItem } from '../../types';

interface EducationSectionProps {
  education: EducationItem[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Academic Rigor</div>
          <h2 className="section-title font-formal">
            Engineering & <span className="text-gradient">Robotics Foundation</span>
          </h2>
          <p className="section-desc">
            A solid background in Industrial Robotics and Automobile Engineering cultivating computational precision, automation mindset, and systematic problem solving.
          </p>
        </div>

        <div className="education-grid">
          {education.map((item, idx) => (
            <div key={idx} className="edu-card card-glint">
              <div className="edu-badge-icon">
                {idx === 0 ? '🤖' : '⚙️'}
              </div>
              <div className="edu-content">
                <span className="edu-period-text">
                  {item.period} {item.percentage && `• Score: ${item.percentage}`}
                </span>
                <h3 className="edu-degree-title font-formal">{item.degree}</h3>
                <p className="edu-university-text">{item.university}</p>
                <div className="edu-highlight-box">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .education-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        .edu-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 32px;
          backdrop-filter: blur(12px);
          display: flex;
          gap: 20px;
          transition: all var(--transition-normal);
        }
        .edu-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-glow);
          box-shadow: var(--shadow-md);
        }
        .edu-badge-icon {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          flex-shrink: 0;
        }
        .edu-content {
          display: flex;
          flex-direction: column;
        }
        .edu-period-text {
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
          margin-bottom: 6px;
        }
        .edu-degree-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .edu-university-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 12px;
        }
        .edu-highlight-box {
          font-size: 0.86rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          border-left: 2px solid var(--accent-emerald);
        }
        @media (max-width: 860px) {
          .education-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
