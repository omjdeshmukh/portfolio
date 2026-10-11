'use client';

import React from 'react';
import Link from 'next/link';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', padding: '40px 20px', color: '#0f172a' }}>
      {/* Top action toolbar (hidden during print) */}
      <div className="no-print" style={{ maxWidth: '860px', margin: '0 auto 20px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link
          href="/"
          style={{
            background: '#e2e8f0',
            color: '#0f172a',
            padding: '10px 20px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.9rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          ← Back to Portfolio Website
        </Link>

        <button
          onClick={handlePrint}
          style={{
            background: '#2563eb',
            color: '#ffffff',
            padding: '10px 22px',
            borderRadius: '6px',
            border: 'none',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
          }}
        >
          🖨️ Print / Save as PDF
        </button>
      </div>

      {/* Main Resume Sheet */}
      <main
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          background: '#ffffff',
          padding: '56px 64px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          borderRadius: '8px',
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
          lineHeight: 1.5,
        }}
      >
        {/* Header */}
        <header style={{ textAlign: 'center', borderBottom: '1.5px solid #e2e8f0', paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '2.1rem', fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#0f172a', margin: 0 }}>
            Omprakash Deshmukh
          </h1>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#2563eb', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Full-Stack Software Engineer | React.js | Next.js | TypeScript
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.88rem', color: '#475569', marginTop: '10px' }}>
            <span>Nagpur, India</span>
            <span>•</span>
            <a href="tel:+919926718163" style={{ color: '#2563eb', textDecoration: 'none' }}>+91 9926718163</a>
            <span>•</span>
            <a href="mailto:omjdeshmukh@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>omjdeshmukh@gmail.com</a>
            <span>•</span>
            <a href="https://linkedin.com/in/omjdeshmukh" target="_blank" rel="noopener" style={{ color: '#2563eb', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </header>

        {/* Professional Summary */}
        <section style={{ marginTop: '24px' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0f172a', borderBottom: '1.5px solid #0f172a', paddingBottom: '4px', marginBottom: '12px' }}>
            Professional Summary
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#334155', textAlign: 'justify', lineHeight: 1.55, margin: 0 }}>
            Full-Stack Software Engineer with 5+ years of experience in Next.js, React.js, TypeScript, and JavaScript, building scalable, responsive web applications across telecom, e-commerce, hiring platforms, IoT, and automation. Skilled in REST APIs, SSR/SSG, Redux, Context API, WCAG accessibility, and Agile/Scrum delivery, with a strong focus on performance optimization and clean architecture. Experienced across the full software development lifecycle—from component architecture and state management to testing, CI/CD, and production deployment.
          </p>
        </section>

        {/* Technical Skills */}
        <section style={{ marginTop: '24px' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0f172a', borderBottom: '1.5px solid #0f172a', paddingBottom: '4px', marginBottom: '12px' }}>
            Technical Skills
          </h2>
          <div style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.6 }}>
            <div>● <strong>Library/Framework:</strong> React.js, Next.js, Angular, TypeScript, JavaScript (ES6+), React Native, HTML5, CSS3</div>
            <div>● <strong>State & APIs:</strong> Redux Toolkit, Redux, Context API, React Hooks, REST APIs, Axios</div>
            <div>● <strong>Testing & Tools:</strong> Jest, Webpack, Lighthouse, Git, GitHub, Bitbucket, CI/CD</div>
            <div>● <strong>Practices:</strong> SSR/SSG, Responsive Design, WCAG, Web Accessibility, Agile/Scrum</div>
          </div>
        </section>

        {/* Professional Experience */}
        <section style={{ marginTop: '24px' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0f172a', borderBottom: '1.5px solid #0f172a', paddingBottom: '4px', marginBottom: '12px' }}>
            Professional Experience
          </h2>

          {/* Job 1 */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0f172a' }}>
                Senior Software Engineer | GlobalLogic — Nagpur, India (Telecom Company)
              </span>
              <span style={{ fontStyle: 'italic', color: '#64748b', fontSize: '0.85rem' }}>
                Aug 2024 – Jun 2026
              </span>
            </div>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.88rem', color: '#334155', marginTop: '6px' }}>
              <li style={{ marginBottom: '4px' }}>Developed scalable web applications using Next.js, React.js, and TypeScript, leveraging SSR/SSG rendering strategies to improve page load performance and search engine visibility.</li>
              <li style={{ marginBottom: '4px' }}>Implemented state management with Redux and integrated REST APIs to support dynamic, data-driven telecom features.</li>
              <li style={{ marginBottom: '4px' }}>Ensured WCAG accessibility compliance across application interfaces, improving usability for a broader range of users.</li>
              <li style={{ marginBottom: '4px' }}>Optimized application performance through code profiling and best practices, while maintaining test coverage using Jest.</li>
              <li style={{ marginBottom: '4px' }}>Configured and maintained Webpack build pipelines and CI/CD workflows to streamline releases and ensure consistent deployment quality.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0f172a' }}>
                Software Engineer | Bushel Technology—Nagpur, India (E-Commerce)
              </span>
              <span style={{ fontStyle: 'italic', color: '#64748b', fontSize: '0.85rem' }}>
                Aug 2023 – Jan 2024
              </span>
            </div>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.88rem', color: '#334155', marginTop: '6px' }}>
              <li style={{ marginBottom: '4px' }}>Built reusable and responsive React.js and React Native components using JavaScript and Bootstrap, improving development speed and UI consistency across the e-commerce platform.</li>
              <li style={{ marginBottom: '4px' }}>Integrated REST APIs to support product, cart, and checkout workflows, ensuring reliable data handling across the application.</li>
              <li style={{ marginBottom: '4px' }}>Collaborated with cross-functional teams using Git, GitHub, and Bitbucket for version control, following Agile/Scrum and structured code review practices.</li>
            </ul>
          </div>

          {/* Job 3 */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0f172a' }}>
                Software Engineer | eTeam—Bangalore, India (Hiring Firm)
              </span>
              <span style={{ fontStyle: 'italic', color: '#64748b', fontSize: '0.85rem' }}>
                May 2022 – Aug 2023
              </span>
            </div>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.88rem', color: '#334155', marginTop: '6px' }}>
              <li style={{ marginBottom: '4px' }}>Developed a scalable hiring platform using React.js, Redux, Node.js, and Express.js, supporting end-to-end candidate and recruiter workflows.</li>
              <li style={{ marginBottom: '4px' }}>Designed and integrated REST APIs with MongoDB and MySQL databases to manage structured and unstructured hiring data.</li>
              <li style={{ marginBottom: '4px' }}>Implemented automated testing using Jest and validated API endpoints with Postman, following Agile/SDLC practices throughout the development cycle.</li>
            </ul>
          </div>

          {/* Job 4 */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0f172a' }}>
                Full Stack Developer | The JavaScript Shop—Hyderabad, India (Automation Company)
              </span>
              <span style={{ fontStyle: 'italic', color: '#64748b', fontSize: '0.85rem' }}>
                Sep 2021 – May 2022
              </span>
            </div>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.88rem', color: '#334155', marginTop: '6px' }}>
              <li style={{ marginBottom: '4px' }}>Built real-time IoT dashboards using React.js and WebSockets, enabling live data visualization for automation systems.</li>
              <li style={{ marginBottom: '4px' }}>Developed interactive data visualizations using Chart.js and D3.js, styled with Bootstrap and Tailwind CSS for a responsive, modern interface.</li>
              <li style={{ marginBottom: '4px' }}>Applied lazy loading, code splitting, and performance optimization techniques to maintain smooth real-time rendering under high data throughput.</li>
            </ul>
          </div>

          {/* Job 5 */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0f172a' }}>
                (Freelancer Developer) | Arrastur Innovation—Nagpur, India (UI Development)
              </span>
              <span style={{ fontStyle: 'italic', color: '#64748b', fontSize: '0.85rem' }}>
                Jun 2020 – Aug 2021
              </span>
            </div>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.88rem', color: '#334155', marginTop: '6px' }}>
              <li style={{ marginBottom: '4px' }}>Developed reusable web and mobile components using React.js, React Native, and Redux, supporting consistent UI patterns across platforms.</li>
              <li style={{ marginBottom: '4px' }}>Integrated REST APIs using Axios for efficient API integration and data handling across features.</li>
              <li style={{ marginBottom: '4px' }}>Focused on responsive UI, accessibility, and performance optimization to deliver reliable cross-device user experiences.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section style={{ marginTop: '24px' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0f172a', borderBottom: '1.5px solid #0f172a', paddingBottom: '4px', marginBottom: '12px' }}>
            Education
          </h2>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0f172a' }}>
                Post-Graduation Diploma in Industrial Robotics
              </span>
              <span style={{ fontStyle: 'italic', color: '#64748b', fontSize: '0.85rem' }}>
                Jul 2018 – Aug 2019
              </span>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>
              Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur | Percentage: 76%
            </div>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0f172a' }}>
                Bachelor of Engineering in Automobile Engineering
              </span>
              <span style={{ fontStyle: 'italic', color: '#64748b', fontSize: '0.85rem' }}>
                Dec 2013 – Dec 2017
              </span>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>
              Rajiv Gandhi Technical University, Bhopal | Percentage: 73%
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section style={{ marginTop: '24px' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0f172a', borderBottom: '1.5px solid #0f172a', paddingBottom: '4px', marginBottom: '12px' }}>
            Additional Information
          </h2>
          <div style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.6 }}>
            <div>● <strong>Certification:</strong> Product Engineering Program.</div>
            <div>● <strong>Languages:</strong> English, Hindi</div>
            <div>● <strong>Key Areas:</strong> Frontend Development, Full-Stack Development, Web Accessibility, Performance Optimization</div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @media print {
          body { background: #fff !important; padding: 0 !important; }
          .no-print { display: none !important; }
          main { box-shadow: none !important; padding: 0 !important; }
        }
      `}</style>
    </div>
  );
}
