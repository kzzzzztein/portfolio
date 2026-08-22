import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import BrowserFrame from './BrowserFrame'

export default function ProjectCard({ project, className = '' }) {
  const cover = project.images[0]

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group block rounded-[var(--radius-card)] border border-slate-200 bg-surface p-5 transition-colors hover:border-ink ${className}`}
    >
      <BrowserFrame src={`images/${cover.src}`} alt={project.title} label={cover.label} />
      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-[17px] font-bold text-ink">{project.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate">{project.subtitle}</p>
        </div>
        <ArrowUpRight
          className="mt-1 h-[18px] w-[18px] shrink-0 text-slate transition-colors group-hover:text-signal"
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 3).map((t) => (
          <span key={t} className="chip-label rounded-full bg-slate-200/50 px-2.5 py-1 text-slate">
            {t}
          </span>
        ))}
      </div>
    </Link>
  )
}
