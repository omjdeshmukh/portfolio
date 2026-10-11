/**
 * OMPRAKASH DESHMUKH - PORTFOLIO INTERACTION ENGINE
 * FullStack Software Engineer | Front-End Specialist
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initTypewriter();
  initScrollReveal();
  initStatsCounter();
  initProjectFilters();
  initProjectModals();
  initSkillsSearch();
  initClipboardActions();
  initContactForm();
});

/* ==========================================================================
   THEME TOGGLING (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('om_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = storedTheme || (prefersDark ? 'dark' : 'dark'); // default dark
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('om_theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;
  
  if (theme === 'light') {
    // Show Moon icon
    toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    toggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
  } else {
    // Show Sun icon
    toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    toggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
  }
}

/* ==========================================================================
   NAVIGATION & SCROLL BEHAVIOR
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header glass styling on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.setAttribute('aria-label', isOpen ? 'Close Menu' : 'Open Menu');
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Active section indicator via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   TYPEWRITER / ROLE ROTATION
   ========================================================================== */
function initTypewriter() {
  const targetElement = document.getElementById('dynamic-role-text');
  if (!targetElement) return;

  const roles = [
    'Front-End Specialist (Next.js & React)',
    'FullStack Software Engineer',
    'WCAG Accessibility & UI Architect',
    'Real-Time & Telemetry Systems Engineer',
    'TypeScript & Modern Performance Pro'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 70;
  const deleteSpeed = 35;
  const pauseEnd = 2000;
  const pauseStart = 400;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      targetElement.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      targetElement.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, pauseEnd);
      return;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      setTimeout(type, pauseStart);
      return;
    }

    setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
  }

  type();
}

/* ==========================================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObserver.observe(el));
}

/* ==========================================================================
   ANIMATED STATS COUNTER
   ========================================================================== */
function initStatsCounter() {
  const metricValues = document.querySelectorAll('.metric-value[data-target]');
  if (!metricValues.length) return;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 1600;
        const stepTime = 30;
        const totalSteps = duration / stepTime;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          const progress = currentStep / totalSteps;
          const currentVal = Math.round(target * easeOutQuad(progress));

          el.textContent = `${prefix}${currentVal}${suffix}`;

          if (currentStep >= totalSteps) {
            el.textContent = `${prefix}${target}${suffix}`;
            clearInterval(timer);
          }
        }, stepTime);

        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  metricValues.forEach(el => counterObserver.observe(el));
}

function easeOutQuad(t) {
  return t * (2 - t);
}

/* ==========================================================================
   PROJECT FILTER TABS
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterCategory === 'all' || category === filterCategory) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   PROJECT CASE STUDY MODAL
   ========================================================================== */
const projectDetailsData = {
  telecom: {
    title: 'Enterprise Telecom Analytics & Network Health Platform',
    role: 'Senior Software Engineer (GlobalLogic)',
    period: 'Aug 2024 – Jun 2026',
    client: 'Tier-1 Telecom Operator',
    summary: 'A mission-critical network analytics and throughput monitoring portal handling millions of telecommunication metrics, high-concurrency alarms, and regional performance telemetry in real-time.',
    highlights: [
      'Engineered modular front-end architecture using Next.js, React, and TypeScript with hybrid SSR/SSG rendering.',
      'Achieved strict WCAG 2.1 AA accessibility compliance with comprehensive keyboard navigation, ARIA live regions, and VoiceOver/NVDA screen reader optimization.',
      'Refactored state management using React Hooks and Context API/Redux Toolkit to optimize re-renders across high-frequency packet data grids.',
      'Integrated end-to-end unit testing with Jest and automated CI/CD pipelines via GitHub/Bitbucket.',
      'Integrated Kibana observability to proactively track client-side errors and performance spikes.'
    ],
    techStack: ['Next.js', 'React.js', 'TypeScript', 'Angular', 'Tailwind CSS', 'Redux Toolkit', 'Jest', 'Webpack', 'Kibana', 'WCAG AA'],
    metrics: ['99.8% System Uptime Monitored', '40% Faster First Contentful Paint', '100% WCAG Lighthouse Score']
  },
  ecommerce: {
    title: 'Next-Gen E-Commerce Platform & Design System',
    role: 'Software Engineer (Bushel Technology)',
    period: 'Aug 2023 – Jan 2024',
    client: 'Omnichannel Retail Brand',
    summary: 'Scalable e-commerce web platform engineered with reusable component-driven architecture, seamless product catalogue browsing, reactive cart drawers, and secure checkout workflows.',
    highlights: [
      'Crafted reusable, accessibility-focused React component library adhering to strict responsive design principles.',
      'Architected robust RESTful API integration for product catalogs, cart synchronization, inventory counters, and checkout gateways.',
      'Streamlined sprint deliverables using Agile/Scrum ceremonies, code reviews, and structured Git branching workflows.',
      'Optimized asset delivery, image responsive srcset, and bundle sizes with modern JavaScript (ES6+) paradigms.'
    ],
    techStack: ['React.js', 'JavaScript (ES6+)', 'Bootstrap', 'RESTful APIs', 'Git', 'Bitbucket', 'Responsive UI'],
    metrics: ['32% Surge in Checkout Conversion', 'Sub-1.2s Page Load Time', 'Zero Accessibility Violations']
  },
  hiring: {
    title: 'Candidate Assessment & Smart Recruitment Platform',
    role: 'Software Engineer (eTeam)',
    period: 'May 2022 – Aug 2023',
    client: 'Global Staffing & Hiring Firm',
    summary: 'End-to-end recruitment platform with candidate evaluation pipelines, interactive skill scoring rubrics, automated interview workflows, and secure assessment administration.',
    highlights: [
      'Spearheaded frontend development in ReactJS, delivering intuitive pipeline boards that significantly elevated recruiter engagement.',
      'Engineered backend REST microservices utilizing Node.js, Express, MongoDB, and MySQL for robust authentication, role permissions, and test scoring.',
      'Managed complex multi-stage candidate statuses via Redux store with normalized entities and idempotent actions.',
      'Conducted rigorous testing and debugging using Jest, Postman, and Chrome DevTools to eliminate data sync anomalies.'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Redux', 'Jest', 'Postman'],
    metrics: ['45% Reduction in Candidate Time-to-Screen', '99.9% API Reliability', '10k+ Assessments Handled']
  },
  iot: {
    title: 'Real-Time IoT Sensor Telemetry & Automation Dashboard',
    role: 'Full Stack Developer (The JavaScript Shop)',
    period: 'Sep 2021 – May 2022',
    client: 'Industrial Automation Client',
    summary: 'Live telemetry monitoring dashboard streaming sensor data across industrial hardware nodes with live anomaly detection and interactive multi-axis visual charts.',
    highlights: [
      'Engineered low-latency bi-directional communication channels using WebSockets for instantaneous telemetry updates.',
      'Constructed dynamic data visualization charts utilizing React, Chart.js, and D3.js to display temperature, vibration, and packet telemetry.',
      'Built mobile-first responsive interfaces leveraging HTML5, CSS3, Tailwind CSS, and custom CSS grid layouts.',
      'Applied code-splitting, route-level lazy loading, and efficient DOM batching to ensure fluid 60fps graph rendering.'
    ],
    techStack: ['React.js', 'WebSockets', 'Chart.js', 'D3.js', 'Tailwind CSS', 'Node.js', 'Code Splitting'],
    metrics: ['Sub-50ms WebSocket Broadcast Latency', '60 FPS Continuous Wave Charting', 'Real-Time Hardware Alerting']
  }
};

function initProjectModals() {
  const modalOverlay = document.getElementById('project-modal-overlay');
  const modalContainer = document.getElementById('project-modal-container');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const actionBtns = document.querySelectorAll('.project-action-btn');

  if (!modalOverlay || !modalContainer) return;

  actionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const data = projectDetailsData[projectId];
      if (!data) return;

      openModal(data);
    });
  });

  function openModal(data) {
    const modalBody = document.getElementById('modal-content-area');
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div style="margin-bottom: 20px;">
        <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-cyan); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">
          ${data.role} • ${data.period}
        </span>
        <h3 style="font-size: 1.8rem; font-weight: 800; color: var(--text-primary); margin-top: 6px; line-height: 1.25;">
          ${data.title}
        </h3>
        <p style="font-size: 1rem; color: var(--text-muted); margin-top: 10px; line-height: 1.6;">
          ${data.summary}
        </p>
      </div>

      <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 18px; margin-bottom: 24px;">
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-emerald); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.04em;">
          Key Impact & Metrics
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
          ${data.metrics.map(m => `
            <div style="padding: 10px 14px; background: rgba(16, 185, 129, 0.08); border-radius: var(--radius-sm); border: 1px solid rgba(16, 185, 129, 0.2); font-weight: 600; font-size: 0.88rem; color: var(--text-primary);">
              ✨ ${m}
            </div>
          `).join('')}
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px;">
          Technical Architecture & Responsibilities
        </h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; padding: 0;">
          ${data.highlights.map(h => `
            <li style="position: relative; padding-left: 24px; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
              <span style="position: absolute; left: 0; color: var(--accent-cyan); font-weight: bold;">▹</span>
              ${h}
            </li>
          `).join('')}
        </ul>
      </div>

      <div>
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-muted); margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.04em;">
          Technologies Utilized
        </h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${data.techStack.map(t => `
            <span style="font-size: 0.8rem; font-family: var(--font-mono); padding: 5px 12px; background: rgba(99, 102, 241, 0.12); color: var(--accent-cyan); border-radius: var(--radius-sm); border: 1px solid var(--border-glow);">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalCloseBtn?.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   SKILLS LIVE SEARCH / FILTER
   ========================================================================== */
function initSkillsSearch() {
  const searchInput = document.getElementById('skill-search-input');
  const skillCategories = document.querySelectorAll('.skill-category-card');
  const skillItems = document.querySelectorAll('.skill-item-bar');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (!query) {
      skillCategories.forEach(cat => cat.style.display = 'flex');
      skillItems.forEach(item => {
        item.style.display = 'flex';
        item.style.opacity = '1';
      });
      return;
    }

    skillCategories.forEach(cat => {
      let categoryHasMatch = false;
      const itemsInCat = cat.querySelectorAll('.skill-item-bar');

      itemsInCat.forEach(item => {
        const name = item.querySelector('.skill-name')?.textContent.toLowerCase() || '';
        if (name.includes(query)) {
          item.style.display = 'flex';
          item.style.opacity = '1';
          categoryHasMatch = true;
        } else {
          item.style.display = 'none';
        }
      });

      if (categoryHasMatch) {
        cat.style.display = 'flex';
      } else {
        cat.style.display = 'none';
      }
    });
  });
}

/* ==========================================================================
   CLIPBOARD ACTIONS & TOAST
   ========================================================================== */
function initClipboardActions() {
  const copyBtns = document.querySelectorAll('[data-copy]');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Item';

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied ${label} to clipboard!`);
      } catch (err) {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied ${label} to clipboard!`);
      }
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ==========================================================================
   CONTACT FORM HANDLER
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    // Loading feedback
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin" style="width: 18px; height: 18px; animation: radarSweep 1s linear infinite;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle style="opacity: 0.25;" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path style="opacity: 0.75;" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      Sending Message...
    `;

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      showToast('Thank you! Your message has been sent to Omprakash.');
    }, 1200);
  });
}
