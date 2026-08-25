import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '../../theme/ThemeProvider'

const LINKS = [
  { label: 'Home', to: '/', hash: '#top' },
  { label: 'Work', to: '/', hash: '#work' },
  { label: 'About', to: '/about', hash: null },
  { label: 'Contact', to: '/', hash: '#contact' },
]

export default function PillNav() {
  const { theme, toggle } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    if (location.pathname === '/about') setActive('About')
    else setActive('Home')
  }, [location])

  useEffect(() => setOpen(false), [location])

  const goTo = (link) => (e) => {
    e.preventDefault()
    setActive(link.label)
    if (link.hash) {
      if (location.pathname !== '/') {
        navigate('/' + link.hash)
        return
      }
      const id = link.hash.replace('#', '')
      if (id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' })
      else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate(link.to)
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center pt-4 md:top-6">
      <nav
        className="flex items-center gap-1 rounded-[var(--radius-chip)] border px-2 py-2 shadow-sm backdrop-blur-md"
        style={{
          borderColor: 'var(--color-border)',
          backgroundColor: 'color-mix(in srgb, var(--color-bg) 82%, transparent)',
        }}
        aria-label="Primary"
      >
        <Link
          to="/"
          onClick={goTo(LINKS[0])}
          className="hidden pl-2.5 pr-3 font-display text-[15px] italic tracking-tight sm:block"
        >
          Kyle
        </Link>

        <div className="hidden items-center gap-0.5 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.to === '/' ? link.hash ?? '/' : link.to}
              onClick={goTo(link)}
              className="relative rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors"
              style={{ color: active === link.label ? 'var(--color-bg)' : 'var(--color-fg)' }}
            >
              {active === link.label && (
                <motion.span
                  layoutId="pill-active"
                  className="absolute inset-0 -z-10 rounded-full"
                  style={{ backgroundColor: 'var(--color-fg)' }}
                  transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={toggle}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors"
          style={{ color: 'var(--color-fg)' }}
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          ) : (
            <Moon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="ml-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full md:hidden"
          style={{ color: 'var(--color-fg)' }}
        >
          {open ? <X className="h-4 w-4" strokeWidth={1.75} /> : <Menu className="h-4 w-4" strokeWidth={1.75} />}
        </button>
      </nav>

      {open && (
        <div
          className="absolute top-16 mx-4 flex w-[calc(100%-2rem)] max-w-xs flex-col gap-1 rounded-2xl border p-2 shadow-lg md:hidden"
          style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg)' }}
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.to === '/' ? link.hash ?? '/' : link.to}
              onClick={goTo(link)}
              className="rounded-xl px-4 py-3 text-[14.5px] font-medium"
              style={{ color: 'var(--color-fg)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
