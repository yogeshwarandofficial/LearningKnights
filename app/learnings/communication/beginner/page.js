'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'
import Link from 'next/link'
import { ChevronDown, ChevronRight, CheckCircle, Circle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function BeginnerSyllabus() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [expandedDays, setExpandedDays] = useState({})

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

  const lessons = [
    {
      day: 1,
      title: 'How to Think in English',
      description: 'Story of a lost knight finding his voice',
      href: '/learnings/communication/beginner/day-1',
      completed: false,
    },
    {
      day: 2,
      title: 'Basic Grammar in Conversation',
      description: 'Storytelling context',
      href: '/learnings/communication/beginner/day-2',
      completed: false,
    },
    {
      day: 3,
      title: 'Daily Life Situations',
      description: '"At the Market", "Meeting New Friends"',
      href: '/learnings/communication/beginner/day-3',
      completed: false,
    },
    {
      day: 4,
      title: 'Pronunciation Battles',
      description: 'Audio practice',
      href: '/learnings/communication/beginner/day-4',
      completed: false,
    },
    {
      day: 5,
      title: 'Expressing Emotions',
      description: 'Learn to express feelings in English',
      href: '/learnings/communication/beginner/day-5',
      completed: false,
    },
  ]

  const toggleDay = (day) => {
    setExpandedDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }))
  }

  return (
    <div className="min-h-[calc(100vh-200px)] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Beginner Level</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Master the fundamentals of English communication
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Syllabus</h2>
            <div className="space-y-2">
              {lessons.map((lesson) => (
                <div key={lesson.day} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                  <button
                    onClick={() => toggleDay(lesson.day)}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {lesson.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400" />
                      )}
                      <div className="text-left">
                        <div className="font-semibold">
                          Day {lesson.day}: {lesson.title}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {lesson.description}
                        </div>
                      </div>
                    </div>
                    {expandedDays[lesson.day] ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                  {expandedDays[lesson.day] && (
                    <div className="px-4 pb-4">
                      <Link
                        href={lesson.href}
                        className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
                      >
                        Start Lesson
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

