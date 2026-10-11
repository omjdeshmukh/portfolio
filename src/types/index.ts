export interface ProjectItem {
  id: string;
  title: string;
  company: string;
  category: 'telecom' | 'ecommerce' | 'talent' | 'iot' | 'mock';
  period: string;
  isMockSpace?: boolean;
  summary: string;
  image?: string;
  impact: string;
  techStack: string[];
  metrics: string[];
  architectureDetails: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  ratingText: string;
  isMockSlot?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  domain: string;
  type: string;
  bullets: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  period: string;
  university: string;
  percentage?: string;
  description: string;
}

export interface AdditionalInfo {
  certification: string;
  languages: string[];
  keyAreas: string[];
}
