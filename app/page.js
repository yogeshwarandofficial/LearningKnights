'use client'

import Link from 'next/link'
import { Shield, BookOpen, TrendingUp, Code, DollarSign, Sword, Crown, Scroll } from 'lucide-react'
import DailyWisdom from '@/components/daily-wisdom'
import { useAuth } from '@/lib/auth'

export default function Home() {
  const { user } = useAuth()
  return (
    <main className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 animate-fade-in-up">
            <Crown className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wider uppercase">Welcome to LearningKnights</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            <span className="block text-white mb-2">Build Your</span>
            <span className="text-gradient-gold">Future</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Master the skills that matter. Enhance your communication, financial literacy, and technical expertise in a premium learning environment.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {user ? (
              <Link
                href="/dashboard"
                className="group relative px-8 py-4 bg-primary text-black font-bold text-lg rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.3)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Continue Learning
                </span>
              </Link>
            ) : (
              <>
                <Link
                  href="/signup"
                  className="group relative px-8 py-4 bg-primary text-black font-bold text-lg rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.3)]"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Start Learning
                  </span>
                </Link>

                <Link
                  href="/login"
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold text-lg rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Log In
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Daily Wisdom Section */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <DailyWisdom />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Learning Modules
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
            <p className="mt-4 text-gray-400">Select a path to begin your journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ModuleCard
              href="/learnings/communication"
              icon={BookOpen}
              title="Communication"
              subtitle="Speaking & Writing"
              description="Master the art of effective communication. Improve your public speaking and writing skills."
            />

            <ModuleCard
              href="/learnings/entrepreneurship"
              icon={TrendingUp}
              title="Entrepreneurship"
              subtitle="Business Strategy"
              description="Learn how to build and scale a business. Strategies for modern leadership."
            />

            <ModuleCard
              href="/learnings/technology"
              icon={Code}
              title="Technology"
              subtitle="Development & Tools"
              description="Stay ahead with the latest in technology, programming, and digital tools."
            />

            <ModuleCard
              href="/learnings/finance"
              icon={DollarSign}
              title="Finance"
              subtitle="Wealth Management"
              description="Understand personal finance, investing, and wealth building strategies."
            />
          </div>
        </div>
      </section>

      {/* Journal CTA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="card-royal p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Scroll className="w-64 h-64 text-primary" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Personal Journal
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Reflect on your progress. Use your personal journal to document insights, ideas, and milestones.
              </p>
              <Link
                href="/journal"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-bold text-lg group"
              >
                Open Journal
                <BookOpen className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function ModuleCard({ href, icon: Icon, title, subtitle, description }) {
  return (
    <Link
      href={href}
      className="card-royal p-8 rounded-xl group hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      <div className="mb-2">
        <span className="text-xs font-bold text-primary uppercase tracking-widest">{subtitle}</span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </Link>
  )
}

