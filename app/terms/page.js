import { Card, CardContent } from '@/components/ui/card'

export default function TermsPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Use</h1>
        <Card>
          <CardContent className="p-8">
            <p className="text-gray-600 dark:text-gray-400">
              Terms of Use content coming soon.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

