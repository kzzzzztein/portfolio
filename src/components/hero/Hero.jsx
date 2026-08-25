import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PortraitMorph from './PortraitMorph'
import MagneticButton from '../ui/MagneticButton'
import { FadeIn } from '../ui/motion-primitives'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-40 md:pb-24 md:pt-48">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <FadeIn>
            <span className="chip-label inline-flex items-center gap-2 rounded-full border px-3 py-1.5" style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted-fg)' }}>
              Web Developer &middot; Philippines
            </span>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h1 className="mt-6 font-display text-[2.6rem] font-light leading-[1.06] tracking-tight sm:text-6xl lg:text-[4rem]">
              I build websites that
              <br />
              <span className="italic">work</span> for your business.
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed" style={{ color: 'var(--color-muted-fg)' }}>
              Modern business websites, booking platforms, and management systems, built
              around real business needs, not templates.
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <MagneticButton
                as="a"
                href="#work"
                className="inline-flex items-center gap-1.5 rounded-[var(--radius-chip)] px-6 py-3.5 text-[14.5px] font-semibold"
                style={{ backgroundColor: 'var(--color-fg)', color: 'var(--color-bg)' }}
              >
                View My Work
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-[var(--radius-chip)] border px-6 py-3.5 text-[14.5px] font-semibold"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-fg)' }}
              >
                Let's Talk
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </MagneticButton>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} y={24}>
          <PortraitMorph />
        </FadeIn>
      </div>
    </section>
  )
}
