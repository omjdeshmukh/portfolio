'use client';

import React, { useState, useEffect } from 'react';

interface HeroProps {
  onCopyEmail: () => void;
}

export default function Hero({ onCopyEmail }: HeroProps) {
  const roles = [
    'Front-End Specialist (Next.js & React)',
    'FullStack Software Engineer',
    'WCAG Accessibility & UI Architect',
    'Real-Time Telemetry & Systems Builder',
    'TypeScript & High-Scale Performance Pro'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === current) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(
        () => {
          setDisplayText(
            isDeleting ? current.substring(0, displayText.length - 1) : current.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 30 : 65
      );
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" style={{ paddingTop: 'calc(var(--nav-height) + 54px)', paddingBottom: '90px' }}>
      <div className="container">
        <div className="hero-grid-layout">
          {/* Left Column: Text & Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Status Pill */}
            <div className="status-pill" style={{ alignSelf: 'flex-start' }}>
              <span className="status-dot" />
              <span>Available for Senior Frontend & Fullstack Roles • Nagpur / Remote</span>
            </div>

            {/* Headline */}
            <h1
              className="font-formal"
              style={{
                fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
              }}
            >
              Architecting <span className="text-gradient">Scalable, Accessible</span> & High-Performance Web Applications
            </h1>

            {/* Subtitle / Role Rotator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                Specializing as
              </span>
              <span
                style={{
                  background: 'rgba(6, 182, 212, 0.12)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  padding: '5px 14px',
                  borderRadius: 'var(--radius-sm)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  color: 'var(--accent-cyan)',
                  minHeight: '38px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                {displayText}
                <span
                  style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '18px',
                    backgroundColor: 'var(--accent-cyan)',
                    marginLeft: '4px',
                    animation: 'pulseDot 0.8s infinite',
                  }}
                />
              </span>
            </div>

            {/* Bio summary */}
            <p style={{ fontSize: '1.14rem', lineHeight: 1.7, color: 'var(--text-muted)', maxWidth: '620px' }}>
              Hi, I am <strong style={{ color: 'var(--text-primary)' }}>Omprakash Deshmukh</strong>. Senior FullStack Software Engineer with <strong style={{ color: 'var(--text-primary)' }}>5+ years</strong> of experience building mission-critical enterprise systems using <strong style={{ color: 'var(--text-primary)' }}>Next.js, React.js, TypeScript</strong>, and high-concurrency Node.js REST APIs. Specialist in <strong style={{ color: 'var(--text-primary)' }}>WCAG AA accessibility</strong>, micro-frontend performance, and real-time data streaming.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', paddingTop: '8px' }}>
              <a href="#projects" className="btn btn-primary">
                <span>Explore Work & Mock Spaces</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <a href="/resume" target="_blank" rel="noopener" className="btn btn-secondary">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span>View Resume</span>
              </a>

              <a href="#contact" className="btn btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Get In Touch</span>
              </a>

              <button onClick={onCopyEmail} className="btn btn-outline" title="Copy omjdeshmukh@gmail.com">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>Copy Email</span>
              </button>
            </div>

            {/* Key Statistics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-subtle)',
                marginTop: '12px',
              }}
            >
              <div>
                <div style={{ fontSize: '2.1rem', fontWeight: 800, fontFamily: 'var(--font-mono)' }} className="text-gradient">
                  5+
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '4px' }}>
                  Years Production Exp
                </div>
              </div>

              <div>
                <div style={{ fontSize: '2.1rem', fontWeight: 800, fontFamily: 'var(--font-mono)' }} className="text-gradient">
                  100%
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '4px' }}>
                  WCAG Accessibility
                </div>
              </div>

              <div>
                <div style={{ fontSize: '2.1rem', fontWeight: 800, fontFamily: 'var(--font-mono)' }} className="text-gradient">
                  Top 98%
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '4px' }}>
                  Lighthouse Web Audits
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Portrait */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <div
              className="card-glint"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '430px',
                borderRadius: 'var(--radius-lg)',
                padding: '12px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: 'calc(var(--radius-lg) - 4px)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/assets/images/avatar.jpg"
                  alt="Omprakash Deshmukh Portrait"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 70%, var(--bg-card) 100%)',
                    pointerEvents: 'none',
                    opacity: 0.85,
                  }}
                />
              </div>

              {/* Floating Tech Badges */}
              <div
                className="floating-hero-pill pill-top"
                style={{
                  position: 'absolute',
                  top: '24px',
                  left: '-14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-glow)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-md)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(16px)',
                }}
              >
                <span style={{ color: 'var(--accent-indigo)' }}>▲</span>
                <span>Next.js 14 & React 18+</span>
              </div>

              <div
                className="floating-hero-pill pill-bottom"
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  right: '-14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-md)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: 'var(--accent-emerald)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <span>♿</span>
                <span>WCAG 2.1 AA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-grid-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .hero-grid-layout {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }
          .hero-grid-layout > div:first-child {
            align-items: center;
          }
          .floating-hero-pill {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
