import { useReveal } from '../hooks/useReveal'
import { about, stats } from '../data/profile'

export default function About() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="about" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <p className="mono-label"><span className="tick">02</span>WHO I AM</p>
        </div>
        <p className="about-lede reveal reveal-d1">
          {about.map((seg, i) =>
            seg.highlight ? <b key={i}>{seg.text}</b> : <span key={i}>{seg.text}</span>,
          )}
        </p>
        <div className="stats-row reveal reveal-d2">
          {stats.map((s) => (
            <div className="stat-cell" key={s.label}>
              <div className="num">
                <span className="tick">/</span> {s.value}
              </div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
