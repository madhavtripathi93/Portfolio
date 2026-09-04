import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer>
      <div className="container foot-inner">
        <p className="foot-left">
          <b>{profile.name}</b> · © {new Date().getFullYear()} · Built with React + TypeScript
        </p>
        <nav className="foot-right" aria-label="Footer">
          <a href="#hero">Back to top ↑</a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </nav>
      </div>
    </footer>
  )
}
