import { FadeIn } from '../components/ui/motion-primitives'
import PolaroidStrip from '../components/about/PolaroidStrip'
import Skills from '../components/about/Skills'
import Education from '../components/about/Education'

export default function About() {
  return (
    <div className="pb-16 pt-36 md:pt-44">
      <div className="container-page">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="chip-label" style={{ color: 'var(--color-muted-fg)' }}>
            About
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">
            I build practical <span className="italic">digital solutions</span> for businesses.
          </h1>
        </FadeIn>

        <div className="mt-14">
          <PolaroidStrip />
        </div>

        <FadeIn delay={0.1} className="mx-auto mt-14 max-w-2xl text-center">
          <p className="text-[16px] leading-relaxed" style={{ color: 'var(--color-muted-fg)' }}>
            My experience includes developing business websites, booking platforms, monitoring
            systems, educational platforms, databases, and custom web applications. I don't just
            build websites, I build digital solutions that solve business problems, with an
            emphasis on interfaces that non-technical staff can actually use day to day.
          </p>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-3xl gap-14 sm:grid-cols-2">
          <Skills />
          <Education />
        </div>
      </div>
    </div>
  )
}
