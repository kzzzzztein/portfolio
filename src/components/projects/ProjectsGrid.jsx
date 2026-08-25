import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '../ui/motion-primitives'
import { projects } from '../../data/projects'

function ProjectCard({ project, index }) {
  const cover = project.images[0]
  return (
    <FadeIn delay={index * 0.06} className={project.featured ? 'sm:col-span-2' : ''}>
      <Link
        to={`/projects/${project.slug}`}
        className="group block overflow-hidden rounded-[var(--radius-card)] border transition-transform duration-300 hover:-translate-y-1"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div
          className={`relative overflow-hidden ${project.featured ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}
          style={{ backgroundColor: 'var(--color-muted)' }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/${cover.src}`}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <div className="flex items-start justify-between gap-4 p-6">
          <div>
            {project.featured && (
              <p className="chip-label mb-1.5" style={{ color: 'var(--color-muted-fg)' }}>
                Featured
              </p>
            )}
            <h3 className="font-display text-lg">{project.title}</h3>
            <p className="mt-1 text-[14px]" style={{ color: 'var(--color-muted-fg)' }}>
              {project.subtitle}
            </p>
          </div>
          <ArrowUpRight
            className="mt-1 h-[18px] w-[18px] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </div>
      </Link>
    </FadeIn>
  )
}

export default function ProjectsGrid() {
  return (
    <section id="work" className="section-pad border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="container-page">
        <FadeIn className="max-w-xl">
          <p className="chip-label" style={{ color: 'var(--color-muted-fg)' }}>
            Selected work
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Things I've built</h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
