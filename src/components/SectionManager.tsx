'use client';

import React, { useState } from 'react';
import { useResumeStore } from '@/hooks/useResumeStore';
import { FiEdit2, FiX } from 'react-icons/fi';
import toast from 'react-hot-toast';

export const SectionManager: React.FC = () => {
  const { data, toggleSection } = useResumeStore();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    { key: 'summary', label: '📝 Professional Summary' },
    { key: 'objective', label: '🎯 Career Objective' },
    { key: 'skills', label: '⚡ Core Skills' },
    { key: 'experience', label: '💼 Work Experience' },
    { key: 'education', label: '🎓 Education' },
    { key: 'certifications', label: '🏆 Certifications' },
    { key: 'strengths', label: '💪 Professional Strengths' },
    { key: 'languages', label: '🌍 Languages' },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <FiEdit2 /> Section Manager
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {sections.map((section) => (
          <button
            key={section.key}
            onClick={() => {
              toggleSection(section.key as any);
              const isVisible = data.visibleSections[section.key as keyof typeof data.visibleSections];
              toast.success(`${section.label} ${!isVisible ? '✅ Shown' : '❌ Hidden'}`);
            }}
            className={`p-3 rounded-lg font-semibold transition border-2 text-sm ${
              data.visibleSections[section.key as keyof typeof data.visibleSections]
                ? 'bg-green-600 border-green-400 text-white'
                : 'bg-red-600 border-red-400 text-white opacity-50'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
};
