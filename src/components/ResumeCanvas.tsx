'use client';

import React from 'react';
import { useResumeStore } from '@/hooks/useResumeStore';

export const ResumeCanvas: React.FC = () => {
  const { data } = useResumeStore();
  const selectedNiche = data.niches.find(n => n.id === data.selectedNiche);

  return (
    <div id="resume-canvas" className="bg-white text-slate-900 font-sans p-8 md:p-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b-2 border-slate-300 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-1">{data.personalInfo.fullName}</h1>
        <p className="text-xl text-blue-600 font-semibold mb-2">{selectedNiche?.jobTitle || 'Professional'}</p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          <span>📧 {data.personalInfo.email}</span>
          <span>📱 {data.personalInfo.phone}</span>
          <span>📍 {data.personalInfo.location}</span>
          {data.personalInfo.linkedin && <span>🔗 LinkedIn Profile</span>}
        </div>
      </div>

      {/* Professional Summary */}
      {data.visibleSections.summary && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span>📝</span> PROFESSIONAL SUMMARY
          </h2>
          <p className="text-slate-700 leading-relaxed text-justify">
            {selectedNiche?.summary || 'Professional summary will appear here based on selected niche.'}
          </p>
        </div>
      )}

      {/* Career Objective */}
      {data.visibleSections.objective && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span>🎯</span> CAREER OBJECTIVE
          </h2>
          <p className="text-slate-700 leading-relaxed text-justify">
            {selectedNiche?.objective || 'Career objective will appear here based on selected niche.'}
          </p>
        </div>
      )}

      {/* Core Skills */}
      {data.visibleSections.skills && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span>⚡</span> CORE COMPETENCIES
          </h2>
          {selectedNiche?.keySkills && (
            <div className="grid grid-cols-2 gap-2">
              {selectedNiche.keySkills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-blue-600">▸</span>
                  <span className="text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Professional Experience */}
      {data.visibleSections.experience && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span>💼</span> PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id} className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="text-lg font-bold text-slate-900">{exp.position}</h3>
                <p className="text-blue-600 font-semibold">{exp.company}</p>
                <p className="text-sm text-slate-600">{exp.startDate} – {exp.endDate}</p>
                <ul className="mt-2 space-y-1">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-slate-700 flex gap-2">
                      <span>•</span> {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.visibleSections.education && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span>🎓</span> EDUCATION
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id} className="border-l-4 border-green-600 pl-4">
                <h3 className="text-lg font-bold text-slate-900">{edu.school}</h3>
                <p className="text-slate-700">{edu.degree} in {edu.field}</p>
                {edu.status && <p className="text-sm text-slate-600">{edu.status}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Professional Strengths */}
      {data.visibleSections.strengths && data.strengths.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span>💪</span> PROFESSIONAL STRENGTHS
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {data.strengths.map((strength, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-slate-700">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {data.visibleSections.languages && data.languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span>🌐</span> LANGUAGES
          </h2>
          <div className="space-y-2">
            {data.languages.map((lang, idx) => (
              <div key={idx} className="flex justify-between">
                <span className="font-semibold text-slate-900">{lang.language}</span>
                <span className="text-slate-600">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t-2 border-slate-300 pt-4 mt-8 text-center text-sm text-slate-600">
        <p>Generated with Professional Resume Builder | {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};
