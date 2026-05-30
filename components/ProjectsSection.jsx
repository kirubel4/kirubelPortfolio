'use client'
import { useState } from 'react'
import AnimSection from './AnimSection'
import { PROJECTS } from '../data/projects'

const FILTERS = ['All', 'Next.js', 'React', 'TypeScript', 'Node.js']

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.tech.includes(filter))

  return (
    <section id="projects" className="projects-section" style={{ padding: '100px 5% 80px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AnimSection delay={0}>
          <p style={{ color: '#00f5d4', fontFamily: "'Space Mono',monospace", fontSize: 11, letterSpacing: '3px', marginBottom: 8 }}>02 // WORK</p>
          <h2 style={{ fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 'clamp(24px,4vw,40px)', color: '#fff', marginBottom: 12 }}>
            Featured <span style={{ color: '#00f5d4' }}>Projects</span>
          </h2>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg,#00f5d4,transparent)', marginBottom: 32 }} />
        </AnimSection>

        <AnimSection delay={0.1}>
          <div className="projects-filterbar" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '6px 14px', borderRadius: 4,
                  background: filter === f ? '#00f5d4' : 'transparent',
                  border: `1px solid ${filter === f ? '#00f5d4' : '#ffffff22'}`,
                  color: filter === f ? '#050510' : '#9999aa',
                  fontFamily: "'Space Mono',monospace", fontSize: 11,
                  transition: 'all 0.2s',
                }}
              >{f}</button>
            ))}
          </div>
        </AnimSection>

        <div className="projects-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {visible.map((p, i) => (
            <AnimSection key={p.id} delay={i * 0.07}>
              <div
                className="project-card"
                style={{
                  background: '#0a0a1e', border: '1px solid #ffffff08',
                  borderRadius: 14, padding: 24, height: '100%',
                  transition: 'all 0.35s', position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = p.color + '55'
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = `0 20px 60px ${p.color}11`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#ffffff08'
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {p.featured && (
                  <div style={{
                    position: 'absolute', top: 14, right: 14,
                    background: p.color + '22', color: p.color,
                    padding: '3px 10px', borderRadius: 4,
                    fontSize: 10, fontFamily: "'Space Mono',monospace",
                    border: `1px solid ${p.color}44`,
                  }}>Featured</div>
                )}
                <div style={{ fontSize: 32, marginBottom: 14 }}>{p.icon}</div>
                <h3 style={{ color: '#fff', fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ color: '#555577', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      padding: '3px 10px', borderRadius: 3,
                      fontSize: 11, fontFamily: "'Space Mono',monospace",
                      background: p.color + '11', color: p.color,
                      border: `1px solid ${p.color}33`,
                    }}>{t}</span>
                  ))}
                </div>
                <div className="project-links" style={{ display: 'flex', gap: 16 }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                    color: '#666688', fontFamily: "'Space Mono',monospace", fontSize: 11,
                    textDecoration: 'none', letterSpacing: '1px', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = p.color}
                    onMouseLeave={e => e.currentTarget.style.color = '#666688'}
                  >GitHub →</a>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" style={{
                    color: p.color, fontFamily: "'Space Mono',monospace", fontSize: 11,
                    textDecoration: 'none', letterSpacing: '1px',
                  }}>Live Demo →</a>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  )
}
