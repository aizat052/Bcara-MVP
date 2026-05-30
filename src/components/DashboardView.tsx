/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PlusCircle, Search, FileDown, Edit, ArrowUpRight, FolderOpen, AlertCircle, FileText, ChevronRight } from 'lucide-react';
import { CaseIntake } from '../types';

interface DashboardViewProps {
  intakes: CaseIntake[];
  onSelectCase: (caseId: string) => void;
  onAddNewCase: () => void;
}

export default function DashboardView({ intakes, onSelectCase, onAddNewCase }: DashboardViewProps) {
  const [filterQuery, setFilterQuery] = useState('');

  // Filter local rows for the recent log
  const recentTableRows = [
    {
      id: 'BC-2024-089',
      name: 'Jonathan Doe',
      initials: 'JD',
      category: 'Corporate Litigation',
      time: '2 mins ago',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
    },
    {
      id: 'BC-2024-125',
      name: 'Alice Sterling',
      initials: 'AS',
      category: 'Intellectual Property',
      time: '1 hour ago',
      color: 'bg-yellow-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 font-bold'
    },
    {
      id: 'BC-2024-112',
      name: 'Brian Miller',
      initials: 'BM',
      category: 'Employment Law',
      time: '4 hours ago',
      color: 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-350'
    }
  ];

  const handleRowClick = (caseId: string) => {
    // Attempt to map row to real state
    const targetCaseId = caseId === 'BC-2024-089' ? 'BC-2024-089' : 'BC-2024-125';
    onSelectCase(targetCaseId);
  };

  return (
    <div id="dashboard-view" className="animate-in fade-in duration-500 space-y-8 pb-12">
      {/* Overview Headings */}
      <div>
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-150 leading-tight">Overview</h2>
        <p className="font-sans text-sm text-slate-500 dark:text-slate-400">Welcome back, Counselor. Here is your current legal intake queue.</p>
      </div>

      {/* Bento Statistics Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Intakes */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-lg">
              <FolderOpen className="w-5 h-5 text-slate-900 dark:text-slate-300" />
            </div>
            <span className="font-sans text-[10px] font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 rounded-full">+12% this week</span>
          </div>
          <div>
            <p className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Total Intakes</p>
            <h3 className="font-display text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-1 leading-none">128</h3>
          </div>
        </div>

        {/* Pending Review */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-lg">
              <FileText className="w-5 h-5 text-slate-900 dark:text-slate-300" />
            </div>
            <span className="font-sans text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">Action required</span>
          </div>
          <div>
            <p className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Pending Review</p>
            <h3 className="font-display text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-1 leading-none">24</h3>
          </div>
        </div>

        {/* High Priority */}
        <div className="bg-[#0F172A] dark:bg-[#1E293B] text-white p-6 rounded-xl shadow-md hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10 flex justify-between items-start mb-4">
            <div className="p-3 bg-white/10 rounded-lg">
              <AlertCircle className="w-5 h-5 text-amber-500 fill-amber-500/15" />
            </div>
            <span className="font-sans text-[10px] font-bold text-amber-300 bg-white/10 px-2 py-0.5 rounded-full uppercase tracking-wider">Urgent</span>
          </div>
          <div className="relative z-10">
            <p className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">High Priority</p>
            <h3 className="font-display text-5xl font-bold text-white mt-2 mb-1 leading-none">07</h3>
          </div>
          {/* Subtle logo vector watermarked inside */}
          <div className="absolute -right-6 -bottom-6 text-white/5 pointer-events-none">
            <span className="text-8xl select-none font-display">⚖️</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <section className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Filter by client name, ID, or case type..."
            value={filterQuery}
            onChange={e => setFilterQuery(e.target.value)}
            className="w-full text-sm pl-11 pr-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
          />
        </div>
        <button
          onClick={onAddNewCase}
          className="bg-slate-900 hover:bg-[#0f172a] text-white font-sans text-xs font-semibold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          New Intake
        </button>
      </section>

      {/* Recent Request Listings Table */}
      <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="px-6 py-4.5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900">
          <h3 className="font-display text-base font-bold text-slate-900 dark:text-slate-100">Recent Intake Requests</h3>
          <span className="font-sans text-[11px] text-slate-400 font-medium">3 requests listed</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <th className="px-6 py-4 font-sans text-[11px] font-bold text-slate-400 uppercase tracking-wider">Client Name</th>
                <th className="px-6 py-4 font-sans text-[11px] font-bold text-slate-400 uppercase tracking-wider">Issue Type</th>
                <th className="px-6 py-4 font-sans text-[11px] font-bold text-slate-400 uppercase tracking-wider">Time Received</th>
                <th className="px-6 py-4 font-sans text-[11px] font-bold text-slate-400 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {recentTableRows
                .filter(r => r.name.toLowerCase().includes(filterQuery.toLowerCase()) || r.category.toLowerCase().includes(filterQuery.toLowerCase()))
                .map(row => (
                  <tr
                    key={row.id}
                    onClick={() => handleRowClick(row.id)}
                    className="hover:bg-slate-50/30 dark:hover:bg-slate-800/25 transition-colors cursor-pointer group"
                  >
                    <td className="px-6 py-4.5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-sans text-xs font-bold flex items-center justify-center">
                          {row.initials}
                        </div>
                        <div>
                          <p className="font-sans text-sm font-semibold text-slate-900 dark:text-white">{row.name}</p>
                          <p className="font-mono text-[10px] text-slate-400 tracking-wider">ID: {row.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4.5">
                      <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full ${row.color}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-85"></span>
                        {row.category}
                      </span>
                    </td>
                    <td className="px-6 py-4.5">
                      <span className="font-sans text-xs text-slate-400 dark:text-slate-500">{row.time}</span>
                    </td>
                    <td className="px-6 py-4.5 text-right">
                      <button className="text-slate-400 group-hover:text-slate-900 dark:group-hover:text-amber-500 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Visual Analytics / Submission charts Row */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trend chart */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <h3 className="font-display text-base font-bold text-slate-900 dark:text-slate-100 mb-6">Submission Trends</h3>
          <div className="h-44 w-full flex items-end gap-3.5 px-2">
            <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t-lg h-[40%] transition-all hover:bg-emerald-600 cursor-pointer"></div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t-lg h-[60%] transition-all hover:bg-emerald-600 cursor-pointer"></div>
            <div className="flex-1 bg-slate-900 dark:bg-amber-600 rounded-t-lg h-[85%] transition-all relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-slate-700 dark:text-slate-350">Wed (Max)</span>
            </div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t-lg h-[50%] transition-all hover:bg-emerald-600 cursor-pointer"></div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t-lg h-[70%] transition-all hover:bg-emerald-600 cursor-pointer"></div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t-lg h-[45%] transition-all hover:bg-emerald-600 cursor-pointer"></div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t-lg h-[90%] transition-all hover:bg-emerald-600 cursor-pointer"></div>
          </div>
          <div className="flex justify-between mt-4 px-2 font-sans text-[11px] text-slate-400">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        {/* Documents vault list */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="font-display text-base font-bold text-slate-900 dark:text-slate-100 mb-4">Intake Document Center</h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg border border-transparent hover:border-slate-200/50 dark:hover:border-slate-700/50 transition-all cursor-pointer">
              <span className="text-2xl">📄</span>
              <div className="flex-1 pb-1">
                <p className="font-sans text-xs font-semibold text-slate-800 dark:text-slate-200">Client_Agreement_v2.pdf</p>
                <p className="font-sans text-[10px] text-slate-400">Shared by Jonathan Doe • agreements</p>
              </div>
              <button className="text-slate-400 hover:text-slate-800 font-sans text-xs p-1.5"><FileDown className="w-4 h-4" /></button>
            </div>

            <div className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg border border-transparent hover:border-slate-200/50 dark:hover:border-slate-700/50 transition-all cursor-pointer">
              <span className="text-2xl">📝</span>
              <div className="flex-1 pb-1">
                <p className="font-sans text-xs font-semibold text-slate-800 dark:text-slate-200">Evidence_Manifest.docx</p>
                <p className="font-sans text-[10px] text-slate-400">Awaiting lawyer signature • checklist</p>
              </div>
              <button className="text-slate-400 hover:text-slate-800 font-sans text-xs p-1.5"><Edit className="w-4 h-4" /></button>
            </div>
          </div>

          <button
            onClick={() => alert("Loading full documents repository...")}
            className="w-full mt-6 py-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-850 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 font-sans text-xs font-semibold rounded-lg text-slate-750 dark:text-slate-200 transition-colors cursor-pointer"
          >
            Go to Documents
          </button>
        </div>
      </section>
    </div>
  );
}
