import { useState } from 'react'
import { ImageOff } from 'lucide-react'

/**
 * A branded "browser window" frame that wraps every project screenshot.
 * It's the one visual device repeated across the whole portfolio: since
 * the work itself lives in browsers, the frame is the through-line.
 *
 * If the referenced image hasn't been added to /public/images/ yet, it
 * degrades to a clearly-labeled placeholder instead of a broken image.
 */
export default function BrowserFrame({ src, alt, label, className = '', tone = 'light' }) {
  const [failed, setFailed] = useState(false)
  const isDark = tone === 'dark'

  return (
    <div
      className={`overflow-hidden rounded-[var(--radius-card)] border ${
        isDark ? 'border-slate-800 bg-ink-soft' : 'border-slate-200 bg-surface'
      } shadow-[0_1px_2px_rgba(16,22,28,0.04)] ${className}`}
    >
      <div
        className={`flex items-center gap-2 border-b px-3.5 py-2.5 ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" aria-hidden="true" />
        <div
          className={`ml-2 hidden flex-1 items-center rounded-full px-3 py-1 sm:flex ${
            isDark ? 'bg-slate-800' : 'bg-paper'
          }`}
        >
          <span
            className={`chip-label truncate ${isDark ? 'text-slate-400' : 'text-slate'}`}
          >
            {label ?? alt}
          </span>
        </div>
      </div>
      <div className="relative aspect-[16/10] w-full">
        {!failed && (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top"
          />
        )}
        {failed && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-slate-200/40 px-6 text-center">
            <ImageOff className="h-5 w-5 text-slate" strokeWidth={1.5} aria-hidden="true" />
            <p className="chip-label text-slate">Screenshot pending</p>
            <p className="max-w-[26ch] text-xs text-slate">{label ?? alt}</p>
          </div>
        )}
      </div>
    </div>
  )
}
