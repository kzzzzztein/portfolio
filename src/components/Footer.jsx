import { Facebook, Linkedin, Mail } from 'lucide-react'
import { CONTACT } from '../data/contact'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-ink text-paper">
      <div className="container-page flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg font-bold tracking-tight">Kyle Santos</p>
          <p className="mt-1.5 text-sm text-slate-400">Web Developer &amp; Digital Solutions Builder</p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-paper"
          >
            <Linkedin className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-paper"
          >
            <Facebook className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            Facebook
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-paper"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            Email
          </a>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kyle Santos. All rights reserved.</p>
          <p>Built with React, Vite, and Tailwind CSS. Deployed on GitHub Pages.</p>
        </div>
      </div>
    </footer>
  )
}
