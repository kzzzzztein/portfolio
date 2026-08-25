import { GraduationCap } from 'lucide-react'
import { FadeIn } from '../ui/motion-primitives'

export default function Education() {
  return (
    <div>
      <p className="chip-label" style={{ color: 'var(--color-muted-fg)' }}>
        Education
      </p>
      <FadeIn className="mt-4 flex items-start gap-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <GraduationCap className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
        </div>
        <div>
          <p className="font-display text-lg">University of the East</p>
          <p className="text-[14px]" style={{ color: 'var(--color-muted-fg)' }}>
            Philippines
          </p>
        </div>
      </FadeIn>
    </div>
  )
}
