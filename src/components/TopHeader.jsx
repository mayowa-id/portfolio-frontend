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
          className="theme-toggle-cli" 
          onClick={toggleTheme}
          aria-label={`Switch to ${currentTheme === 'night' ? 'light' : 'dark'} mode`}
          title={`Switch to ${currentTheme === 'night' ? 'light' : 'dark'} mode`}
        >
          <span className="prompt">$</span> theme --set {currentTheme === 'night' ? 'light' : 'dark'}
        </button>
      </div>
    </header>
  )
}