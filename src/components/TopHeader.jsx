import React, { useEffect } from 'react'

export default function TopHeader({ profile = {} , theme = 'night' }){
  const name = profile.name || 'Your Name'
  const roles = profile.roles || ['SOFTWARE ENGINEER', 'BACKEND DEVELOPER', 'FRONTEND DEVELOPER']

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) document.documentElement.setAttribute('data-theme', saved)
    else document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  function changeTheme(t){
    document.documentElement.setAttribute('data-theme', t)
    localStorage.setItem('theme', t)
  }

  return (
    <header className="top-header" role="banner">
      <div className="title-block">
        <div className="ascii-logo" aria-hidden>{name}</div>
        <div className="roles" aria-hidden>{roles.join(' • ')}</div>
      </div>

      <div className="header-right">
        <div className="theme-toggle" role="tablist" aria-label="Theme selector">
          <button className="tm" title="Dark theme" onClick={() => changeTheme('night')}>Dark</button>
          <button className="tm" title="Light theme" onClick={() => changeTheme('light')}>Light</button>
        </div>
      </div>
    </header>
  )
}

