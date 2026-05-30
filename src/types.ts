/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CaseIntake {
  id: string; // e.g. "BC-2024-089"
  clientName: string;
  avatarUrl?: string;
  initials: string;
  email: string;
  phone: string;
  address?: string;
  matterType: string;
  submissionDate: string;
  status: 'New' | 'In Review' | 'Completed';
  priority: 'High' | 'Medium' | 'Low';
  aiSummary: string;
  complexity: string;
  estimatedValue: string;
  timeline: TimelineEvent[];
  documents: AttachedDocument[];
  notes: InternalNote[];
  assignedTo?: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  time: string;
  description: string;
  type: 'initiated' | 'chat' | 'upload' | 'action';
}

export interface AttachedDocument {
  id: string;
  name: string;
  size: string;
  uploadedAt: string;
  category: 'ID/Passport' | 'Agreements' | 'Evidence' | 'Court Docs' | 'Others';
  status: 'Verified' | 'ocr_verified' | 'uploading' | 'error';
  progress?: number;
}

export interface InternalNote {
  id: string;
  author: string;
  role: string;
  time: string;
  content: string;
  borderColor?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'client';
  text: string;
  timestamp: string;
}
