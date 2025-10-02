
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  github: string;
}

export interface Job {
  title: string;
  company: string;
  companyDescription?: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
}

export interface Language {
    name: string;
    level: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CVData {
  personalInfo: PersonalInfo;
  summary: string;
  experience: Job[];
  education: Education[];
  certificates: Certificate[];
  skills: SkillCategory[];
  languages: Language[];
  references: string;
}