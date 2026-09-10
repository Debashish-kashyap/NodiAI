import { UseCaseItem } from '@/types';

export const useCasesData: UseCaseItem[] = [
  {
    id: 'education',
    industry: 'Educational Institutions',
    headline: 'Schools, Colleges, Universities & Institutes',
    description: 'Empower administrative staff and faculty to access academic guidelines, student records, circulars, and departmental files securely.',
    points: [
      'Instant retrieval of historical exam regulations and academic policies',
      'Rapid synthesis of departmental audit reports and meeting minutes',
      'Automated drafting of bilingual student notices and staff circulars',
      'Zero exposure of sensitive student or institutional data to public clouds',
    ],
  },
  {
    id: 'healthcare',
    industry: 'Healthcare & Clinics',
    headline: 'Clinics, Nursing Homes & Medical Facilities',
    description: 'Ensure strict confidentiality while accelerating access to clinical SOPs, equipment manuals, and administrative documentation.',
    points: [
      'Fast reference for internal clinical protocols and procedural SOPs',
      'Summarization of vendor maintenance logs and compliance guidelines',
      'Strict on-premise governance safeguarding operational privacy',
      'Auditable access logs compliant with institutional healthcare mandates',
    ],
  },
  {
    id: 'sme',
    industry: 'SMEs & Growing Enterprises',
    headline: 'Fast-Growing Businesses, Startups & Operations',
    description: 'Streamline operational knowledge management and eliminate recurring bottlenecks in contract reviews and HR queries.',
    points: [
      'Centralized query hub for internal operational playbooks and handbooks',
      'Rapid extraction of clauses and termination terms in vendor agreements',
      'Accelerated onboarding answers for new team members',
      'Cost-effective compact deployment running on owned hardware',
    ],
  },
  {
    id: 'legal',
    industry: 'Legal & Consulting',
    headline: 'Law Firms, Advisory Groups & Independent Practitioners',
    description: 'Review case archives, precedents, and internal case summaries with zero risk of client confidentiality breach.',
    points: [
      'Air-gapped semantic search across proprietary case archives',
      'Key milestone and date extraction from complex dispute documentation',
      'Cross-lingual document synthesis (Assamese & English)',
      'Total isolation: client information never touches third-party servers',
    ],
  },
];
