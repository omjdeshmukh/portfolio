const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local if not present in process.env
function loadEnv() {
  const envPath = path.resolve(__dirname, '../.env.local');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    content.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...rest] = trimmed.split('=');
        if (key && rest.length) {
          process.env[key.trim()] = rest.join('=').trim();
        }
      }
    });
  }
}

loadEnv();

const uri =
  process.env.MONGODB_URI ||
  'mongodb+srv://omportfolio:123456%40Om@cluster0.dgpv7aj.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0';

// Define Schemas directly in JS for standalone script execution
const ExperienceSchema = new mongoose.Schema(
  {
    company: String,
    location: String,
    role: String,
    period: String,
    domain: String,
    type: String,
    bullets: [String],
    techStack: [String],
  },
  { _id: false }
);

const EducationSchema = new mongoose.Schema(
  {
    degree: String,
    period: String,
    university: String,
    percentage: String,
    description: String,
  },
  { _id: false }
);

const ProfileSchema = new mongoose.Schema(
  {
    fullName: String,
    preferredName: String,
    title: String,
    secondaryTitle: String,
    yearsOfExperience: String,
    primaryLocation: String,
    openToRelocation: Boolean,
    email: String,
    phone: String,
    github: String,
    linkedin: String,
    bio: String,
    highlights: [String],
    experience: [ExperienceSchema],
    education: [EducationSchema],
    certifications: [String],
    languages: [String],
  },
  { timestamps: true }
);

const ProjectSchema = new mongoose.Schema(
  {
    projectId: { type: String, unique: true },
    title: String,
    company: String,
    category: String,
    period: String,
    image: String,
    summary: String,
    impact: String,
    techStack: [String],
    metrics: [String],
    architectureDetails: [String],
    liveDemoUrl: String,
    githubUrl: String,
  },
  { timestamps: true }
);

const SkillCategorySchema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    icon: String,
    items: [
      {
        name: String,
        level: Number,
        ratingText: String,
      },
    ],
  },
  { timestamps: true }
);

const Profile = mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);
const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
const SkillCategory =
  mongoose.models.SkillCategory || mongoose.model('SkillCategory', SkillCategorySchema);

// Data payload
const profileData = {
  fullName: 'Omprakash Deshmukh',
  preferredName: 'Om',
  title: 'Senior Software Engineer | Full-Stack Developer',
  secondaryTitle: 'Ex-GlobalLogic • Bushel • eTeam • The JavaScript Shop',
  yearsOfExperience: '4.8+',
  primaryLocation: 'Nagpur, India',
  openToRelocation: true,
  email: 'omjdeshmukh@gmail.com',
  phone: '+91 9926718163',
  github: 'https://github.com/omjdeshmukh',
  linkedin: 'https://www.linkedin.com/in/omprakash-deshmukh-894677174/',
  bio: 'Results-driven Senior Software Engineer with 4.8+ years of expertise in architecting high-performance web applications using Next.js, React.js, TypeScript, and modern state machines. Specializes in WCAG AA accessibility, modular UI architecture, and robust REST APIs.',
  highlights: [
    '4.8+ Years of Production Experience in Telecom, E-Commerce, and Talent Acquisition platforms',
    'Specialist in SSR/SSG architectures delivering <1.2s First Contentful Paint',
    'Strict adherence to WCAG 2.1 AA accessibility standards and zero lint errors',
    'Proven leadership in cross-functional Agile/Scrum sprint delivery',
  ],
  experience: [
    {
      company: 'GlobalLogic',
      location: 'Nagpur, India',
      role: 'Senior Software Engineer (Telecom Company)',
      period: 'Aug 2024 – Jun 2026',
      domain: 'Enterprise Telecom Infrastructure',
      type: 'Senior Full-Stack & Front-End Specialist',
      bullets: [
        'Developed scalable web applications using Next.js, React.js, and TypeScript, leveraging SSR/SSG rendering strategies to improve page load performance and search engine visibility.',
        'Implemented state management with Redux and integrated REST APIs to support dynamic, data-driven telecom features.',
        'Ensured WCAG accessibility compliance across application interfaces, improving usability for a broader range of users.',
        'Optimized application performance through code profiling and best practices, while maintaining test coverage using Jest.',
        'Configured and maintained Webpack build pipelines and CI/CD workflows to streamline releases and ensure consistent deployment quality.',
      ],
      techStack: [
        'Next.js',
        'React.js',
        'TypeScript',
        'Tailwind CSS',
        'Redux Toolkit',
        'WCAG AA',
        'Jest',
        'Webpack',
        'CI/CD',
      ],
    },
    {
      company: 'Bushel Technology',
      location: 'Nagpur, India',
      role: 'Software Engineer (E-Commerce)',
      period: 'Aug 2023 – Jan 2024',
      domain: 'Omnichannel Digital Retail',
      type: 'Front-End React & React Native Engineer',
      bullets: [
        'Built reusable and responsive React.js and React Native components using JavaScript and Bootstrap, improving development speed and UI consistency across the e-commerce platform.',
        'Integrated REST APIs to support product, cart, and checkout workflows, ensuring reliable data handling across the application.',
        'Collaborated with cross-functional teams using Git, GitHub, and Bitbucket for version control, following Agile/Scrum and structured code review practices.',
      ],
      techStack: [
        'React.js',
        'React Native',
        'JavaScript (ES6+)',
        'Bootstrap',
        'REST APIs',
        'Git',
        'Agile/Scrum',
      ],
    },
    {
      company: 'eTeam',
      location: 'Bangalore, India',
      role: 'Software Engineer (Hiring Firm)',
      period: 'May 2022 – Aug 2023',
      domain: 'Talent Acquisition & Assessment Platform',
      type: 'Full-Stack Developer',
      bullets: [
        'Developed a scalable hiring platform using React.js, Redux, Node.js, and Express.js, supporting end-to-end candidate and recruiter workflows.',
        'Designed and integrated REST APIs with MongoDB and MySQL databases to manage structured and unstructured hiring data.',
        'Implemented automated testing using Jest and validated API endpoints with Postman, following Agile/SDLC practices throughout the development cycle.',
      ],
      techStack: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'MySQL',
        'Redux',
        'Jest',
        'Postman',
      ],
    },
    {
      company: 'The JavaScript Shop',
      location: 'Hyderabad, India',
      role: 'Full Stack Developer (Automation Company)',
      period: 'Sep 2021 – May 2022',
      domain: 'Industrial IoT & Sensor Telemetry',
      type: 'Full-Stack WebSockets & Data Viz',
      bullets: [
        'Built real-time IoT dashboards using React.js and WebSockets, enabling live data visualization for automation systems.',
        'Developed interactive data visualizations using Chart.js and D3.js, styled with Bootstrap and Tailwind CSS for a responsive, modern interface.',
        'Applied lazy loading, code splitting, and performance optimization techniques to maintain smooth real-time rendering under high data throughput.',
      ],
      techStack: [
        'React.js',
        'WebSockets',
        'Chart.js',
        'D3.js',
        'Tailwind CSS',
        'Bootstrap',
        'Code Splitting',
      ],
    },
    {
      company: 'Arrastur Innovation',
      location: 'Nagpur, India',
      role: '(Freelancer Developer) | UI Development',
      period: 'Jun 2020 – Aug 2021',
      domain: 'Cross-Platform UI Development',
      type: 'Web & Mobile React Native Specialist',
      bullets: [
        'Developed reusable web and mobile components using React.js, React Native, and Redux, supporting consistent UI patterns across platforms.',
        'Integrated REST APIs using Axios for efficient API integration and data handling across features.',
        'Focused on responsive UI, accessibility, and performance optimization to deliver reliable cross-device user experiences.',
      ],
      techStack: ['React.js', 'React Native', 'Redux', 'Axios', 'WCAG Accessibility'],
    },
  ],
  education: [
    {
      degree: 'Post-Graduation Diploma in Industrial Robotics',
      period: 'Jul 2018 – Aug 2019',
      university: 'Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur',
      percentage: '76%',
      description:
        'Specialized in robotics kinematics, deterministic logic control, hardware-software interfacing, and automation algorithms.',
    },
    {
      degree: 'Bachelor of Engineering in Automobile Engineering',
      period: 'Dec 2013 – Dec 2017',
      university: 'Rajiv Gandhi Technical University, Bhopal',
      percentage: '73%',
      description:
        'Rigorous engineering foundations covering advanced mathematics, physical systems dynamics, modular design, and analytical debugging.',
    },
  ],
  certifications: ['Product Engineering Program'],
  languages: ['English', 'Hindi'],
};

const projectsData = [
  {
    projectId: 'telecom',
    title: 'TelcoFlux: Enterprise Network Health & Analytics',
    company: 'GlobalLogic (Nagpur, India)',
    category: 'telecom',
    period: '2024 – 2026',
    image: '/assets/images/telecom-preview.jpg',
    summary:
      'High-throughput enterprise telecom analytics platform streaming network throughput, downtime incidents, and regional latency telemetry using Next.js SSR and SSG.',
    impact:
      '40% faster First Contentful Paint, zero WCAG violations, and continuous Kibana telemetry audits.',
    techStack: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Angular',
      'Tailwind CSS',
      'Redux Toolkit',
      'WCAG AA',
      'Jest',
      'Kibana',
    ],
    metrics: ['99.8% Monitored Uptime', '40% FCP Improvement', '100% WCAG Score'],
    architectureDetails: [
      'Architected modular micro-frontends with Next.js App Router and TypeScript.',
      'Enforced WCAG 2.1 AA accessibility guidelines, ARIA landmarks, and screen-reader support.',
      'Streamlined asynchronous state flow with Redux Toolkit and React Context API.',
      'Set up unit tests in Jest with automated CI/CD pipeline triggers on GitHub & Bitbucket.',
    ],
  },
  {
    projectId: 'ecommerce',
    title: 'Aura Storefront & Modular UI Design System',
    company: 'Bushel Technology (Nagpur, India)',
    category: 'ecommerce',
    period: '2023 – 2024',
    image: '/assets/images/ecommerce-preview.jpg',
    summary:
      'Omnichannel retail storefront featuring modular accessible React components, slide-over reactive cart, and resilient RESTful API data exchange.',
    impact:
      '32% surge in checkout conversion rate, sub-1.2s page load, and fully responsive across mobile viewports.',
    techStack: ['React.js', 'JavaScript (ES6+)', 'Bootstrap', 'RESTful APIs', 'Git', 'Agile/Scrum'],
    metrics: ['+32% Cart Conversion', '<1.2s Load Time', 'Zero A11y Violations'],
    architectureDetails: [
      'Constructed a production-ready component library prioritizing keyboard navigation and responsive layouts.',
      'Connected third-party and custom REST endpoints for real-time inventory and pricing calculations.',
      'Implemented clean ES6+ coding standards and participated in daily Scrum sprint ceremonies.',
    ],
  },
  {
    projectId: 'talent',
    title: 'AssessHub: Candidate Evaluation & Talent Portal',
    company: 'eTeam (Bangalore, India)',
    category: 'talent',
    period: '2022 – 2023',
    image: '/assets/images/hiring-preview.jpg',
    summary:
      'Fullstack recruitment dashboard featuring multi-stage candidate pipeline boards, skill scoring cards, and secure assessment administration services.',
    impact:
      'Reduced screening turnaround time by 45% while managing thousands of candidate submissions.',
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'MySQL',
      'Redux',
      'Jest',
      'Postman',
    ],
    metrics: ['-45% Screening Turnaround', '99.9% API Reliability', '10k+ Candidates Processed'],
    architectureDetails: [
      'Built interactive hiring pipeline views in React with normalized state management via Redux.',
      'Developed secure Node.js & Express REST endpoints for authentication and candidate assessment logs.',
      'Implemented testing with Jest, Postman, and Chrome DevTools to ensure zero data regressions.',
    ],
  },
  {
    projectId: 'iot',
    title: 'Hyperion: Real-Time IoT Telemetry & Sensor Monitor',
    company: 'The JavaScript Shop (Hyderabad, India)',
    category: 'iot',
    period: '2021 – 2022',
    image: '/assets/images/iot-preview.jpg',
    summary:
      'Industrial sensor dashboard streaming live telemetry across 500+ simulated IoT sensors using WebSockets, dynamic charts, and low-latency canvas rendering.',
    impact:
      'Maintained steady 60 FPS streaming render without memory degradation over prolonged browser sessions.',
    techStack: [
      'React.js',
      'WebSockets',
      'Chart.js',
      'D3.js',
      'Tailwind CSS',
      'Bootstrap',
      'Code Splitting',
    ],
    metrics: ['500+ Active Nodes', '60 FPS Continuous Render', '<20ms Socket Ping'],
    architectureDetails: [
      'Engineered WebSocket event handling with reconnect policies and debounced state dispatches.',
      'Built interactive graphs visualizing pressure, temperature, and voltage fluctuations.',
      'Implemented code splitting and virtualized lists to maintain optimal DOM performance.',
    ],
  },
];

const skillsCategories = [
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
    ],
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
    ],
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
    ],
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
    ],
  },
  {
    title: 'Databases & Backend',
    icon: '🗄️',
    items: [
      { name: 'Node.js', level: 88, ratingText: '88% • Advanced' },
      { name: 'Express.js', level: 88, ratingText: '88% • Advanced' },
      { name: 'MongoDB & Mongoose', level: 85, ratingText: '85% • Proficient' },
      { name: 'MySQL & Relational Design', level: 85, ratingText: '85% • Proficient' },
    ],
  },
  {
    title: 'Build, CI/CD & Version Control',
    icon: '🛠️',
    items: [
      { name: 'Git & GitHub / Bitbucket Workflows', level: 96, ratingText: '96% • Expert' },
      { name: 'Webpack Configuration & Optimization', level: 88, ratingText: '88% • Advanced' },
      { name: 'CI/CD Pipelines & Automated Deployments', level: 86, ratingText: '86% • Proficient' },
      { name: 'Agile / Scrum Methodologies', level: 95, ratingText: '95% • Advanced' },
    ],
  },
];

async function seedDatabase() {
  console.log('Connecting to MongoDB Atlas...');
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000,
    });
    console.log('Connected to MongoDB Atlas successfully.');

    // 1. Seed Profile
    console.log('Seeding Profile document...');
    await Profile.deleteMany({});
    const createdProfile = await Profile.create(profileData);
    console.log(`Profile seeded (ID: ${createdProfile._id})`);

    // 2. Seed Projects
    console.log('Seeding Projects...');
    await Project.deleteMany({});
    const createdProjects = await Project.insertMany(projectsData);
    console.log(`Seeded ${createdProjects.length} projects successfully.`);

    // 3. Seed Skill Categories
    console.log('Seeding Skill Categories...');
    await SkillCategory.deleteMany({});
    const createdSkills = await SkillCategory.insertMany(skillsCategories);
    console.log(`Seeded ${createdSkills.length} skill categories successfully.`);

    console.log('\n--- SEED COMPLETE ---');
    console.log('All portfolio details have been successfully written to MongoDB!');
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('\nMongoDB Seeding Error:', err.message);
    console.error('\nNote: If authentication failed, verify database user in MongoDB Atlas -> Database Access.');
    process.exit(1);
  }
}

seedDatabase();
