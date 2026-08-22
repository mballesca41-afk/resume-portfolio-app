'use client';

import React from 'react';
import { FiSmartphone, FiDownload, FiShare2 } from 'react-icons/fi';
import toast from 'react-hot-toast';

export const PWAGuide: React.FC = () => {
  const handleDesktopShortcut = () => {
    toast.success('Follow your browser menu to add to home screen!');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Professional Resume',
        text: 'Check out my interactive resume portal!',
        url: window.location.href,
      });
    } else {
      toast.success('Link copied! Share it with anyone.');
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <FiSmartphone /> Mobile & Desktop Access
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
          <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
            <FiDownload /> Save to Home Screen
          </h4>
          <p className="text-sm text-slate-300 mb-3">
            Chrome/Edge: Menu → "Install app" or "Add to home screen"
          </p>
          <button
            onClick={handleDesktopShortcut}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            View Full Guide
          </button>
        </div>
        <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
          <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
            <FiShare2 /> Share Your Resume
          </h4>
          <p className="text-sm text-slate-300 mb-3">
            Send via LinkedIn, Email, WhatsApp, or direct link
          </p>
          <button
            onClick={handleShare}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Share Now
          </button>
        </div>
      </div>
    </div>
  );
};
