# Resume Portal Pro - Executive Multi-Niche Resume Builder 📄

## Overview

**Resume Portal Pro** is a comprehensive, production-ready web application that allows professionals to create, customize, and export multi-niche resumes with a single click. Built with React, TypeScript, and Tailwind CSS, this application is specifically designed for **Moises B. Ballesca Jr.**, featuring 7 specialized niche profiles, 4 professional resume templates, and complete export capabilities.

---

## ✨ Features

### 🎯 Multi-Niche Resume Switcher
Instantly switch between 7 specialized professional profiles:

1. **📦 Amazon Virtual Assistant** - FBA/FBM, Helium 10, Keepa, SEO optimization
2. **🚀 Shopify & Dropshipping Specialist** - Product research, AliExpress, DSers, AI copywriting
3. **💼 Executive & Administrative VA** - Calendar management, Inbox Zero, 20+ years experience
4. **🎧 Customer Support & Live Chat** - Email tickets, Zendesk, dispute resolution
5. **🏷️ eBay Store & Cross-Listing** - SEO titles, Terapeak, multi-channel sync
6. **📊 Data Management & Spreadsheet** - 10,000+ SKU catalogs, VLOOKUP, Pivot Tables
7. **✨ Custom AI Niche Generator** - Type any job title to generate tailored resume

### 📄 Four Professional Resume Templates

1. **Executive Leader Template** - Modern Navy & Slate, 2-column executive structure
2. **Modern Corporate Template** - Clean layout with professional border accents
3. **Minimalist ATS Template** - Black & White, 100% ATS-compliant
4. **Tech & eCommerce Template** - Vibrant modern design with badge styling

### ⚡ Complete Export Hub

- **📥 PDF Download** - High-resolution multi-page PDF with perfect formatting
- **📘 Word Export** - Clean .doc format with embedded styling
- **📋 Plain Text Copy** - Optimized for job portals (Upwork, OnlineJobs.ph, LinkedIn)
- **🖨️ Print Ready** - Professional print layout with page breaks

### 🛠️ Interactive Features

- **Live Editor Modal** - Edit name, email, phone, location with auto-save
- **Section Manager** - Toggle visibility of resume sections
- **Profile Photo Upload** - Upload and preview custom profile picture
- **Portfolio Showcase** - Gallery with lightbox viewer for work samples
- **PWA Support** - Install as desktop app or home screen shortcut
- **Share Functionality** - Share via LinkedIn, Email, WhatsApp

### 💾 Data Persistence

- **LocalStorage Auto-Save** - All changes saved automatically
- **State Management** - Zustand for efficient state handling
- **Bilingual UI** - English & Tagalog helper tooltips

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/mballesca41-afk/resume-portfolio-app.git
cd resume-portfolio-app

# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# http://localhost:3000
```

### Building for Production

```bash
# Build optimized version
npm run build

# Start production server
npm run start
```

---

## 📁 Project Structure

```
resume-portfolio-app/
├── public/
│   ├── manifest.json          # PWA manifest
│   └── icons/                 # App icons
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main app page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ExportHub.tsx      # Export functionality
│   │   ├── NicheSwitcher.tsx  # Niche selection
│   │   ├── TemplateSwitcher.tsx
│   │   ├── SectionManager.tsx
│   │   ├── ProfilePhotoUpload.tsx
│   │   ├── ResumeCanvas.tsx
│   │   ├── PortfolioShowcase.tsx
│   │   ├── PWAGuide.tsx
│   │   └── InteractiveEditor.tsx
│   ├── data/
│   │   └── resumeData.ts      # Default profile data
│   ├── hooks/
│   │   └── useResumeStore.ts  # Zustand store
│   ├── types/
│   │   └── resume.ts          # TypeScript interfaces
│   └── utils/
│       └── exportUtils.ts     # Export functions
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🎨 Customization

### Update Profile Information

Edit `src/data/resumeData.ts` to modify:

```typescript
const resumeData: ResumeData = {
  personalInfo: {
    fullName: 'MOISES B. BALLESCA JR.',
    email: 'MBallesca41@gmail.com',
    phone: '+63 927 921 3026',
    // ... more fields
  },
  // ...
};
```

### Add More Niches

Add new niche profiles to the `niches` array in `resumeData.ts`:

```typescript
{
  id: 'my-niche',
  title: '🎯 My Specialty',
  icon: '🎯',
  jobTitle: 'My Job Title',
  summary: 'Professional summary...',
  objective: 'Career objective...',
  keySkills: ['skill1', 'skill2'],
  highlightedExperience: [],
}
```

### Customize Colors

Edit `tailwind.config.js` to change theme colors:

```javascript
theme: {
  extend: {
    colors: {
      slate: { /* ... */ },
      navy: { /* ... */ },
    },
  },
}
```

---

## 💡 Usage Guide

### 1. Switching Niches

- Click any of the 7 niche buttons to instantly change job title, summary, and skills
- Use the "Custom Niche Generator" for personalized positions

### 2. Changing Templates

- Select from 4 professional designs
- Preview instantly updates in real-time

### 3. Managing Sections

- Use Section Manager to show/hide resume sections
- Toggle visibility per your needs

### 4. Uploading Profile Photo

- Click "Upload New Photo" button
- Select image from device
- Preview updates instantly

### 5. Exporting Resume

- **PDF**: Click "PDF Download" for professional PDF
- **Word**: Click "Word (.doc)" for editable document
- **Text**: Click "Copy Text" for plain text format
- **Print**: Click "Print Ready" for browser print dialog

### 6. Sharing Your Resume

- Click "Share Now" in PWA Guide
- Share via LinkedIn, Email, or WhatsApp
- Direct link available for portfolio sharing

### 7. Installing as App

- **Chrome/Edge**: Menu → "Install app"
- **iOS**: Share → "Add to Home Screen"
- **Android**: Menu → "Install app"

---

## 🔧 Technology Stack

- **Frontend Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **State Management**: Zustand
- **Export Libraries**: html2canvas, jsPDF, docx
- **UI Icons**: React Icons
- **Notifications**: React Hot Toast
- **PWA**: Native Web App Manifest

---

## 📱 Browser Support

- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android)

---

## 🌐 PWA Features

- Installable on desktop and mobile
- Offline support (with service worker)
- Home screen shortcut
- App-like experience
- Responsive design

---

## 📊 Performance Optimizations

- ✅ Code splitting with Next.js
- ✅ Image optimization
- ✅ CSS minification with Tailwind
- ✅ Efficient state management
- ✅ LocalStorage caching

---

## 🔒 Privacy & Security

- All data stored locally in browser
- No external API calls (except exports)
- No tracking or analytics
- No personal data sent to servers
- Completely private and secure

---

## 🐛 Known Issues & Limitations

- Multi-page PDF export requires sufficient RAM
- Word export uses HTML conversion (some styling may differ)
- Custom niche generator uses basic template (can be enhanced with AI)

---

## 🚀 Future Enhancements

- [ ] AI-powered resume optimization
- [ ] Cover letter generator
- [ ] Real-time ATS score checker
- [ ] Video introduction recorder
- [ ] Portfolio website builder
- [ ] LinkedIn auto-fill integration
- [ ] Multiple resume profiles
- [ ] Advanced analytics dashboard

---

## 📄 License

MIT License - Feel free to use and modify for personal projects.

---

## 👤 About the Author

**Moises B. Ballesca Jr.**
- 📧 Email: MBallesca41@gmail.com
- 📱 Phone: +63 927 921 3026
- 📍 Location: Dasol, Pangasinan, Philippines
- 🌐 Open to Remote Opportunities (US, UK, AU)

---

## 💬 Support & Feedback

For issues, feature requests, or feedback, please open a GitHub issue or contact directly.

---

## 🎉 Thank You!

This resume portal was built with passion and precision to help professionals showcase their expertise across multiple niches. Good luck with your career journey! 🚀

---

**Generated**: August 22, 2026  
**Version**: 1.0.0  
**Status**: Production Ready ✅
