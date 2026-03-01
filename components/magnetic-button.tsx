
"use client"

import { useRef, MouseEvent } from "react"

export function MagneticButton({ children, className, href, onClick }: { 
  children: React.ReactNode, 
  className?: string,
  href?: string,
  onClick?: () => void
}) {
  const btnRef = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const handleMouseLeave = () => {
    const btn = btnRef.current
    if (!btn) return
    btn.style.transform = "translate(0px, 0px)"
  }

  return (
    <a
      ref={btnRef}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transition: "transform 0.3s ease-out", display: "inline-flex" }}
    >
      {children}
    </a>
  )
}
