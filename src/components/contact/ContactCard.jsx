import { useState } from 'react'
import { Copy, Check, Facebook, Linkedin } from 'lucide-react'
import { FadeIn } from '../ui/motion-primitives'
import { CONTACT } from '../../data/contact'

export default function ContactCard() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard API unavailable; the email is still visible to copy manually.
    }
  }

  return (
    <section id="contact" className="section-pad border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="container-page">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-[28px] border px-8 py-14 text-center sm:px-16"
            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-muted)' }}
          >
            <p className="chip-label" style={{ color: 'var(--color-muted-fg)' }}>
              Get in touch
            </p>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl md:text-4xl">
              Have a project in mind? <span className="italic">Let's build it.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[48ch] text-[15px]" style={{ color: 'var(--color-muted-fg)' }}>
              Whether you need a business website, booking system, or custom web application,
              I'd be happy to discuss your requirements.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-[var(--radius-chip)] px-6 py-3.5 text-[14.5px] font-semibold transition-transform active:scale-[0.98]"
                style={{ backgroundColor: 'var(--color-fg)', color: 'var(--color-bg)' }}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                    {CONTACT.email}
                  </>
                )}
              </button>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border transition-colors"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border transition-colors"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <Facebook className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
