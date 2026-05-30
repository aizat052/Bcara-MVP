/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ChevronRight, Download, Eye, FileText, Gavel, Mail, Send, ShieldAlert, Sparkles, UserCheck } from 'lucide-react';
import { CaseIntake, InternalNote } from '../types';

interface StaffDetailViewProps {
  caseItem: CaseIntake;
  onBack: () => void;
  onUpdateCase: (updated: CaseIntake) => void;
}

export default function StaffDetailView({ caseItem, onBack, onUpdateCase }: StaffDetailViewProps) {
  const [newNote, setNewNote] = useState('');
  const [isApproved, setIsApproved] = useState(caseItem.status === 'Completed');

  const handlePostNote = () => {
    if (!newNote.trim()) return;

    const newNoteObj: InternalNote = {
      id: `note-${Date.now()}`,
      author: 'Senior Partner (ME)',
      role: 'Senior Partner',
      time: 'Just now',
      content: newNote,
      borderColor: '#C8A96B'
    };

    const updated = {
      ...caseItem,
      notes: [...caseItem.notes, newNoteObj]
    };

    onUpdateCase(updated);
    setNewNote('');
  };

  const handleApprove = () => {
    setIsApproved(true);
    const updated = {
      ...caseItem,
      status: 'Completed' as const
    };
    onUpdateCase(updated);
    alert('Intake approved successfully and synchronized to firm case file archive.');
  };

  return (
    <div id="staff-detail-view" className="animate-in fade-in duration-350 flex flex-col gap-6">
      
      {/* Header Info Banner strip */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-lg hover:bg-slate-50 text-slate-700 dark:text-slate-300 transition-colors"
            title="Go back to Active Intakes"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-450 font-sans text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {isApproved ? 'Approved Intake' : 'Pending Review'}
              </span>
              <span className="font-sans text-xs text-slate-400">ID: {caseItem.id}</span>
            </div>
            <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Client: {caseItem.clientName}</h1>
          </div>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button
            onClick={() => alert("All progress saved locally!")}
            className="flex-1 md:flex-none px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-350 hover:bg-slate-50"
          >
            Save Progress
          </button>
          <button
            onClick={handleApprove}
            className="flex-1 md:flex-none px-4 py-2 bg-[#C8A96B] hover:bg-[#B6985A] text-[#0F172A] font-semibold text-xs rounded-lg shadow-sm"
          >
            Approve Intake
          </button>
        </div>
      </div>

      {/* Main Grid: Info columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left main area: AI Briefs, Timeline, Docs */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Case Synthesis Card containing AI summary */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <Sparkles className="w-4 h-4 text-[#C8A96B]" />
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">AI-Generated Case Summary</h3>
            </div>
            <p className="font-sans text-slate-600 dark:text-slate-350 text-sm leading-relaxed whitespace-pre-line">
              {caseItem.aiSummary}
            </p>
            
            {/* Split specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Legal Category</span>
                <span className="font-sans text-xs text-slate-700 dark:text-slate-300 font-semibold">{caseItem.matterType}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Complexity</span>
                <span className="font-sans text-xs text-slate-700 dark:text-slate-300 font-semibold">{caseItem.complexity}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Estimated Value</span>
                <span className="font-sans text-xs text-slate-700 dark:text-slate-300 font-semibold">{caseItem.estimatedValue}</span>
              </div>
            </div>
          </div>

          {/* Interactive Intake Timeline tracker logs */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="font-display text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">Intake Timeline</h3>
            
            <div className="relative border-l-2 border-slate-100 dark:border-slate-800/80 pl-8 ml-3 space-y-6">
              {caseItem.timeline.map((evt, idx) => (
                <div key={evt.id} className="relative">
                  {/* Icon Node floating */}
                  <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-slate-900 text-white border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px]">
                    ⏱️
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-sans text-xs font-bold text-slate-800 dark:text-slate-300">{evt.title}</span>
                      <span className="font-sans text-[10px] text-slate-400">{evt.time}</span>
                    </div>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-450 leading-relaxed">{evt.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Document Library and scans viewbox */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">Document Library</h3>
              <span className="font-sans text-[11px] text-slate-400 font-medium">{caseItem.documents?.length || 0} Files Attached</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseItem.documents?.map(doc => (
                <div
                  key={doc.id}
                  className="p-3.5 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50/50 dark:bg-slate-900 flex items-center justify-between hover:border-slate-900 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-xl">📄</span>
                    <div>
                      <p className="font-sans text-xs font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[150px]">{doc.name}</p>
                      <p className="font-sans text-[10px] text-slate-400 uppercase mt-0.5">{doc.size} • Verified OCR</p>
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`Downloading document: ${doc.name}`)}
                    className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-amber-500 transition-colors cursor-pointer"
                    title="Download attached doc"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Simulated scan click expandable viewbox */}
            <div
              onClick={() => alert("Opening full-page document scans reader...")}
              className="mt-6 aspect-[16/9] bg-slate-50 dark:bg-slate-850 rounded-xl relative flex items-center justify-center border border-slate-200 dark:border-slate-800/80 overflow-hidden cursor-pointer group shadow-inner"
            >
              <img
                alt="Intake scan papers sheet mockup"
                className="w-full h-full object-cover opacity-60 group-hover:scale-[1.01] transition-transform duration-500 hover:opacity-75"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_uINrh7J3DIMENcmz_hlLwEzgRhGHnDpxAhwKCIBi2utszdGB1cssU_o6Wh-y9P6Srw0atMsKmU1GT2vECRTxEBIoEh_bEB4zGsCC0guOdJuY6T8WkK8atLC-Pkt5t0vHPrFiVPT5wC4-EbAcREmggWv-en1MFpzZREDD_LGaQdeLbFFrlLzcDdFqrD96dR-DOW1WuS_yLpAlSSaahtX0gJy1JDQcKQ0MK7mVWr96DtCaVCao7RbRpbv4AIYTqRr_zcpbnLprHupY"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/15 duration-300"></div>
              <div className="absolute flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-white/95 dark:bg-slate-900/95 rounded-full flex items-center justify-center shadow-lg text-slate-800">
                  <Eye className="w-5 h-5 text-amber-500" />
                </div>
                <span className="font-sans text-xs font-semibold text-white tracking-wide">Click to Expand Document Viewer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Area: Decisions and collaborative notes */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Intake Decisions Actions Box */}
          <div className="bg-[#0F172A] text-white p-6 rounded-xl shadow-lg space-y-4">
            <h3 className="font-display text-sm font-bold tracking-wider uppercase text-amber-500">Intake Decisions</h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={handleApprove}
                className="w-full bg-[#C8A96B] dark:bg-amber-600 text-[#0F172A] dark:text-white font-sans text-xs font-bold py-3 px-4 rounded-lg flex items-center justify-between hover:bg-opacity-95 transition-all cursor-pointer"
              >
                <span>Approve Intake</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-800 dark:text-white" />
              </button>

              <button
                onClick={() => alert("Launching secure dialogue composer...")}
                className="w-full bg-white/10 hover:bg-white/15 text-white font-sans text-xs font-bold py-3 px-4 rounded-lg flex items-center justify-between transition-all cursor-pointer"
              >
                <span>Request More Info</span>
                <Mail className="w-4 h-4 text-slate-350" />
              </button>

              <button
                onClick={() => alert("Autonomously drafting lawsuit brief proposal...")}
                className="w-full bg-white text-slate-900 font-sans text-xs font-bold py-3 px-4 rounded-lg flex items-center justify-between hover:bg-slate-50 transition-all cursor-pointer"
              >
                <span>Generate Draft</span>
                <Sparkles className="w-4 h-4 text-amber-600" />
              </button>
            </div>
          </div>

          {/* Internal Notes collaborative conversation layout thread */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-[400px]">
            <h3 className="font-display text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">Internal Notes</h3>
            
            {/* Scrollable thread */}
            <div className="flex-grow overflow-y-auto space-y-4 pr-1 mb-4">
              {caseItem.notes?.map(note => (
                <div
                  key={note.id}
                  className="p-3 bg-slate-50 dark:bg-slate-850 style-card border-l-4 rounded-r-lg"
                  style={{ borderLeftColor: note.borderColor || '#76777d' }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-sans text-xs font-bold text-slate-900 dark:text-slate-100">{note.author}</span>
                    <span className="font-sans text-[10px] text-slate-400">{note.time}</span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 dark:text-slate-350 italic">{note.content}</p>
                </div>
              ))}

              {(!caseItem.notes || caseItem.notes.length === 0) && (
                <div className="text-center py-20 text-slate-400 font-sans text-xs">
                  No internal notes posted on this case yet. Enter a comment below.
                </div>
              )}
            </div>

            {/* Input composer with enter actions */}
            <div className="relative mt-auto">
              <textarea
                value={newNote}
                onChange={e => setNewNote(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handlePostNote())}
                placeholder="Add internal comment..."
                className="w-full text-xs p-3 pr-10 border border-slate-200 dark:border-slate-850 bg-slate-50 dark:bg-slate-900 text-slate-850 dark:text-slate-100 rounded-lg focus:ring-1 focus:ring-slate-950/20 focus:border-slate-900 placeholder:text-slate-400 resize-none h-20"
              />
              <button
                onClick={handlePostNote}
                className="absolute bottom-2.5 right-2 bg-slate-900 dark:bg-amber-600 text-white p-1.5 rounded-lg active:scale-95 duration-100 transition-colors cursor-pointer"
                title="Send note comments"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Client Profile Card */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-widest leading-none">Client Profile</h3>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-800 font-sans font-bold text-sm flex items-center justify-center shadow-inner">
                {caseItem.initials}
              </div>
              <div>
                <p className="font-sans text-sm font-bold text-slate-900 dark:text-white leading-none">{caseItem.clientName}</p>
                <p className="font-sans text-[11px] text-slate-400 mt-1 leading-none">San Francisco, CA</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-500">
                <span>📧</span>
                <span className="truncate">{caseItem.email}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-500">
                <span>📞</span>
                <span>{caseItem.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold bg-emerald-50 dark:bg-emerald-950/20 px-2.5 py-1.5 rounded-lg w-fit">
                <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>KYC Verified</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
