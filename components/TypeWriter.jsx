'use client'
import { useState, useEffect } from 'react'

export default function TypeWriter({ texts }) {
  const [display, setDisplay] = useState('')
  const [ti, setTi] = useState(0)
  const [ci, setCi] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const t = texts[ti]
    if (!del) {
      if (ci < t.length) {
        const id = setTimeout(() => { setDisplay(t.slice(0, ci + 1)); setCi(c => c + 1) }, 70)
        return () => clearTimeout(id)
      } else {
        const id = setTimeout(() => setDel(true), 1800)
        return () => clearTimeout(id)
      }
    } else {
      if (ci > 0) {
        const id = setTimeout(() => { setDisplay(t.slice(0, ci - 1)); setCi(c => c - 1) }, 40)
        return () => clearTimeout(id)
      } else {
        setDel(false)
        setTi(t => (t + 1) % texts.length)
      }
    }
  }, [ci, del, ti, texts])

  return (
    <span style={{ color: '#00f5d4' }}>
      {display}
      <span style={{ animation: 'blink 1s step-end infinite', color: '#00f5d4' }}>|</span>
    </span>
  )
}
