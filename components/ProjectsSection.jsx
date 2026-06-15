'use client'
import { useState } from 'react'
import AnimSection from './AnimSection'
import { PROJECTS } from '../data/projects'

export default function ProjectsSection() {
  const [hovered, setHovered] = useState(null)

  return (
    <section
      id="projects"
      className="projects-section"
      style={{ padding: '100px 5% 80px', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <AnimSection delay={0}>
          <p style={{
            color: '#00f5d4', fontFamily: "'Space Mono',monospace",
            fontSize: 11, letterSpacing: '3px', marginBottom: 8,
          }}>
            02 // WORK
          </p>
          <h2 style={{
            fontFamily: "'Space Mono',monospace", fontWeight: 700,
            fontSize: 'clamp(24px,4vw,40px)', color: '#fff', marginBottom: 12,
          }}>
            Featured <span style={{ color: '#00f5d4' }}>Projects</span>
          </h2>
          <div style={{
            width: 60, height: 3,
            background: 'linear-gradient(90deg,#00f5d4,transparent)',
            marginBottom: 40,
          }} />
        </AnimSection>

        {/* Grid */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 24,
          }}
        >
          {PROJECTS.map((p, i) => (
            <AnimSection key={p.id} delay={i * 0.07}>
              <div
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#07071a',
                  border: `1px solid ${hovered === p.id ? p.color + '44' : '#ffffff0a'}`,
                  borderRadius: 14,
                  overflow: 'hidden',
                  transition: 'all 0.35s',
                  transform: hovered === p.id ? 'translateY(-6px)' : 'none',
                  boxShadow: hovered === p.id ? `0 24px 60px ${p.color}12` : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/9',
                  background: '#0d0d28',
                  overflow: 'hidden',
                }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: hovered === p.id ? 1 : 0.75,
                      transition: 'opacity 0.35s, transform 0.35s',
                      transform: hovered === p.id ? 'scale(1.04)' : 'scale(1)',
                      display: 'block',
                    }}
                    onError={e => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement.style.background = p.color + '0d'
                    }}
                  />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, ${p.color}, transparent)`,
                  }} />
                  {p.featured && (
                    <div style={{
                      position: 'absolute', top: 12, right: 12,
                      background: '#050510cc',
                      color: p.color,
                      padding: '3px 10px', borderRadius: 3,
                      fontSize: 9, fontFamily: "'Space Mono',monospace",
                      letterSpacing: '1.5px',
                      border: `1px solid ${p.color}44`,
                      backdropFilter: 'blur(8px)',
                    }}>
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Body */}
                <div style={{ padding: '22px 22px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    color: '#fff', fontSize: 16, fontWeight: 600,
                    marginBottom: 8, lineHeight: 1.4,
                  }}>
                    {p.title}
                  </h3>
                  <p style={{
                    color: '#e5e5f5', fontSize: 13, lineHeight: 1.75,
                    marginBottom: 18, flex: 1,
                  }}>
                    {p.desc}
                  </p>

                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                    {p.tech.map(t => (
                      <span key={t} style={{
                        padding: '3px 10px', borderRadius: 3,
                        fontSize: 10, fontFamily: "'Space Mono',monospace",
                        background: p.color + '0d', color: p.color,
                        border: `1px solid ${p.color}2a`,
                        letterSpacing: '0.3px',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div
                    className="project-links"
                    style={{
                      display: 'flex', gap: 0,
                      borderTop: '1px solid #ffffff08',
                      paddingTop: 16,
                    }}
                  >
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        color: '#555577',
                        fontFamily: "'Space Mono',monospace",
                        fontSize: 11, letterSpacing: '1px',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        display: 'flex', alignItems: 'center', gap: 6,
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = '#555577'}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: p.color,
                          fontFamily: "'Space Mono',monospace",
                          fontSize: 11, letterSpacing: '1px',
                          textDecoration: 'none',
                          display: 'flex', alignItems: 'center', gap: 6,
                          transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                      >
                        Live Demo
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  )
}