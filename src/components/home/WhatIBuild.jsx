import { Globe2, CalendarRange, LayoutGrid, Blocks, RefreshCcw } from 'lucide-react'
import { FadeIn } from '../ui/motion-primitives'

const ITEMS = [
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

export default function WhatIBuild() {
  return (
    <section className="section-pad border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="container-page">
        <FadeIn className="max-w-xl">
          <p className="chip-label" style={{ color: 'var(--color-muted-fg)' }}>
            What I build
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Websites and systems that solve business problems
          </h2>
        </FadeIn>

        <div className="mt-10 border-t" style={{ borderColor: 'var(--color-border)' }}>
          {ITEMS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.04}>
              <div
                className="grid grid-cols-1 items-start gap-4 border-b py-7 sm:grid-cols-[2.2rem_1fr_1.5fr] sm:gap-8"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <item.icon className="h-6 w-6" strokeWidth={1.4} aria-hidden="true" />
                <h3 className="font-display text-lg">{item.title}</h3>
                <p className="max-w-[48ch] text-[15px] leading-relaxed" style={{ color: 'var(--color-muted-fg)' }}>
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
