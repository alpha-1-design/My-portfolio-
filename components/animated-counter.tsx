"use client"

import { useEffect, useState } from "react"

interface AnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ end, suffix = "", duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    // Small delay so it visually starts after mount
    const timer = setTimeout(() => setStarted(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!started) return

    let startTime: number | null = null
    let frameId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        frameId = requestAnimationFrame(step)
      }
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [started, end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}
