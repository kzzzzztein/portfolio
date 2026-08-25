import { useEffect, useRef } from 'react'
import { useTheme } from '../../theme/ThemeProvider'

/**
 * A soft, slow-drifting radial-gradient backdrop rendered on canvas.
 * This is a lightweight, dependency-free approximation of a WebGL flow
 * shader: no raw GL context, no shader compilation risk, same calm
 * "living background" feeling. Pauses when offscreen or tab-hidden, and
 * collapses to a static gradient under prefers-reduced-motion.
 */
export default function PageBackdrop() {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

    let w = 0
    let h = 0
    let raf = null
    let visible = true
    let t = reduce ? 9999 : 0

    function resize() {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function draw() {
      const isDark = document.documentElement.classList.contains('dark')
      ctx.clearRect(0, 0, w, h)

      const cx = w * (0.5 + 0.06 * Math.sin(t * 0.00018))
      const cy = h * (0.32 + 0.04 * Math.cos(t * 0.00014))
      const r = Math.max(w, h) * 0.62

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
      if (isDark) {
        grad.addColorStop(0, 'rgba(255,255,255,0.10)')
        grad.addColorStop(0.45, 'rgba(255,255,255,0.035)')
        grad.addColorStop(1, 'rgba(255,255,255,0)')
      } else {
        grad.addColorStop(0, 'rgba(10,10,10,0.055)')
        grad.addColorStop(0.45, 'rgba(10,10,10,0.02)')
        grad.addColorStop(1, 'rgba(10,10,10,0)')
      }
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      if (!reduce) {
        t += 16
        if (visible) raf = requestAnimationFrame(draw)
      }
    }

    resize()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !reduce && !raf) raf = requestAnimationFrame(draw)
    })
    io.observe(canvas)

    const onVisibility = () => {
      visible = document.visibilityState === 'visible'
      if (visible && !reduce && !raf) raf = requestAnimationFrame(draw)
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  )
}
