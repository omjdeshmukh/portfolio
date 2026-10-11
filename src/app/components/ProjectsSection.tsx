'use client';

import React, { useState } from 'react';
import { ProjectItem } from '../../types';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export default function ProjectsSection({ projects, onSelectProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'mock') return p.isMockSpace;
    return p.category === filter;
  });

  return (
    <section id="projects" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Enterprise Platforms & Mock Spaces</div>
          <h2 className="section-title font-formal">
            Featured Projects & <span className="text-gradient">Mock Presentation Spaces</span>
          </h2>
          <p className="section-desc">
            Explore live production case studies from telecom, e-commerce, and recruitment domains, alongside dedicated configurable mock spaces ready for upcoming initiatives.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="project-filter-bar">
          <button
            onClick={() => setFilter('all')}
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          >
            All Work & Slots ({projects.length})
          </button>
          <button
            onClick={() => setFilter('telecom')}
            className={`filter-btn ${filter === 'telecom' ? 'active' : ''}`}
          >
            Telecom & Enterprise
          </button>
          <button
            onClick={() => setFilter('ecommerce')}
            className={`filter-btn ${filter === 'ecommerce' ? 'active' : ''}`}
          >
            E-Commerce
          </button>
          <button
            onClick={() => setFilter('talent')}
            className={`filter-btn ${filter === 'talent' ? 'active' : ''}`}
          >
            Recruitment & SaaS
          </button>
          <button
            onClick={() => setFilter('iot')}
            className={`filter-btn ${filter === 'iot' ? 'active' : ''}`}
          >
            IoT & Telemetry
          </button>
          <button
            onClick={() => setFilter('mock')}
            className={`filter-btn ${filter === 'mock' ? 'active' : ''}`}
            style={{ borderColor: 'rgba(245, 158, 11, 0.4)', color: '#f59e0b' }}
          >
            ✨ Mock Spaces (2)
          </button>
        </div>

        {/* Grid of Projects & Mock Spaces */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`project-card card-glint ${project.isMockSpace ? 'is-mock-card' : ''}`}
            >
              {/* Media Header */}
              <div className="project-media-wrapper">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="mock-placeholder-canvas">
                    <div className="mock-icon-symbol">✦</div>
                    <span style={{ fontSize: '0.9rem', color: '#f59e0b', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                      [Mock Project Preview Slot]
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      16:9 High-Resolution Screenshot Slot
                    </span>
                  </div>
                )}

                <div className="project-badge-top">
                  {project.isMockSpace ? (
                    <span className="mock-badge">✦ Mock Space Slot</span>
                  ) : (
                    <span>{project.company}</span>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="project-body">
                <div className="project-title-row">
                  <h3 className="project-title font-formal">{project.title}</h3>
                  <span className="project-period">{project.period}</span>
                </div>

                <p className="project-summary">{project.summary}</p>

                <div className={`project-impact-box ${project.isMockSpace ? 'mock-impact-box' : ''}`}>
                  <span style={{ fontWeight: 600 }}>
                    {project.isMockSpace ? '🛠️ Configuration Ready:' : '⚡ Key Impact:'}
                  </span>{' '}
                  {project.impact}
                </div>

                <div className="project-tags">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-footer-row">
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600 }}>
                    {project.isMockSpace ? 'Ready for Customization' : project.company}
                  </span>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="view-details-btn"
                  >
                    <span>{project.isMockSpace ? 'Open Mock Space Spec' : 'View Architecture'}</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-filter-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }
        .filter-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          padding: 10px 20px;
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-glow);
        }
        .filter-btn.active {
          background: var(--gradient-primary);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.35);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-glow);
          box-shadow: var(--shadow-lg), var(--shadow-glow);
        }
        .is-mock-card {
          border: 1.5px dashed rgba(245, 158, 11, 0.45);
          background: rgba(245, 158, 11, 0.02);
        }
        .is-mock-card:hover {
          border-color: #f59e0b;
          box-shadow: 0 0 30px rgba(245, 158, 11, 0.2);
        }
        .project-media-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #000000;
        }
        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover .project-img {
          transform: scale(1.05);
        }
        .mock-placeholder-canvas {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%);
          border-bottom: 1px dashed rgba(245, 158, 11, 0.3);
        }
        .mock-icon-symbol {
          font-size: 2.2rem;
          color: #f59e0b;
          animation: pulseDot 2.5s infinite;
        }
        .project-badge-top {
          position: absolute;
          top: 14px;
          left: 14px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          background: rgba(7, 9, 14, 0.85);
          backdrop-filter: blur(8px);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--accent-cyan);
          border: 1px solid var(--border-subtle);
          font-family: var(--font-mono);
        }
        .project-body {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .project-title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
        }
        .project-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.25;
        }
        .project-period {
          font-size: 0.82rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
          white-space: nowrap;
        }
        .project-summary {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .project-impact-box {
          background: rgba(255, 255, 255, 0.03);
          border-left: 3px solid var(--accent-cyan);
          padding: 12px 16px;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .mock-impact-box {
          border-left-color: #f59e0b;
          background: rgba(245, 158, 11, 0.05);
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .tech-badge {
          font-size: 0.78rem;
          font-family: var(--font-mono);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-cyan);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        .project-footer-row {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 18px;
          border-top: 1px solid var(--border-subtle);
        }
        .view-details-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--accent-cyan);
          font-weight: 600;
          font-size: 0.9rem;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .view-details-btn:hover {
          color: var(--accent-indigo);
          transform: translateX(4px);
        }
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
