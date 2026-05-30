/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldAlert, ArrowRight, CheckCircle2, ShieldCheck, PlayCheck, Lock, Milestone } from 'lucide-react';

interface HomeViewProps {
  onStartIntake: () => void;
  onNavigateToSection: (section: string) => void;
}

export default function HomeView({ onStartIntake, onNavigateToSection }: HomeViewProps) {
  return (
    <div id="home-view" className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 px-6 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 px-4 md:px-10">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-[#131b2e] dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/40">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span className="font-sans text-xs font-semibold tracking-wider uppercase">Confidential &amp; Secure AI Technology</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.08] tracking-tight">
              Smart Legal Intake Simplified
            </h1>
            <p className="font-sans text-base md:text-lg text-slate-600 leading-relaxed max-w-lg">
              Bcara transforms complex legal procedures into a seamless conversation. Securely provide information, upload documents, and get started with your case in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                id="btn-start-intake-hero"
                onClick={onStartIntake}
                className="bg-[#C8A96B] hover:bg-[#B6985A] text-[#0F172A] px-8 py-4 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
              >
                Start Legal Intake
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="btn-learn-more"
                onClick={() => onNavigateToSection('how-it-works')}
                className="border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden aspect-[4/3] relative border border-slate-200/80 dark:border-slate-800 shadow-xl group">
              <img
                alt="Bcara Courthouse Office"
                className="w-full h-full object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVfWGpHSxLb5ZpO5pauGXA-HuZzdR22Jwvi6nDxRKK11k_PCo5GMcZFT3Mg_yXWZv4HTuVipqdgkUa3sZe2BS84clzp6c8wPDQAUyogQfbJc6_FquSY_ETlOHIM_tGIn1rQBShhhP-ojjJ5MN9QC0I9GHRJbH71F_lumQC9vHz2iII7CdoyQnM4W_DSe8AlKZYe5t92kPfdOXeDHcc-xhKmqMQxOJkGSq7lZkL6XMRkXMnFdTkk3dNFV_8DO5OeBO2UA1jhqwRpGoP"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              {/* Floating micro key badge */}
              <div className="absolute top-6 left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-lg shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-600 fill-amber-600/10" />
                <span className="font-sans text-xs font-semibold text-slate-950 dark:text-slate-100">AES-256 Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Law Firms Bar */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-12 border-y border-slate-100 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-sans text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Trusted by Leading Law Firms</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale hover:opacity-90 hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2">
              <span className="font-display text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">LEX</span>
              <span className="font-sans text-[10px] tracking-wider text-slate-500">PARTNERS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">VERITAS</span>
              <span className="font-sans text-[10px] tracking-wider text-slate-500">LEGAL</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">JUSTICIA</span>
              <span className="font-sans text-[10px] tracking-wider text-slate-500">ASSOCIATES</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">NEXUS</span>
              <span className="font-sans text-[10px] tracking-wider text-slate-500">LAW</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three Simple Steps */}
      <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-100">Three Simple Steps</h2>
            <p className="font-sans text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Our AI-driven process is designed to be thorough yet incredibly simple for clients to navigate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-slate-50/50 dark:bg-slate-900/40 p-8 rounded-xl border border-slate-100 dark:border-slate-800/80 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-slate-900 dark:bg-slate-800 flex items-center justify-center text-white">
                  <span className="font-sans font-bold text-lg">01</span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100">1. Chat</h3>
                <p className="font-sans text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  A guided conversation through our AI interface to understand your legal needs and gather necessary context.
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 space-y-3">
                <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-blue-600">AI</div>
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg rounded-tl-none text-[11px] text-slate-600 dark:text-slate-300">
                    Hello, I'm the Bcara representative. What legal matter brings you...
                  </div>
                </div>
                <div className="flex gap-2.5 items-start justify-end">
                  <div className="bg-slate-900 dark:bg-amber-600/20 text-white dark:text-amber-300 p-2.5 rounded-lg rounded-tr-none text-[11px]">
                    Hello, I have an issue with an employment contract clause...
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50/50 dark:bg-slate-900/40 p-8 rounded-xl border border-slate-100 dark:border-slate-800/80 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-slate-900 dark:bg-slate-800 flex items-center justify-center text-white">
                  <span className="font-sans font-bold text-lg">02</span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100">2. Upload</h3>
                <p className="font-sans text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  Securely drop in your documents, photos, or evidence. Our system automatically categorizes and summarizes them for your lawyer.
                </p>
              </div>
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg p-6 bg-white dark:bg-slate-900 flex flex-col items-center justify-center text-center">
                <ShieldAlert className="w-8 h-8 text-[#C8A96B] mb-2" />
                <span className="font-sans text-xs font-semibold text-slate-700 dark:text-slate-350">Secure File Vault</span>
                <span className="font-sans text-[10px] text-slate-400 mt-1 uppercase tracking-wider">PDF, JPEG, PNG</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50/50 dark:bg-slate-900/40 p-8 rounded-xl border border-slate-100 dark:border-slate-800/80 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-slate-900 dark:bg-slate-800 flex items-center justify-center text-white">
                  <span className="font-sans font-bold text-lg">03</span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100">3. Review</h3>
                <p className="font-sans text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  Review your compiled intake report. Once satisfied, it's instantly transmitted to your legal team for immediate action.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800 space-y-2">
                <div className="h-2 w-3/4 bg-slate-100 dark:bg-slate-800 rounded"></div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-sans text-[11px] font-semibold text-emerald-600">Status: Complete</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-600/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Foundation Block */}
      <section className="bg-[#0F172A] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:px-10">
          <div className="flex-1 space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Confidentiality is our foundation</h2>
            <p className="font-sans text-slate-350 text-base md:text-lg leading-relaxed">
              Legal intake involves sensitive information. We've built Bcara with bank-grade security protocols to ensure your data remains private and protected at every stage.
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span className="font-sans text-sm font-medium">SOC2 Type II Compliant</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span className="font-sans text-sm font-medium">End-to-End Encryption</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span className="font-sans text-sm font-medium">ABA Compliance Ready</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
              <p className="font-display text-4xl font-bold text-amber-500 mb-1">99.9%</p>
              <p className="font-sans text-xs text-slate-400">Uptime Reliability</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
              <p className="font-display text-4xl font-bold text-amber-500 mb-1">256-bit</p>
              <p className="font-sans text-xs text-slate-400">Data Encryption</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center col-span-2">
              <p className="font-display text-xl font-bold text-amber-500 mb-1">Global Standard</p>
              <p className="font-sans text-xs text-slate-400">Meeting international data privacy laws</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Area */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-slate-100">Ready to get started?</h2>
          <p className="font-sans text-slate-500 dark:text-slate-400 text-base md:text-lg">
            The first step to resolving your legal matter starts here. Click below to begin your secure intake process.
          </p>
          <div className="pt-6">
            <button
              id="btn-start-intake-cta"
              onClick={onStartIntake}
              className="bg-[#C8A96B] hover:bg-[#B6985A] text-[#0F172A] px-10 py-5 rounded-lg text-base font-bold shadow-xl hover:translate-y-[-2px] transition-all cursor-pointer"
            >
              Start Legal Intake
            </button>
            <p className="font-sans text-xs text-slate-400 mt-4">Takes approximately 5-10 minutes to complete.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
