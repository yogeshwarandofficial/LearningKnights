'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'
import Link from 'next/link'
import { Shield, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Day1Lesson() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [quizAnswers, setQuizAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [completed, setCompleted] = useState(false)

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

  const quizQuestions = [
    {
      id: 1,
      question: 'What is the first step to thinking in English?',
      options: [
        'Translate everything from your native language',
        'Start with simple thoughts and build up',
        'Memorize grammar rules',
        'Read complex books',
      ],
      correct: 1,
    },
    {
      id: 2,
      question: 'How can you practice thinking in English daily?',
      options: [
        'Only during English classes',
        'Describe your daily activities in English mentally',
        'Avoid speaking English',
        'Think in your native language first',
      ],
      correct: 1,
    },
    {
      id: 3,
      question: 'What helps build English thinking patterns?',
      options: [
        'Avoiding mistakes',
        'Regular practice and immersion',
        'Only reading',
        'Translating word by word',
      ],
      correct: 1,
    },
  ]

  const handleQuizSubmit = () => {
    setShowResults(true)
    const allCorrect = quizQuestions.every(
      (q) => quizAnswers[q.id] === q.correct
    )
    if (allCorrect) {
      setCompleted(true)
    }
  }

  const handleComplete = () => {
    // In a real app, this would update the user's progress
    alert('Lesson completed! Great job, Knight!')
    router.push('/learnings/communication/beginner')
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

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">Day 1: How to Think in English</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Story of a lost knight finding his voice
          </p>
        </div>

        {/* Storytelling Introduction */}
        <Card className="mb-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">The Lost Knight&apos;s Journey</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Once upon a time, there was a brave knight who found himself in a foreign land.
                The people spoke a different language, and the knight struggled to communicate.
                Every thought had to be translated from his native tongue, making conversations
                slow and awkward.
              </p>
              <p>
                One day, a wise mentor told him: &quot;A true knight doesn&apos;t translate
                their thoughts—they think in the language of the land. Start with simple
                thoughts: &apos;I see a tree.&apos; &apos;The sun is bright.&apos; Build from there.&quot;
              </p>
              <p>
                The knight began practicing. Instead of thinking &quot;I want water&quot; in his
                native language and then translating, he started thinking directly: &quot;I want
                water.&quot; Day by day, his thoughts became more natural, and his communication
                improved dramatically.
              </p>
              <p className="font-semibold text-primary">
                Like this knight, you too can learn to think in English. It starts with
                simple thoughts and grows with practice.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tutorial Section */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Key Concepts</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Start Simple</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Begin with basic thoughts about your immediate surroundings:
                  &quot;I am sitting.&quot; &quot;The room is quiet.&quot; &quot;I feel happy.&quot;
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Describe Your Day</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Mentally narrate your daily activities in English:
                  &quot;I am brushing my teeth.&quot; &quot;I am eating breakfast.&quot;
                  &quot;I am going to work.&quot;
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Think in Phrases</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Instead of translating word by word, think in complete phrases and sentences.
                  This builds natural language patterns.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Practice Regularly</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Set aside 10-15 minutes daily to think only in English. The more you practice,
                  the more natural it becomes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example Dialogues */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Example Dialogues</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold mb-2">Scenario: At a Coffee Shop</p>
                <div className="space-y-2 text-sm">
                  <p><strong>You (thinking):</strong> &quot;I want coffee. I will order a latte.&quot;</p>
                  <p><strong>You (speaking):</strong> &quot;Hi, I&apos;d like a latte, please.&quot;</p>
                  <p><strong>Barista:</strong> &quot;Sure! What size?&quot;</p>
                  <p><strong>You (thinking):</strong> &quot;Medium size is good.&quot;</p>
                  <p><strong>You (speaking):</strong> &quot;Medium, please.&quot;</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold mb-2">Scenario: Meeting Someone New</p>
                <div className="space-y-2 text-sm">
                  <p><strong>You (thinking):</strong> &quot;This person looks friendly. I will introduce myself.&quot;</p>
                  <p><strong>You (speaking):</strong> &quot;Hi, I&apos;m [Your Name]. Nice to meet you!&quot;</p>
                  <p><strong>Person:</strong> &quot;Nice to meet you too! I&apos;m [Their Name].&quot;</p>
                  <p><strong>You (thinking):</strong> &quot;I should ask about their interests.&quot;</p>
                  <p><strong>You (speaking):</strong> &quot;What do you like to do in your free time?&quot;</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quiz Section */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Mini Quiz</h2>
            <div className="space-y-6">
              {quizQuestions.map((q) => (
                <div key={q.id}>
                  <p className="font-semibold mb-3">{q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((option, idx) => (
                      <label
                        key={idx}
                        className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                          showResults
                            ? idx === q.correct
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                              : quizAnswers[q.id] === idx && idx !== q.correct
                              ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                              : 'border-gray-200 dark:border-gray-700'
                            : quizAnswers[q.id] === idx
                            ? 'border-primary bg-primary/10'
                            : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${q.id}`}
                          value={idx}
                          checked={quizAnswers[q.id] === idx}
                          onChange={() =>
                            setQuizAnswers({ ...quizAnswers, [q.id]: idx })
                          }
                          disabled={showResults}
                          className="mr-3"
                        />
                        <span>{option}</span>
                        {showResults && idx === q.correct && (
                          <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              {!showResults ? (
                <Button onClick={handleQuizSubmit} className="w-full">
                  Submit Answers
                </Button>
              ) : (
                <div className="text-center">
                  {completed ? (
                    <div className="space-y-4">
                      <p className="text-green-600 dark:text-green-400 font-semibold text-lg">
                        Excellent! You got all answers correct! 🎉
                      </p>
                      <Button onClick={handleComplete} className="w-full">
                        Mark Lesson as Complete
                      </Button>
                    </div>
                  ) : (
                    <p className="text-orange-600 dark:text-orange-400 font-semibold">
                      Review the correct answers and try again!
                    </p>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link
            href="/learnings/communication/beginner"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Syllabus
          </Link>
          <Link
            href="/learnings/communication/beginner/day-2"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Next Lesson
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

