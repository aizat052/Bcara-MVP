/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, ChevronRight, UserPlus, Heart, Home, AlertCircle, CheckCircle2, Star, CheckSquare } from 'lucide-react';
import { CaseIntake } from '../types';

interface QueueViewProps {
  intakes: CaseIntake[];
  onSelectCase: (caseId: string) => void;
  onAddNewCase: () => void;
}

export default function QueueView({ intakes, onSelectCase, onAddNewCase }: QueueViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatusTab, setSelectedStatusTab] = useState<'All' | 'New' | 'In Review' | 'Completed'>('All');

  const filteredIntakes = intakes.filter(item => {
    // Statustab match
    const statusMatch = selectedStatusTab === 'All' || item.status === selectedStatusTab;
    
    // Search match
    const query = searchQuery.toLowerCase();
    const searchMatch =
      item.clientName.toLowerCase().includes(query) ||
      item.id.toLowerCase().includes(query) ||
      item.matterType.toLowerCase().includes(query);

    return statusMatch && searchMatch;
  });

  return (
    <div id="queue-view" className="animate-in fade-in duration-500 space-y-6 pb-16">
      
      {/* Title */}
      <header className="hidden md:block">
        <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-wrap">Active Intakes</h2>
      </header>

      {/* Search and Filters Strip */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search box */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Find clients by name or case ID..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-[#0F172A] focus:border-slate-900 font-sans text-sm"
            />
          </div>

          {/* Tab Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full no-scrollbar">
            {(['All', 'New', 'In Review', 'Completed'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setSelectedStatusTab(tab)}
                className={`px-5 py-2 font-sans text-xs font-semibold rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  selectedStatusTab === tab
                    ? 'bg-slate-900 dark:bg-amber-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-450 hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntakes.map(item => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl hover:shadow-md transition-all group border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
          >
            <div>
              {/* Header card state */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-wider">CASE #{item.id}</p>
                  <h3
                    onClick={() => onSelectCase(item.id)}
                    className="font-display text-base font-bold text-[#0F172A] dark:text-white group-hover:text-amber-600 cursor-pointer mt-0.5"
                  >
                    {item.clientName}
                  </h3>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full font-sans text-[10px] font-bold ${
                    item.status === 'New'
                      ? 'bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
                      : item.status === 'In Review'
                      ? 'bg-amber-50 text-amber-800 dark:bg-amber-950/20 dark:text-amber-400'
                      : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-350'
                  }`}
                >
                  {item.status}
                </span>
              </div>

              {/* Rows descriptive info */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400">
                  <span className="text-sm">⚖️</span>
                  <span className="font-sans text-xs leading-none">{item.matterType}</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400">
                  <span className="text-sm">📅</span>
                  <span className="font-sans text-xs leading-none">Submitted: {item.submissionDate}</span>
                </div>
              </div>
            </div>

            {/* Bottom meta row */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
              {item.status === 'In Review' ? (
                <div className="flex items-center">
                  <div className="-space-x-1.5 flex items-center">
                    <div className="w-7 h-7 rounded-full border border-white bg-slate-200 overflow-hidden flex items-center justify-center font-sans text-[10px]" />
                    <div className="w-7 h-7 rounded-full border border-white bg-slate-900 ring-2 ring-white text-white font-sans text-[9px] font-bold flex items-center justify-center">
                      +2
                    </div>
                  </div>
                </div>
              ) : item.status === 'Completed' ? (
                <div className="flex items-center gap-1 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/10" />
                  <span className="font-sans text-[11px]">Archived</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-red-500">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="font-sans text-[11px] font-semibold">Requires Action</span>
                </div>
              )}

              <button
                onClick={() => onSelectCase(item.id)}
                className="text-slate-900 dark:text-amber-500 font-sans text-xs font-semibold hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                {item.status === 'New' ? 'Begin Review' : item.status === 'In Review' ? 'View Case' : 'History'}
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}

        {/* Empty State Card */}
        <div
          onClick={onAddNewCase}
          className="border-2 border-dashed border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 hover:border-amber-500 transition-colors group cursor-pointer bg-slate-50/50 dark:bg-slate-900/50"
        >
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-amber-100 dark:group-hover:bg-amber-950/40 transition-colors">
            <UserPlus className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-amber-600 transition-colors" />
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-slate-800 dark:text-slate-200">New Client Intake</h4>
            <p className="font-sans text-xs text-slate-400 max-w-[180px] mx-auto mt-1 leading-normal">
              Start a new legal session manually for a walk-in client.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
