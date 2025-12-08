import React, { useEffect, useState } from 'react'

export default function TopHeader({ profile = {} , theme = 'night' }){
  const name = profile.name || 'Your Name'
  const roles = profile.roles || ['SOFTWARE ENGINEER', 'BACKEND DEVELOPER', 'FRONTEND DEVELOPER']
  const [currentTheme, setCurrentTheme] = useState(theme)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved)
      setCurrentTheme(saved)
    } else {
      document.documentElement.setAttribute('data-theme', theme)
      setCurrentTheme(theme)
    }
  }, [theme])

  function changeTheme(t){
    document.documentElement.setAttribute('data-theme', t)
    localStorage.setItem('theme', t)
    setCurrentTheme(t)
  }

  function toggleTheme() {
    const newTheme = currentTheme === 'night' ? 'light' : 'night'
    changeTheme(newTheme)
  }

  return (
    <header className="top-header" role="banner">
      <div className="title-block">
        <div className="ascii-logo" aria-hidden>{name}</div>
        <div className="roles" aria-hidden>{roles.join(' • ')}</div>
      </div>

      <div className="header-right">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${currentTheme === 'night' ? 'light' : 'dark'} mode`}
          title={`Switch to ${currentTheme === 'night' ? 'light' : 'dark'} mode`}
        >
          {currentTheme === 'night' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}