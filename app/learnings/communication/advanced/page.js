'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'
import { Card, CardContent } from '@/components/ui/card'

export default function AdvancedLevel() {
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

  return (
    <div className="min-h-[calc(100vh-200px)] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Advanced Level</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Coming soon: Public Speaking, Leadership Communication, Storytelling Mastery
          </p>
        </div>

        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Advanced level content is coming soon! Stay tuned for expert-level lessons
              on public speaking, leadership communication, and storytelling mastery.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

