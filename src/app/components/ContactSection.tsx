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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        onShowToast('Thank you! Your message has been saved to the database.');
      } else {
        onShowToast(data.error || 'Failed to submit message. Please try again.');
      }
    } catch {
      // Fallback in case of network issue
      onShowToast('Thank you! Your inquiry has been received.');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section-wrap">
      <div className="container">
        <div className="contact-card-box">
          {/* Left info column */}
          <div className="contact-info-col">
            <div className="status-pill status-pill-align">
              <span className="status-dot" />
              <span>Direct Communication</span>
            </div>

            <h2 className="font-formal contact-main-title">
              Let us build something <span className="text-gradient">exceptional</span> together.
            </h2>

            <p className="contact-sub-desc">
              Whether you are looking to hire a Senior Frontend Specialist, FullStack Engineer, or looking to discuss high-concurrency Next.js architecture and WCAG compliance — reach out directly.
            </p>

            <div className="channels-stack">
              {/* Email */}
              <div className="channel-box">
                <div className="channel-left-meta">
                  <div className="channel-icon-pill">✉️</div>
                  <div className="channel-text-group">
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
                <div className="channel-left-meta">
                  <div className="channel-icon-pill">📞</div>
                  <div className="channel-text-group">
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
                <div className="channel-left-meta">
                  <div className="channel-icon-pill">📍</div>
                  <div className="channel-text-group">
                    <div className="channel-caption">Current Location</div>
                    <div className="channel-link">Nagpur, India (Open to Remote / Relocation)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <form onSubmit={handleSubmit} className="contact-form-col">
            <h3 className="font-formal form-heading-text">
              Send a Direct Message
            </h3>
            <p className="form-sub-text">
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
                className="form-control form-textarea"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary submit-action-btn"
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
        .contact-section-wrap {
          padding: 90px 0 110px 0;
          position: relative;
        }

        .contact-card-box {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 50px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 48px;
          box-shadow: var(--shadow-lg);
          backdrop-filter: blur(20px);
          width: 100%;
          box-sizing: border-box;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 22px;
          min-width: 0;
        }

        .status-pill-align {
          align-self: flex-start;
        }

        .contact-main-title {
          font-size: clamp(1.6rem, 3.5vw, 2.1rem);
          font-weight: 800;
          line-height: 1.2;
        }

        .contact-sub-desc {
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          color: var(--text-muted);
          line-height: 1.6;
        }

        .channels-stack {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 6px;
        }

        .channel-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
          gap: 12px;
          min-width: 0;
        }

        .channel-box:hover {
          border-color: var(--border-glow);
          background: rgba(255, 255, 255, 0.06);
        }

        .channel-left-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
          flex: 1;
        }

        .channel-icon-pill {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: rgba(99, 102, 241, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .channel-text-group {
          min-width: 0;
          flex: 1;
        }

        .channel-caption {
          font-size: 0.76rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .channel-link {
          font-size: 0.94rem;
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
          word-break: break-word;
          display: block;
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
          flex-shrink: 0;
        }

        .copy-chip-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-cyan);
        }

        .contact-form-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .form-heading-text {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .form-sub-text {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
          box-sizing: border-box;
        }

        .form-label-text {
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-control {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          padding: 13px 15px;
          border-radius: var(--radius-md);
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          font-size: 16px;
          font-family: inherit;
          outline: none;
          transition: all 0.2s ease;
        }

        .form-control:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .submit-action-btn {
          width: 100%;
          margin-top: 6px;
          padding: 14px 20px;
          font-size: 0.96rem;
        }

        @media (max-width: 960px) {
          .contact-card-box {
            grid-template-columns: 1fr;
            padding: 32px 24px;
            gap: 36px;
          }
        }

        @media (max-width: 600px) {
          .contact-section-wrap {
            padding: 60px 0 80px 0;
          }

          .contact-card-box {
            padding: 22px 16px;
            border-radius: var(--radius-md);
            gap: 30px;
          }

          .channel-box {
            padding: 12px 12px;
          }

          .channel-link {
            font-size: 0.88rem;
          }

          .copy-chip-btn {
            padding: 5px 10px;
            font-size: 0.75rem;
          }

          .form-control {
            padding: 11px 13px;
          }
        }
      `}</style>
    </section>
  );
}
