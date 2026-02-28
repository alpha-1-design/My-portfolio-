"use client"

import { useInView } from "@/hooks/use-in-view"
import {
  GitHubIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  SpotifyIcon,
  TelegramIcon,
  TikTokIcon,
  WhatsAppIcon,
  YouTubeIcon,
  PinterestIcon,
  DeltaChatIcon,
} from "./icons"

const socials = [
  { icon: EmailIcon, label: "Email", href: "mailto:alphariansamuel@gmail.com", color: "hover:text-red-400" },
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/alpha-1-design", color: "hover:text-foreground" },
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/share/1E5LRhNPtV/", color: "hover:text-blue-400" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/samuelmensah607?igsh=MXVkcnZsbzQxbHk5Zg==", color: "hover:text-pink-400" },
  { icon: YouTubeIcon, label: "YouTube", href: "https://youtube.com/@alpharianbaby?si=4f0WwhmcszvO61JV", color: "hover:text-red-500" },
  { icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@alpharianbaby1?_r=1&_t=ZS-94HZS59xJLQ", color: "hover:text-foreground" },
  { icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/qr/APJHQCTKZMFLA1", color: "hover:text-green-400" },
  { icon: TelegramIcon, label: "Telegram", href: "https://t.me/Alpharianbaby1", color: "hover:text-blue-400" },
  { icon: SpotifyIcon, label: "Spotify", href: "https://open.spotify.com/user/31no777qrxgz76zx2iawcnw2rhv4?si=zMEe5mMbTbCc_P6wFdxOPQ", color: "hover:text-green-500" },
  { icon: PinterestIcon, label: "Pinterest", href: "https://pin.it/4UiEORro6", color: "hover:text-red-400" },
  { icon: DeltaChatIcon, label: "Delta Chat", href: "https://i.delta.chat/#8847EB444482A1140E1ED50154845ED2A31BF3E2&i=WUqgEGuYmsCfWNzy6DSLWAmd&s=1YLwElCPJRKDnIfNDXZDoVPo&a=pxt8kdf8u%40arcanechat.me&n=Sam", color: "hover:text-primary" },
]

export function ContactSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30" ref={ref as React.RefObject<HTMLElement>}>
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
              Connect
            </span>
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Find Me <span className="text-primary">Everywhere</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Reach out on any platform. I am always open to new connections and opportunities.
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {socials.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className={`group relative flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${social.color} ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
              <social.icon className="relative z-10 w-6 h-6 text-muted-foreground transition-all duration-300 group-hover:scale-125" />
              <span className="relative z-10 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {social.label}
              </span>
            </a>
          ))}
        </div>

        {/* Direct email */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-muted-foreground mb-3">Or email me directly at</p>
          <a
            href="mailto:alphariansamuel@gmail.com"
            className="text-lg sm:text-xl font-mono text-primary hover:underline transition-all"
          >
            alphariansamuel@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
