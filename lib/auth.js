'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('learningknights_user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
      setLoading(false)
    }
  }, [])

  const login = (email, password) => {
    // Mock authentication - accept any email/password
    const mockUser = {
      id: '1',
      email: email,
      name: email.split('@')[0],
      level: 'Beginner',
      xp: 150,
      badges: [],
      streak: 3,
    }
    setUser(mockUser)
    if (typeof window !== 'undefined') {
      localStorage.setItem('learningknights_user', JSON.stringify(mockUser))
    }
    return { success: true, user: mockUser }
  }

  const signup = (name, email, password) => {
    // Mock signup - create new user
    const mockUser = {
      id: Date.now().toString(),
      email: email,
      name: name || email.split('@')[0],
      level: 'Beginner',
      xp: 0,
      badges: [],
      streak: 0,
    }
    setUser(mockUser)
    if (typeof window !== 'undefined') {
      localStorage.setItem('learningknights_user', JSON.stringify(mockUser))
    }
    return { success: true, user: mockUser }
  }

  const logout = () => {
    setUser(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('learningknights_user')
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

