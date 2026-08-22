import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import BrowserFrame from './BrowserFrame'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import { featuredProject, secondaryProjects } from '../data/projects'

export default function FeaturedProjects() {
  const p = featuredProject

  return (
    <section id="work" className="section-pad border-t border-slate-200 bg-surface">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-[2rem]">
            Featured work
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate">
            A look at the platforms and systems I've built, starting with the project I lead with
            when I approach resorts and hotels.
          </p>
        </Reveal>

        {/* Primary featured case study */}
        <Reveal delay={0.05} className="mt-10">
          <Link
            to={`/projects/${p.slug}`}
            className="group grid gap-8 rounded-[var(--radius-card)] border border-slate-200 p-6 transition-colors hover:border-ink lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:p-8"
          >
            <div className="flex flex-col justify-center">
              <span className="chip-label inline-flex w-fit items-center gap-1.5 rounded-full bg-signal-tint px-3 py-1.5 text-signal-dim">
                Featured project
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink md:text-[1.8rem]">
                {p.title}
              </h3>
              <p className="mt-2 text-[15px] font-medium text-slate">{p.subtitle}</p>
              <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-slate">{p.description}</p>

              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {p.features.slice(0, 6).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13.5px] text-ink">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" strokeWidth={2.5} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <span className="mt-7 inline-flex w-fit items-center gap-1.5 text-[14.5px] font-semibold text-ink transition-colors group-hover:text-signal">
                View case study
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <BrowserFrame
                src={`images/${p.images[0].src}`}
                alt={p.images[0].label}
                label={p.images[0].label}
                className="col-span-2"
              />
              <BrowserFrame src={`images/${p.images[1].src}`} alt={p.images[1].label} label={p.images[1].label} />
              <BrowserFrame src={`images/${p.images[3].src}`} alt={p.images[3].label} label={p.images[3].label} />
            </div>
          </Link>
        </Reveal>

        {/* Secondary projects: asymmetric bento, not a repeated 3-equal grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Reveal delay={0.1} className="lg:col-span-2">
            <ProjectCard project={secondaryProjects[0]} className="h-full" />
          </Reveal>
          <div className="grid gap-6">
            <Reveal delay={0.15}>
              <ProjectCard project={secondaryProjects[1]} />
            </Reveal>
            <Reveal delay={0.2}>
              <ProjectCard project={secondaryProjects[2]} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
