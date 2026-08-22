import Reveal from './Reveal'

const STACK = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'CodeIgniter 4',
  'MySQL',
  'Bootstrap',
  'Git',
  'GitHub',
]

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-slate-200 bg-ink text-paper">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-[2rem]">About Me</h2>
          <p className="mt-5 max-w-[54ch] text-[17px] leading-relaxed text-slate-300">
            I'm a web developer focused on building practical digital solutions for businesses.
            My experience includes developing business websites, booking platforms, monitoring
            systems, educational platforms, databases, and custom web applications.
          </p>
          <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-slate-400">
            I don't just build websites. I build digital solutions that solve business problems,
            with an emphasis on interfaces that non-technical staff can actually use day to day.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="chip-label text-slate-400">Technologies I work with</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {STACK.map((s) => (
              <span
                key={s}
                className="rounded-full border border-slate-800 px-3.5 py-2 text-[13.5px] font-medium text-slate-200"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-[46ch] text-sm leading-relaxed text-slate-400">
            I work mainly with database-driven, web-based business systems. If a project needs a
            technology outside this list, I'll say so upfront rather than overstate what I know.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
