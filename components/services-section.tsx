"use client"

import { useInView } from "@/hooks/use-in-view"
import { CodeIcon, ServerIcon, VideoIcon, CameraIcon, ArrowRightIcon } from "./icons"

const services = [
  {
    icon: CodeIcon,
    title: "Web Development",
    description:
      "Full-stack web applications built with React, Next.js, TypeScript, and modern frameworks. Responsive, accessible, and blazing fast.",
    features: ["Custom Web Apps", "E-Commerce", "SaaS Platforms", "APIs & Integrations"],
    price: "From $500",
  },
  {
    icon: ServerIcon,
    title: "Hosting & DevOps",
    description:
      "Reliable hosting solutions, server management, and deployment pipelines. Your application stays online, secure, and performant.",
    features: ["Cloud Hosting", "Domain Setup", "SSL Certificates", "CI/CD Pipelines"],
    price: "From $100/mo",
  },
  {
    icon: VideoIcon,
    title: "Video Editing",
    description:
      "Professional video editing for social media, YouTube, corporate content, and promotional material. Cinematic quality guaranteed.",
    features: ["Social Media Edits", "YouTube Content", "Motion Graphics", "Color Grading"],
    price: "From $150",
  },
  {
    icon: CameraIcon,
    title: "Photo Editing",
    description:
      "High-end photo retouching, manipulation, and enhancement. From product photography to creative composites.",
    features: ["Retouching", "Background Removal", "Color Correction", "Composites"],
    price: "From $50",
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView(0.05)

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-secondary/30"
      ref={ref as React.RefObject<HTMLElement>}
    >
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
              Services
            </span>
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            What I Can <span className="text-primary">Build</span> For You
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From concept to deployment, I deliver end-to-end solutions tailored to your needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 gradient-border ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <service.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <span className="text-lg font-bold text-primary font-mono">
                  {service.price}
                </span>
                <a
                  href="#booking"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group/link"
                >
                  Book now
                  <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
