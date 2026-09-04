import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { achievements } from '../data/profile'

export default function Achievements() {
  const ref = useReveal<HTMLElement>()
  const [viewImage, setViewImage] = useState<string | null>(null)

  return (
    <section id="achievements" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <p className="mono-label"><span className="tick">06</span>ACHIEVEMENTS &amp; RECOGNITION</p>
          <span className="count">( 0{achievements.length} milestones )</span>
        </div>
        <div className="ach-list">
          {achievements.map((a, i) => (
            <div className={`ach-item reveal reveal-d${Math.min(i + 1, 4)}`} key={a.title}>
              <span className="ach-idx">0{i + 1}</span>
              <div>
                <h3 className="ach-title">{a.title}</h3>
                <p className="ach-detail">{a.detail}</p>
                {a.image && (
                  <button
                    className="btn"
                    style={{ marginTop: '0.75rem', fontSize: '0.82rem', padding: '0.45rem 1rem' }}
                    onClick={() => setViewImage(a.image!)}
                  >
                    View Certificate ↗
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {viewImage && (
        <div
          className="lightbox open"
          role="dialog"
          aria-modal="true"
          aria-label="Achievement certificate viewer"
          onClick={(e) => e.target === e.currentTarget && setViewImage(null)}
        >
          <div className="lb-top">
            <div>
              <div className="lb-title">Achievement Certificate</div>
            </div>
            <div className="lb-actions">
              <button className="lb-btn" onClick={() => setViewImage(null)} aria-label="Close viewer">Close ✕</button>
            </div>
          </div>
          <div className="lb-stage">
            <img src={viewImage} alt="Achievement certificate" />
          </div>
        </div>
      )}
    </section>
  )
}
