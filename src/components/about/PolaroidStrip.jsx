import { FadeIn } from '../ui/motion-primitives'

const PHOTOS = [
  { src: 'portrait-default.jpg', caption: 'Graduation day, 2025', rotate: '-3deg' },
  { src: 'portrait-hover.jpg', caption: 'University of the East', rotate: '2.5deg' },
]

export default function PolaroidStrip() {
  return (
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
      {PHOTOS.map((p, i) => (
        <FadeIn key={p.src} delay={i * 0.1} y={24}>
          <div
            className="w-[190px] rounded-sm border bg-white p-3 pb-5 shadow-sm sm:w-[220px]"
            style={{ borderColor: 'var(--color-border)', transform: `rotate(${p.rotate})` }}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/${p.src}`}
                alt={p.caption}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <p className="mt-3 text-center font-mono text-[11px] text-neutral-500">{p.caption}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}
