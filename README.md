# LearningKnights

A Learning Product from RubiRoyals

## 🛡️ Project Overview

LearningKnights is a next-generation interactive learning platform built to help students and young professionals develop communication skills, entrepreneurship knowledge, technology expertise, and finance literacy — all from a single dashboard.

The theme blends modern minimalism (like Zoom) with a touch of historic fantasy (like knights, scrolls, and shields) to make learning engaging, noble, and purpose-driven.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
LearningKnights/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # Main dashboard
│   ├── learnings/         # Learning categories
│   ├── journal/           # Journal page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── layout/           # Layout components (Navbar, Footer)
├── lib/                  # Utilities and helpers
│   └── auth.js           # Mock authentication
└── public/               # Static assets
```

## 🎨 Features

### Implemented (MVP)

- ✅ Landing page with hero section and feature cards
- ✅ Mock authentication (login/signup) with localStorage
- ✅ Main dashboard with 4 learning categories
- ✅ Communication section with:
  - Sub-dashboard with progress tracking
  - Beginner level syllabus (5 lessons)
  - 2 complete lessons (Day 1 & Day 2) with:
    - Storytelling introductions
    - Tutorial content
    - Example dialogues
    - Interactive quizzes
  - Vocabulary page with searchable verb forms
- ✅ Journal page with entry editor
- ✅ About and Contact pages
- ✅ Dark mode toggle
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Navigation with mobile menu

### Coming Soon

- Intermediate and Advanced communication levels
- Entrepreneurship, Technology, and Finance content
- Firebase authentication integration
- Progress tracking with Firestore
- Badge and reward system
- Daily word of the day (dynamic)

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Theme:** next-themes (dark mode)
- **Language:** JavaScript

## 🎯 Design System

### Colors

- **Primary:** #0B5CFF (Knight Blue)
- **Accent:** #FFD700 (Gold)
- **Background:** #FFFFFF / #F5F5F5

### Fonts

- **Primary:** Outfit
- **Secondary:** Poppins

## 📝 Notes

- Authentication is currently mocked using localStorage
- User progress is stored locally
- Journal entries are saved in localStorage
- Firebase integration is planned for future phases

## 👤 Founder

**Yogeshwaran**
- Email: yogeshwarandofficial@gmail.com
- Phone: +91 7010850923

## 🏢 Company

**Rubi Technologies (RubiRoyals)**

## 📄 License

This project is a product of RubiRoyals.

