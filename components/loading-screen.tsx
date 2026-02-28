"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 80)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => setFadeOut(true), 300)
      const hideTimer = setTimeout(() => setHidden(true), 1000)
      return () => {
        clearTimeout(timer)
        clearTimeout(hideTimer)
      }
    }
  }, [progress])

  if (hidden) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-700 ${
        fadeOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Logo */}
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary animate-pulse-glow">
        <span className="text-2xl font-bold text-primary-foreground font-mono">S</span>
      </div>

      {/* Name */}
      <h2 className="text-xl font-bold text-foreground tracking-tight mb-1">
        Samuel Mensah
      </h2>
      <p className="text-sm text-muted-foreground mb-8 font-mono">
        Creative Engineer
      </p>

      {/* Progress bar */}
      <div className="w-48 h-0.5 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-200 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Progress text */}
      <span className="mt-3 text-xs font-mono text-muted-foreground">
        {Math.min(Math.floor(progress), 100)}%
      </span>
    </div>
  )
}
