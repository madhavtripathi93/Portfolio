import { useEffect, useState } from 'react'

export default function Preloader() {
  const [done, setDone] = useState(false)
  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 1050)
    return () => window.clearTimeout(t)
  }, [])
  return (
    <div className={`preloader${done ? ' done' : ''}`} aria-hidden="true">
      <div className="pl-name">
        <span style={{ animationDelay: '0.1s' }}>MADHAV TRIPATHI</span>
      </div>
      <div className="pl-bar"><i /></div>
    </div>
  )
}
