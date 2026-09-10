export interface NavItem {
  label: string;
  href: string;
}

export interface NavAction {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
  tag?: string;
}

export interface UseCaseItem {
  id: string;
  industry: string;
  icon?: string;
  headline: string;
  description: string;
  points: string[];
}

export interface DeploymentOption {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  icon?: string;
}

export interface TechHighlight {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  impact?: string;
  icon?: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  organizationName: string;
  email: string;
  phone?: string;
  industry: string;
  useCase: string;
  message?: string;
}
