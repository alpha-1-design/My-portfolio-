"use client"

import { useEffect, useState } from "react"
import { ArrowRightIcon, CodeIcon } from "./icons"
import { MagneticButton } from "./magnetic-button"
import { AnimatedCounter } from "./animated-counter"

const titles = [
  "Full-Stack Developer",
  "Hosting Specialist",
  "Video Editor",
  "Photo Editor",
  "Creative Engineer",
]

export function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const title = titles[currentTitle]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayed(title.slice(0, displayed.length + 1))
          if (displayed.length === title.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setDisplayed(title.slice(0, displayed.length - 1))
          if (displayed.length === 0) {
            setIsDeleting(false)
            setCurrentTitle((prev) => (prev + 1) % titles.length)
          }
        }
      },
      isDeleting ? 40 : 80
    )
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, currentTitle])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.75 0.15 190) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.15 190) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Status badge */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm text-muted-foreground font-medium">
                Available for hire
              </span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
              <span className="text-lg">🇬🇭</span>
              <span className="text-sm text-muted-foreground font-medium">
                Based in Ghana, Available Worldwide
              </span>
            </div>
          </div>
        </div>

        <h1
          className={`text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl text-foreground text-balance transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Samuel Mensah
        </h1>

        <div
          className={`mt-6 h-12 sm:h-16 flex items-center justify-center transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-2xl sm:text-4xl font-bold text-primary font-mono glow-text">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p
          className={`mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          I craft digital experiences that merge technical precision with creative vision.
          From full-stack development to multimedia production, I deliver solutions that
          perform at the highest level.
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#booking"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90 glow-cyan"
          >
            Book a Service
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:border-primary/50"
          >
            <CodeIcon className="w-4 h-4" />
            View My Work
          </a>
        </div>

        {/* Stats */}
        <div
          className={`mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto transition-all duration-1000 delay-[900ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { end: 7, suffix: "+", label: "Projects" },
            { end: 1, suffix: "+", label: "Years Exp." },
            { end: 100, suffix: "%", label: "Dedication" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-2xl sm:text-3xl font-bold text-primary font-mono transition-transform duration-300 group-hover:scale-110">
                {mounted ? (
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 transition-all duration-1000 delay-[1100ms] ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              Scroll to explore
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
