import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="section-pad">
      <div className="container-page text-center">
        <p className="chip-label text-slate">404</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-ink">Page not found</h1>
        <p className="mt-3 text-slate">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-1.5 rounded-[var(--radius-chip)] bg-ink px-5 py-3 text-[14px] font-semibold text-paper"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          Back home
        </Link>
      </div>
    </div>
  )
}
