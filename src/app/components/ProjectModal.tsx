'use client';

import React, { useEffect } from 'react';
import { ProjectItem } from '../../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.78)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '760px',
          maxHeight: '88vh',
          overflowY: 'auto',
          background: 'var(--bg-secondary)',
          border: project.isMockSpace ? '1px dashed #f59e0b' : '1px solid var(--border-glow)',
          borderRadius: 'var(--radius-lg)',
          padding: '36px',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            {project.isMockSpace ? (
              <span className="mock-badge">✦ Mock Space Slot</span>
            ) : (
              <span style={{ fontSize: '0.84rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                {project.company}
              </span>
            )}
            <span style={{ color: 'var(--text-dim)' }}>•</span>
            <span style={{ fontSize: '0.84rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
              {project.period}
            </span>
          </div>

          <h2 className="font-formal" style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25 }}>
            {project.title}
          </h2>

          <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', marginTop: '10px', lineHeight: 1.6 }}>
            {project.summary}
          </p>
        </div>

        {/* Impact Box */}
        <div
          style={{
            background: project.isMockSpace ? 'rgba(245, 158, 11, 0.08)' : 'rgba(16, 185, 129, 0.08)',
            border: project.isMockSpace ? '1px dashed rgba(245, 158, 11, 0.3)' : '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: 'var(--radius-md)',
            padding: '18px',
            marginBottom: '24px',
          }}
        >
          <h4
            style={{
              fontSize: '0.9rem',
              fontWeight: 700,
              color: project.isMockSpace ? '#f59e0b' : 'var(--accent-emerald)',
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            {project.isMockSpace ? 'Target Deliverables & Readiness' : 'Key Impact & Verified Benchmarks'}
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
            {project.metrics.map((m, i) => (
              <div
                key={i}
                style={{
                  padding: '10px 14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                ✨ {m}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture Notes */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
            {project.isMockSpace ? 'Mock Space Specification & Guidelines' : 'Technical Architecture & Solution Details'}
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
            {project.architectureDetails.map((detail, idx) => (
              <li
                key={idx}
                style={{
                  position: 'relative',
                  paddingLeft: '24px',
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                <span style={{ position: 'absolute', left: 0, color: project.isMockSpace ? '#f59e0b' : 'var(--accent-cyan)', fontWeight: 'bold' }}>
                  ▹
                </span>
                {detail}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Technologies & Libraries
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '5px 12px',
                  background: 'rgba(99, 102, 241, 0.12)',
                  color: 'var(--accent-cyan)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-glow)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
