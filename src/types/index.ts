export type EngagementModel = 'dedicated_pod' | 'app_development' | 'systems_integration' | 'staff_augmentation';

export type TimezoneOption = 'us_overlap' | 'eu_overlap' | 'apac_overlap' | 'round_the_clock';

export interface TechStackItem {
  id: string;
  name: string;
  category: 'cloud' | 'backend' | 'frontend' | 'integration' | 'database';
}

export interface TalentProfile {
  id: string;
  code: string;
  name: string;
  role: string;
  seniority: 'Senior' | 'Lead' | 'Principal Architect' | 'Staff Engineer';
  location: string;
  experienceYears: number;
  primaryStack: string[];
  secondaryStack: string[];
  recentAchievement: string;
  availability: string;
  certifications: string[];
  dailyRateINR: number;
  dailyRateEstimateUSD: number;
}

export interface CaseStudy {
  id: string;
  clientIndustry: string;
  clientRegion: string;
  title: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  quote: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface DeliveryHub {
  city: string;
  state: string;
  campusName: string;
  engineersCount: number;
  specialization: string;
  keyClientsCount: number;
  certifications: string[];
}

export interface ArchitectureScenario {
  id: string;
  name: string;
  tagline: string;
  description: string;
  legacySystem: string;
  middlewareLayer: string;
  targetCloud: string;
  dataThroughput: string;
  syncLatency: string;
  protocols: string[];
  keyBenefits: string[];
}

export interface RFPFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  companySize: string;
  engagementType: EngagementModel;
  techNeeds: string[];
  estimatedTimeline: string;
  estimatedBudget: string;
  projectSummary: string;
}
