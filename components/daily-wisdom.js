'use client'

import { useEffect, useState } from 'react'
import { getDailyWord, getDailyQuote } from '@/lib/daily-wisdom'
import { Crown, Sparkles, Feather } from 'lucide-react'

export default function DailyWisdom() {
    const [word, setWord] = useState(null)
    const [quote, setQuote] = useState(null)

    useEffect(() => {
        setWord(getDailyWord())
        setQuote(getDailyQuote())
    }, [])

    if (!word || !quote) return null

    return (
        <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Word of the Day */}
            <div className="card-royal p-8 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Crown className="w-24 h-24 text-primary" />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4 text-primary">
                        <Sparkles className="w-5 h-5" />
                        <h3 className="uppercase tracking-widest text-sm font-semibold">Word of the Day</h3>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                        {word.word}
                    </h2>

                    <div className="flex items-center gap-3 text-gray-400 mb-6 font-mono text-sm">
                        <span>{word.pronunciation}</span>
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        <span className="italic">{word.type}</span>
                    </div>

                    <p className="text-xl text-gray-200 mb-4 leading-relaxed">
                        {word.definition}
                    </p>

                    <div className="pl-4 border-l-2 border-primary/30 py-2 my-4">
                        <p className="text-gray-400 italic font-serif">
                            &quot;{word.example}&quot;
                        </p>
                    </div>

                    <p className="text-xs text-primary/60 uppercase tracking-widest mt-6">
                        Origin: {word.origin}
                    </p>
                </div>
            </div>

            {/* Quote of the Day */}
            <div className="card-royal p-8 rounded-xl relative overflow-hidden flex flex-col justify-center text-center group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                    <Feather className="w-64 h-64 text-primary" />
                </div>

                <div className="relative z-10 flex flex-col h-full justify-center">
                    <div className="mb-6 flex justify-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                    </div>

                    <blockquote className="text-2xl md:text-3xl font-serif text-gray-100 italic mb-6 leading-relaxed">
                        &quot;{quote.text}&quot;
                    </blockquote>

                    <cite className="text-primary font-semibold not-italic tracking-wide">
                        — {quote.author}
                    </cite>

                    <div className="mt-6 flex justify-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
