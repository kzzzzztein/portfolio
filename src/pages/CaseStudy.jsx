import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { FadeIn } from '../components/ui/motion-primitives'
import { getProjectBySlug, projects } from '../data/projects'

const border = { borderColor: 'var(--color-border)' }
const muted = { color: 'var(--color-muted-fg)' }

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!project) return <Navigate to="/" replace />

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 2)
  const base = import.meta.env.BASE_URL

  return (
    <article className="pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="container-page">
        <Link
          to="/#work"
          className="inline-flex items-center gap-1.5 text-[13.5px] font-medium transition-opacity hover:opacity-70"
          style={muted}
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          Back to Projects
        </Link>

        <FadeIn className="mt-8 max-w-2xl">
          {project.featured && (
            <span className="chip-label inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5" style={{ ...border, ...muted }}>
              Featured project
            </span>
          )}
          <h1 className="mt-4 font-display text-4xl md:text-5xl">{project.title}</h1>
          <p className="mt-3 text-lg" style={muted}>
            {project.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-[var(--radius-chip)] px-5 py-3 text-[14px] font-semibold"
                style={{ backgroundColor: 'var(--color-fg)', color: 'var(--color-bg)' }}
              >
                <ExternalLink className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                Live Demo
              </a>
            ) : (
              <span className="chip-label inline-flex items-center rounded-[var(--radius-chip)] border px-5 py-3" style={{ ...border, ...muted }}>
                Live demo link coming soon
              </span>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-[var(--radius-chip)] border px-5 py-3 text-[14px] font-semibold"
                style={border}
              >
                <Github className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                View Code
              </a>
            )}
          </div>
        </FadeIn>

        {/* Screenshots */}
        <FadeIn delay={0.05} className="mt-12 grid gap-5 sm:grid-cols-2">
          {project.images.map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-[var(--radius-card)] border"
              style={{ ...border, backgroundColor: 'var(--color-muted)' }}
            >
              <img
                src={`${base}images/${img.src}`}
                alt={img.label}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </div>
          ))}
        </FadeIn>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="space-y-10">
            <FadeIn>
              <h2 className="font-display text-xl">Overview</h2>
              <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed" style={muted}>
                {project.description}
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="font-display text-xl">Problem</h2>
              <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed" style={muted}>
                {project.problem}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-xl">Solution</h2>
              <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed" style={muted}>
                {project.solution}
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h2 className="font-display text-xl">Outcome</h2>
              <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed" style={muted}>
                {project.outcome}
              </p>
            </FadeIn>
          </div>

          <div className="space-y-10">
            <FadeIn delay={0.05}>
              <h2 className="font-display text-xl">Features</h2>
              <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="border-t pt-3 text-[14px]" style={border}>
                    {f}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-xl">Technology</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="chip-label rounded-full border px-3 py-1.5" style={{ ...border, ...muted }}>
                    {t}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* More projects */}
        <div className="mt-20 border-t pt-10" style={border}>
          <h2 className="font-display text-lg">More projects</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {more.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group overflow-hidden rounded-[var(--radius-card)] border transition-transform duration-300 hover:-translate-y-1"
                style={border}
              >
                <div className="overflow-hidden" style={{ backgroundColor: 'var(--color-muted)' }}>
                  <img
                    src={`${base}images/${p.images[0].src}`}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="p-5 font-display text-[15px]">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
