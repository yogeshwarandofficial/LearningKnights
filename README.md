# LearningKnights

A Learning Product from RubiRoyals

## 🛡️ Project Overview

LearningKnights is a next-generation interactive learning platform built to help students and young professionals develop communication skills, entrepreneurship knowledge, technology expertise, and finance literacy — all from a single dashboard.

The theme blends modern minimalism (like Zoom) with a touch of historic fantasy (like knights, scrolls, and shields) to make learning engaging, noble, and purpose-driven.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A **Supabase** account

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd LearningKnights
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a file named `.env.local` in the root directory and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Database Setup:**
   - Log in to your Supabase Dashboard.
   - Go to the **SQL Editor**.
   - Copy the contents of the file `SUPABASE_SETUP.sql` from this project.
   - Run the script to create the necessary Tables (`profiles`, `journal_entries`), Policies, and Triggers.

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
LearningKnights/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages (Login/Signup)
│   ├── dashboard/         # Main dashboard
│   ├── learnings/         # Learning categories
│   ├── journal/           # Journal page with PDF export
│   └── ...
├── components/            # React components
├── lib/                  # Utilities (Supabase client, Auth context)
├── public/               # Static assets
└── SUPABASE_SETUP.sql    # Database schema definitions
```

## 🎨 Features

### Implemented
- ✅ **Authentication**: Secure Login/Signup powered by Supabase Auth.
- ✅ **Dashboard**: Personalized user hub with XP, Level, and Streak tracking.
- ✅ **Journaling**:
  - Securely store entries in the cloud (Supabase Database).
  - **Export to PDF**: Download your entire journal as a formatted PDF.
  - Rich text editor with a Royal Dark aesthetic.
- ✅ **Learning Modules**:
  - Communication Skills (Vocabulary, Lessons).
  - Placeholder structures for Entrepreneurship, Tech, and Finance.
- ✅ **Design**: Premium "Dark Royal" aesthetic with Animations.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Backend:** Supabase (Auth & Database)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **PDF Generation:** jsPDF
- **Language:** JavaScript

## 🎯 Design System

- **Primary:** #0B5CFF (Knight Blue)
- **Accent:** #FFD700 (Gold)
- **Background:** Deep Royal Black/Grey

## 👤 Founder

**Yogeshwaran**
- Email: yogeshwarandofficial@gmail.com
- Phone: +91 7010850923

## 🏢 Company

**Rubi Technologies (RubiRoyals)**

## 📄 License

This project is a product of RubiRoyals.

