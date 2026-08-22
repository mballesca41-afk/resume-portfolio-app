'use client';

import React from 'react';
import { useResumeStore } from '@/hooks/useResumeStore';
import { FiCheck } from 'react-icons/fi';

export const TemplateSwitcher: React.FC = () => {
  const { template, setTemplate } = useResumeStore();

  const templates = [
    { id: 'executive', name: '👔 Executive Leader', description: 'Modern Navy & Slate' },
    { id: 'corporate', name: '💼 Corporate Clean', description: 'Professional Border Design' },
    { id: 'minimalist', name: '⚫ Minimalist ATS', description: 'Black & White High-Scan' },
    { id: 'tech', name: '🚀 Tech & eCommerce', description: 'Vibrant Modern Design' },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-4">📋 Resume Templates</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {templates.map((t) => (
          <button
            key={t.id}
            onClick={() => setTemplate(t.id as any)}
            className={`p-4 rounded-lg text-left transition border-2 ${
              template === t.id
                ? 'bg-blue-600 border-blue-400 text-white'
                : 'bg-slate-700 border-slate-600 text-slate-100 hover:bg-slate-600'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <p className="font-bold text-sm">{t.name}</p>
              {template === t.id && <FiCheck className="text-lg" />}
            </div>
            <p className="text-xs opacity-75">{t.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
