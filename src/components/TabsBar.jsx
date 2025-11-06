import React from 'react'

const TABS = [
  {key:'about', label:'About'},
  {key:'projects', label:'Projects'},
  {key:'experience', label:'Experience'},
  {key:'skills', label:'Skills'}
]

export default function TabsBar({section, onChange}){
  return (
    <nav className="tabs" role="navigation" aria-label="Main sections">
      {TABS.map(t=> (
        <button key={t.key} className={t.key===section? 'tab active':'tab'} onClick={()=> onChange(t.key)}>{t.label}</button>
      ))}
    </nav>
  )
}



