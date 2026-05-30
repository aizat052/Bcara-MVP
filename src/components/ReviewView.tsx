/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { User, Timeline, Trash2, Edit2, Check, Sparkles, Lock, ArrowRight, PlusCircle, Paperclip } from 'lucide-react';
import { AttachedDocument } from '../types';

interface ReviewViewProps {
  onBack: () => void;
  onSubmitSuccess: (refNumber: string) => void;
  matterSummaryText: string;
  uploadedDocuments: AttachedDocument[];
}

export default function ReviewView({ onBack, onSubmitSuccess, matterSummaryText, uploadedDocuments }: ReviewViewProps) {
  const [personalDetails, setPersonalDetails] = useState({
    name: 'Alexander J. Sterling',
    email: 'a.sterling@enterprise-tech.com',
    phone: '+1 (555) 234-8901',
    address: '452 Market St, Suite 1200, San Francisco, CA'
  });

  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isSubmitProcessing, setIsSubmitProcessing] = useState(false);

  // Checkboxes
  const [confirmAccuracy, setConfirmAccuracy] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [timelineEvents, setTimelineEvents] = useState([
    {
      id: 'e1',
      date: 'November 12, 2023',
      title: 'Initial Dispute Arises',
      description: 'First notification received regarding intellectual property infringement from competitors.'
    },
    {
      id: 'e2',
      date: 'December 05, 2023',
      title: 'Cease and Desist Issued',
      description: 'Formal legal document sent to the counter-party outlining specific patent violations.'
    },
    {
      id: 'e3',
      date: 'January 14, 2024',
      title: 'Final Mediation Attempt',
      description: 'Last scheduled meeting failed to produce a settlement agreement.'
    }
  ]);

  const [documents, setDocuments] = useState<AttachedDocument[]>(
    uploadedDocuments.length > 0 ? uploadedDocuments : [
      {
        id: 'rev-d1',
        name: 'Employment_Contract_Final.pdf',
        size: '2.4 MB',
        uploadedAt: 'Oct 12, 2023',
        category: 'Agreements',
        status: 'ocr_verified'
      },
      {
        id: 'rev-d2',
        name: 'Screenshot_Communication_Dec12.jpg',
        size: '1.1 MB',
        uploadedAt: 'Oct 12, 2023',
        category: 'Evidence',
        status: 'Verified'
      }
    ]
  );

  const removeDoc = (id: string) => {
    setDocuments(prev => prev.filter(d => d.id !== id));
  };

  const handleFinalSubmit = () => {
    if (!confirmAccuracy || !agreeTerms) {
      alert("Please confirm the information accuracy and agree to the Legal Services Agreement before submitting.");
      return;
    }

    setIsSubmitProcessing(true);
    setTimeout(() => {
      setIsSubmitProcessing(false);
      onSubmitSuccess('BC-8829-X');
    }, 1800);
  };

  return (
    <div id="review-view" className="max-w-6xl mx-auto flex flex-col animate-in fade-in duration-300">
      {/* Header Info */}
      <div className="mb-8 pl-1">
        <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Review Your Intake Summary</h1>
        <p className="text-slate-500 dark:text-slate-400 font-sans text-sm max-w-2xl">
          Please review the details of your legal matter before submission. Your information is protected by attorney-client privilege and end-to-end encryption.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Summary Details */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Personal Details */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
              <h2 className="font-display text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="text-base">👤</span>
                Personal Details
              </h2>
              <button
                onClick={() => setIsEditingPersonal(!isEditingPersonal)}
                className="text-[#0F172A] dark:text-amber-500 font-sans text-xs font-semibold flex items-center gap-1 hover:underline cursor-pointer"
              >
                {isEditingPersonal ? <Check className="w-3.5 h-3.5" /> : <Edit2 className="w-3.5 h-3.5" />}
                {isEditingPersonal ? 'Save' : 'Edit'}
              </button>
            </div>

            {isEditingPersonal ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase">Full Legal Name</label>
                  <input
                    type="text"
                    value={personalDetails.name}
                    onChange={e => setPersonalDetails({ ...personalDetails, name: e.target.value })}
                    className="w-full text-sm p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 rounded"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase">Contact Email</label>
                  <input
                    type="email"
                    value={personalDetails.email}
                    onChange={e => setPersonalDetails({ ...personalDetails, email: e.target.value })}
                    className="w-full text-sm p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 rounded"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase">Phone Number</label>
                  <input
                    type="text"
                    value={personalDetails.phone}
                    onChange={e => setPersonalDetails({ ...personalDetails, phone: e.target.value })}
                    className="w-full text-sm p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 rounded"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase">Mailing Address</label>
                  <input
                    type="text"
                    value={personalDetails.address || ''}
                    onChange={e => setPersonalDetails({ ...personalDetails, address: e.target.value })}
                    className="w-full text-sm p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 rounded"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <p className="text-slate-400 dark:text-slate-500 font-sans text-[11px] uppercase tracking-wider mb-0.5">Full Legal Name</p>
                  <p className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-100">{personalDetails.name}</p>
                </div>
                <div>
                  <p className="text-slate-400 dark:text-slate-500 font-sans text-[11px] uppercase tracking-wider mb-0.5">Contact Email</p>
                  <p className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-100">{personalDetails.email}</p>
                </div>
                <div>
                  <p className="text-slate-400 dark:text-slate-500 font-sans text-[11px] uppercase tracking-wider mb-0.5">Phone Number</p>
                  <p className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-100">{personalDetails.phone}</p>
                </div>
                <div>
                  <p className="text-slate-400 dark:text-slate-500 font-sans text-[11px] uppercase tracking-wider mb-0.5">Mailing Address</p>
                  <p className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-100">{personalDetails.address}</p>
                </div>
              </div>
            )}
          </section>

          {/* Matter Timeline Events */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
              <h2 className="font-display text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="text-base">📅</span>
                Matter Description Logs
              </h2>
              <button
                onClick={() => {
                  const title = prompt("Enter event title:");
                  if (!title) return;
                  const desc = prompt("Enter brief description:");
                  if (!desc) return;
                  setTimelineEvents([...timelineEvents, {
                    id: `e-${Date.now()}`,
                    date: new Date().toLocaleDateString([], { month: 'long', day: 'numeric', year: 'numeric' }),
                    title,
                    description: desc
                  }]);
                }}
                className="text-[#0F172A] dark:text-amber-500 font-sans text-xs font-semibold flex items-center gap-1 hover:underline cursor-pointer"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                Add Event
              </button>
            </div>

            <div className="relative border-l-2 border-slate-100 dark:border-slate-800 pl-6 ml-1.5 space-y-6">
              {timelineEvents.map((timeline, idx) => (
                <div key={timeline.id} className="relative">
                  {/* Indicator bullet dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-900 dark:bg-amber-600 border-2 border-white dark:border-slate-950 shadow-sm"></div>
                  <div className="space-y-0.5">
                    <p className="font-sans text-[11px] text-slate-400 dark:text-slate-500">{timeline.date}</p>
                    <h3 className="font-sans text-sm font-bold text-slate-800 dark:text-slate-250">{timeline.title}</h3>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-450 leading-relaxed pt-1">{timeline.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Attached Evidence Summary */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
              <h2 className="font-display text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="text-base">🖇️</span>
                Attached Evidence
              </h2>
              <button
                onClick={onBack}
                className="text-[#0F172A] dark:text-amber-500 font-sans text-xs font-semibold flex items-center gap-1 hover:underline cursor-pointer"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                Add More
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map(doc => (
                <div
                  key={doc.id}
                  className="flex items-center p-3.5 bg-slate-50 dark:bg-slate-850/40 rounded-lg border border-slate-200 dark:border-slate-800"
                >
                  <span className="mr-3 font-sans text-xl">{doc.name.endsWith('.jpg') ? '🖼️' : '📄'}</span>
                  <div className="flex-1 truncate">
                    <p className="font-sans text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">{doc.name}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">{doc.size} • PDF Document</p>
                  </div>
                  <button
                    onClick={() => removeDoc(doc.id)}
                    className="text-red-500 p-1.5 hover:bg-red-50 dark:hover:bg-red-950/20 rounded cursor-pointer transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: AI Brief & Submit Panel */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* AI Intake Brief Card */}
          <div className="bg-[#0f172a] text-white rounded-xl p-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Sparkles className="w-24 h-24 text-white" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <h3 className="font-display text-base font-bold text-white">Intake Brief</h3>
              </div>
              <p className="font-sans text-xs text-slate-300 leading-relaxed italic">
                {matterSummaryText ? `"${matterSummaryText}"` : `"The client is reporting an Employment matter regarding wrongful termination potential against their former employer. Based on contract metrics, further assessment of regulatory compliance non-disclosure clauses and state restrictiveness should be handled immediately. Recommended action: Immediate review by specialized litigation counsel."`}
              </p>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-widest text-amber-500">Generated by Bcara-AI</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-[9px] font-mono leading-none">94% Confidence</span>
              </div>
            </div>
          </div>

          {/* Submission Checkboxes Card Form */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
            <h3 className="font-display text-base font-bold text-slate-900 dark:text-slate-100 mb-4">Finalize Submission</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="confirm-accuracy-chk"
                  className="mt-1 rounded cursor-pointer border-slate-300 dark:border-slate-700 text-slate-900 focus:ring-slate-900 h-4 w-4"
                  checked={confirmAccuracy}
                  onChange={e => setConfirmAccuracy(e.target.checked)}
                />
                <label className="text-xs text-slate-500 line-clamp-3 leading-relaxed cursor-pointer" htmlFor="confirm-accuracy-chk">
                  I confirm that all information provided is accurate and complete to the best of my knowledge.
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy-consent-chk"
                  className="mt-1 rounded cursor-pointer border-slate-300 dark:border-slate-700 text-slate-900 focus:ring-slate-900 h-4 w-4"
                  checked={agreeTerms}
                  onChange={e => setAgreeTerms(e.target.checked)}
                />
                <label className="text-xs text-slate-500 leading-relaxed cursor-pointer" htmlFor="privacy-consent-chk">
                  I agree to the <a className="text-[#0F172A] dark:text-blue-400 font-semibold hover:underline" href="#services">Legal Services Agreement</a> and handling of my credentials under Encrypted Legal custody standards.
                </label>
              </div>
            </div>

            <button
              onClick={handleFinalSubmit}
              disabled={isSubmitProcessing}
              className={`w-full bg-[#C8A96B] dark:bg-amber-600 text-[#0F172A] dark:text-white font-sans text-sm font-semibold py-3.5 rounded-lg shadow-md hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isSubmitProcessing ? 'opacity-80 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitProcessing ? (
                <>
                  <span className="inline-block animate-spin font-sans text-sm">⌛</span>
                  Processing...
                </>
              ) : (
                <>
                  Submit Intake
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-850/50 rounded-lg border border-slate-100 dark:border-slate-800">
              <p className="font-sans text-[11px] text-slate-400 leading-snug">
                Confidentiality Note: Your submission is encrypted via AES-256 before delivery. You will receive an initial response within 2 business hours.
              </p>
            </div>

            <button
              onClick={() => alert("Progress saved locally!")}
              className="w-full mt-4 text-slate-500 hover:text-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 font-sans text-xs py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              Save Progress as Draft
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
