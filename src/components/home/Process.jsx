import { FadeIn } from '../ui/motion-primitives'

const STEPS = [
  { n: '01', title: 'Understand', body: 'I learn about the business, the users, and the problem that needs solving.' },
  { n: '02', title: 'Plan', body: 'I define the features, the user flow, and the technical requirements.' },
  { n: '03', title: 'Build', body: 'I develop the website or system with usability and reliability in mind.' },
  { n: '04', title: 'Launch & Improve', body: 'I help prepare the solution for real users and improve it from feedback.' },
]

export default function Process() {
  return (
    <section className="section-pad border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="container-page">
        <FadeIn className="max-w-xl">
          <p className="chip-label" style={{ color: 'var(--color-muted-fg)' }}>
            Process
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">How I work</h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, i) => (
            <FadeIn key={step.n} delay={i * 0.06}>
              <p className="font-mono text-sm" style={{ color: 'var(--color-muted-fg)' }}>
                {step.n}
              </p>
              <h3 className="mt-3 font-display text-lg">{step.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed" style={{ color: 'var(--color-muted-fg)' }}>
                {step.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
