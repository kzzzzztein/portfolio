import { FadeIn } from '../ui/motion-primitives'

const STACK = ['HTML', 'CSS', 'JavaScript', 'PHP', 'CodeIgniter 4', 'MySQL', 'Bootstrap', 'Git', 'GitHub']

export default function Skills() {
  return (
    <div>
      <p className="chip-label" style={{ color: 'var(--color-muted-fg)' }}>
        Technologies I work with
      </p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {STACK.map((s, i) => (
          <FadeIn key={s} delay={i * 0.02} y={8}>
            <span
              className="rounded-full border px-3.5 py-2 text-[13.5px] font-medium"
              style={{ borderColor: 'var(--color-border)' }}
            >
              {s}
            </span>
          </FadeIn>
        ))}
      </div>
      <p className="mt-6 max-w-[46ch] text-sm leading-relaxed" style={{ color: 'var(--color-muted-fg)' }}>
        I work mainly with database-driven, web-based business systems. If a project needs a
        technology outside this list, I'll say so upfront rather than overstate what I know.
      </p>
    </div>
  )
}
