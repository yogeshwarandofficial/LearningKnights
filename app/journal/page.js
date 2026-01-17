'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'
import { supabase } from '@/lib/supabase'
import { Book, Plus, Trash2, Calendar, Feather, Crown, Scroll, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { jsPDF } from 'jspdf'

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
    const fetchEntries = async () => {
      if (!user) return

      const { data, error } = await supabase
        .from('journal_entries')
        .select('*')
        .eq('user_id', user.id)
        .order('date', { ascending: false })
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching journal entries:', error)
      } else {
        setEntries(data || [])
      }
    }

    fetchEntries()
  }, [user])

  const saveEntry = async () => {
    if (!currentEntry.trim() || !user) return

    const newEntry = {
      user_id: user.id,
      date: selectedDate,
      content: currentEntry,
    }

    const { data, error } = await supabase
      .from('journal_entries')
      .insert([newEntry])
      .select()

    if (error) {
      console.error('Error saving entry:', error)
      alert('Failed to save entry')
    } else if (data) {
      setEntries([data[0], ...entries])
      setCurrentEntry('')
      setShowEditor(false)
    }
  }

  const deleteEntry = async (id) => {
    if (!confirm('Are you sure you want to delete this entry?')) return

    const { error } = await supabase
      .from('journal_entries')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting entry:', error)
      alert('Failed to delete entry')
    } else {
      setEntries(entries.filter((entry) => entry.id !== id))
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-primary font-serif tracking-widest animate-pulse">Loading Journal...</p>
        </div>
      </div>
    )
  }

  if (!user) return null

  const downloadPDF = () => {
    if (entries.length === 0) {
      alert("No entries to download.")
      return
    }

    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 20
    const contentWidth = pageWidth - (margin * 2)
    let yPos = 20

    // Title
    doc.setFont("helvetica", "bold")
    doc.setFontSize(22)
    doc.text("My Learning Journal", pageWidth / 2, yPos, { align: "center" })
    yPos += 15

    doc.setFontSize(12)
    doc.setFont("helvetica", "normal")
    doc.text(`Journal of ${user.name}`, pageWidth / 2, yPos, { align: "center" })
    yPos += 20

    entries.forEach((entry, index) => {
      // Check if we need a new page
      if (yPos > pageHeight - 40) {
        doc.addPage()
        yPos = 20
      }

      // Date Header
      doc.setFont("helvetica", "bold")
      doc.setFontSize(14)
      doc.setTextColor(100, 100, 100) // Gray
      doc.text(formatDate(entry.date), margin, yPos)
      yPos += 10

      // Content
      doc.setFont("times", "normal")
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0) // Black

      const splitText = doc.splitTextToSize(entry.content, contentWidth)

      // Check if text fits on page, if not, handle page break
      if (yPos + (splitText.length * 7) > pageHeight - margin) {
        // Simple page break for now: if it doesn't fit, start new page
        doc.addPage()
        yPos = 20
      }

      doc.text(splitText, margin, yPos)
      yPos += (splitText.length * 7) + 15 // Line height + gap between entries

      // Separator
      if (index < entries.length - 1) {
        doc.setDrawColor(200, 200, 200)
        doc.line(margin, yPos - 7, pageWidth - margin, yPos - 7)
      }
    })

    doc.save(`learning_knights_journal_${new Date().toISOString().split('T')[0]}.pdf`)
  }

  // ... (rest of render)

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* ... (Header) ... */}
      <div className="max-w-5xl mx-auto pt-32 pb-12 px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10"></div>
          <div className="inline-block bg-black px-8">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-2 tracking-tighter">
              <span className="text-primary">My</span> Journal
            </h1>
            <p className="text-gray-500 uppercase tracking-[0.2em] text-sm">
              Personal Notes of {user.name || 'Student'}
            </p>
          </div>
        </div>

        {/* Action Bar */}
        {!showEditor && (
          <div className="flex justify-center flex-wrap gap-4 mb-16">
            <button
              onClick={() => setShowEditor(true)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary/10 border border-primary/40 rounded-full hover:bg-primary/20 transition-all hover:pr-10 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]"
            >
              <Feather className="w-5 h-5 text-primary" />
              <span className="font-serif text-lg text-primary group-hover:text-white transition-colors">New Entry</span>
              <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
            </button>

            {entries.length > 0 && (
              <button
                onClick={downloadPDF}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
              >
                <Download className="w-5 h-5 text-gray-300" />
                <span className="font-serif text-lg text-gray-300 group-hover:text-white transition-colors">Download PDF</span>
              </button>
            )}
          </div>
        )}

        {/* Editor */}
        {showEditor && (
          <div className="mb-20 animate-fade-in-up">
            <div className="card-royal p-8 rounded-xl border border-primary/20 bg-[#0a0a0a] relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-primary"></div>

              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-shrink-0">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Your Thoughts</label>
                <textarea
                  value={currentEntry}
                  onChange={(e) => setCurrentEntry(e.target.value)}
                  rows={12}
                  className="w-full bg-transparent border-0 border-l-2 border-primary/20 px-6 py-2 text-lg md:text-xl text-gray-300 placeholder-gray-700 focus:ring-0 focus:border-primary font-serif leading-relaxed resize-none"
                  placeholder="What did you learn today?"
                />
              </div>

              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => setShowEditor(false)}
                  className="px-6 py-2 text-gray-500 hover:text-white transition-colors uppercase text-sm font-bold tracking-widest"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEntry}
                  className="px-8 py-2 bg-primary text-black font-bold uppercase text-sm tracking-widest hover:bg-primary-light transition-colors rounded-sm"
                >
                  Save Entry
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Timeline */}
        <div className="relative min-h-[400px]">
          {entries.length === 0 && !showEditor ? (
            <div className="text-center py-20 opacity-50">
              <Scroll className="w-24 h-24 mx-auto mb-6 text-gray-700" />
              <p className="text-xl font-serif text-gray-500">No entries yet. Start writing today.</p>
            </div>
          ) : (
            <div className="space-y-12 relative before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-primary/50 before:via-gray-800 before:to-transparent">
              {entries.map((entry, index) => (
                <div key={entry.id} className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>

                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-primary shadow-[0_0_10px_rgba(255,215,0,0.5)] z-10 mt-6"></div>

                  <div className="md:w-1/2 ml-12 md:ml-0">
                    <div className={`card-royal p-6 rounded-lg border border-white/5 hover:border-primary/30 transition-colors group relative ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>

                      {/* Delete Action */}
                      <button
                        onClick={() => deleteEntry(entry.id)}
                        className={`absolute top-4 ${index % 2 === 0 ? 'md:left-4 right-4' : 'md:right-4 right-4'} opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-400`}
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                          {formatDate(entry.date)}
                        </span>

                        <div className="prose prose-invert prose-p:text-gray-300 prose-p:font-serif prose-p:leading-relaxed max-w-none">
                          <p className="whitespace-pre-wrap text-lg animate-fade-in">{entry.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
