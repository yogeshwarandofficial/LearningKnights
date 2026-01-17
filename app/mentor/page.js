import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function MentorPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Join as a Mentor</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Share your knowledge and help others grow
          </p>
        </div>

        <Card>
          <CardContent className="p-8">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We&apos;re always looking for passionate educators and industry experts to join
              our mentor program. As a mentor, you&apos;ll have the opportunity to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>Share your expertise with eager learners</li>
              <li>Create engaging content and lessons</li>
              <li>Help shape the future of education</li>
              <li>Build your professional network</li>
            </ul>
            <div className="text-center">
              <Button href="mailto:yogeshwarandofficial@gmail.com">
                Contact Us to Become a Mentor
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

