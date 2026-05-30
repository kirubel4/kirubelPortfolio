'use client'
import { useEffect, useRef, useState } from 'react'
import AnimSection from './AnimSection'
import { SKILLS, CAT_COLORS } from '../data/projects'

function SkillBar({ skill, delay }) {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ color: '#e0e0e0', fontSize: 13, fontFamily: "'Space Mono',monospace" }}>{skill.name}</span>
        <span style={{ color: CAT_COLORS[skill.cat], fontSize: 12, fontFamily: "'Space Mono',monospace" }}>{skill.level}%</span>
      </div>
      <div style={{ background: '#0d0d22', borderRadius: 3, height: 5, overflow: 'hidden' }}>
        <div style={{
          height: '100%', borderRadius: 3,
          background: `linear-gradient(90deg, ${CAT_COLORS[skill.cat]}88, ${CAT_COLORS[skill.cat]})`,
          width: visible ? `${skill.level}%` : '0%',
          transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
          boxShadow: `0 0 8px ${CAT_COLORS[skill.cat]}55`,
        }} />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const half = Math.ceil(SKILLS.length / 2)
  return (
    <section id="skills" className="skills-section" style={{
      padding: '100px 5% 80px',
      background: 'rgba(10,10,30,0.6)',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AnimSection>
          <p style={{ color: '#00f5d4', fontFamily: "'Space Mono',monospace", fontSize: 11, letterSpacing: '3px', marginBottom: 8 }}>03 // SKILLS</p>
          <h2 style={{ fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 'clamp(24px,4vw,40px)', color: '#fff', marginBottom: 12 }}>
            Tech <span style={{ color: '#00f5d4' }}>Stack</span>
          </h2>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg,#00f5d4,transparent)', marginBottom: 44 }} />
        </AnimSection>

        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>{SKILLS.slice(0, half).map((s, i) => <SkillBar key={s.name} skill={s} delay={i * 0.07} />)}</div>
          <div>{SKILLS.slice(half).map((s, i) => <SkillBar key={s.name} skill={s} delay={i * 0.07 + 0.3} />)}</div>
        </div>

        <AnimSection delay={0.4}>
          <div className="skills-legend" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 36 }}>
            {Object.entries(CAT_COLORS).map(([cat, color]) => (
              <span key={cat} style={{
                display: 'inline-block', padding: '4px 12px', borderRadius: 4,
                fontSize: 11, fontFamily: "'Space Mono',monospace",
                background: color + '11', color, border: `1px solid ${color}33`,
              }}>● {cat}</span>
            ))}
          </div>
        </AnimSection>
      </div>
    </section>
  )
}
