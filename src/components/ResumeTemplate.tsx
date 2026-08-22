'use client';

import React from 'react';
import { useResumeStore } from '@/hooks/useResumeStore';

interface TemplateProps {
  children: React.ReactNode;
}

const ExecutiveTemplate: React.FC<TemplateProps> = ({ children }) => (
  <div className="bg-white text-slate-900 font-serif">
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-12">
      <h1 className="text-4xl font-bold mb-2">Your Name</h1>
      <p className="text-lg text-slate-300">Professional Title</p>
    </div>
    <div className="p-12">{children}</div>
  </div>
);

const CorporateTemplate: React.FC<TemplateProps> = ({ children }) => (
  <div className="bg-white text-slate-900 font-sans border-l-4 border-blue-600">
    <div className="p-10">{children}</div>
  </div>
);

const MinimalistTemplate: React.FC<TemplateProps> = ({ children }) => (
  <div className="bg-white text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
    <div className="max-w-4xl mx-auto p-12">{children}</div>
  </div>
);

const TechTemplate: React.FC<TemplateProps> = ({ children }) => (
  <div className="bg-gradient-to-b from-slate-50 to-white text-slate-900 font-sans">
    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-10">
      <h1 className="text-3xl font-bold">Your Profile</h1>
    </div>
    <div className="p-10">{children}</div>
  </div>
);

export const ResumeTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { template } = useResumeStore();

  switch (template) {
    case 'executive':
      return <ExecutiveTemplate>{children}</ExecutiveTemplate>;
    case 'corporate':
      return <CorporateTemplate>{children}</CorporateTemplate>;
    case 'minimalist':
      return <MinimalistTemplate>{children}</MinimalistTemplate>;
    case 'tech':
      return <TechTemplate>{children}</TechTemplate>;
    default:
      return <CorporateTemplate>{children}</CorporateTemplate>;
  }
};
