'use client';

import React, { useState } from 'react';
import { FiDownload, FiPrinter, FiCopy, FiShare2 } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { exportToPDF, exportToWord, exportToText, printResume } from '@/utils/exportUtils';
import { useResumeStore } from '@/hooks/useResumeStore';

export const ExportHub: React.FC = () => {
  const { data } = useResumeStore();
  const [isLoading, setIsLoading] = useState(false);

  const handlePDFExport = async () => {
    try {
      setIsLoading(true);
      await exportToPDF('resume-canvas', `${data.personalInfo.fullName}-Resume`);
      toast.success('PDF downloaded successfully!');
    } catch (error) {
      toast.error('Failed to export PDF');
    } finally {
      setIsLoading(false);
    }
  };

  const handleWordExport = async () => {
    try {
      setIsLoading(true);
      await exportToWord(data, `${data.personalInfo.fullName}-Resume`);
      toast.success('Word document downloaded!');
    } catch (error) {
      toast.error('Failed to export to Word');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTextExport = () => {
    try {
      exportToText(data, `${data.personalInfo.fullName}-Resume`);
      toast.success('Plain text downloaded!');
    } catch (error) {
      toast.error('Failed to export text');
    }
  };

  const handlePrint = () => {
    printResume();
    toast.success('Print dialog opened!');
  };

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <FiDownload className="text-blue-400" />
        Export Your Resume
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <button
          onClick={handlePDFExport}
          disabled={isLoading}
          className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <FiDownload /> PDF Download
        </button>
        <button
          onClick={handleWordExport}
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <FiDownload /> Word (.doc)
        </button>
        <button
          onClick={handleTextExport}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <FiCopy /> Copy Text
        </button>
        <button
          onClick={handlePrint}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <FiPrinter /> Print Ready
        </button>
      </div>
    </div>
  );
};
