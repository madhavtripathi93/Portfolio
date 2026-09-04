import { useEffect, useRef, useState } from 'react'

type CursorMode = { label: string } | null

/** Global cursor context-lite: components can request a hover label via custom events. */
export const CURSOR_EVENT = 'cursor-hover'

export function cursorHover(label: string | null) {
  window.dispatchEvent(new CustomEvent<CursorMode>(CURSOR_EVENT, { detail: label ? { label } : null }))
}

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(fine && !reduced)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let raf = 0

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
    }

    const loop = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onCursorEvent = (e: Event) => {
      const detail = (e as CustomEvent<CursorMode>).detail
      if (detail?.label && labelRef.current) {
        labelRef.current.textContent = detail.label
        ring.classList.add('is-active')
      } else {
        ring.classList.remove('is-active')
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener(CURSOR_EVENT, onCursorEvent)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener(CURSOR_EVENT, onCursorEvent)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} className="cursor-label" />
      </div>
    </>
  )
}
