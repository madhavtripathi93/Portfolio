import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { cursorHover } from './Cursor'
import { projects } from '../data/projects'
import type { Project } from '../data/types'

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="modal-overlay open"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-panel">
        <button className="modal-close" onClick={onClose} aria-label="Close project details">
          ✕
        </button>

        {project.status && (
          <p className="modal-kicker">
            <span
              className="pulse"
              style={{
                display: 'inline-block',
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: 'var(--accent)',
                marginRight: 8,
                animation: 'pulse 1.8s infinite',
              }}
            />
            {project.status}
          </p>
        )}

        <h3 className="modal-title">{project.title}</h3>
        <p className="modal-tag">"{project.tagline}"</p>

        {project.image && (
          <div className="modal-preview-wrap">
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              className="modal-preview-img"
              loading="lazy"
            />
          </div>
        )}

        <div className="modal-sec">
          <h3>Overview</h3>
          <p>{project.description}</p>
        </div>

        {project.problem && (
          <div className="modal-sec">
            <h3>The Problem</h3>
            <p>{project.problem}</p>
          </div>
        )}

        {project.solution && (
          <div className="modal-sec">
            <h3>The Solution</h3>
            <p>{project.solution}</p>
          </div>
        )}

        {project.features && project.features.length > 0 && (
          <div className="modal-sec">
            <h3>Key Features &amp; Innovations</h3>
            <ul>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {project.architecture && project.architecture.length > 0 && (
          <div className="modal-sec">
            <h3>Tech Stack &amp; Architecture</h3>
            <div className="modal-arch-grid">
              {project.architecture.map((arch) => (
                <div className="modal-arch-card" key={arch.layer}>
                  <div className="modal-arch-layer">{arch.layer}</div>
                  <div className="modal-arch-stack">{arch.stack}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="modal-sec">
          <h3>Technologies Used</h3>
          <div className="modal-tech">
            {project.technologies.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="modal-links">
          {project.github && (
            <a className="btn" href={project.github} target="_blank" rel="noreferrer">
              View on GitHub <span className="arr">↗</span>
            </a>
          )}
          {project.live && (
            <a className="btn btn--accent" href={project.live} target="_blank" rel="noreferrer">
              Live Demo <span className="arr">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useReveal<HTMLElement>()
  const [selected, setSelected] = useState<Project | null>(null)

  const hover = (label: string | null) => () => cursorHover(label)

  return (
    <section id="work" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <p className="mono-label"><span className="tick">04</span>SELECTED WORK</p>
          <span className="count">( 0{projects.length} projects )</span>
        </div>

        <div className="projects-stack">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className={`project-card reveal reveal-d${Math.min(i + 1, 4)}`}
              onMouseEnter={hover('CASE STUDY')}
              onMouseLeave={hover(null)}
              onClick={() => setSelected(p)}
              role="button"
              tabIndex={0}
              aria-label={`Open ${p.title} case study`}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(p)}
            >
              <div className="pc-header">
                <span className="pc-idx">0{i + 1}</span>
                {p.status && (
                  <span className="pc-status">
                    <span className="pulse" />
                    {p.status}
                  </span>
                )}
              </div>
              <h3 className="pc-title">{p.title}</h3>
              <p className="pc-tagline">"{p.tagline}"</p>
              <div className="pc-expandable">
                <p className="pc-desc">{p.description}</p>
                <div className="pc-tech">
                  {p.technologies.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="pc-footer">
                  <span className="btn btn--accent pc-cta">
                    Read Case Study <span className="arr">→</span>
                  </span>
                  <span className="pc-arrow" aria-hidden="true">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
