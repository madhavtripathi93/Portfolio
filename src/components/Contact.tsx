import { useReveal } from '../hooks/useReveal'
import { useMagnetic } from '../hooks/useMagnetic'
import { profile } from '../data/profile'

export default function Contact() {
  const ref = useReveal<HTMLElement>()
  const btn = useMagnetic<HTMLAnchorElement>(0.18)

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <p className="mono-label reveal"><span className="tick">07</span>GET IN TOUCH</p>
        <h2 className="h-display reveal reveal-d1">
          LET&rsquo;S BUILD<br />SOMETHING.
        </h2>
        <p className="contact-sub reveal reveal-d2">
          Open to backend engineering, AI/ML, cloud/DevOps opportunities, collaborations, and high-impact problems.
        </p>

        <div className="contact-ctas reveal reveal-d3" style={{ marginTop: '2.5rem' }}>
          <a
            ref={btn.ref}
            onMouseMove={btn.onMouseMove}
            onMouseLeave={btn.onMouseLeave}
            href={`mailto:${profile.email}?subject=${encodeURIComponent("Let's connect — Portfolio Inquiry")}`}
            className="btn btn--accent"
            data-cursor="OPEN MAIL"
            style={{ fontSize: '1.05rem', padding: '1rem 2.2rem' }}
          >
            Send Message <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
