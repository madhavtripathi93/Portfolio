import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return
        const max = document.documentElement.scrollHeight - window.innerHeight
        el.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])
  return <div ref={ref} className="scroll-progress" aria-hidden="true" />
}
