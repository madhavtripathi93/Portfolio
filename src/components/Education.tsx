import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { education } from '../data/profile'

export default function Education() {
  const ref = useReveal<HTMLElement>()
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    const fill = fillRef.current
    if (!root || !fill) return
    const items = Array.from(root.querySelectorAll<HTMLElement>('.tl-item'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.add('in')
          io.unobserve(e.target)
          const r = e.target as HTMLElement
          const top = r.offsetTop + 10
          fill.style.height = `${Math.max(top, parseFloat(fill.style.height || '0'))}px`
        })
      },
      { threshold: 0.3 },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ref])

  return (
    <section id="education" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <h2 className="h-section">Education</h2>
          <span className="count">( 0{education.length} )</span>
        </div>
        <div className="timeline">
          <div className="tl-fill" ref={fillRef} aria-hidden="true" />
          {education.map((ed, i) => (
            <div className={`tl-item reveal reveal-d${Math.min(i + 1, 4)}`} key={ed.institution}>
              <span className="tl-period">{ed.period}</span>
              <h3 className="tl-school">{ed.institution}</h3>
              <p className="tl-degree">{ed.degree}</p>
              {ed.location && (
                <p className="tl-meta">
                  {ed.location}
                  {ed.detail ? ` · ${ed.detail}` : ''}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
