'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function Day5Lesson() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading || !user) {
    return null
  }

  return (
    <div className="min-h-[calc(100vh-200px)] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/learnings/communication/beginner"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Syllabus
        </Link>

        <Card>
          <CardContent className="p-12 text-center">
            <h1 className="text-2xl font-bold mb-4">Day 5: Expressing Emotions</h1>
            <p className="text-gray-600 dark:text-gray-400">
              This lesson is coming soon! Content for expressing feelings in English will be available in the next update.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

