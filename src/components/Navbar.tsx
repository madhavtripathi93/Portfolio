import { useEffect, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]
const SECTION_IDS = ['hero', ...LINKS.map((l) => l.id)]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#hero" className="nav-logo" aria-label="Madhav Tripathi — home">
            <span className="dot" aria-hidden="true" />
            MADHAV TRIPATHI
          </a>
          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''}>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn btn--accent nav-cta">
            Let&rsquo;s Talk
          </a>
          <button
            className={`nav-burger${open ? ' open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
      <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        {LINKS.map((l, i) => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            <span className="mm-idx">0{i + 1}</span>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn btn--accent" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          Let&rsquo;s Talk
        </a>
      </div>
    </>
  )
}
