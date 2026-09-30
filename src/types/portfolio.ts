export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  timezone: string;
  availability: string;
  summary: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  type: string;
  role: string;
  company: string;
  division: string;
  location: string;
  achievements: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  period: string;
  honor: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  tags: string[];
}

export interface CaseStudySlide {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  caption: string;
}

export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: 'Systems' | 'AI & Microservices' | 'Enterprise';
  year: string;
  client: string;
  timeline: string;
  mandate: string;
  kpi: string;
  statBadge: string;
  description: string;
  overview: string;
  technologies: string[];
  platforms: string;
  techStackSummary: string;
  myRole: string;
  outcome: string;
  outcomeDetail: string;
  images: CaseStudySlide[];
  problemSpace: {
    title: string;
    description: string;
    metric1: { val: string; label: string };
    metric2: { val: string; label: string };
  };
  designSystem: {
    title: string;
    description: string;
    pillars: { title: string; desc: string }[];
  };
  solution: {
    title: string;
    description: string;
    commandExample: {
      flow: string;
      latency: string;
      command: string;
      output: string;
    };
    highlights: { title: string; desc: string }[];
  };
}
