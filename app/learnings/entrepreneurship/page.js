'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function EntrepreneurshipPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Entrepreneurship & Startup Guidance</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Coming soon: Learn startup guidance and business strategies
          </p>
        </div>

        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Entrepreneurship content is coming soon! Stay tuned for lessons on startup
              guidance, business strategies, and real-world examples.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

