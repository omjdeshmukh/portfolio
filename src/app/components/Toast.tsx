import React from 'react';

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--accent-emerald)',
        boxShadow: 'var(--shadow-lg), 0 0 20px rgba(16, 185, 129, 0.3)',
        padding: '14px 22px',
        borderRadius: 'var(--radius-md)',
        color: 'var(--text-primary)',
        fontWeight: 600,
        fontSize: '0.92rem',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        zIndex: 3000,
        animation: 'pulseDot 2s ease-in-out',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span>{message}</span>
    </div>
  );
}
