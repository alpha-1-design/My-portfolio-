"use client"

import { useInView } from "@/hooks/use-in-view"
import { CodeIcon, ServerIcon, VideoIcon, CameraIcon, ArrowRightIcon } from "./icons"
import { TiltCard } from "./tilt-card"

const services = [
  {
    icon: CodeIcon,
    title: "Web & App Development",
    description: "Custom websites and mobile-friendly apps built for your business.",
    features: ["Responsive Design", "Single Page Applications", "E-Commerce Solutions", "Progressive Web Apps", "Performance Optimization"],
    price: "From $80 / GHS 1,200",
    pitch: "When you work with me, you are not just getting code — you are getting a digital partner who thinks about your business. I build apps that are fast, beautiful, and built to grow with you. Every button, every page, every feature is designed with your customers in mind. You will get a product that works, that people love to use, and that makes your business look world-class.",
  },
  {
    icon: ServerIcon,
    title: "Website Deployment & Maintenance",
    description: "I handle all the technical stuff — hosting, domain, SSL, and keeping your site online.",
    features: ["Cloud Hosting Setup", "Domain & SSL Configuration", "Monthly Maintenance", "Automatic Deployments", "24/7 Uptime Monitoring"],
    price: "From $20/mo / GHS 300/mo",
    pitch: "Most businesses lose customers because their website is slow, broken, or offline. I make sure that never happens to you. I set everything up properly from day one — fast servers, secure connections, automatic updates — so you never have to worry about the technical side again. You focus on your business, I keep your digital presence running perfectly.",
  },
  {
    icon: VideoIcon,
    title: "Video Editing",
    description: "Professional video editing for social media, events, weddings, and promotional content.",
    features: ["Short Clips (Reels, TikTok)", "Long Form (Events, Weddings)", "Motion Graphics & Effects", "Color Grading", "Social Media Content"],
    price: "From $10 / GHS 150",
    pitch: "In today's world, video is everything. A great video can make your business go viral, get you clients, and build your brand faster than anything else. I edit videos that stop people from scrolling — with sharp cuts, great color, and a story that connects. Whether it is a one-minute reel or a full event video, I deliver content that gets results.",
  },
  {
    icon: CameraIcon,
    title: "Photo Editing",
    description: "Clean, professional photo editing for personal and business use.",
    features: ["Background Removal", "Color Correction & Retouching", "Product Photography Editing", "Portrait Enhancement", "Bulk Photo Processing"],
    price: "From $2 / GHS 30",
    pitch: "Your photos are the first thing people see when they find you online. Bad photos lose clients before you even get a chance to speak. I transform ordinary photos into professional, eye-catching images that make people stop and pay attention. Your products will look premium, your profile will look credible, and your brand will stand out.",
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
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Pitch */}
              <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-xs text-muted-foreground leading-relaxed italic">{service.pitch}</p>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-end pt-6 border-t border-border">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group/link"
                >
                  Get a Quote
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
