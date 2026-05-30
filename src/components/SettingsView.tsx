/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { User, Bell, Shield, Palette, HelpCircle, Key, Laptop, Lock, ExternalLink, Moon, Sun, CheckCircle2 } from 'lucide-react';

interface SettingsViewProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
  accentColor: string;
  onChangeAccentColor: (color: string) => void;
}

export default function SettingsView({ onToggleDarkMode, isDarkMode, accentColor, onChangeAccentColor }: SettingsViewProps) {
  const [profile, setProfile] = useState({
    name: 'Alexander Sterling',
    role: 'Senior Partner, Litigation & IP',
    memberSince: '2021',
    email: 'a.sterling@bcara-law.com',
    phone: '+1 (555) 902-1244'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    newIntake: true,
    docProcessed: true,
    partnerNote: false,
    systemUpdate: true
  });

  const [security2fa, setSecurity2fa] = useState(true);

  // Custom colors list
  const colorPalettes = [
    { name: 'Amber Gold', hex: '#C8A96B', colorClass: 'bg-[#C8A96B]' },
    { name: 'Slate Blue', hex: '#3B82F6', colorClass: 'bg-blue-600' },
    { name: 'Teal Pine', hex: '#0D9488', colorClass: 'bg-teal-600' },
    { name: 'Emerald Mint', hex: '#10B981', colorClass: 'bg-emerald-500' }
  ];

  return (
    <div id="settings-view" className="animate-in fade-in duration-350 max-w-5xl mx-auto space-y-8 pb-16">
      
      {/* View Header */}
      <div>
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-100">Account &amp; Organization Settings</h2>
        <p className="font-sans text-sm text-slate-500 dark:text-slate-450">Customize your Bcara legal account and firm brand appearance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left column: Quick Profile Display & Custom Palette */}
        <div className="md:col-span-1 space-y-6">
          
          {/* Quick Profile display card */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm text-center">
            <div className="relative w-20 h-20 mx-auto mb-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center font-sans font-bold text-[#0F172A] text-lg shadow-inner">
              AS
            </div>
            <h3 className="font-display text-base font-bold text-slate-900 dark:text-white leading-tight">{profile.name}</h3>
            <p className="font-sans text-xs text-slate-500 dark:text-slate-450 mt-1">{profile.role}</p>
            <p className="font-sans text-[10px] text-slate-400 mt-2 uppercase tracking-widest">Member since {profile.memberSince}</p>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-left">
              <div className="text-[11px] text-slate-400 font-sans">
                <span className="font-semibold block">Email:</span>
                <span className="text-slate-700 dark:text-slate-350 font-mono text-[10px] sm:text-xs truncate block">{profile.email}</span>
              </div>
              <div className="text-[11px] text-slate-400 font-sans">
                <span className="font-semibold block">Phone:</span>
                <span className="text-slate-700 dark:text-slate-350">{profile.phone}</span>
              </div>
            </div>
          </section>

          {/* Real-time Accent Palette Picker */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-450 mb-3 flex items-center gap-2">
              <Palette className="w-3.5 h-3.5" />
              Brand Theme
            </h3>
            <p className="font-sans text-xs text-slate-500 mb-4">Choose your firm primary accent shade:</p>
            
            <div className="grid grid-cols-2 gap-2.5">
              {colorPalettes.map(palette => (
                <button
                  key={palette.name}
                  onClick={() => onChangeAccentColor(palette.hex)}
                  className={`flex items-center gap-2 p-2 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors ${
                    accentColor === palette.hex
                      ? 'border-slate-900 dark:border-amber-500 bg-slate-50/50 dark:bg-slate-800 font-bold'
                      : 'border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-450'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full ${palette.colorClass} flex-shrink-0`} />
                  <span className="font-sans text-[11px] truncate">{palette.name}</span>
                </button>
              ))}
            </div>

            {/* Dark Mode toggle button row */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs">
              <span className="font-sans font-semibold text-slate-700 dark:text-slate-300">Dark Mode Preference</span>
              <button
                onClick={onToggleDarkMode}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-850 cursor-pointer"
                title="Toggle visual style"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-slate-800" />}
              </button>
            </div>
          </section>
        </div>

        {/* Right columns: detailed notifications, security lists */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Detailed notification options form checkbox list */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm space-y-4">
            <h3 className="font-display text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </h3>
            <p className="font-sans text-xs text-slate-500 mb-6">Receive alerts for important developments regarding client intakes:</p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="notif-new-intake"
                  className="mt-1 rounded cursor-pointer border-slate-300 dark:border-slate-700 focus:ring-amber-500"
                  checked={notificationSettings.newIntake}
                  onChange={e => setNotificationSettings({ ...notificationSettings, newIntake: e.target.checked })}
                />
                <div>
                  <label className="font-sans text-xs font-semibold text-slate-800 dark:text-slate-250 cursor-pointer" htmlFor="notif-new-intake">
                    New Intake Created
                  </label>
                  <p className="font-sans text-[11px] text-slate-450">Instantly receive desktop and email logs when self-service clients finalize submissions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="notif-doc-proc"
                  className="mt-1 rounded cursor-pointer border-slate-300 dark:border-slate-700 focus:ring-amber-500"
                  checked={notificationSettings.docProcessed}
                  onChange={e => setNotificationSettings({ ...notificationSettings, docProcessed: e.target.checked })}
                />
                <div>
                  <label className="font-sans text-xs font-semibold text-slate-800 dark:text-slate-250 cursor-pointer" htmlFor="notif-doc-proc">
                    Document OCR Complete
                  </label>
                  <p className="font-sans text-[11px] text-slate-450">Notify when legal attachments undergo deep OCR and verification scans.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="notif-partner-note"
                  className="mt-1 rounded cursor-pointer border-slate-300 dark:border-slate-700 focus:ring-amber-500"
                  checked={notificationSettings.partnerNote}
                  onChange={e => setNotificationSettings({ ...notificationSettings, partnerNote: e.target.checked })}
                />
                <div>
                  <label className="font-sans text-xs font-semibold text-slate-800 dark:text-slate-250 cursor-pointer" htmlFor="notif-partner-note">
                    Partner Note Tagged
                  </label>
                  <p className="font-sans text-[11px] text-slate-450">Receive alerts when collaborative case internal notes @tag your senior accounts.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Security details & switches */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm space-y-4">
            <h3 className="font-display text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Security Setup
            </h3>
            
            <div className="flex justify-between items-center p-3.5 bg-slate-50 dark:bg-slate-850 rounded-lg">
              <div>
                <p className="font-sans text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <span className="text-emerald-500">🛡️</span>
                  Two-Factor Authentication (2FA)
                </p>
                <p className="font-sans text-[11px] text-slate-400 mt-0.5">Secure your counselor profile with mandatory SMS / Auth App key verification codes.</p>
              </div>
              <button
                onClick={() => setSecurity2fa(!security2fa)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold cursor-pointer transition-colors ${
                  security2fa
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-300'
                    : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                }`}
              >
                {security2fa ? 'Enabled' : 'Disabled'}
              </button>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="font-sans text-xs font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-slate-450" />
                Session History
              </h4>
              <div className="border border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 rounded-lg overflow-hidden text-[11px] text-slate-500">
                <div className="p-3 flex justify-between">
                  <span>MacOS Sequoia • Chrome Enterprise</span>
                  <span className="font-mono text-[10px] text-slate-400">San Francisco, CA • Active</span>
                </div>
                <div className="p-3 flex justify-between bg-slate-50/50 dark:bg-slate-900">
                  <span>iPhone 15 Pro • Bcara Native App</span>
                  <span className="font-mono text-[10px] text-slate-400">San Francisco, CA • 2 hrs ago</span>
                </div>
              </div>
            </div>
          </section>

          {/* Help Center dynamic link card */}
          <section className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-4">
            <div className="flex gap-3 items-center">
              <span className="text-3xl">❔</span>
              <div>
                <p className="font-sans text-xs font-semibold text-slate-800 dark:text-slate-200">Need Help configuring your organization domain?</p>
                <p className="font-sans text-[11px] text-slate-400 mt-0.5">Explore guides on custom scopes, SMTP setups, and API key setups.</p>
              </div>
            </div>

            <button
              onClick={() => alert("Redirecting to Bcara Knowledge center guides...")}
              className="text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-white text-xs font-semibold px-4 py-2 rounded-lg bg-white shadow-sm flex items-center gap-1 cursor-pointer whitespace-nowrap"
            >
              Docs
              <ExternalLink className="w-3 h-3" />
            </button>
          </section>

        </div>
      </div>
    </div>
  );
}
