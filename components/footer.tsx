"use client"

import { GitHubIcon, EmailIcon, ShieldIcon } from "./icons"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-xs font-bold text-primary-foreground font-mono">S</span>
              </div>
              <span className="text-base font-bold text-foreground">
                Samuel Mensah
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-Stack Developer & Creative Engineer based in Ghana. Available worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#services", label: "Services" },
                { href: "#projects", label: "Projects" },
                { href: "#booking", label: "Book a Service" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:alphariansamuel@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <EmailIcon className="w-4 h-4" />
                alphariansamuel@gmail.com
              </a>
              <a
                href="https://github.com/alpha-1-design"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                alpha-1-design
              </a>
              <a
                href="/privacy"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ShieldIcon className="w-4 h-4" />
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {`\u00a9 ${currentYear} Samuel Mensah. All rights reserved.`}
          </p>
          <p className="text-xs text-muted-foreground">
            Governed by the laws of the Republic of Ghana
          </p>
        </div>
      </div>
    </footer>
  )
}
