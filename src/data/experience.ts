import { ExperienceItem, EducationItem, AdditionalInfo } from '../types';

export const experienceData: ExperienceItem[] = [
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
      'Configured and maintained Webpack build pipelines and CI/CD workflows to streamline releases and ensure consistent deployment quality.'
    ],
    techStack: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'WCAG AA', 'Jest', 'Webpack', 'CI/CD']
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
      'Collaborated with cross-functional teams using Git, GitHub, and Bitbucket for version control, following Agile/Scrum and structured code review practices.'
    ],
    techStack: ['React.js', 'React Native', 'JavaScript (ES6+)', 'Bootstrap', 'REST APIs', 'Git', 'Agile/Scrum']
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
      'Implemented automated testing using Jest and validated API endpoints with Postman, following Agile/SDLC practices throughout the development cycle.'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Redux', 'Jest', 'Postman']
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
      'Applied lazy loading, code splitting, and performance optimization techniques to maintain smooth real-time rendering under high data throughput.'
    ],
    techStack: ['React.js', 'WebSockets', 'Chart.js', 'D3.js', 'Tailwind CSS', 'Bootstrap', 'Code Splitting']
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
      'Focused on responsive UI, accessibility, and performance optimization to deliver reliable cross-device user experiences.'
    ],
    techStack: ['React.js', 'React Native', 'Redux', 'Axios', 'WCAG Accessibility']
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'Post-Graduation Diploma in Industrial Robotics',
    period: 'Jul 2018 – Aug 2019',
    university: 'Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur',
    percentage: '76%',
    description: 'Specialized in robotics kinematics, deterministic logic control, hardware-software interfacing, and automation algorithms.'
  },
  {
    degree: 'Bachelor of Engineering in Automobile Engineering',
    period: 'Dec 2013 – Dec 2017',
    university: 'Rajiv Gandhi Technical University, Bhopal',
    percentage: '73%',
    description: 'Rigorous engineering foundations covering advanced mathematics, physical systems dynamics, modular design, and analytical debugging.'
  }
];

export const additionalInfoData: AdditionalInfo = {
  certification: 'Product Engineering Program',
  languages: ['English', 'Hindi'],
  keyAreas: ['Frontend Development', 'Full-Stack Development', 'Web Accessibility', 'Performance Optimization']
};
