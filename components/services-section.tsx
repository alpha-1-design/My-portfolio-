"use client"

import { useInView } from "@/hooks/use-in-view"
import { CodeIcon, ServerIcon, VideoIcon, CameraIcon, ArrowRightIcon } from "./icons"
import { TiltCard } from "./tilt-card"

const services = [
  {
    icon: CodeIcon,
    title: "Web & App Development",
    description:
      "Custom websites and mobile-friendly apps built for your business. You can choose to handle deployment yourself or let me handle everything end-to-end.",
    features: ["App Only (you deploy): from $80 / GHS 1,200", "Full Package (app + deployment + domain): from $150 / GHS 2,250", "E-Commerce & Business Apps", "APIs & Integrations"],
    price: "From $80 / GHS 1,200",
  },
  {
    icon: ServerIcon,
    title: "Website Deployment & Maintenance",
    description:
      "I handle all the technical stuff — hosting, domain setup, SSL, and keeping your site online. You focus on your business.",
    features: ["Cloud Hosting Setup", "Domain & SSL Configuration", "Monthly Maintenance: from $20 / GHS 300", "Automatic Deployments"],
    price: "From $20/mo / GHS 300/mo",
  },
  {
    icon: VideoIcon,
    title: "Video Editing",
    description:
      "Professional video editing for social media, events, weddings, and promotional content. Fast delivery, clean results.",
    features: ["Short Clips (Reels, TikTok): from $10 / GHS 150", "Long Form (Events, Weddings): from $30 / GHS 450", "Transitions & Effects", "Color Grading"],
    price: "From $10 / GHS 150",
  },
  {
    icon: CameraIcon,
    title: "Photo Editing",
    description:
      "Clean, professional photo editing for personal and business use. Product photos, portraits, flyers and more.",
    features: ["Per Photo: from $2 / GHS 30", "Bulk (10+ photos): from $15 / GHS 225", "Background Removal", "Color Correction & Retouching"],
    price: "From $2 / GHS 30",
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
            From concept to deployment, I deliver end-to-end solutions tailored to your needs. All prices are in USD with GHS equivalent shown. Prices are negotiable based on project scope — contact me to discuss!
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <TiltCard
              key={service.title}
              className={`group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 gradient-border ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
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
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
