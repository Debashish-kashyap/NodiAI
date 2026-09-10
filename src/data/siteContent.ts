import { ProblemItem, DeploymentOption, TechHighlight, WorkflowStep } from '@/types';

export const siteConfig = {
  name: 'NodiAI',
  tagline: 'AI For Your Documents. On Your Terms.',
  description: 'Search, summarize, and work with internal documents using private AI deployed within your controlled environment.',
  secondaryTagline: 'Your Data. Your Infrastructure. Your AI.',
  locationBadge: 'Built in Assam · Designed for Indian Institutions',
};

export const problemData: ProblemItem[] = [
  {
    id: 'data-privacy',
    title: 'Sensitive Information Concerns',
    description: 'Uploading proprietary reports, student files, or patient data to public AI tools risks non-compliance and data leaks.',
  },
  {
    id: 'document-deluge',
    title: 'Fragmented Document Archives',
    description: 'Critical knowledge is buried across decentralized PDFs, scanned notices, and departmental folders with no unified search.',
  },
  {
    id: 'time-lost',
    title: 'Hours Lost Searching',
    description: 'Administrative teams lose countless hours manually locating specific circulars, policies, and historical precedents.',
  },
  {
    id: 'compliance',
    title: 'Strict Governance Requirements',
    description: 'Educational, medical, and legal entities must adhere to confidentiality standards that preclude multi-tenant clouds.',
  },
  {
    id: 'repetitive-admin',
    title: 'Repetitive Administrative Load',
    description: 'Manual drafting of circulars, notices, and action summaries consumes valuable institutional bandwidth.',
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: 'Upload Documents',
    description: 'Ingest institutional files, notices, policies, and archives securely into your private instance.',
  },
  {
    step: 2,
    title: 'Index Organizational Knowledge',
    description: 'NodiAI builds an encrypted, local semantic index without transmitting raw files externally.',
  },
  {
    step: 3,
    title: 'Ask Questions & Command Workflows',
    description: 'Query in natural language or request summaries, drafts, and action extractions.',
  },
  {
    step: 4,
    title: 'Receive Verifiable Insights',
    description: 'Obtain precise answers with cited sources, actionable summaries, and drafted communications.',
  },
];

export const deploymentOptions: DeploymentOption[] = [
  {
    id: 'on-premise',
    title: 'On-Premise Server',
    tagline: 'Total Physical Control',
    description: 'Deploy NodiAI directly on your organization’s physical servers or dedicated local hardware.',
    benefits: [
      'Zero external internet dependency required for query processing',
      'Data never leaves your building or institutional network',
      'Air-gapped operation capability',
      'Full compliance with the most stringent data policies',
    ],
  },
  {
    id: 'private-cloud',
    title: 'Private Cloud (VPC)',
    tagline: 'Dedicated Virtual Isolation',
    description: 'Run within your organization’s own AWS, Azure, GCP, or domestic cloud VPC.',
    benefits: [
      'Customer-controlled cloud environment and encryption keys',
      'Dedicated compute with automated elastic scaling',
      'Zero multi-tenant cross-contamination',
      'Seamless connectivity across multi-campus networks',
    ],
  },
  {
    id: 'controlled-env',
    title: 'Controlled Infrastructure',
    tagline: 'Custom Tailored Setup',
    description: 'Custom hybrid deployment architecture tailored to your existing IT stack and compliance rules.',
    benefits: [
      'Flexible deployment matching existing infrastructure constraints',
      'Dedicated monitoring and auditable access governance',
      'Bespoke security boundary configuration',
      'Hands-on enterprise deployment support',
    ],
  },
];

export const technologyHighlights: TechHighlight[] = [
  {
    id: 'rag',
    title: 'Retrieval-Augmented Generation (RAG)',
    description: 'Every answer is strictly grounded in your provided documents, virtually eliminating hallucinations.',
  },
  {
    id: 'compact-models',
    title: 'Compact, Efficient AI Models',
    description: 'Engineered to run high-throughput inference on cost-effective, standard institutional hardware.',
  },
  {
    id: 'governance',
    title: 'Role-Based Access Control',
    description: 'Granular permissions ensure users only query and view documents authorized for their specific role.',
  },
  {
    id: 'audit',
    title: 'Comprehensive Audit Logs',
    description: 'Full traceability of queries, retrievals, and administrative interactions for compliance reviews.',
  },
  {
    id: 'multilingual',
    title: 'Assamese & Indian Language Support',
    description: 'Rooted in our pioneering 74M-parameter Assamese language model, delivering superior regional understanding.',
  },
  {
    id: 'airgap',
    title: 'Air-Gap Capable Architecture',
    description: 'Engineered to operate securely inside closed local networks without outbound data telemetry.',
  },
];

export const pilotProgramContent = {
  badge: 'Early Access Pilot',
  title: 'Partner With NodiAI',
  subtitle: 'We are actively onboarding educational institutions, healthcare clinics, and regional organizations for our guided pilot deployment.',
  benefits: [
    'Direct access to the core engineering team',
    'Custom tailored indexing for your institution’s archive formats',
    'Dedicated on-site or private VPC deployment assistance',
    'Preferential long-term deployment pricing for pilot partners',
  ],
  ctaText: 'Apply for Pilot Program',
};
