'use client';

import React, { useState } from 'react';
import { useResumeStore } from '@/hooks/useResumeStore';
import { FiImage, FiX } from 'react-icons/fi';
import toast from 'react-hot-toast';

export const ProfilePhotoUpload: React.FC = () => {
  const { data, updatePersonalInfo } = useResumeStore();
  const [preview, setPreview] = useState<string>(data.personalInfo.profilePhoto || '');
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        updatePersonalInfo({ profilePhoto: result });
        toast.success('Profile photo updated!');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <FiImage /> Profile Photo
        </h3>
        <div className="flex items-center gap-4">
          <img
            src={preview || 'https://via.placeholder.com/100?text=Profile'}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-slate-600"
          />
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Upload New Photo
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-xl p-6 max-w-md w-full border border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-bold text-white">Upload Profile Photo</h4>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white">
                <FiX size={24} />
              </button>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full bg-slate-700 text-white p-2 rounded-lg mb-4"
            />
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};
