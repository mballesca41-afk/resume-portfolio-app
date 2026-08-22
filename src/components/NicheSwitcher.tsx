'use client';

import React, { useState } from 'react';
import { useResumeStore } from '@/hooks/useResumeStore';
import { FiEdit2, FiX } from 'react-icons/fi';
import toast from 'react-hot-toast';

export const NicheSwitcher: React.FC = () => {
  const { data, selectNiche } = useResumeStore();
  const [customNiche, setCustomNiche] = useState('');
  const [showCustom, setShowCustom] = useState(false);

  const handleSelectNiche = (nicheId: string) => {
    selectNiche(nicheId);
    const niche = data.niches.find(n => n.id === nicheId);
    if (niche) {
      toast.success(`Switched to ${niche.title}! 🎯`);
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">🎯</span> Multi-Niche Switcher
      </h3>
      <p className="text-slate-300 mb-4 text-sm">Switch your resume to match any job opportunity - instant 1-click specialization!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {data.niches.slice(0, 6).map((niche) => (
          <button
            key={niche.id}
            onClick={() => handleSelectNiche(niche.id)}
            className={`p-3 rounded-lg font-semibold transition border-2 text-sm ${
              data.selectedNiche === niche.id
                ? 'bg-blue-600 border-blue-400 text-white'
                : 'bg-slate-700 border-slate-600 text-slate-100 hover:bg-slate-600'
            }`}
          >
            {niche.icon} {niche.title.split(' ').slice(1).join(' ')}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setShowCustom(!showCustom)}
          className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <FiEdit2 /> Custom Niche Generator
        </button>
      </div>

      {showCustom && (
        <div className="mt-4 p-4 bg-slate-700 rounded-lg border border-slate-600">
          <div className="flex justify-between items-center mb-3">
            <label className="text-white font-semibold">Enter Custom Job Title:</label>
            <button onClick={() => setShowCustom(false)} className="text-slate-400 hover:text-white">
              <FiX size={20} />
            </button>
          </div>
          <input
            type="text"
            placeholder="e.g., Real Estate VA, TikTok Shop Manager, AI Consultant"
            value={customNiche}
            onChange={(e) => setCustomNiche(e.target.value)}
            className="w-full bg-slate-600 text-white border border-slate-500 rounded px-3 py-2 mb-3 focus:outline-none focus:border-blue-400"
          />
          <button
            onClick={() => {
              if (customNiche.trim()) {
                toast.success(`Custom niche "${customNiche}" applied! 🚀`);
                setShowCustom(false);
                setCustomNiche('');
              }
            }}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Apply Custom Niche
          </button>
        </div>
      )}
    </div>
  );
};
