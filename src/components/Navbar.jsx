import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', hash: '#top' },
  { label: 'Work', hash: '#work' },
  { label: 'Services', hash: '#services' },
  { label: 'About', hash: '#about' },
  { label: 'Contact', hash: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  const goTo = (hash) => (e) => {
    e.preventDefault()
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + hash)
      return
    }
    const id = hash.replace('#', '')
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-slate-200 bg-paper/90 backdrop-blur' : 'border-transparent bg-paper/0'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-[70px]">
        <a href="#top" onClick={goTo('#top')} className="font-display text-[15px] font-bold tracking-tight">
          Kyle Santos
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.hash}
              onClick={goTo(link.hash)}
              className="text-[14.5px] font-medium text-slate transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={goTo('#contact')}
          className="hidden items-center gap-1.5 rounded-[var(--radius-chip)] bg-ink px-5 py-2.5 text-[14px] font-semibold text-paper transition-transform active:scale-[0.98] lg:inline-flex"
        >
          Let's Work Together
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-paper lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.hash}
                onClick={goTo(link.hash)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-ink hover:bg-slate-200/40"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={goTo('#contact')}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-[var(--radius-chip)] bg-ink px-5 py-3 text-[15px] font-semibold text-paper"
            >
              Let's Work Together
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
