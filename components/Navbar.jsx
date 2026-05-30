'use client'
import { useState, useEffect } from 'react'

const NAV_LINKS = ['Home', 'About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setActive(e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1))
          }
        })
      },
      { threshold: 0.4 }
    )
    NAV_LINKS.forEach(n => {
      const el = document.getElementById(n.toLowerCase())
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 5%', height: 64,
      background: 'rgba(5,5,16,0.88)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(0,245,212,0.08)',
    }}>
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: 18, fontWeight: 700, color: '#fff',
      }}>
        <span style={{ color: '#00f5d4' }}>&lt;</span>
        kirubel
        <span style={{ color: '#00f5d4' }}> /&gt;</span>
      </div>

      <ul style={{ display: 'flex', gap: 28, listStyle: 'none' }}>
        {NAV_LINKS.map(n => (
          <li key={n}>
            <button
              onClick={() => scrollTo(n)}
              style={{
                background: 'none', border: 'none',
                color: active === n ? '#00f5d4' : '#9999aa',
                fontFamily: "'Space Mono', monospace",
                fontSize: 12, letterSpacing: '1px',
                borderBottom: active === n ? '1px solid #00f5d4' : '1px solid transparent',
                paddingBottom: 2, transition: 'all 0.2s',
              }}
            >{n}</button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollTo('Contact')}
        style={{
          padding: '8px 18px',
          border: '1px solid #00f5d4', borderRadius: 4,
          color: '#00f5d4', background: 'transparent',
          fontFamily: "'Space Mono', monospace", fontSize: 11,
          letterSpacing: '1px', transition: 'all 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#00f5d411'}
        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
      >Hire Me</button>
    </nav>
  )
}
