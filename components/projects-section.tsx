"use client"

import { useInView } from "@/hooks/use-in-view"
import { ExternalLinkIcon, GitHubIcon } from "./icons"
import Image from "next/image"

const projects = [
  {
    title: "Privacy First Security Toolkit",
    description: "A free, open source cybersecurity toolkit that runs entirely in the browser. 13 security tools including phishing detection, AES-256-GCM encryption, JWT decoder, scam detector and more. No accounts. No tracking. 100% local processing.",
    tags: ["JavaScript", "Web Crypto API", "Security", "Open Source"],
    liveUrl: "https://privacy-toolkit-ten.vercel.app/",
    githubUrl: "https://github.com/alpha-1-design/privacy-toolkit",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    category: "Security",
    featured: true,
  },
  {
    title: "Rehoboth Kitchen App",
    description: "A full-stack e-commerce PWA for a kitchen appliances business in Ghana. Features product listings, cart, orders, admin dashboard, push notifications, and WhatsApp receipts.",
    tags: ["React", "Node.js", "MongoDB", "Cloudinary"],
    liveUrl: "https://rehoboth-kitchen-app.vercel.app/",
    githubUrl: "https://github.com/alpha-1-design",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    category: "Web App",
    featured: true,
  },
  {
    title: "Samuel Mensah Portfolio",
    description: "A modern animated developer portfolio with tilt cards, magnetic buttons, particle effects and a booking system.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://samuel-mensah.vercel.app/",
    githubUrl: "https://github.com/alpha-1-design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    category: "Design",
    featured: false,
  },
  {
    title: "Brand Video Campaign",
    description: "High-impact promotional video content with motion graphics and color grading optimized for social media.",
    tags: ["CapCut", "Video Editing", "Color Grading"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    category: "Video",
    featured: false,
  },
  {
    title: "Product Photo Editing",
    description: "Professional product photography retouching for e-commerce listings. Background removal and color correction.",
    tags: ["Photoshop", "Lightroom", "Photo Editing"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    category: "Design",
    featured: false,
  },
]

export function ProjectsSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="projects" className="py-24 lg:py-32" ref={ref as React.RefObject<HTMLElement>}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary/30" />
            <span className="text-sm font-mono text-primary tracking-widest uppercase">Projects</span>
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Real projects built and deployed for real people.
          </p>
        </div>

        {/* Featured Project */}
        {projects.filter((p) => p.featured).map((project, index) => (
          <div key={project.title} className={`mb-12 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute top-4 left-4 text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">FEATURED</span>
              </div>
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-full border border-border bg-secondary text-muted-foreground">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <GitHubIcon className="w-4 h-4" /> GitHub
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
                    Live Demo <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter((p) => !p.featured).map((project, index) => (
            <div key={project.title} className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: `${index * 100 + 300}ms` }}>
              <div className="relative h-48 w-full overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute top-3 left-3 text-xs font-mono text-primary bg-card/80 border border-primary/20 px-2 py-0.5 rounded-full">{project.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  {project.githubUrl !== "#" ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <GitHubIcon className="w-3.5 h-3.5" /> GitHub
                    </a>
                  ) : null}
                  {project.liveUrl !== "#" ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-primary hover:opacity-80 transition-opacity">
                      <ExternalLinkIcon className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground/50 italic">Coming Soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
