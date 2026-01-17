'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'
import Link from 'next/link'
import { BookOpen, Trophy, Zap, Flame, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function CommunicationDashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const wordOfTheDay = {
    word: 'Resilient',
    meaning: 'Able to recover quickly from difficulties',
    usage: 'The knight remained resilient even after defeat.',
  }

  const progressPercentage = user.xp ? Math.min((user.xp / 500) * 100, 100) : 0

  return (
    <div className="min-h-[calc(100vh-200px)] pt-32 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Navigation</h3>
                <nav className="space-y-2">
                  <Link
                    href="/learnings/communication/beginner"
                    className="block px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
                  >
                    Beginner
                  </Link>
                  <Link
                    href="/learnings/communication/intermediate"
                    className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Intermediate
                  </Link>
                  <Link
                    href="/learnings/communication/advanced"
                    className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Advanced
                  </Link>
                  <Link
                    href="/learnings/communication/vocabs"
                    className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Vocabs
                  </Link>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Progress Section */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Learning Progress</h2>
                  <Badge variant="accent">Level {user.level}</Badge>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>XP: {user.xp || 0} / 500</span>
                    <span>{Math.round(progressPercentage)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <span className="text-sm">Streak: {user.streak || 0} days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-accent" />
                    <span className="text-sm">Badges: {user.badges?.length || 0}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Word of the Day */}
            <div className="card-royal p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <BookOpen className="w-32 h-32 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold font-serif text-white">Word of the Day</h2>
                </div>
                {/* We use a local simple display here, main one is on Home */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold text-gradient-gold mb-2">
                      {/* This could be dynamic, but for this specific page let's keep it simple or import */}
                      Resilient
                    </h3>
                    <p className="text-gray-300">
                      <strong>Meaning:</strong> Able to recover quickly from difficulties
                    </p>
                  </div>
                  <div className="bg-white/5 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm text-gray-400 italic font-serif">
                      &quot;The knight remained resilient even after defeat.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Start */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Get Started</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Begin your communication journey with our beginner-level lessons.
                </p>
                <Link
                  href="/learnings/communication/beginner"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Start Learning
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

