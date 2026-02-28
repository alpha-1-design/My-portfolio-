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
                {`I'm Samuel Mensah, a multidisciplinary developer and creative professional
                based in Ghana. I specialize in building high-performance web applications,
                managing robust hosting infrastructures, and producing compelling visual content.`}
              </p>
              <p>
                {`With a passion for clean code and pixel-perfect design, I transform ideas
                into scalable digital products. Whether it's a complex full-stack application,
                a cinematic video edit, or a polished photo composition, I bring the same
                level of precision and dedication to every project.`}
              </p>
              <p>
                {`I accept payments in USD, EUR, and GHS (Ghanaian Cedis), making it easy
                for clients worldwide to work with me.`}
              </p>
            </div>

            {/* Currencies */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["USD $", "EUR \u20ac", "GHS \u20b5"].map((currency) => (
                <span
                  key={currency}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-mono text-primary"
                >
                  {currency}
                </span>
              ))}
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
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm font-mono text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                      style={{
                        width: isInView ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100 + 500}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
