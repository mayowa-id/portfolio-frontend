import React, { useEffect, useRef, useState } from 'react'

export default function CommandPrompt({ onCommand }) {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const historyRef = useRef([])
  const idxRef = useRef(0)

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 200)
    return () => clearTimeout(t)
  }, [])

  function submit() {
    if (!value.trim()) return
    historyRef.current.push(value)
    idxRef.current = historyRef.current.length
    onCommand(value)
    setValue('')
  }

  function onKey(e) {
    if (e.key === 'Enter') {
      submit()
      e.preventDefault()
    } else if (e.key === 'ArrowUp') {
      const h = historyRef.current
      if (h.length === 0) return
      idxRef.current = Math.max(0, idxRef.current - 1)
      setValue(h[idxRef.current] || '')
      e.preventDefault()
    } else if (e.key === 'ArrowDown') {
      const h = historyRef.current
      idxRef.current = Math.min(h.length, idxRef.current + 1)
      setValue(h[idxRef.current] || '')
      e.preventDefault()
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const val = value.trim()
      if (val === '') setValue('show ')
      else if (val === 's') setValue('show ')
    }
  }

  return (
    <div className="cmdline" role="form" aria-label="Command prompt">
      <div className="prompt" aria-hidden>$</div>
      <input
        ref={inputRef}
        className="command"
        value={value}
        placeholder=">_"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKey}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
      />
    </div>
  )
}
