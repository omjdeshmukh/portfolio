'use client';

import React, { useState } from 'react';

interface ContactSectionProps {
  onCopyText: (text: string, label: string) => void;
  onShowToast: (msg: string) => void;
}

export default function ContactSection({ onCopyText, onShowToast }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      onShowToast('Thank you! Your message has been sent to Omprakash.');
    }, 1200);
  };

  return (
    <section id="contact" style={{ padding: '90px 0 110px 0', position: 'relative' }}>
      <div className="container">
        <div className="contact-card-box">
          {/* Left info column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="status-pill" style={{ alignSelf: 'flex-start' }}>
              <span className="status-dot" />
              <span>Direct Communication</span>
            </div>

            <h2 className="font-formal" style={{ fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2 }}>
              Let us build something <span className="text-gradient">exceptional</span> together.
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Whether you are looking to hire a Senior Frontend Specialist, FullStack Engineer, or looking to discuss high-concurrency Next.js architecture and WCAG compliance — reach out directly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
              {/* Email */}
              <div className="channel-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div className="channel-icon-pill">✉️</div>
                  <div>
                    <div className="channel-caption">Email</div>
                    <a href="mailto:omjdeshmukh@gmail.com" className="channel-link">
                      omjdeshmukh@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onCopyText('omjdeshmukh@gmail.com', 'Email Address')}
                  className="copy-chip-btn"
                >
                  Copy
                </button>
              </div>

              {/* Phone */}
              <div className="channel-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div className="channel-icon-pill">📞</div>
                  <div>
                    <div className="channel-caption">Phone / WhatsApp</div>
                    <a href="tel:+919926718163" className="channel-link">
                      +91 9926718163
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onCopyText('+919926718163', 'Phone Number')}
                  className="copy-chip-btn"
                >
                  Copy
                </button>
              </div>

              {/* Location */}
              <div className="channel-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div className="channel-icon-pill">📍</div>
                  <div>
                    <div className="channel-caption">Current Location</div>
                    <div className="channel-link">Nagpur, India (Open to Remote / Relocation)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <h3 className="font-formal" style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
              Fill in the details below to reach Omprakash immediately.
            </p>

            <div className="form-field">
              <label htmlFor="name-input" className="form-label-text">Your Name</label>
              <input
                id="name-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Hiring Manager / Team Lead"
                className="form-control"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email-input" className="form-label-text">Your Email</label>
              <input
                id="email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. contact@company.com"
                className="form-control"
              />
            </div>

            <div className="form-field">
              <label htmlFor="subject-input" className="form-label-text">Subject / Role Opportunity</label>
              <input
                id="subject-input"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Senior Frontend / FullStack Opportunity"
                className="form-control"
              />
            </div>

            <div className="form-field">
              <label htmlFor="msg-input" className="form-label-text">Message</label>
              <textarea
                id="msg-input"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share role requirements, team details, or project scope..."
                className="form-control"
                style={{ resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '6px' }}
            >
              {isSubmitting ? (
                <span>Dispatching Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-card-box {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 50px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 50px;
          box-shadow: var(--shadow-lg);
          backdrop-filter: blur(20px);
        }
        .channel-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }
        .channel-box:hover {
          border-color: var(--border-glow);
          background: rgba(255, 255, 255, 0.06);
        }
        .channel-icon-pill {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background: rgba(99, 102, 241, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
        }
        .channel-caption {
          font-size: 0.78rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }
        .channel-link {
          font-size: 0.96rem;
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
        }
        .copy-chip-btn {
          background: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          padding: 6px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .copy-chip-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-cyan);
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-label-text {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .form-control {
          width: 100%;
          padding: 13px 16px;
          border-radius: var(--radius-md);
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          font-size: 0.94rem;
          font-family: inherit;
          outline: none;
          transition: all 0.2s ease;
        }
        .form-control:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
        }
        @media (max-width: 960px) {
          .contact-card-box {
            grid-template-columns: 1fr;
            padding: 32px;
            gap: 36px;
          }
        }
      `}</style>
    </section>
  );
}
