'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'
import Link from 'next/link'
import { Shield, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Day2Lesson() {
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
      question: 'Which sentence is correct?',
      options: [
        'I am go to school.',
        'I go to school.',
        'I going to school.',
        'I goes to school.',
      ],
      correct: 1,
    },
    {
      id: 2,
      question: 'What is the correct form for "I" in present tense?',
      options: [
        'am',
        'is',
        'are',
        'be',
      ],
      correct: 0,
    },
    {
      id: 3,
      question: 'Which sentence uses correct grammar?',
      options: [
        'She don\'t like coffee.',
        'She doesn\'t like coffee.',
        'She not like coffee.',
        'She no like coffee.',
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
            <h1 className="text-3xl md:text-4xl font-bold">Day 2: Basic Grammar in Conversation</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Storytelling context
          </p>
        </div>

        {/* Storytelling Introduction */}
        <Card className="mb-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">The Knight&apos;s Grammar Quest</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Our knight, now thinking in English, faced a new challenge: speaking correctly.
                He could think &quot;I want water,&quot; but when he spoke, he said &quot;I wants water.&quot;
                The villagers looked confused.
              </p>
              <p>
                The wise mentor explained: &quot;Grammar is like the rules of knighthood. You must
                follow them to be understood. For &apos;I&apos; and &apos;you&apos;, use the base form:
                &apos;I want&apos;, &apos;you want&apos;. For &apos;he&apos;, &apos;she&apos;, and &apos;it&apos;,
                add &apos;s&apos;: &apos;he wants&apos;, &apos;she wants&apos;.&quot;
              </p>
              <p>
                The knight practiced: &quot;I speak English. You speak English. He speaks English.
                She speaks English.&quot; With each practice, his grammar improved, and soon he
                could communicate clearly with everyone.
              </p>
              <p className="font-semibold text-primary">
                Master these basic grammar rules, and you&apos;ll speak English with confidence!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tutorial Section */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Essential Grammar Rules</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Subject-Verb Agreement</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-2">
                  <p><strong>I / You / We / They:</strong> Use base form (go, speak, like)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Examples: &quot;I go to school.&quot; &quot;You speak English.&quot; &quot;We like coffee.&quot;
                  </p>
                  <p className="mt-3"><strong>He / She / It:</strong> Add &apos;s&apos; or &apos;es&apos; (goes, speaks, likes)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Examples: &quot;He goes to school.&quot; &quot;She speaks English.&quot; &quot;It works well.&quot;
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Present Tense Forms</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Subject</th>
                        <th className="text-left py-2">Verb Form</th>
                        <th className="text-left py-2">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">I</td>
                        <td className="py-2">am</td>
                        <td className="py-2">I am happy.</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">You / We / They</td>
                        <td className="py-2">are</td>
                        <td className="py-2">You are smart.</td>
                      </tr>
                      <tr>
                        <td className="py-2">He / She / It</td>
                        <td className="py-2">is</td>
                        <td className="py-2">She is kind.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Negative Forms</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-2">
                  <p><strong>I / You / We / They:</strong> don&apos;t + base form</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Examples: &quot;I don&apos;t like coffee.&quot; &quot;We don&apos;t go there.&quot;
                  </p>
                  <p className="mt-3"><strong>He / She / It:</strong> doesn&apos;t + base form</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Examples: &quot;He doesn&apos;t like coffee.&quot; &quot;She doesn&apos;t go there.&quot;
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4. Question Forms</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-2">
                  <p><strong>Do / Does:</strong> Use &apos;do&apos; for I/you/we/they, &apos;does&apos; for he/she/it</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Examples: &quot;Do you like coffee?&quot; &quot;Does she speak English?&quot;
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example Dialogues */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Practice Conversations</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold mb-2">Conversation 1: Talking About Hobbies</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Person A:</strong> &quot;What do you like to do?&quot;</p>
                  <p><strong>Person B:</strong> &quot;I like reading books. What about you?&quot;</p>
                  <p><strong>Person A:</strong> &quot;I enjoy playing sports. Do you play any sports?&quot;</p>
                  <p><strong>Person B:</strong> &quot;No, I don&apos;t. But I like watching sports on TV.&quot;</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold mb-2">Conversation 2: Daily Routines</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Person A:</strong> &quot;What time do you wake up?&quot;</p>
                  <p><strong>Person B:</strong> &quot;I wake up at 7 AM. And you?&quot;</p>
                  <p><strong>Person A:</strong> &quot;I wake up at 6:30. Do you have breakfast?&quot;</p>
                  <p><strong>Person B:</strong> &quot;Yes, I do. I always eat breakfast.&quot;</p>
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
            href="/learnings/communication/beginner/day-1"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous Lesson
          </Link>
          <Link
            href="/learnings/communication/beginner/day-3"
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

