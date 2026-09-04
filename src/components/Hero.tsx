import { useEffect, useRef } from 'react'
import { profile, education } from '../data/profile'

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    let raf = 0
    const onMove = (e: MouseEvent) => {
      const el = glowRef.current
      if (!el) return
      const tx = e.clientX - window.innerWidth / 2
      const ty = e.clientY - window.innerHeight / 2
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(calc(-50% + ${tx * 0.05}px), calc(-20% + ${ty * 0.05}px))`
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <div ref={glowRef} className="bg-glow" style={{ top: '-18%', left: '50%' }} aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-left-col">
          <p className="mono-label hero-tag he he-1">
            <span className="tick">●</span>
            {profile.focus} — Chennai, India
          </p>
          <h1 className="h-display hero-name">
            <span className="he he-2">I BUILD</span>
            <span className="he he-3">BACKEND & AI</span>
            <span className="he he-4 accent">SYSTEMS THAT SCALE.</span>
          </h1>
          <p className="hero-sub he he-5">
            {profile.name} — Computer Science Engineering student at SRM IST with a 9.54 CGPA. Experienced in building REST APIs, RAG pipelines and LLM-based applications. Currently strengthening System Design, Cloud infrastructure and scalable backend development.
          </p>
          <div className="hero-ctas he he-6">
            <a href="#work" className="btn btn--accent" data-cursor="VIEW WORK">
              View My Work <span className="arr">→</span>
            </a>
            <a href="#contact" className="btn" data-cursor="CONTACT">
              Get In Touch <span className="arr">→</span>
            </a>
          </div>

          <div className="hero-edu-block he he-6">
            <div className="hero-edu-topbar">
              <span className="mono-label"><span className="tick">01</span>EDUCATION</span>
              <span className="hero-edu-count">( 0{education.length} )</span>
            </div>
            <div className="hero-edu-timeline">
              {education.map((ed) => (
                <div className="hero-edu-node" key={ed.institution}>
                  <div className="hero-edu-dot" />
                  <div className="hero-edu-info">
                    <div className="hero-edu-school-row">
                      <span className="hero-edu-school">{ed.institution}</span>
                      <span className="hero-edu-period">{ed.period}</span>
                    </div>
                    <p className="hero-edu-degree">{ed.degree}</p>
                    {ed.detail && <p className="hero-edu-detail">{ed.detail}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-right-col he he-5">
          <div className="hero-social-bar">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              data-cursor="GITHUB"
            >
              GitHub ↗
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              data-cursor="LINKEDIN"
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hero-social-link"
              data-cursor="EMAIL"
            >
              Email ↗
            </a>
          </div>

          <div className="hero-code-card">
            <div className="code-card-header">
              <div className="window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="code-card-title">madhav@srmist: ~/projects</span>
              <span className="code-card-badge">● LIVE</span>
            </div>
            <div className="code-card-body">
              <pre>
                <code>
                  <span className="code-keyword">const</span> <span className="code-var">engineer</span> = &#123;{'\n'}
                  {'  '}<span className="code-prop">name</span>: <span className="code-string">"Madhav Tripathi"</span>,{'\n'}
                  {'  '}<span className="code-prop">education</span>: <span className="code-string">"B.Tech CSE @ SRMIST '27"</span>,{'\n'}
                  {'  '}<span className="code-prop">cgpa</span>: <span className="code-accent">9.54</span>,{'\n'}
                  {'  '}<span className="code-prop">languages</span>: [<span className="code-string">"C++"</span>, <span className="code-string">"Python"</span>, <span className="code-string">"SQL"</span>],{'\n'}
                  {'  '}<span className="code-prop">stack</span>: &#123;{'\n'}
                  {'    '}<span className="code-prop">backend</span>: [<span className="code-string">"Flask"</span>, <span className="code-string">"Node.js"</span>, <span className="code-string">"REST APIs"</span>],{'\n'}
                  {'    '}<span className="code-prop">ai</span>: [<span className="code-string">"LangChain"</span>, <span className="code-string">"RAG"</span>, <span className="code-string">"Ollama"</span>]{'\n'}
                  {'  '}&#125;,{'\n'}
                  {'  '}<span className="code-prop">devops</span>: [<span className="code-string">"AWS"</span>, <span className="code-string">"Docker"</span>, <span className="code-string">"K8s"</span>],{'\n'}
                  {'  '}<span className="code-prop">focus</span>: <span className="code-string">"Backend & AI Systems"</span>{'\n'}
                  &#125;;
                </code>
              </pre>
            </div>
            <div className="code-card-footer">
              <span className="code-badge-pill">
                <span className="dot" /> 9.54 CGPA
              </span>
              <span className="code-badge-pill">⚡ Backend & AI</span>
              <span className="code-badge-pill">🏆 Best Project Award</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        SCROLL
        <span className="line" />
      </div>
    </section>
  )
}
