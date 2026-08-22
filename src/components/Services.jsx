import { Globe2, CalendarRange, LayoutGrid, Blocks, RefreshCcw } from 'lucide-react'
import Reveal from './Reveal'

const SERVICES = [
  {
    icon: Globe2,
    title: 'Business Websites',
    body: 'Modern, responsive websites designed to establish credibility and help businesses reach customers.',
  },
  {
    icon: CalendarRange,
    title: 'Booking & Reservation Systems',
    body: 'Custom booking platforms for resorts, hotels, travel businesses, events, and accommodations.',
  },
  {
    icon: LayoutGrid,
    title: 'Business Management Systems',
    body: 'Custom dashboards and systems that help businesses organize information and reduce manual processes.',
  },
  {
    icon: Blocks,
    title: 'Custom Web Applications',
    body: 'Web applications designed around specific business workflows.',
  },
  {
    icon: RefreshCcw,
    title: 'Website Redesign',
    body: 'Modernize outdated websites with improved design, responsiveness, usability, and functionality.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-pad border-t border-slate-200">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-[2rem]">
            What I can build
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-slate-200 border-t border-slate-200">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="grid grid-cols-1 items-start gap-4 py-7 sm:grid-cols-[2.2rem_1fr_1.4fr] sm:gap-8">
                <s.icon className="h-7 w-7 text-signal" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
                <p className="max-w-[48ch] text-[15px] leading-relaxed text-slate">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
