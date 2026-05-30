/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FileUp, CheckCircle2, FileText, Badge, Gavel, FolderClosed, MoreHorizontal, MoreVertical, Trash2 } from 'lucide-react';
import { AttachedDocument } from '../types';

interface UploadViewProps {
  onBack: () => void;
  onProceed: (uploadedDocs: AttachedDocument[]) => void;
}

export default function UploadView({ onBack, onProceed }: UploadViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ID/Passport');
  const [isUploading, setIsUploading] = useState<boolean>(true);
  const [uploadProgress, setUploadProgress] = useState<number>(75);

  const [uploadedList, setUploadedList] = useState<AttachedDocument[]>([
    {
      id: 'up-1',
      name: 'Contract_v1_Signed.pdf',
      size: '1.2 MB',
      uploadedAt: 'Oct 24, 2023',
      category: 'Agreements',
      status: 'ocr_verified'
    },
    {
      id: 'up-2',
      name: 'Passport_Copy.jpg',
      size: '850 KB',
      uploadedAt: 'Oct 24, 2023',
      category: 'ID/Passport',
      status: 'Verified'
    },
    {
      id: 'up-3',
      name: 'Lease_Agreement.pdf',
      size: '2.4 MB',
      uploadedAt: 'Oct 23, 2023',
      category: 'Agreements',
      status: 'ocr_verified'
    }
  ]);

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
  };

  const deleteDocument = (id: string) => {
    setUploadedList(prev => prev.filter(d => d.id !== id));
  };

  const triggerUploadMock = () => {
    setIsUploading(true);
    setUploadProgress(15);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            const mockDoc: AttachedDocument = {
              id: `up-${Date.now()}`,
              name: 'Evidence_Log_Final.pdf',
              size: '4.5 MB',
              uploadedAt: new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }),
              category: (selectedCategory as any) || 'Agreements',
              status: 'Verified'
            };
            setUploadedList(old => [mockDoc, ...old]);
            setIsUploading(false);
          }, 300);
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  return (
    <div id="upload-view" className="max-w-6xl mx-auto flex flex-col animate-in fade-in duration-300 pb-12">
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Secure Document Upload</h2>
        <p className="font-sans text-sm text-slate-500 dark:text-slate-400">Please provide the necessary documentation to proceed with your legal intake process.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Upload Controls */}
        <div className="lg:col-span-7 space-y-8">
          {/* Category Selection */}
          <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">1. Select Category</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button
                onClick={() => handleSelectCategory('ID/Passport')}
                className={`p-4 border rounded-lg flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                  selectedCategory === 'ID/Passport'
                    ? 'border-slate-900 bg-blue-50/50 dark:bg-blue-900/20 text-[#131b2e] dark:text-blue-300 font-bold'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <span className="text-xl mb-2">🪪</span>
                <span className="font-sans text-xs">ID/Passport</span>
              </button>

              <button
                onClick={() => handleSelectCategory('Agreements')}
                className={`p-4 border rounded-lg flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                  selectedCategory === 'Agreements'
                    ? 'border-slate-900 bg-blue-50/50 dark:bg-blue-900/20 text-[#131b2e] dark:text-blue-300 font-bold'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <FileText className="w-5 h-5 mb-2" />
                <span className="font-sans text-xs">Agreements</span>
              </button>

              <button
                onClick={() => handleSelectCategory('Evidence')}
                className={`p-4 border rounded-lg flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                  selectedCategory === 'Evidence'
                    ? 'border-slate-900 bg-blue-50/50 dark:bg-blue-900/20 text-[#131b2e] dark:text-blue-300 font-bold'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <Gavel className="w-5 h-5 mb-2" />
                <span className="font-sans text-xs">Evidence</span>
              </button>

              <button
                onClick={() => handleSelectCategory('Court Docs')}
                className={`p-4 border rounded-lg flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                  selectedCategory === 'Court Docs'
                    ? 'border-slate-900 bg-blue-50/50 dark:bg-blue-900/20 text-[#131b2e] dark:text-blue-300 font-bold'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <FolderClosed className="w-5 h-5 mb-2" />
                <span className="font-sans text-xs">Court Docs</span>
              </button>

              <button
                onClick={() => handleSelectCategory('Others')}
                className={`p-4 border rounded-lg flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                  selectedCategory === 'Others'
                    ? 'border-slate-900 bg-blue-50/50 dark:bg-blue-900/20 text-[#131b2e] dark:text-blue-300 font-bold'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <MoreHorizontal className="w-5 h-5 mb-2" />
                <span className="font-sans text-xs">Others</span>
              </button>
            </div>
          </section>

          {/* Drag & Drop simulated area */}
          <section
            onClick={triggerUploadMock}
            className="bg-white dark:bg-slate-900 p-10 rounded-xl border-2 border-dashed border-slate-350 dark:border-slate-800 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-slate-150 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <FileUp className="w-8 h-8 text-slate-700 dark:text-slate-300" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#0F172A] dark:text-white mb-1">Drag and drop files here</h3>
            <p className="font-sans text-sm text-slate-500 dark:text-slate-400 mb-4">or tap to browse your local device</p>
            <span className="bg-slate-900 hover:bg-[#0f172a] text-white font-sans text-xs font-semibold px-6 py-3 rounded-lg shadow-md">Choose Files</span>
            <p className="mt-4 font-sans text-[11px] text-slate-400">Maximum file size: 50MB. Supported formats: PDF, JPEG, PNG.</p>
          </section>

          {/* Upload Progress Simulation */}
          {isUploading && (
            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm animate-pulse">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-500" />
                  <span className="font-sans text-xs font-semibold text-slate-800 dark:text-slate-200">Evidence_Log_Final.pdf</span>
                </div>
                <span className="font-sans text-xs font-bold text-slate-800 dark:text-slate-100">{uploadProgress}%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-slate-900 dark:bg-amber-600 h-full rounded-full transition-all duration-300" style={{ width: `${uploadProgress}%` }}></div>
              </div>
              <div className="flex justify-between mt-3 text-xs text-slate-400">
                <span>{(4.5 * (uploadProgress / 100)).toFixed(1)} MB of 4.5 MB uploaded</span>
                <button
                  onClick={(e) => { e.stopPropagation(); setIsUploading(false); }}
                  className="text-red-600 font-bold hover:underline cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </section>
          )}
        </div>

        {/* Right Column: Uploaded Files Vault List */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex justify-between items-center px-1">
            <h3 className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider">Uploaded Documents ({uploadedList.length})</h3>
            <span className="font-sans text-[11px] text-slate-400 italic">Encrypted &amp; Secure</span>
          </div>

          <div className="space-y-3">
            {uploadedList.map((doc, idx) => (
              <div
                key={doc.id}
                className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 shadow-sm"
              >
                <div className="flex items-center gap-3 truncate">
                  <div className="w-11 h-11 bg-slate-50 dark:bg-slate-800 rounded flex items-center justify-center text-slate-500 flex-shrink-0 font-sans text-xl">
                    {doc.name.endsWith('.jpg') ? '🖼️' : '📄'}
                  </div>
                  <div className="truncate pb-0.5">
                    <p className="font-sans text-sm font-semibold text-[#0F172A] dark:text-white truncate max-w-[190px]">{doc.name}</p>
                    <p className="font-sans text-[11px] text-slate-400 mt-0.5">
                      {doc.size} • {doc.uploadedAt} <span className="text-amber-500 font-medium ml-1">({doc.category})</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-600/10" />
                  <button
                    onClick={() => deleteDocument(doc.id)}
                    className="text-slate-400 hover:text-red-600 p-1.5 hover:bg-red-50 dark:hover:bg-red-950/30 rounded transition-colors cursor-pointer"
                    title="Delete document"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            {uploadedList.length === 0 && (
              <div className="text-center py-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-400 text-sm">
                No files uploaded yet. Select a category and drop files to get started.
              </div>
            )}
          </div>

          {/* Security guidance message */}
          <div className="bg-[#d8e3fb]/40 dark:bg-slate-900/30 p-4 rounded-xl border border-[#d8e3fb]/80 dark:border-slate-800/80 flex gap-3 mt-6">
            <span className="text-amber-600 font-bold font-sans text-base">ℹ️</span>
            <p className="font-sans text-xs text-slate-600 dark:text-slate-450 leading-relaxed">
              All documents are encrypted with AES-256 standards before being stored. Access is strictly limited to authorized legal personnel.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation footer layout block bar */}
      <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center bg-transparent gap-4">
        <button
          onClick={onBack}
          className="px-6 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-semibold text-xs rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={() => onProceed(uploadedList)}
          className="bg-[#C8A96B] hover:bg-[#B6985A] text-[#0F172A] px-10 py-3 rounded-lg text-xs font-bold shadow-lg hover:shadow-xl transition-all duration-150 cursor-pointer"
        >
          Proceed to Review
        </button>
      </footer>
    </div>
  );
}
