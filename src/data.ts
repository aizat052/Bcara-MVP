/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CaseIntake } from './types';

export const INITIAL_INTAKES: CaseIntake[] = [
  {
    id: 'BC-2024-089',
    clientName: 'Alexander Sterling',
    initials: 'AS',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBucnqupoSuel8Fdu7Z4M-F0juQa3L4P2MZTU3dXRwP5za2yRFBAlD5DWAFAfCZF2Q_FEKLiMDIlWTFxwAgKwUdElabxH9rGA4JjHiqPhTbXgiftZc-EiyA0ZWVKxB9RgLFhcaMxItfsXma8YQBdkWe8dXhJ56k-dAwXoaqWymKUXDHb76sBzoZywuc-oA67gXNbnI4jlFmHTCGHlzFQUfGpuF2-DypjOqWR4ZAjYmyCgGxibjTex0QbRoHfWAZXVv2OCpZw_P14sIv',
    email: 'a.sterling@enterprise-tech.com',
    phone: '+1 (555) 234-8901',
    address: '452 Market St, Suite 1200, San Francisco, CA',
    matterType: 'Employment Law',
    submissionDate: 'Oct 12, 2023',
    status: 'In Review',
    priority: 'High',
    complexity: 'Moderate-High',
    estimatedValue: '$150k - $250k',
    assignedTo: 'Sarah J.',
    aiSummary: 'Client is seeking legal counsel regarding a potential Wrongful Termination suit against a former employer in the FinTech sector. The dispute centers around a sudden dismissal following a whistleblowing incident regarding compliance protocols. The client has provided a 12-month employment contract and evidence of performance reviews.',
    timeline: [
      {
        id: 't1',
        title: 'Intake Initiated',
        time: 'Oct 12, 09:30 AM',
        description: 'Client accessed the self-service portal via referral link.',
        type: 'initiated'
      },
      {
        id: 't2',
        title: 'AI Chat Interaction',
        time: 'Oct 12, 10:15 AM',
        description: '42 messages exchanged. System categorized issue as "Employment Dispute".',
        type: 'chat'
      },
      {
        id: 't3',
        title: 'Documents Uploaded',
        time: 'Oct 12, 11:02 AM',
        description: 'Employment_Contract_Final.pdf and ID_Proof.jpg were successfully processed.',
        type: 'upload'
      }
    ],
    documents: [
      {
        id: 'd1',
        name: 'Employment_Contract_Final.pdf',
        size: '2.4 MB',
        uploadedAt: 'Oct 12, 2023',
        category: 'Agreements',
        status: 'ocr_verified'
      },
      {
        id: 'd2',
        name: 'Screenshot_Communication_Dec12.jpg',
        size: '1.1 MB',
        uploadedAt: 'Oct 12, 2023',
        category: 'Evidence',
        status: 'Verified'
      }
    ],
    notes: [
      {
        id: 'n1',
        author: 'Senior Partner (ME)',
        role: 'Senior Partner',
        time: 'Oct 12, 2:15 PM',
        content: 'This looks like a strong retaliation case. Check section 4.2 of the contract for specific severance clauses before drafting.',
        borderColor: '#C8A96B'
      },
      {
        id: 'n2',
        author: 'Associate A. Miller',
        role: 'Associate Partner',
        time: 'Oct 12, 11:30 AM',
        content: 'Client seems anxious about the timeline. Prioritizing document verification.',
        borderColor: '#76777d'
      }
    ]
  },
  {
    id: 'BC-2024-112',
    clientName: 'Elena Rodriguez',
    initials: 'ER',
    email: 'e.rodriguez@gmail.com',
    phone: '+1 (555) 321-7654',
    address: '893 Oak Avenue, San Jose, CA',
    matterType: 'Family Law / Mediation',
    submissionDate: 'Oct 10, 2023',
    status: 'Completed',
    priority: 'Medium',
    complexity: 'Moderate',
    estimatedValue: '$50k - $100k',
    aiSummary: 'Mediation requested between parties regarding asset distribution and co-parenting agreement clauses in a standard pre-divorce negotiation setting.',
    timeline: [
      {
        id: 'te1',
        title: 'Session Started',
        time: 'Oct 10, 08:30 AM',
        description: 'Mediation agreement draft signed and submitted.',
        type: 'initiated'
      }
    ],
    documents: [
      {
        id: 'de1',
        name: 'Mediation_Agreement_signed.pdf',
        size: '1.5 MB',
        uploadedAt: 'Oct 10, 2023',
        category: 'Agreements',
        status: 'Verified'
      }
    ],
    notes: []
  },
  {
    id: 'BC-2024-125',
    clientName: 'Marcus Sterling',
    initials: 'MS',
    email: 'm.sterling@bcara-law.com',
    phone: '+1 (555) 902-1244',
    address: '100 Clay St, San Francisco, CA',
    matterType: 'Real Estate Acquisition',
    submissionDate: 'Oct 15, 2023',
    status: 'New',
    priority: 'High',
    complexity: 'High',
    estimatedValue: '$1.2M - $1.5M',
    aiSummary: 'Acquisition disclosure review required. Requires priority title analysis and legal compliance certification prior to close schedule.',
    timeline: [
      {
        id: 'tm1',
        title: 'Intake Registered',
        time: 'Oct 15, 11:15 AM',
        description: 'New folder set up autonomously.',
        type: 'initiated'
      }
    ],
    documents: [
      {
        id: 'dm1',
        name: 'Title_Deed_Draft.pdf',
        size: '4.8 MB',
        uploadedAt: 'Oct 15, 2023',
        category: 'ID/Passport',
        status: 'Verified'
      }
    ],
    notes: []
  },
  {
    id: 'BC-2024-130',
    clientName: 'Julianna Vane',
    initials: 'JV',
    email: 'j.vane@vanegroup.com',
    phone: '+1 (555) 762-3982',
    address: '221 Main St, Oakland, CA',
    matterType: 'Criminal Defense',
    submissionDate: 'Oct 18, 2023',
    status: 'In Review',
    priority: 'Medium',
    complexity: 'Moderate-High',
    estimatedValue: '$80k',
    assignedTo: 'Sarah J.',
    aiSummary: 'Assistance requested with white-collar regulatory review from federal agency enforcement inquiry regarding private equity funds.',
    timeline: [
      {
        id: 'tv1',
        title: 'Initial Intake',
        time: 'Oct 18, 02:40 PM',
        description: 'Client completed secure chat form.',
        type: 'initiated'
      }
    ],
    documents: [],
    notes: []
  },
  {
    id: 'BC-2024-142',
    clientName: 'David Chen',
    initials: 'DC',
    email: 'd.chen@patentcorp.com',
    phone: '+1 (555) 881-0294',
    address: '101 California St, San Francisco, CA',
    matterType: 'Intellectual Property',
    submissionDate: 'Sept 28, 2023',
    status: 'Completed',
    priority: 'Medium',
    complexity: 'High',
    estimatedValue: '$300k - $500k',
    aiSummary: 'Patent filings validation checklist. Prior art review has been scheduled against machine learning software architectures.',
    timeline: [],
    documents: [],
    notes: []
  }
];

export const INITIAL_USER_PROFILE = {
  fullName: 'Alexander Sterling',
  role: 'Senior Partner, Litigation & IP',
  memberSince: '2021',
  email: 'a.sterling@bcara-law.com',
  phone: '+1 (555) 902-1244',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBucnqupoSuel8Fdu7Z4M-F0juQa3L4P2MZTU3dXRwP5za2yRFBAlD5DWAFAfCZF2Q_FEKLiMDIlWTFxwAgKwUdElabxH9rGA4JjHiqPhTbXgiftZc-EiyA0ZWVKxB9RgLFhcaMxItfsXma8YQBdkWe8dXhJ56k-dAwXoaqWymKUXDHb76sBzoZywuc-oA67gXNbnI4jlFmHTCGHlzFQUfGpuF2-DypjOqWR4ZAjYmyCgGxibjTex0QbRoHfWAZXVv2OCpZw_P14sIv'
};
