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
      setScrolled(window.scrollY > 30);
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
          ? theme === 'dark' ? 'rgba(7, 9, 14, 0.94)' : 'rgba(255, 255, 255, 0.94)'
          : 'var(--bg-glass)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        {/* Brand */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'var(--text-primary)' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1.2rem',
              boxShadow: 'var(--shadow-glow)',
              fontFamily: 'var(--font-formal)',
            }}
          >
            OD
          </div>
          <div>
            <span style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.01em', display: 'block' }}>
              Omprakash Deshmukh
            </span>
            <span style={{ fontSize: '0.74rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              FullStack & Front-End Pro
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav-links"
        >
          <a href="#about" className="nav-item-link">About</a>
          <a href="#projects" className="nav-item-link">Projects & Slots</a>
          <a href="#skills" className="nav-item-link">Tech Stacks</a>
          <a href="#experience" className="nav-item-link">Experience</a>
          <a href="#education" className="nav-item-link">Education</a>
          <a href="#contact" className="nav-item-link">Contact</a>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            title={`Toggle ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a href="/resume" target="_blank" rel="noopener" className="btn btn-primary btn-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="mobile-toggle-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '6px',
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <div
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            width: '100%',
            background: theme === 'dark' ? 'rgba(10, 14, 23, 0.98)' : 'rgba(255, 255, 255, 0.98)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="nav-item-link">About</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="nav-item-link">Projects & Mock Spaces</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="nav-item-link">Tech Stacks</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="nav-item-link">Experience</a>
          <a href="#education" onClick={() => setMobileMenuOpen(false)} className="nav-item-link">Education</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-item-link">Contact</a>
          <a href="/resume" target="_blank" rel="noopener" onClick={() => setMobileMenuOpen(false)} className="nav-item-link" style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>
            📄 View Full Resume ↗
          </a>
        </div>
      )}

      <style jsx>{`
        .nav-item-link {
          text-decoration: none;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
          position: relative;
          padding: 4px 0;
        }
        .nav-item-link:hover {
          color: var(--text-primary);
        }
        .mobile-toggle-btn {
          display: none;
        }
        @media (max-width: 860px) {
          .desktop-nav-links {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
