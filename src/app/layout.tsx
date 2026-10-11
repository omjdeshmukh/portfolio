import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const formalFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-formal',
  display: 'swap',
  weight: ['600', '700', '800', '900'],
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Omprakash Deshmukh — FullStack Software Engineer | Front-End Specialist',
  description: 'Portfolio of Omprakash Deshmukh. Senior FullStack Engineer specializing in Next.js, React.js, TypeScript, SSR/SSG, and WCAG-compliant design. Based in Nagpur, India.',
  keywords: [
    'Omprakash Deshmukh',
    'FullStack Software Engineer',
    'Front-End Specialist',
    'Next.js Developer',
    'React.js',
    'TypeScript',
    'Nagpur',
    'WCAG Accessibility',
    'Redux',
    'WebSockets',
  ],
  authors: [{ name: 'Omprakash Deshmukh' }],
  openGraph: {
    title: 'Omprakash Deshmukh — FullStack Software Engineer',
    description: 'Senior FullStack & Front-End Specialist (Next.js, React, TypeScript). Nagpur, India.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={`${sansFont.variable} ${formalFont.variable} ${monoFont.variable}`}>
      <body>
        <div className="ambient-canvas-wrapper" aria-hidden="true">
          <div className="ambient-blob ambient-blob-1" />
          <div className="ambient-blob ambient-blob-2" />
          <div className="ambient-blob ambient-blob-3" />
        </div>
        {children}
      </body>
    </html>
  );
}
