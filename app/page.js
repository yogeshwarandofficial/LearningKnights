import Link from 'next/link'
import { Shield, BookOpen, TrendingUp, Code, DollarSign } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            LearningKnights
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Every Knight starts with words.
          </p>
          <p className="text-lg md:text-xl mb-4 text-blue-100">
            Sharpen your tongue like a sword.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-accent mb-8">
            At LearningKnights, your growth is your quest.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-accent text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors"
            >
              Start Your Journey
            </Link>
            <Link
              href="/login"
              className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Master Your Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/learnings/communication"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary"
            >
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Communication Skills</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Improve your English communication through interactive lessons and practice.
              </p>
            </Link>

            <Link
              href="/learnings/entrepreneurship"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary"
            >
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Entrepreneurship</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn startup guidance and business strategies from real-world examples.
              </p>
            </Link>

            <Link
              href="/learnings/technology"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary"
            >
              <Code className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Technology Tutorials</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Master programming, tools, and modern tech skills step by step.
              </p>
            </Link>

            <Link
              href="/learnings/finance"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary"
            >
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Finance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Understand personal and business finance fundamentals.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don&apos;t just learn — rise.
          </h2>
          <p className="text-xl mb-2 text-gray-700 dark:text-gray-300">
            From grammar to greatness,
          </p>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            From ideas to empire.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Start Your Learning Journey
          </Link>
        </div>
      </section>
    </main>
  )
}

