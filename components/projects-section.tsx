"use client"

import { useInView } from "@/hooks/use-in-view"
import { ExternalLinkIcon, GitHubIcon } from "./icons"

const projects = [
  {
    title: "Rehoboth Kitchen App",
    description:
      "A full-stack e-commerce PWA for Rehoboth Kitchen Ventures — a kitchen appliances business in Ghana. Features product listings, cart, orders, admin dashboard, push notifications, and WhatsApp receipts.",
    tags: ["React", "Node.js", "MongoDB", "Cloudinary", "Vercel", "Render"],
    liveUrl: "https://rehoboth-kitchen-app.vercel.app/",
    githubUrl: "https://github.com/alpha-1-design",
    featured: true,
  },
]

export function ProjectsSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="projects" className="py-24 lg:py-32" ref={ref as React.RefObject<HTMLElement>}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary/30" />
            <span className="text-sm font-mono text-primary tracking-widest uppercase">
              Projects
            </span>
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A selection of projects that showcase my skills and dedication to quality.
          </p>
        </div>

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <div
              key={project.title}
              className={`mb-12 transition-all duration-700 delay-200 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                {/* Browser mockup */}
                <div className="bg-secondary/50 px-4 py-3 flex items-center gap-3 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/40" />
                    <div className="w-3 h-3 rounded-full bg-chart-4/40" />
                    <div className="w-3 h-3 rounded-full bg-primary/40" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-muted-foreground font-mono max-w-md truncate">
                      {project.liveUrl.replace("https://", "")}
                    </div>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                          FEATURED
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">
                          #{String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-3 py-1.5 rounded-full border border-border bg-secondary text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-secondary text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                        aria-label="View source code on GitHub"
                      >
                        <GitHubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                      >
                        Visit Live
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* More projects coming */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 rounded-xl border border-dashed border-border bg-card/50 px-8 py-6">
            <div className="text-2xl font-mono text-primary">+</div>
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">More projects coming soon</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Currently building more exciting things
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
