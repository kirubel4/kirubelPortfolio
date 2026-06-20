'use client'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import AnimSection from './AnimSection'

const SOCIALS = [
  { label: 'GitHub',   icon: 'GH', href: 'https://github.com/kirubel4' },
  { label: 'LinkedIn', icon: 'in', href: 'https://www.linkedin.com/in/kirubel-ayele-b88a58263/' },
  { label: 'Email',    icon: '@',  href: 'mailto:kirubelayele2127@gmail.com' },
]

// ── Replace these three values with your own from emailjs.com ──
const EMAILJS_SERVICE_ID  = 'service_u4hhk8o'
const EMAILJS_TEMPLATE_ID = 'template_5pi5pxb'
const EMAILJS_PUBLIC_KEY  = '4znBxQ_V4NGZTCwV6'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState('')

  const handleSubmit = async () => {
    if (!form.name || !form.email) return
    setLoading(true)
    setError('')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          message:      form.message,
        },
        EMAILJS_PUBLIC_KEY,
      )
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 3000)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    background: '#050510', border: '1px solid #ffffff11',
    borderRadius: 8, padding: '13px 15px', color: '#e0e0e0',
    fontSize: 14, outline: 'none', fontFamily: "'Outfit',sans-serif",
    width: '100%', transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" className="contact-section" style={{
      padding: '100px 5% 80px',
      position: 'relative', zIndex: 1,
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <AnimSection>
          <p style={{ color: '#00f5d4', fontFamily: "'Space Mono',monospace", fontSize: 11, letterSpacing: '3px', marginBottom: 8 }}>04 // CONTACT</p>
          <h2 style={{ fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 'clamp(24px,4vw,40px)', color: '#fff', marginBottom: 12 }}>
            Let&apos;s <span style={{ color: '#00f5d4' }}>Work Together</span>
          </h2>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg,#00f5d4,transparent)', margin: '0 auto 20px' }} />
          <p style={{ color: '#d5d5eb', fontSize: 15, lineHeight: 1.9, marginBottom: 44 }}>
            I&apos;m currently open to new opportunities. Whether you have a project in mind or just want to connect — my inbox is always open.
          </p>
        </AnimSection>

        <AnimSection delay={0.1}>
          <div className="contact-card" style={{
            background: '#0a0a1e', border: '1px solid #ffffff08',
            borderRadius: 18, padding: 36,
          }}>
            <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
              <input
                style={inputStyle}
                type="text" placeholder="Your Name"
                value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                onFocus={e => e.target.style.borderColor = '#00f5d444'}
                onBlur={e => e.target.style.borderColor = '#ffffff11'}
              />
              <input
                style={inputStyle}
                type="email" placeholder="Your Email"
                value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                onFocus={e => e.target.style.borderColor = '#00f5d444'}
                onBlur={e => e.target.style.borderColor = '#ffffff11'}
              />
            </div>
            <textarea
              style={{ ...inputStyle, minHeight: 120, resize: 'vertical', marginBottom: 14 }}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              onFocus={e => e.target.style.borderColor = '#00f5d444'}
              onBlur={e => e.target.style.borderColor = '#ffffff11'}
            />
            {error && (
              <p style={{ color: '#ff6b6b', fontFamily: "'Space Mono',monospace", fontSize: 12, marginBottom: 10 }}>
                {error}
              </p>
            )}
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                width: '100%', padding: 15,
                background: sent ? '#06d6a0' : '#00f5d4',
                border: 'none', borderRadius: 8, color: '#050510',
                fontFamily: "'Space Mono',monospace", fontSize: 13,
                fontWeight: 700, letterSpacing: '1px', transition: 'all 0.3s',
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={e => { if (!sent && !loading) e.currentTarget.style.boxShadow = '0 8px 30px #00f5d433' }}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              {sent ? '✓ Message Sent!' : loading ? 'Sending...' : 'Send Message →'}
            </button>
          </div>
        </AnimSection>

        <AnimSection delay={0.2}>
          <div className="contact-socials" style={{ display: 'flex', justifyContent: 'center', gap: 28, marginTop: 40 }}>
            {SOCIALS.map(s => (
              <a
                key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                  color: '#acacc9', textDecoration: 'none',
                  fontFamily: "'Space Mono',monospace", fontSize: 11, transition: 'color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#00f5d4'; e.currentTarget.querySelector('.si').style.borderColor = '#00f5d444' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#555577'; e.currentTarget.querySelector('.si').style.borderColor = '#ffffff11' }}
              >
                <div className="si" style={{
                  width: 40, height: 40, borderRadius: 8,
                  background: '#0a0a1e', border: '1px solid #ffffff11',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, transition: 'border-color 0.2s',
                }}>{s.icon}</div>
                {s.label}
              </a>
            ))}
          </div>
        </AnimSection>
      </div>
    </section>
  )
}