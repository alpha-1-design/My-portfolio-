"use client"

import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"

const skills = [
  { name: "App Development (React)", level: 70 },
  { name: "Backend Development (Node.js)", level: 65 },
  { name: "AI-Assisted Development", level: 90 },
  { name: "Video Editing (CapCut)", level: 85 },
  { name: "Web Deployment (Vercel / Render)", level: 80 },
  { name: "Database Management (MongoDB)", level: 65 },
  { name: "Problem Solving", level: 85 },
  { name: "Learning & Adapting", level: 95 },
]

export function AboutSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref as React.RefObject<HTMLElement>}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left - Bio */}
          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-primary/30 max-w-12" />
              <span className="text-sm font-mono text-primary tracking-widest uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
              Crafting Digital
              <br />
              <span className="text-primary">Experiences</span>
            </h2>
            <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {`I'm Samuel Mensah — a self-taught developer and creative from Ghana who turns ideas into real digital products. I don't just write code; I solve problems, build businesses, and create experiences people actually use.`}
              </p>
              <p>
                {`In one year I've built and deployed a full e-commerce app used by a real business — with payments, push notifications, admin dashboard, and cloud storage. That's what I bring to every project: full commitment until it works.`}
              </p>

            </div>


          </div>

          {/* Right - Skills */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/10">
                <Image
                  src="https://res.cloudinary.com/dcfovqlvr/image/upload/v1772322266/portfolio/covdj2muyyckh4wnzie7.jpg"
                  alt="Samuel Mensah"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Technical Proficiency</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const radius = 36;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (isInView ? skill.level / 100 : 0) * circumference;
                return (
                  <div key={skill.name} className="flex flex-col items-center gap-2">
                    <div className="relative w-20 h-20">
                      <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                        <circle cx="40" cy="40" r={radius} fill="none" stroke="currentColor" strokeWidth="6" className="text-secondary" />
                        <circle
                          cx="40" cy="40" r={radius} fill="none"
                          stroke="oklch(0.75 0.15 190)" strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          style={{ transition: `stroke-dashoffset 1.2s ease ${index * 150 + 400}ms` }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary font-mono">{skill.level}%</span>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-foreground text-center leading-tight">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
