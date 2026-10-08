export interface PersonalInfo {
  name: string;
  firstName?: string;
  lastName?: string;
  preferredName?: string;
  role: string;
  statusBadge: string;
  avatarUrl?: string;
  profileImage?: string;
  headline: string;
  shortBio: string[];
  techPills?: string[];
  about: {
    intro: string;
    paragraphs: string[];
    highlights?: string[];
  };
  location: string;
  email: string;
  phone?: string;
  githubUrl: string;
  linkedinUrl: string;
  leetcodeUrl?: string;
  resumeUrl: string;
  openToRoles: string[];
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
  iconName?: string;
}

export interface ProjectArchitecture {
  summary: string;
  components: {
    layer: string;
    details: string;
  }[];
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  architecture: ProjectArchitecture;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  engineeringChallenges: {
    challenge: string;
    resolution: string;
    impact: string;
  }[];
  resultsMetrics: string[];
  whatILearned: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  date?: string;
  description: string;
  bulletPoints?: string[];
  problem?: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  metrics?: string;
  caseStudy?: ProjectCaseStudy;
  imageAlt?: string;
  mockupType?: 'browser' | 'terminal' | 'flow';
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  type: 'Full-time' | 'Internship' | 'Contract' | 'Research Fellow';
  summary: string;
  technologies: string[];
  accomplishments: string[];
  companyUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    highlight?: boolean;
    level?: 'Proficient' | 'Familiar';
  }[];
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  location: string;
  graduationYear: string;
  gpa?: string;
  honors?: string[];
  relevantCoursework: string[];
  websiteUrl?: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  category: 'Hackathon' | 'Competitive' | 'Certification' | 'Academic' | 'Scholarship';
  description: string;
  link?: string;
  badge?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  skills?: string[];
  badge?: string;
}

export interface DeveloperProfile {
  platform: string;
  username: string;
  url: string;
  stat: string;
  description: string;
}
