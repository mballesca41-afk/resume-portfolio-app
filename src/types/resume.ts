export interface Experience {
  id: string;
  position: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  graduationDate?: string;
  status?: 'Graduate' | 'Undergraduate';
}

export interface Skill {
  id: string;
  category: string;
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Dashboard' | 'Listing' | 'Tracker' | 'SOP' | 'Other';
}

export interface NicheProfile {
  id: string;
  title: string;
  icon: string;
  jobTitle: string;
  summary: string;
  objective: string;
  keySkills: string[];
  highlightedExperience: string[];
}

export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    whatsapp?: string;
    location: string;
    linkedin?: string;
    portfolio?: string;
    profilePhoto?: string;
  };
  niches: NicheProfile[];
  selectedNiche: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
  strengths: string[];
  languages: Array<{ language: string; proficiency: string }>;
  visibleSections: {
    summary: boolean;
    objective: boolean;
    skills: boolean;
    experience: boolean;
    education: boolean;
    certifications: boolean;
    strengths: boolean;
    languages: boolean;
  };
  portfolio: PortfolioItem[];
}
