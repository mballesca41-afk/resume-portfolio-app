'use client';

import React from 'react';
import { NicheSwitcher } from '@/components/NicheSwitcher';
import { TemplateSwitcher } from '@/components/TemplateSwitcher';
import { SectionManager } from '@/components/SectionManager';
import { ExportHub } from '@/components/ExportHub';
import { ProfilePhotoUpload } from '@/components/ProfilePhotoUpload';
import { ResumeCanvas } from '@/components/ResumeCanvas';
import { PortfolioShowcase } from '@/components/PortfolioShowcase';
import { PWAGuide } from '@/components/PWAGuide';
import { InteractiveEditor } from '@/components/InteractiveEditor';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 sticky top-0 z-30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-2">
                <span className="text-4xl">📄</span> Resume Portal Pro
              </h1>
              <p className="text-slate-400 text-sm mt-1">Multi-Niche Resume & Portfolio Builder</p>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-slate-300 font-semibold">Moises B. Ballesca Jr.</p>
              <p className="text-slate-500 text-sm">eCommerce & Virtual Specialist</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Control Panel Section */}
        <div className="space-y-6">
          <div className="bg-slate-800 bg-opacity-50 border border-slate-700 rounded-xl p-6 backdrop-blur">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span>⚙️</span> Control Center
            </h2>
            <div className="space-y-6">
              <NicheSwitcher />
              <TemplateSwitcher />
              <SectionManager />
              <ProfilePhotoUpload />
              <PWAGuide />
            </div>
          </div>
        </div>

        {/* Export Hub */}
        <div>
          <ExportHub />
        </div>

        {/* Resume Preview Section */}
        <div className="bg-slate-800 bg-opacity-30 border border-slate-700 rounded-xl p-8 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>👁️</span> Live Resume Preview
          </h2>
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <ResumeCanvas />
          </div>
        </div>

        {/* Portfolio Section */}
        <div>
          <PortfolioShowcase />
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-700 pt-8 pb-12 text-center text-slate-400">
          <p className="mb-2">🚀 Professional Resume Portal v1.0</p>
          <p className="text-sm">Built with React + TypeScript + Tailwind CSS</p>
          <p className="text-xs mt-4 text-slate-500">© 2026 Moises B. Ballesca Jr. All rights reserved.</p>
        </footer>
      </main>

      {/* Floating Editor Button */}
      <InteractiveEditor />
    </div>
  );
}
