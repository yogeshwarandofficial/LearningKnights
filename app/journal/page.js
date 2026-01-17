'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'
import { BookMarked, Plus, Trash2, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function JournalPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [entries, setEntries] = useState([])
  const [currentEntry, setCurrentEntry] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [showEditor, setShowEditor] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedEntries = localStorage.getItem('learningknights_journal')
      if (savedEntries) {
        setEntries(JSON.parse(savedEntries))
      }
    }
  }, [])

  const saveEntry = () => {
    if (!currentEntry.trim()) return

    const newEntry = {
      id: Date.now(),
      date: selectedDate,
      content: currentEntry,
      createdAt: new Date().toISOString(),
    }

    const updatedEntries = [newEntry, ...entries]
    setEntries(updatedEntries)
    localStorage.setItem('learningknights_journal', JSON.stringify(updatedEntries))
    setCurrentEntry('')
    setShowEditor(false)
  }

  const deleteEntry = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id)
    setEntries(updatedEntries)
    localStorage.setItem('learningknights_journal', JSON.stringify(updatedEntries))
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

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
          <div className="flex items-center gap-2 mb-2">
            <BookMarked className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">My Journal</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Record your daily learnings and reflections
          </p>
        </div>

        {/* New Entry Button */}
        {!showEditor && (
          <div className="mb-6">
            <Button
              onClick={() => setShowEditor(true)}
              className="flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              New Entry
            </Button>
          </div>
        )}

        {/* Entry Editor */}
        {showEditor && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Write Your Entry</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Thoughts
                </label>
                <textarea
                  value={currentEntry}
                  onChange={(e) => setCurrentEntry(e.target.value)}
                  rows={8}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Write about what you learned today, your progress, or any reflections..."
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={saveEntry} className="flex-1">
                  Save Entry
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setShowEditor(false)
                    setCurrentEntry('')
                  }}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Entries List */}
        <div className="space-y-4">
          {entries.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <BookMarked className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  No entries yet. Start writing your first journal entry!
                </p>
              </CardContent>
            </Card>
          ) : (
            entries.map((entry) => (
              <Card key={entry.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      {formatDate(entry.date)}
                    </CardTitle>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => deleteEntry(entry.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                    {entry.content}
                  </p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

