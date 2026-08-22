import { ArrowUpRight, ArrowRight } from 'lucide-react'
import BrowserFrame from './BrowserFrame'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="chip-label inline-flex items-center gap-2 rounded-full border border-slate-200 bg-surface px-3 py-1.5 text-slate">
              Web Developer &middot; Based in the Philippines
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
              I build websites and web systems that help businesses work better.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-slate">
              I create modern business websites, booking platforms, management systems, and
              custom web applications designed around real business needs.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 rounded-[var(--radius-chip)] bg-ink px-6 py-3.5 text-[15px] font-semibold text-paper transition-transform active:scale-[0.98]"
              >
                View My Work
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-[var(--radius-chip)] border border-slate-200 bg-surface px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
              >
                Let's Work Together
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={28} className="relative">
          <div className="relative">
            <BrowserFrame
              src="images/resort-booking.png"
              alt="Resort booking reservation flow"
              label="resortstay.example / book"
              className="w-full"
            />
            <div className="absolute -bottom-6 -left-6 hidden w-52 rounded-[var(--radius-card)] border border-slate-200 bg-surface p-4 shadow-[0_12px_32px_rgba(16,22,28,0.12)] sm:block">
              <p className="chip-label text-slate">Reservation status</p>
              <p className="mt-1.5 font-display text-lg font-bold text-ink">Confirmed</p>
              <p className="mt-0.5 text-xs text-slate">Ocean View Villa &middot; 3 nights</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
