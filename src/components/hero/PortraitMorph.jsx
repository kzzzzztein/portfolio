import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react'
import DottedPattern from '../ui/DottedPattern'

export default function PortraitMorph() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 150, damping: 18, mass: 0.4 })
  const springY = useSpring(my, { stiffness: 150, damping: 18, mass: 0.4 })
  const rotate = useTransform(springX, [-30, 30], [-4, 4])

  const handleMove = (e) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    mx.set(relX * 0.06)
    my.set(relY * 0.06)
  }
  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px]">
      <DottedPattern className="absolute -right-5 -top-5 h-24 w-24 rounded-full opacity-70" />
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ x: reduce ? 0 : springX, y: reduce ? 0 : springY, rotate: reduce ? 0 : rotate }}
        className="group relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border"
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-[28px] border"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/portrait-default.jpg`}
            alt="Kyle Santos"
            className="absolute inset-0 h-full w-full object-cover object-top opacity-100 transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/portrait-hover.jpg`}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      </motion.div>
    </div>
  )
}
