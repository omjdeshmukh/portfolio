import React from 'react';

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        padding: '40px 0',
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-secondary)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} <strong>Omprakash Deshmukh</strong>. Built with Next.js 14, TypeScript & WCAG 2.1 standards. Based in <strong>Nagpur, India</strong>.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a
            href="https://linkedin.com/in/omjdeshmukh"
            target="_blank"
            rel="noopener"
            style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/omjdeshmukh"
            target="_blank"
            rel="noopener"
            style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
          >
            GitHub
          </a>
          <a
            href="/resume"
            target="_blank"
            rel="noopener"
            style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
          >
            Printable Resume
          </a>
          <a
            href="#hero"
            style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
