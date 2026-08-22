'use client';

import React, { useState } from 'react';
import { useResumeStore } from '@/hooks/useResumeStore';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const PortfolioShowcase: React.FC = () => {
  const { data } = useResumeStore();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🎨</span> Work Samples & Portfolio
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.portfolio.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(idx)}
              className="cursor-pointer group relative overflow-hidden rounded-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover transition group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition flex items-end p-3">
                <div className="opacity-0 group-hover:opacity-100 transition text-white">
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs text-slate-300">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="max-w-3xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-xl font-bold">{data.portfolio[selectedIndex].title}</h3>
              <button
                onClick={() => setSelectedIndex(null)}
                className="text-white hover:text-slate-300 transition"
              >
                <FiX size={28} />
              </button>
            </div>
            <img
              src={data.portfolio[selectedIndex].image}
              alt={data.portfolio[selectedIndex].title}
              className="w-full rounded-lg mb-4"
            />
            <p className="text-slate-300 mb-4">{data.portfolio[selectedIndex].description}</p>
            <div className="flex justify-between items-center">
              <button
                onClick={() =>
                  setSelectedIndex((selectedIndex - 1 + data.portfolio.length) % data.portfolio.length)
                }
                className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition"
              >
                <FiChevronLeft size={24} />
              </button>
              <span className="text-slate-300">
                {selectedIndex + 1} / {data.portfolio.length}
              </span>
              <button
                onClick={() => setSelectedIndex((selectedIndex + 1) % data.portfolio.length)}
                className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
