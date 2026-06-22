import React from 'react'
import useTime from '../hooks/useTime'


export default function StatusBar({ section = '' }) {
const time = useTime()
return (
<footer className="statusbar">
<div className="left-section">
  <span className="status-mode" style={{fontWeight:'bold', color:'var(--accent)'}}>NORMAL</span>
  {section && <span className="status-section">[{section}]</span>}
</div>
<div className="right-section">
  <span>{time}</span>
  <span>:help for commands</span>
</div>
</footer>
)
}