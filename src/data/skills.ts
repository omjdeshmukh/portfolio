import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Languages & Frameworks',
    icon: '⚡',
    items: [
      { name: 'Next.js (App Router, SSR, SSG)', level: 95, ratingText: '95% • Advanced' },
      { name: 'React.js (v18+, Concurrent)', level: 98, ratingText: '98% • Expert' },
      { name: 'TypeScript', level: 92, ratingText: '92% • Advanced' },
      { name: 'JavaScript (ES6+)', level: 98, ratingText: '98% • Expert' },
      { name: 'Angular', level: 85, ratingText: '85% • Proficient' },
      { name: 'React Native', level: 82, ratingText: '82% • Proficient' },
      { name: 'HTML5 & Semantic Web', level: 98, ratingText: '98% • Expert' },
    ]
  },
  {
    title: 'UI & Styling Systems',
    icon: '🎨',
    items: [
      { name: 'Tailwind CSS', level: 95, ratingText: '95% • Advanced' },
      { name: 'Material-UI (MUI)', level: 90, ratingText: '90% • Advanced' },
      { name: 'Ant Design', level: 86, ratingText: '86% • Proficient' },
      { name: 'Bootstrap & SASS / SCSS', level: 92, ratingText: '92% • Advanced' },
      { name: 'CSS Modules & Vanilla CSS', level: 96, ratingText: '96% • Expert' },
      { name: 'Responsive Mobile-First Design', level: 98, ratingText: '98% • Expert' },
    ]
  },
  {
    title: 'A11y, Testing & Quality',
    icon: '♿',
    items: [
      { name: 'WCAG Accessibility (AA/AAA)', level: 98, ratingText: '98% • Expert' },
      { name: 'NVDA & VoiceOver Screen Readers', level: 92, ratingText: '92% • Advanced' },
      { name: 'Jest Unit & Integration Testing', level: 90, ratingText: '90% • Advanced' },
      { name: 'Google Lighthouse Audits', level: 96, ratingText: '96% • Expert' },
      { name: 'Chrome DevTools & Postman', level: 94, ratingText: '94% • Advanced' },
      { name: 'Kibana Monitoring & Error Tracking', level: 85, ratingText: '85% • Proficient' },
    ]
  },
  {
    title: 'State & Real-Time Architecture',
    icon: '🔄',
    items: [
      { name: 'Redux Toolkit (RTK) & Thunks', level: 95, ratingText: '95% • Advanced' },
      { name: 'React Context API & Custom Hooks', level: 98, ratingText: '98% • Expert' },
      { name: 'RESTful API Integration & Axios', level: 96, ratingText: '96% • Advanced' },
      { name: 'WebSockets Telemetry Streaming', level: 88, ratingText: '88% • Advanced' },
      { name: 'Chart.js & D3.js Data Visualization', level: 86, ratingText: '86% • Proficient' },
    ]
  },
  {
    title: 'Databases & Backend',
    icon: '🗄️',
    items: [
      { name: 'Node.js', level: 88, ratingText: '88% • Advanced' },
      { name: 'Express.js', level: 88, ratingText: '88% • Advanced' },
      { name: 'MongoDB & Mongoose', level: 85, ratingText: '85% • Proficient' },
      { name: 'MySQL & Relational Design', level: 85, ratingText: '85% • Proficient' },
    ]
  },
  {
    title: 'Mock Spaces • Future & Emerging Stacks',
    icon: '🚀',
    items: [
      { name: 'Mock Slot #01: GraphQL / Apollo Client', level: 85, ratingText: 'Slot Available', isMockSlot: true },
      { name: 'Mock Slot #02: Docker & Containerization', level: 80, ratingText: 'Slot Available', isMockSlot: true },
      { name: 'Mock Slot #03: AWS / Cloudflare Serverless', level: 80, ratingText: 'Slot Available', isMockSlot: true },
      { name: 'Mock Slot #04: Python FastAPI / Microservices', level: 75, ratingText: 'Slot Available', isMockSlot: true },
    ]
  }
];
