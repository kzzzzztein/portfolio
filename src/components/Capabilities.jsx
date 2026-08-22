import { Globe, CalendarCheck, LayoutDashboard, AppWindow } from 'lucide-react'
import Reveal from './Reveal'

const ITEMS = [
  {
    icon: Globe,
    title: 'Business Websites',
    body: 'Modern responsive websites for businesses and organizations.',
  },
  {
    icon: CalendarCheck,
    title: 'Booking Systems',
    body: 'Online reservation and booking experiences for resorts, hotels, travel businesses, and other organizations.',
  },
  {
    icon: LayoutDashboard,
    title: 'Business Systems',
    body: 'Custom dashboards and systems designed around specific workflows.',
  },
  {
    icon: AppWindow,
    title: 'Web Applications',
    body: 'Interactive web applications built around real user requirements.',
  },
]

export default function Capabilities() {
  return (
    <section className="section-pad border-t border-slate-200">
      <div className="container-page">
        <Reveal>
          <h2 className="max-w-xl font-display text-2xl font-bold tracking-tight text-ink md:text-[2rem]">
            What I build
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-card)] border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05} className="bg-surface p-7">
              <item.icon className="h-6 w-6 text-signal" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="mt-5 font-display text-[17px] font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
