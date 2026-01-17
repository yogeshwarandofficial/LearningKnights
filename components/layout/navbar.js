'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Shield, Home, Info, BookOpen, BookMarked, Mail, LogOut, Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/auth'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  // Forced dark mode, so toggle might be redundant but we keep logic to avoid breaks
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: Info },
    { href: '/learnings/communication', label: 'Learnings', icon: BookOpen },
    { href: '/journal', label: 'Journal', icon: BookMarked },
    { href: '/contact', label: 'Contact', icon: Mail },
  ]

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href)
  }

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <span className="text-xl font-bold font-serif tracking-tight text-white group-hover:text-primary transition-colors">
              LearningKnights
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm tracking-wide ${isActive(link.href)
                    ? 'bg-primary/20 text-primary border border-primary/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              )
            })}

            {user && (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 ml-4 text-gray-400 hover:text-red-400 transition-colors"
                title="Depart from Court"
              >
                <LogOut className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {user && (
              <button onClick={handleLogout} className="text-gray-400">
                <LogOut className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-black animate-fade-in">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-4 ${isActive(link.href)
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-400 hover:bg-white/5'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-serif tracking-wide">{link.label}</span>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}

