import { CONTACT } from '../../data/contact'

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="container-page flex flex-col gap-3 py-10 text-[13px] sm:flex-row sm:items-center sm:justify-between" style={{ color: 'var(--color-muted-fg)' }}>
        <p>&copy; 2026 Kyle Santos. All rights reserved.</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer noopener" className="hover:underline">
            LinkedIn
          </a>
          <a href={CONTACT.facebook} target="_blank" rel="noreferrer noopener" className="hover:underline">
            Facebook
          </a>
          <a href={`mailto:${CONTACT.email}`} className="hover:underline">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
