export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: 'Commercial' | 'Residential' | 'Industrial' | 'Infrastructure';
  scale: string; // e.g. "680,000 Sq.Ft"
  scaleCategory: '< 50k' | '50k-200k' | '200k+';
  status: 'Completed' | 'Under Construction' | 'Commissioning';
  disciplines: string[];
  imageUrl: string;
  blueprintUrl?: string;
  description: string;
  specifications: {
    concreteGrade: string;
    structuralSteel: string;
    seismicZone: string;
    certification: string;
    architecturalLead: string;
  };
}

export interface ServiceCapability {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  specs: string;
  imageUrl: string;
}

export interface LiveSite {
  id: string;
  code: string;
  name: string;
  location: string;
  coordinates: string;
  stage: string;
  progressPercentage: number;
  safetyScore: string;
  workersOnSite: number;
  temperature: string;
  windSpeed: string;
  concreteVolumePoured: string;
  craneStatus: 'OPERATIONAL' | 'STANDBY' | 'MAINTENANCE';
  cameraFeedUrl: string;
  lastUpdate: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  technicalSpecs: string;
}

export interface ExecutiveQuote {
  quote: string;
  author: string;
  title: string;
  organization: string;
  project: string;
}
