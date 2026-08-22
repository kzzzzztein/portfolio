import { Mail, Linkedin, Github } from 'lucide-react'
import Reveal from './Reveal'
import { CONTACT } from '../data/contact'

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-slate-200 bg-surface">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Have a project in mind? Let's build it.
          </h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-[15.5px] leading-relaxed text-slate">
            Whether you need a business website, booking system, or custom web application, I'd
            be happy to discuss your requirements.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-[var(--radius-chip)] bg-ink px-6 py-3.5 text-[15px] font-semibold text-paper transition-transform active:scale-[0.98]"
            >
              <Mail className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              Email Me
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-[var(--radius-chip)] border border-slate-200 bg-surface px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
            >
              <Linkedin className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-[var(--radius-chip)] border border-slate-200 bg-surface px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
            >
              <Github className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
