import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="section-pad pt-40">
      <div className="container-page text-center">
        <p className="chip-label" style={{ color: 'var(--color-muted-fg)' }}>404</p>
        <h1 className="mt-3 font-display text-4xl">Page not found</h1>
        <p className="mt-3" style={{ color: 'var(--color-muted-fg)' }}>
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-1.5 rounded-[var(--radius-chip)] px-5 py-3 text-[14px] font-semibold"
          style={{ backgroundColor: 'var(--color-fg)', color: 'var(--color-bg)' }}
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          Back home
        </Link>
      </div>
    </div>
  )
}
