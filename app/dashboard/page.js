'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'
import Link from 'next/link'
import { BookOpen, TrendingUp, Code, DollarSign, Trophy, Zap, Flame } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DashboardPage() {
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

  const categories = [
    {
      href: '/learnings/communication',
      icon: BookOpen,
      title: 'Communication Skills',
      description: 'Improve your English communication through interactive lessons and practice.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      href: '/learnings/entrepreneurship',
      icon: TrendingUp,
      title: 'Entrepreneurship & Startup Guidance',
      description: 'Learn startup guidance and business strategies from real-world examples.',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      href: '/learnings/technology',
      icon: Code,
      title: 'Technology Tutorials',
      description: 'Master programming, tools, and modern tech skills step by step.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
    {
      href: '/learnings/finance',
      icon: DollarSign,
      title: 'Finance (Personal & Business)',
      description: 'Understand personal and business finance fundamentals.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    },
  ]

  return (
    <div className="min-h-[calc(100vh-200px)] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, {user.name}! 🛡️
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Continue your quest for knowledge
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">XP Points</p>
                  <p className="text-2xl font-bold">{user.xp || 0}</p>
                </div>
                <Zap className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Level</p>
                  <p className="text-2xl font-bold">{user.level || 'Beginner'}</p>
                </div>
                <Trophy className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Daily Streak</p>
                  <p className="text-2xl font-bold">{user.streak || 0} days</p>
                </div>
                <Flame className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Categories Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Learning Categories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Link key={category.href} href={category.href}>
                  <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 ${category.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                        <Icon className={`w-8 h-8 ${category.color}`} />
                      </div>
                      <CardTitle className="mb-2">{category.title}</CardTitle>
                      <p className="text-gray-600 dark:text-gray-400">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

