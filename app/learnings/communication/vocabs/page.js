'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'
import { Search } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function VocabsPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  const vocabData = [
    { v1: 'Go', v2: 'Went', v3: 'Gone', example: 'He has gone to battle.' },
    { v1: 'Speak', v2: 'Spoke', v3: 'Spoken', example: 'She has spoken well.' },
    { v1: 'Take', v2: 'Took', v3: 'Taken', example: 'I have taken the sword.' },
    { v1: 'See', v2: 'Saw', v3: 'Seen', example: 'We have seen the castle.' },
    { v1: 'Come', v2: 'Came', v3: 'Come', example: 'They have come to help.' },
    { v1: 'Do', v2: 'Did', v3: 'Done', example: 'I have done my homework.' },
    { v1: 'Get', v2: 'Got', v3: 'Gotten', example: 'He has gotten the message.' },
    { v1: 'Make', v2: 'Made', v3: 'Made', example: 'She has made a decision.' },
    { v1: 'Know', v2: 'Knew', v3: 'Known', example: 'I have known him for years.' },
    { v1: 'Think', v2: 'Thought', v3: 'Thought', example: 'We have thought about it.' },
    { v1: 'Say', v2: 'Said', v3: 'Said', example: 'He has said the truth.' },
    { v1: 'Tell', v2: 'Told', v3: 'Told', example: 'She has told me the story.' },
    { v1: 'Give', v2: 'Gave', v3: 'Given', example: 'I have given my best.' },
    { v1: 'Find', v2: 'Found', v3: 'Found', example: 'They have found the treasure.' },
    { v1: 'Begin', v2: 'Began', v3: 'Begun', example: 'The quest has begun.' },
    { v1: 'Break', v2: 'Broke', v3: 'Broken', example: 'The shield has broken.' },
    { v1: 'Choose', v2: 'Chose', v3: 'Chosen', example: 'I have chosen wisely.' },
    { v1: 'Eat', v2: 'Ate', v3: 'Eaten', example: 'We have eaten dinner.' },
    { v1: 'Fall', v2: 'Fell', v3: 'Fallen', example: 'The knight has fallen.' },
    { v1: 'Forget', v2: 'Forgot', v3: 'Forgotten', example: 'I have forgotten the way.' },
  ]

  const filteredVocab = vocabData.filter(
    (item) =>
      item.v1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.v2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.v3.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.example.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Vocabulary</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Irregular verbs and their forms
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search vocabulary..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          </CardContent>
        </Card>

        {/* Vocabulary Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">V1 (Base Form)</th>
                    <th className="px-6 py-4 text-left font-semibold">V2 (Past Simple)</th>
                    <th className="px-6 py-4 text-left font-semibold">V3 (Past Participle)</th>
                    <th className="px-6 py-4 text-left font-semibold">Example Sentence</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVocab.length > 0 ? (
                    filteredVocab.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <td className="px-6 py-4 font-semibold">{item.v1}</td>
                        <td className="px-6 py-4">{item.v2}</td>
                        <td className="px-6 py-4">{item.v3}</td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400 italic">
                          &quot;{item.example}&quot;
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                        No vocabulary found matching &quot;{searchTerm}&quot;
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

