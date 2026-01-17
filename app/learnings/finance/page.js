'use client'

import { DollarSign, Lock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="inline-flex items-center justify-center p-6 bg-primary/10 rounded-full mb-6 relative group">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <DollarSign className="w-16 h-16 text-primary relative z-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white">Financial Mastery</h1>
          <p className="text-xl text-gray-400 font-serif">
            Mastering Wealth Management
          </p>
        </div>

        <div className="card-royal p-12 text-center rounded-xl relative overflow-hidden max-w-2xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

          <Lock className="w-12 h-12 text-gray-600 mx-auto mb-6" />

          <h3 className="text-2xl font-bold text-gradient-gold mb-4">Coming Soon</h3>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            We are preparing comprehensive guides on investing, saving, and financial planning.
            Content will be available shortly.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors uppercase tracking-widest text-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
