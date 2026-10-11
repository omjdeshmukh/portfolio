'use client';

import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onThemeToggle: () => void;
  theme: 'dark' | 'light';
}

export default function Header({ onThemeToggle, theme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 'var(--nav-height)',
        zIndex: 1000,
        background: scrolled
          ? theme === 'dark' ? 'rgba(7, 9, 14, 0.95)' : 'rgba(255, 255, 255, 0.95)'
          : 'var(--bg-glass)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
      }}
    >
      <div className="container nav-inner-row">
        {/* Responsive Brand */}
        <a href="#hero" className="brand-link" aria-label="Omprakash Deshmukh Home">
          <div className="brand-badge">OD</div>
          <div className="brand-text">
            <span className="brand-name">Omprakash Deshmukh</span>
            <span className="brand-designation">FullStack & Front-End Pro</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="desktop-nav-links"
        >
          <a href="#about" className="nav-item-link">About</a>
          <a href="#projects" className="nav-item-link">Projects & Slots</a>
          <a href="#skills" className="nav-item-link">Tech Stacks</a>
          <a href="#experience" className="nav-item-link">Experience</a>
          <a href="#education" className="nav-item-link">Education</a>
          <a href="#contact" className="nav-item-link">Contact</a>
        </nav>

        {/* Right Actions */}
        <div className="nav-actions-group">
          {/* Theme Toggle Button */}
          <button
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            title={`Toggle ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            className="theme-btn"
          >
            {theme === 'dark' ? (
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Desktop Resume Button (hidden on small mobile to give brand full breathing room) */}
          <a href="/resume" target="_blank" rel="noopener" className="btn btn-primary btn-sm desktop-resume-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span>Resume</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="mobile-toggle-btn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown-menu">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="mobile-dropdown-link">About</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="mobile-dropdown-link">Projects & Mock Spaces</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="mobile-dropdown-link">Tech Stacks</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="mobile-dropdown-link">Experience</a>
          <a href="#education" onClick={() => setMobileMenuOpen(false)} className="mobile-dropdown-link">Education</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-dropdown-link">Contact</a>
          <a href="/resume" target="_blank" rel="noopener" onClick={() => setMobileMenuOpen(false)} className="mobile-dropdown-link highlight-resume">
            📄 View Full Resume ↗
          </a>
        </div>
      )}

      <style jsx>{`
        .nav-inner-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          gap: 12px;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--text-primary);
          min-width: 0;
          flex-shrink: 1;
        }

        .brand-badge {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-weight: 800;
          font-size: 1.15rem;
          box-shadow: var(--shadow-glow);
          font-family: var(--font-formal);
          flex-shrink: 0;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .brand-name {
          font-weight: 800;
          font-size: clamp(0.88rem, 3.8vw, 1.05rem);
          letter-spacing: -0.015em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.2;
        }

        .brand-designation {
          font-size: clamp(0.64rem, 2.7vw, 0.74rem);
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.3;
        }

        .desktop-nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-item-link {
          text-decoration: none;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
          position: relative;
          padding: 4px 0;
          white-space: nowrap;
        }

        .nav-item-link:hover {
          color: var(--text-primary);
        }

        .nav-actions-group {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .theme-btn {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          width: 38px;
          height: 38px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .mobile-toggle-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
        }

        .mobile-dropdown-menu {
          position: absolute;
          top: var(--nav-height);
          left: 0;
          width: 100%;
          background: ${theme === 'dark' ? 'rgba(10, 14, 23, 0.98)' : 'rgba(255, 255, 255, 0.98)'};
          border-bottom: 1px solid var(--border-subtle);
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: var(--shadow-lg);
        }

        .mobile-dropdown-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 1rem;
          padding: 6px 0;
        }

        .highlight-resume {
          color: var(--accent-cyan) !important;
          font-weight: 700;
          border-top: 1px solid var(--border-subtle);
          padding-top: 12px;
        }

        @media (max-width: 900px) {
          .desktop-nav-links {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .nav-inner-row {
            gap: 8px;
          }
          .brand-link {
            gap: 8px;
          }
          .brand-badge {
            width: 34px;
            height: 34px;
            font-size: 0.98rem;
            border-radius: 8px;
          }
          .desktop-resume-btn {
            display: none !important;
          }
          .nav-actions-group {
            gap: 6px;
          }
          .theme-btn {
            width: 34px;
            height: 34px;
          }
        }
      `}</style>
    </header>
  );
}
