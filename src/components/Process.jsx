import Reveal from './Reveal'

const STEPS = [
  {
    n: '01',
    title: 'Understand',
    body: 'I learn about the business, the users, and the problem that needs solving.',
  },
  {
    n: '02',
    title: 'Plan',
    body: 'I define the features, the user flow, and the technical requirements.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'I develop the website or system with usability and reliability in mind.',
  },
  {
    n: '04',
    title: 'Launch & Improve',
    body: 'I help prepare the solution for real users and make improvements based on feedback.',
  },
]

export default function Process() {
  return (
    <section className="section-pad border-t border-slate-200">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-[2rem]">
            How I work
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.06}>
              <p className="font-mono text-sm font-medium text-signal">{step.n}</p>
              <h3 className="mt-3 font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
