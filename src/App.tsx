/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Scale, 
  User, 
  Briefcase, 
  FolderLock, 
  Settings, 
  Menu, 
  X, 
  Eye, 
  ShieldCheck, 
  Sun, 
  Moon, 
  LogOut, 
  ListOrdered, 
  HelpCircle, 
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Globe,
  Lock,
  MessageSquare,
  FileUp,
  Award,
  CheckCircle2
} from 'lucide-react';

import { CaseIntake, AttachedDocument } from './types';
import { INITIAL_INTAKES } from './data';

// Import Modular Components
import HomeView from './components/HomeView';
import ChatView from './components/ChatView';
import UploadView from './components/UploadView';
import ReviewView from './components/ReviewView';
import SuccessView from './components/SuccessView';

import DashboardView from './components/DashboardView';
import QueueView from './components/QueueView';
import StaffDetailView from './components/StaffDetailView';
import SettingsView from './components/SettingsView';

export default function App() {
  // Roles toggling
  const [perspective, setPerspective] = useState<'client' | 'staff'>('client');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [accentColor, setAccentColor] = useState<string>('#C8A96B'); // default brand gold

  // Client Navigation States
  const [clientStep, setClientStep] = useState<'home' | 'chat' | 'upload' | 'review' | 'success'>('home');
  const [selectedMatterInit, setSelectedMatterInit] = useState<string>('');
  const [clientUploadedDocs, setClientUploadedDocs] = useState<AttachedDocument[]>([]);
  const [clientSuccessRef, setClientSuccessRef] = useState<string>('BC-8829-X');

  // Staff Navigation States
  const [staffTab, setStaffTab] = useState<'overview' | 'queue' | 'detail' | 'settings'>('overview');
  const [caseIntakes, setCaseIntakes] = useState<CaseIntake[]>(INITIAL_INTAKES);
  const [selectedCaseId, setSelectedCaseId] = useState<string>('BC-2024-089');

  // Responsive UI drawer controls
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active view getter
  const selectedCase = caseIntakes.find(c => c.id === selectedCaseId) || caseIntakes[0];

  const handleUpdateCase = (updated: CaseIntake) => {
    setCaseIntakes(prev => prev.map(c => c.id === updated.id ? updated : c));
  };

  const handleCreateWalkInCase = () => {
    const freshId = `BC-2024-${Math.floor(100 + Math.random() * 900)}`;
    const newCase: CaseIntake = {
      id: freshId,
      clientName: 'Walk-in Client',
      initials: 'WC',
      email: 'walk-in@bcara-legal.com',
      phone: '+1 (555) 700-1100',
      matterType: 'General Consultation',
      submissionDate: new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'New',
      priority: 'Medium',
      complexity: 'Moderate',
      estimatedValue: '$30k',
      aiSummary: 'A walk-in client registered manually through the counselor desk seeking assistance reviewing standard real-estate guidelines or employment constraints.',
      timeline: [
        {
          id: 'wt-1',
          title: 'Manual Setup Registered',
          time: 'Just now',
          description: 'Intake file established by internal desk staff.',
          type: 'action'
        }
      ],
      documents: [],
      notes: []
    };
    setCaseIntakes(prev => [newCase, ...prev]);
    setSelectedCaseId(freshId);
    setStaffTab('detail');
    alert(`Fresh walk-in case folder established! Case ID: ${freshId}`);
  };

  return (
    <div 
      className={`${isDark ? 'dark bg-[#111827]' : 'bg-slate-50'} min-h-screen font-sans antialiased text-slate-800 dark:text-slate-150 transition-colors duration-300 block`}
      style={{ '--brand-accent': accentColor } as React.CSSProperties}
    >
      {/* Absolute Dynamic perspective toggle bar */}
      <div className="bg-[#111a2e] text-white py-2 px-4 flex justify-between items-center text-xs border-b border-white/10 relative z-50">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-mono text-[10px] sm:text-xs">SANDBOX SEAMLESS PERSPECTIVES SWITCHBOARD</span>
        </div>
        <div className="flex items-center gap-1.5 bg-white/10 rounded-lg p-0.5 border border-white/10 shadow-inner">
          <button
            onClick={() => {
              setPerspective('client');
              setClientStep('home');
            }}
            className={`px-3 py-1 rounded-md text-[11px] font-bold tracking-wide transition-all ${
              perspective === 'client' 
                ? 'bg-amber-600 text-white shadow-md' 
                : 'text-slate-350 hover:text-white'
            }`}
          >
            Client View
          </button>
          <button
            onClick={() => {
              setPerspective('staff');
              setStaffTab('overview');
            }}
            className={`px-3 py-1 rounded-md text-[11px] font-bold tracking-wide transition-all ${
              perspective === 'staff' 
                ? 'bg-amber-600 text-white shadow-md' 
                : 'text-slate-350 hover:text-white'
            }`}
          >
            Staff Portal
          </button>
        </div>
      </div>

      {/* Main Container Wrapper */}
      <div className="flex flex-col min-h-[calc(100vh-36px)]">
        
        {/* Custom Header */}
        <header className="bg-white dark:bg-[#111827] border-b border-slate-200 dark:border-slate-800/80 sticky top-0 z-40 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0F172A] dark:bg-amber-600 flex items-center justify-center font-serif text-white font-bold text-lg shadow-sm">
                ⚖️
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-tight text-slate-900 dark:text-white leading-none">Bcara</span>
                <span className="block font-sans text-[9px] tracking-widest text-[#C8A96B] dark:text-amber-500 uppercase font-semibold mt-0.5 leading-none">Legal Systems</span>
              </div>
            </div>

            {/* Navigation options for Client */}
            {perspective === 'client' && (
              <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-450">
                <button 
                  onClick={() => setClientStep('home')} 
                  className={`hover:text-slate-900 dark:hover:text-white cursor-pointer ${clientStep === 'home' ? 'text-amber-600 font-bold' : ''}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => { setClientStep('chat'); setSelectedMatterInit(''); }} 
                  className={`hover:text-slate-900 dark:hover:text-white cursor-pointer ${clientStep === 'chat' ? 'text-amber-600 font-bold' : ''}`}
                >
                  Intake Chat
                </button>
                <button 
                  onClick={() => setClientStep('upload')} 
                  className={`hover:text-slate-900 dark:hover:text-white cursor-pointer ${clientStep === 'upload' ? 'text-amber-600 font-bold' : ''}`}
                >
                  Files Vault
                </button>
                <button 
                  onClick={() => setClientStep('review')} 
                  className={`hover:text-slate-900 dark:hover:text-white cursor-pointer ${clientStep === 'review' ? 'text-amber-600 font-bold' : ''}`}
                >
                  Confirm List
                </button>
              </nav>
            )}

            {/* Navigation option stats for staff */}
            {perspective === 'staff' && (
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2 border border-slate-150 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/65 px-4.5 py-1.5 rounded-xl text-xs font-mono">
                  <span className="font-sans text-slate-400">Firm Profile:</span>
                  <span className="font-bold text-[#0F172A] dark:text-amber-500">Alexander Sterling</span>
                </div>
              </div>
            )}

            {/* Responsive Hamburger for Mobile screens */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900 hover:brightness-95"
                title="Mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Collapsible Mobile Menu panel */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4 space-y-3.5 absolute w-full shadow-lg left-0 animate-in slide-in-from-top-4 duration-200">
              {perspective === 'client' ? (
                <>
                  <button 
                    onClick={() => { setClientStep('home'); setIsMobileMenuOpen(false); }}
                    className="block w-full text-left font-sans text-sm font-semibold text-slate-800 hover:text-amber-500"
                  >
                    Home Landing
                  </button>
                  <button 
                    onClick={() => { setClientStep('chat'); setIsMobileMenuOpen(false); }}
                    className="block w-full text-left font-sans text-sm font-semibold text-slate-800 hover:text-amber-500"
                  >
                    AI Chat Assistant
                  </button>
                  <button 
                    onClick={() => { setClientStep('upload'); setIsMobileMenuOpen(false); }}
                    className="block w-full text-left font-sans text-sm font-semibold text-slate-800 hover:text-amber-500"
                  >
                    Upload Files Vault
                  </button>
                  <button 
                    onClick={() => { setClientStep('review'); setIsMobileMenuOpen(false); }}
                    className="block w-full text-left font-sans text-sm font-semibold text-slate-800 hover:text-amber-500"
                  >
                    Review Final Submission
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => { setStaffTab('overview'); setIsMobileMenuOpen(false); }}
                    className="block w-full text-left font-sans text-sm font-semibold text-slate-800 hover:text-amber-500"
                  >
                    Dashboard Overview
                  </button>
                  <button 
                    onClick={() => { setStaffTab('queue'); setIsMobileMenuOpen(false); }}
                    className="block w-full text-left font-sans text-sm font-semibold text-slate-800 hover:text-amber-500"
                  >
                    Active Intakes Grid
                  </button>
                  <button 
                    onClick={() => { setStaffTab('settings'); setIsMobileMenuOpen(false); }}
                    className="block w-full text-left font-sans text-sm font-semibold text-slate-800 hover:text-amber-500"
                  >
                    Firm Settings Options
                  </button>
                </>
              )}
            </div>
          )}
        </header>

        {/* Dynamic Inner Layout Body */}
        <div className="flex-grow flex">
          {/* Left Navigation Rails Sidebar for STAFF PERSPECTIVE */}
          {perspective === 'staff' && (
            <aside className="hidden md:block w-64 bg-white dark:bg-[#111827] border-r border-slate-200 dark:border-slate-800/80 p-6 flex-shrink-0 space-y-6">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block pl-3 mb-2">Legal Counselor Queue</span>
                
                <button
                  onClick={() => setStaffTab('overview')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer font-sans text-xs font-semibold ${
                    staffTab === 'overview'
                      ? 'bg-slate-900 dark:bg-amber-600 text-white shadow-md'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-950'
                  }`}
                >
                  <span>📊</span>
                  <span>Dashboard Overview</span>
                </button>

                <button
                  onClick={() => setStaffTab('queue')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer font-sans text-xs font-semibold ${
                    staffTab === 'queue'
                      ? 'bg-slate-900 dark:bg-amber-600 text-white shadow-md'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-950'
                  }`}
                >
                  <span>🗄️</span>
                  <span>Active Intakes Grid</span>
                </button>

                <button
                  onClick={() => setStaffTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer font-sans text-xs font-semibold ${
                    staffTab === 'settings'
                      ? 'bg-slate-900 dark:bg-amber-600 text-white shadow-md'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-950'
                  }`}
                >
                  <span>⚙️</span>
                  <span>Firm Settings</span>
                </button>
              </div>

              {/* Mini sidebar details stats card */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800/60 space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-250/20 text-center">
                  <p className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-wider">Review Rate</p>
                  <p className="font-display text-2xl font-black text-slate-900 dark:text-white mt-1">94.8%</p>
                  <p className="font-sans text-[9px] text-emerald-600 font-semibold mt-1">High Accuracy Approved</p>
                </div>
              </div>
            </aside>
          )}

          {/* Main workspace scrolling panel content body */}
          <main className="flex-grow p-6 md:p-10 max-w-7xl mx-auto w-full">
            {perspective === 'client' ? (
              /* Client Flow router switch */
              <>
                {clientStep === 'home' && (
                  <HomeView 
                    onStartIntake={() => setClientStep('chat')} 
                    onNavigateToSection={(sec) => {
                      const el = document.getElementById(sec);
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  />
                )}
                {clientStep === 'chat' && (
                  <ChatView 
                    initialMessage={selectedMatterInit}
                    onNextStep={(textSummary) => {
                      setSelectedMatterInit(textSummary);
                      setClientStep('upload');
                    }}
                  />
                )}
                {clientStep === 'upload' && (
                  <UploadView 
                    onBack={() => setClientStep('chat')}
                    onProceed={(docs) => {
                      setClientUploadedDocs(docs);
                      setClientStep('review');
                    }}
                  />
                )}
                {clientStep === 'review' && (
                  <ReviewView 
                    onBack={() => setClientStep('upload')}
                    onSubmitSuccess={(refNum) => {
                      setClientSuccessRef(refNum);
                      setClientStep('success');
                    }}
                    matterSummaryText={selectedMatterInit}
                    uploadedDocuments={clientUploadedDocs}
                  />
                )}
                {clientStep === 'success' && (
                  <SuccessView 
                    referenceNumber={clientSuccessRef}
                    onGoHome={() => setClientStep('home')}
                  />
                )}
              </>
            ) : (
              /* Staff Flow router switch */
              <>
                {staffTab === 'overview' && (
                  <DashboardView 
                    intakes={caseIntakes}
                    onSelectCase={(caseId) => {
                      setSelectedCaseId(caseId);
                      setStaffTab('detail');
                    }}
                    onAddNewCase={handleCreateWalkInCase}
                  />
                )}
                {staffTab === 'queue' && (
                  <QueueView 
                    intakes={caseIntakes}
                    onSelectCase={(caseId) => {
                      setSelectedCaseId(caseId);
                      setStaffTab('detail');
                    }}
                    onAddNewCase={handleCreateWalkInCase}
                  />
                )}
                {staffTab === 'detail' && (
                  <StaffDetailView 
                    caseItem={selectedCase}
                    onBack={() => setStaffTab('queue')}
                    onUpdateCase={handleUpdateCase}
                  />
                )}
                {staffTab === 'settings' && (
                  <SettingsView 
                    onToggleDarkMode={() => setIsDark(!isDark)}
                    isDarkMode={isDark}
                    accentColor={accentColor}
                    onChangeAccentColor={(col) => setAccentColor(col)}
                  />
                )}
              </>
            )}
          </main>
        </div>

        {/* Footer info bars */}
        <footer className="bg-white dark:bg-[#111827] border-t border-slate-200 dark:border-slate-800 text-center py-6 text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} Bcara Systems. All Rights Reserved. SOC2 Secure legal custody.</p>
        </footer>
      </div>
    </div>
  );
}
