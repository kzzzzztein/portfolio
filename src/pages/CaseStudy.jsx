import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import BrowserFrame from '../components/BrowserFrame'
import Reveal from '../components/Reveal'
import { getProjectBySlug, projects } from '../data/projects'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!project) return <Navigate to="/" replace />

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 2)

  return (
    <article className="section-pad">
      <div className="container-page">
        <Link
          to="/#work"
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-slate transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          Back to Projects
        </Link>

        <Reveal className="mt-8 max-w-2xl">
          {project.featured && (
            <span className="chip-label inline-flex items-center gap-1.5 rounded-full bg-signal-tint px-3 py-1.5 text-signal-dim">
              Featured project
            </span>
          )}
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-slate">{project.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-[var(--radius-chip)] bg-ink px-5 py-3 text-[14px] font-semibold text-paper"
              >
                <ExternalLink className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                Live Demo
              </a>
            ) : (
              <span className="chip-label inline-flex items-center rounded-[var(--radius-chip)] border border-slate-200 px-5 py-3 text-slate">
                Live demo link coming soon
              </span>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-[var(--radius-chip)] border border-slate-200 px-5 py-3 text-[14px] font-semibold text-ink hover:border-ink"
              >
                <Github className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                View Code
              </a>
            )}
          </div>
        </Reveal>

        {/* Screenshots */}
        <Reveal delay={0.05} className="mt-12 grid gap-5 sm:grid-cols-2">
          {project.images.map((img) => (
            <BrowserFrame key={img.src} src={`images/${img.src}`} alt={img.label} label={img.label} />
          ))}
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="space-y-10">
            <Reveal>
              <h2 className="font-display text-xl font-bold text-ink">Overview</h2>
              <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-slate">
                {project.description}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-xl font-bold text-ink">Problem</h2>
              <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-slate">
                {project.problem}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-xl font-bold text-ink">Solution</h2>
              <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-slate">
                {project.solution}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="font-display text-xl font-bold text-ink">Outcome</h2>
              <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-slate">
                {project.outcome}
              </p>
            </Reveal>
          </div>

          <div className="space-y-10">
            <Reveal delay={0.05}>
              <h2 className="font-display text-xl font-bold text-ink">Features</h2>
              <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="border-t border-slate-200 pt-3 text-[14px] text-ink">
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-xl font-bold text-ink">Technology</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="chip-label rounded-full border border-slate-200 px-3 py-1.5 text-slate"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* More projects */}
        <div className="mt-20 border-t border-slate-200 pt-10">
          <h2 className="font-display text-lg font-bold text-ink">More projects</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {more.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group rounded-[var(--radius-card)] border border-slate-200 p-5 transition-colors hover:border-ink"
              >
                <BrowserFrame src={`images/${p.images[0].src}`} alt={p.title} label={p.images[0].label} />
                <h3 className="mt-4 font-display text-[15px] font-bold text-ink group-hover:text-signal">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
