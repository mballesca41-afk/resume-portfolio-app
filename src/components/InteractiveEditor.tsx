'use client';

import React, { useState } from 'react';
import { useResumeStore } from '@/hooks/useResumeStore';
import { FiEdit2, FiSave, FiX } from 'react-icons/fi';
import toast from 'react-hot-toast';

export const InteractiveEditor: React.FC = () => {
  const { data, updatePersonalInfo } = useResumeStore();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(data.personalInfo);

  const handleSave = () => {
    updatePersonalInfo(formData);
    setShowModal(false);
    toast.success('Profile updated successfully! ✅');
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition flex items-center gap-2 z-40"
        title="Edit Profile"
      >
        <FiEdit2 size={24} />
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-slate-800 rounded-xl p-6 max-w-md w-full border border-slate-700 my-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white">Edit Your Profile</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white transition"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-700 text-white border border-slate-600 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-700 text-white border border-slate-600 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-1">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-700 text-white border border-slate-600 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-1">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-slate-700 text-white border border-slate-600 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-1">LinkedIn URL</label>
                <input
                  type="url"
                  value={formData.linkedin || ''}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  className="w-full bg-slate-700 text-white border border-slate-600 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2"
              >
                <FiSave /> Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
