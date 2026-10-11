import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'telecom',
    title: 'TelcoFlux: Enterprise Network Health & Analytics',
    company: 'GlobalLogic (Nagpur, India)',
    category: 'telecom',
    period: '2024 – 2026',
    image: '/assets/images/telecom-preview.jpg',
    summary: 'High-throughput enterprise telecom analytics platform streaming network throughput, downtime incidents, and regional latency telemetry using Next.js SSR and SSG.',
    impact: '40% faster First Contentful Paint, zero WCAG violations, and continuous Kibana telemetry audits.',
    techStack: ['Next.js', 'React.js', 'TypeScript', 'Angular', 'Tailwind CSS', 'Redux Toolkit', 'WCAG AA', 'Jest', 'Kibana'],
    metrics: ['99.8% Monitored Uptime', '40% FCP Improvement', '100% WCAG Score'],
    architectureDetails: [
      'Architected modular micro-frontends with Next.js App Router and TypeScript.',
      'Enforced WCAG 2.1 AA accessibility guidelines, ARIA landmarks, and VoiceOver/NVDA screen-reader support.',
      'Streamlined asynchronous state flow with Redux Toolkit and React Context API.',
      'Set up unit tests in Jest with automated CI/CD pipeline triggers on GitHub & Bitbucket.'
    ]
  },
  {
    id: 'ecommerce',
    title: 'Aura Storefront & Modular UI Design System',
    company: 'Bushel Technology (Nagpur, India)',
    category: 'ecommerce',
    period: '2023 – 2024',
    image: '/assets/images/ecommerce-preview.jpg',
    summary: 'Omnichannel retail storefront featuring modular accessible React components, slide-over reactive cart, and resilient RESTful API data exchange.',
    impact: '32% surge in checkout conversion rate, sub-1.2s page load, and fully responsive across mobile viewports.',
    techStack: ['React.js', 'JavaScript (ES6+)', 'Bootstrap', 'RESTful APIs', 'Git', 'Agile/Scrum'],
    metrics: ['+32% Cart Conversion', '<1.2s Load Time', 'Zero A11y Violations'],
    architectureDetails: [
      'Constructed a production-ready component library prioritizing keyboard navigation and responsive layouts.',
      'Connected third-party and custom REST endpoints for real-time inventory and pricing calculations.',
      'Implemented clean ES6+ coding standards and participated in daily Scrum sprint ceremonies.'
    ]
  },
  {
    id: 'talent',
    title: 'AssessHub: Candidate Evaluation & Talent Portal',
    company: 'eTeam (Bangalore, India)',
    category: 'talent',
    period: '2022 – 2023',
    image: '/assets/images/hiring-preview.jpg',
    summary: 'Fullstack recruitment dashboard featuring multi-stage candidate pipeline boards, skill scoring cards, and secure assessment administration services.',
    impact: 'Reduced screening turnaround time by 45% while managing thousands of candidate submissions.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Redux', 'Jest', 'Postman'],
    metrics: ['-45% Screening Turnaround', '99.9% API Reliability', '10k+ Candidates Processed'],
    architectureDetails: [
      'Built interactive hiring pipeline views in React with normalized state management via Redux.',
      'Developed secure Node.js & Express REST endpoints for authentication and candidate assessment logs.',
      'Implemented testing with Jest, Postman, and Chrome DevTools to ensure zero data regressions.'
    ]
  },
  {
    id: 'iot',
    title: 'Hyperion: Real-Time IoT Telemetry & Sensor Monitor',
    company: 'The JavaScript Shop (Hyderabad, India)',
    category: 'iot',
    period: '2021 – 2022',
    image: '/assets/images/iot-preview.jpg',
    summary: 'Real-time industrial IoT monitoring platform streaming telemetry metrics over WebSockets with animated multi-axis charts in Chart.js and D3.js.',
    impact: 'Sub-50ms WebSocket telemetry latency with stable 60 FPS graph rendering under heavy load.',
    techStack: ['React.js', 'WebSockets', 'Chart.js', 'D3.js', 'Tailwind CSS', 'Code Splitting'],
    metrics: ['<50ms Stream Latency', '60 FPS Charting', 'Real-time Alerts'],
    architectureDetails: [
      'Configured bi-directional WebSocket channels for instant data feed and hardware health alarms.',
      'Rendered custom multi-curve sensor charts using Chart.js and D3.js for temperature and vibration signals.',
      'Integrated code-splitting and dynamic route loading to optimize memory footprint.'
    ]
  },
  {
    id: 'mock-1',
    title: 'Mock Space #01: [Your Next High-Impact Venture]',
    company: 'Open Project Slot • Enterprise / Startup',
    category: 'mock',
    period: '2026+',
    isMockSpace: true,
    summary: 'Dedicated mock space reserved for your upcoming project, open-source library, or customer case study. Pre-wired with full presentation layout and responsive slot preview.',
    impact: 'Ready to configure: customize title, target metrics, architecture notes, and production deliverables.',
    techStack: ['Next.js 15', 'TypeScript', 'Server Actions', 'GraphQL', 'Tailwind CSS', 'Docker'],
    metrics: ['Custom Metric #1', 'Custom Metric #2', 'Custom Metric #3'],
    architectureDetails: [
      'Step 1: Replace this placeholder with your project background and system requirements.',
      'Step 2: Add high-level architectural diagram or component flow notes.',
      'Step 3: Document benchmark metrics, user conversions, and production latency.'
    ]
  },
  {
    id: 'mock-2',
    title: 'Mock Space #02: [Mobile / AI / Cloud Native Architecture]',
    company: 'Open Project Slot • Next Opportunity',
    category: 'mock',
    period: '2026+',
    isMockSpace: true,
    summary: 'Secondary mock space designed for specialized mobile developments, generative AI integrations, or micro-service pipelines.',
    impact: 'Ready to showcase: add live URL, GitHub repo link, and detailed technical solutions.',
    techStack: ['React Native', 'Node.js', 'Cloudflare Workers', 'PostgreSQL', 'WebSockets', 'AWS'],
    metrics: ['Configurable Metric A', 'Configurable Metric B', 'Configurable Metric C'],
    architectureDetails: [
      'Step 1: Define the business problem and user pain-points resolved.',
      'Step 2: Highlight cross-platform compatibility and offline sync behaviors.',
      'Step 3: Quantify business outcomes and system scalability.'
    ]
  }
];
