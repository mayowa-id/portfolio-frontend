import { useState } from 'react'

export default function ContactForm({ apiBase }) {
  const API = 'https://portfolio-backend-kappa-nine.vercel.app/api/contact'

  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' })
  const [status, setStatus] = useState('idle') 
  const [error, setError] = useState(null)

  function onChange(e){
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function onSubmit(e){
    e.preventDefault()
    setStatus('sending')
    setError(null)

    try {
      const res = await fetch(`${API}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || 'send failed')
      setStatus('sent')
      setForm({ name:'', email:'', phone:'', message:'' })
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Unknown error')
    }
  }

  return (
    <div className="contact-card">
      <h4 className="contact-title">Leave a message</h4>
      <form className="contact-form" onSubmit={onSubmit}>
        <label>
          <span className="label">Name</span>
          <input name="name" value={form.name} onChange={onChange} placeholder="Your name" />
        </label>
        <label>
          <span className="label">Email *</span>
          <input name="email" value={form.email} onChange={onChange} placeholder="you@example.com" required />
        </label>
        <label>
          <span className="label">Phone</span>
          <input name="phone" value={form.phone} onChange={onChange} placeholder="+234-..." />
        </label>
        <label>
          <span className="label">Message *</span>
          <textarea name="message" value={form.message} onChange={onChange} rows={6} required placeholder="Hi, I want to..."></textarea>
        </label>
        <div className="contact-actions">
          <button type="submit" className="frame-btn" disabled={status==='sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'sent' && <span className="sent-ok">Thanks — message saved.</span>}
          {status === 'error' && <span className="sent-err">Error: {error}</span>}
        </div>
      </form>
    </div>
  )
}
