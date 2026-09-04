import { useReveal } from '../hooks/useReveal'
import { skills } from '../data/profile'

export default function Skills() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <p className="mono-label"><span className="tick">03</span>SKILLS &amp; TECHNOLOGIES</p>
          <span className="count">( 0{skills.length} domains )</span>
        </div>
        <div className="skills-grid">
          {skills.map((group, gi) => (
            <div className={`skill-cat reveal reveal-d${Math.min(gi + 1, 4)}`} key={group.label}>
              <div className="cat-name">{group.label}</div>
              <div className="skill-tags">
                {group.skills.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
