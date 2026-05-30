'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef()
  const ring = useRef()

  useEffect(() => {
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x, ry = y
    const move = (e) => { x = e.clientX; y = e.clientY }
    document.addEventListener('mousemove', move)
    let raf
    const loop = () => {
      rx += (x - rx) * 0.15
      ry += (y - ry) * 0.15
      if (dot.current) {
        dot.current.style.left = x + 'px'
        dot.current.style.top = y + 'px'
      }
      if (ring.current) {
        ring.current.style.left = rx + 'px'
        ring.current.style.top = ry + 'px'
      }
      raf = requestAnimationFrame(loop)
    }
    loop()
    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dot} style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 9999,
        width: 8, height: 8, borderRadius: '50%', background: '#00f5d4',
        transform: 'translate(-50%,-50%)', top: 0, left: 0,
        boxShadow: '0 0 12px #00f5d4',
      }} />
      <div ref={ring} style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 9998,
        width: 32, height: 32, borderRadius: '50%',
        border: '1px solid #00f5d433',
        transform: 'translate(-50%,-50%)', top: 0, left: 0,
      }} />
    </>
  )
}
