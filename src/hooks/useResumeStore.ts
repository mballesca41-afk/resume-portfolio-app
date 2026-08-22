import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ResumeData } from '../types/resume';
import { resumeData as defaultData } from '../data/resumeData';

interface ResumeStore {
  data: ResumeData;
  template: 'executive' | 'corporate' | 'minimalist' | 'tech';
  setData: (data: ResumeData) => void;
  updatePersonalInfo: (info: Partial<ResumeData['personalInfo']>) => void;
  selectNiche: (nicheId: string) => void;
  setTemplate: (template: 'executive' | 'corporate' | 'minimalist' | 'tech') => void;
  toggleSection: (section: keyof ResumeData['visibleSections']) => void;
  resetToDefault: () => void;
}

export const useResumeStore = create<ResumeStore>()(persist(
  (set) => ({
    data: defaultData,
    template: 'corporate',
    setData: (data) => set({ data }),
    updatePersonalInfo: (info) =>
      set((state) => ({
        data: {
          ...state.data,
          personalInfo: {
            ...state.data.personalInfo,
            ...info,
          },
        },
      })),
    selectNiche: (nicheId) =>
      set((state) => ({
        data: {
          ...state.data,
          selectedNiche: nicheId,
        },
      })),
    setTemplate: (template) => set({ template }),
    toggleSection: (section) =>
      set((state) => ({
        data: {
          ...state.data,
          visibleSections: {
            ...state.data.visibleSections,
            [section]: !state.data.visibleSections[section],
          },
        },
      })),
    resetToDefault: () => set({ data: defaultData, template: 'corporate' }),
  }),
  {
    name: 'resume-store',
  }
));
