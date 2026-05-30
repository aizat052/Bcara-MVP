/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, ChevronRight, FileDown, Home, Lock } from 'lucide-react';

interface SuccessViewProps {
  referenceNumber: string;
  onGoHome: () => void;
}

export default function SuccessView({ referenceNumber, onGoHome }: SuccessViewProps) {
  return (
    <div id="success-view" className="max-w-2xl mx-auto text-center py-12 px-6 animate-in fade-in duration-500">
      
      {/* Visual Badge Illustration */}
      <div className="flex justify-center mb-8">
        <div className="relative w-28 h-28 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm animate-bounce-slow">
          <span className="text-5xl">📋</span>
          <div className="absolute -bottom-2 -right-2 bg-[#0F172A] dark:bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-950 shadow-md text-sm">
            🛡️
          </div>
        </div>
      </div>

      {/* Main headings */}
      <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">Intake Submitted Successfully</h1>
      <p className="font-sans text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
        Your legal intake documentation has been securely transmitted to our review committee.
      </p>

      {/* Reference ID Component */}
      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 inline-flex flex-col items-center gap-1.5 mb-8">
        <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Reference Number</span>
        <span className="font-display text-xl font-bold text-slate-900 dark:text-white leading-none tracking-tight">{referenceNumber}</span>
      </div>

      {/* Divider */}
      <div className="h-px bg-slate-200 dark:bg-slate-800 w-full max-w-lg mx-auto mb-8"></div>

      {/* Timeline Steps Info */}
      <div className="text-left max-w-lg mx-auto mb-10 space-y-6">
        <h3 className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-wider">What Happens Next?</h3>
        
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 dark:bg-amber-600/30 text-white dark:text-amber-300 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-slate-900 dark:text-slate-100">Initial Verification</p>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Our systems are currently verifying the uploaded attachments for clarity and completeness.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 dark:bg-amber-600/30 text-white dark:text-amber-300 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-slate-900 dark:text-slate-100">Attorney Review</p>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                A lawyer from our team will contact you within <span className="font-bold text-slate-900 dark:text-white">24 hours</span> to discuss your case strategy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Action Row */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
        <button
          onClick={onGoHome}
          className="w-full bg-slate-900 hover:bg-[#0f172a] text-white px-6 py-3.5 rounded-lg text-xs font-semibold shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </button>
        <button
          onClick={() => alert("Downloading PDF Copy of your legal receipt...")}
          className="w-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 px-6 py-3.5 rounded-lg text-xs font-semibold active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <FileDown className="w-4 h-4" />
          Save Copy as PDF
        </button>
      </div>

      {/* Trust encryption label */}
      <div className="mt-12 flex items-center justify-center gap-2 text-slate-400">
        <Lock className="w-3.5 h-3.5" />
        <span className="font-sans text-[11px] font-medium leading-none">Secured by Bcara Encrypted Legal Cloud</span>
      </div>
    </div>
  );
}
