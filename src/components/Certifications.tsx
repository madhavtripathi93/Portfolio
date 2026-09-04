import { useEffect, useMemo, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { cursorHover } from './Cursor'
import { certifications } from '../data/certifications'
import type { Certification } from '../data/types'

const FILTERS: { id: 'all' | Certification['category']; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'salesforce', label: 'Salesforce' },
  { id: 'nptel', label: 'NPTEL' },
  { id: 'course', label: 'Courses' },
]

function CertLightbox({ cert, onClose }: { cert: Certification; onClose: () => void }) {
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(z + 0.25, 3))
      if (e.key === '-') setZoom((z) => Math.max(z - 0.25, 0.5))
      if (e.key === '0') setZoom(1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="lightbox open" role="dialog" aria-modal="true" aria-label={`${cert.title} certificate viewer`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="lb-top">
        <div>
          <div className="lb-title">{cert.title}</div>
          <div className="lb-sub">{cert.issuer} · {cert.date}</div>
        </div>
        <div className="lb-actions">
          <button className="lb-btn" onClick={() => setZoom((z) => Math.min(z + 0.25, 3))} aria-label="Zoom in">＋</button>
          <button className="lb-btn" onClick={() => setZoom((z) => Math.max(z - 0.25, 0.5))} aria-label="Zoom out">－</button>
          <button className="lb-btn" onClick={() => setZoom(1)} aria-label="Reset zoom">Reset</button>
          <a className="lb-btn" href={cert.file} target="_blank" rel="noreferrer">Open PDF ↗</a>
          <a className="lb-btn" href={cert.file} download>Download</a>
          <button className="lb-btn" onClick={onClose} aria-label="Close viewer">Close ✕</button>
        </div>
      </div>
      <div className="lb-stage">
        <img
          src={cert.image}
          alt={`${cert.title} certificate issued by ${cert.issuer}`}
          style={{ transform: `scale(${zoom})` }}
        />
      </div>
      {cert.credentialId && (
        <div className="lb-cred">
          Credential ID: {cert.credentialId}
          {cert.verifyUrl && <> · <a className="u-link" href={cert.verifyUrl} target="_blank" rel="noreferrer">Verify ↗</a></>}
        </div>
      )}
      {!cert.credentialId && cert.verifyUrl && (
        <div className="lb-cred"><a className="u-link" href={cert.verifyUrl} target="_blank" rel="noreferrer">Verify credential ↗</a></div>
      )}
    </div>
  )
}

export default function Certifications() {
  const ref = useReveal<HTMLElement>()
  const [filter, setFilter] = useState<(typeof FILTERS)[number]['id']>('all')
  const [selected, setSelected] = useState<Certification | null>(null)

  const list = useMemo(
    () => (filter === 'all' ? certifications : certifications.filter((c) => c.category === filter)),
    [filter],
  )

  const hover = (label: string | null) => () => cursorHover(label)

  return (
    <section id="certifications" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <p className="mono-label"><span className="tick">05</span>CERTIFICATIONS &amp; CREDENTIALS</p>
          <span className="count">( {certifications.length} credentials )</span>
        </div>

        <div className="cert-filters reveal" role="tablist" aria-label="Filter certifications">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              className={`cert-filter${filter === f.id ? ' active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="cert-grid">
          {list.map((c) => (
            <button
              key={c.id}
              className="cert-card"
              onClick={() => setSelected(c)}
              onMouseEnter={hover('VIEW CERT')}
              onMouseLeave={hover(null)}
              aria-label={`View ${c.title} certificate`}
            >
              <span className="cert-thumb">
                <img src={c.image} alt={`${c.title} certificate preview`} width={640} height={453} loading="lazy" />
                <span className="shade" aria-hidden="true" />
                <span className="view-cta" aria-hidden="true">VIEW CERTIFICATE</span>
              </span>
              <span className="cert-body">
                <span className="cert-issuer">{c.issuer}</span>
                <span className="cert-title">{c.title}</span>
                <span className="cert-date">{c.date}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && <CertLightbox cert={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
