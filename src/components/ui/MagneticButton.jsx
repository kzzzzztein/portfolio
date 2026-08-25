import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react'

export default function MagneticButton({ as: Comp = 'a', className = '', children, ...props }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 200, damping: 20, mass: 0.3 })
  const springY = useSpring(my, { stiffness: 200, damping: 20, mass: 0.3 })

  const handleMove = (e) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left - rect.width / 2) * 0.3)
    my.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }
  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const MotionComp = motion.create ? motion.create(Comp) : motion(Comp)

  return (
    <MotionComp
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: reduce ? 0 : springX, y: reduce ? 0 : springY }}
      className={className}
      {...props}
    >
      {children}
    </MotionComp>
  )
}
