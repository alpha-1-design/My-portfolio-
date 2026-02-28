"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { useVisitor } from "./visitor-provider"
import { CalendarIcon, DollarIcon, CheckIcon, SendIcon } from "./icons"

const serviceOptions = [
  { value: "web-dev", label: "Web Development", price: "From $500" },
  { value: "hosting", label: "Hosting & DevOps", price: "From $100/mo" },
  { value: "video-edit", label: "Video Editing", price: "From $150" },
  { value: "photo-edit", label: "Photo Editing", price: "From $50" },
]

const currencyOptions = [
  { value: "USD", label: "USD ($)", symbol: "$" },
  { value: "EUR", label: "EUR (\u20ac)", symbol: "\u20ac" },
  { value: "GHS", label: "GHS (\u20b5)", symbol: "\u20b5" },
]

export function BookingSection() {
  const { ref, isInView } = useInView(0.1)
  const { visitorId } = useVisitor()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "",
    currency: "USD",
    budget: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const serviceLabels: Record<string, string> = {
        "web-dev": "Web Development",
        "hosting": "Hosting & DevOps",
        "video-edit": "Video Editing",
        "photo-edit": "Photo Editing",
      }
      const message = `Hello Samuel! I'd like to book a service.

*Name:* ${formState.name}
*Email:* ${formState.email}
*Service:* ${serviceLabels[formState.service] || formState.service}
*Budget:* ${formState.currency} ${formState.budget || "Not specified"}

*Details:*
${formState.description}`

      const response = { ok: true }
      window.open("https://wa.me/233553016346?text=" + encodeURIComponent(message), "_blank")

      if (response.ok) {
        const data = await response.json()
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          service: "",
          currency: "USD",
          budget: "",
          description: "",
        })
        // Also open mailto as fallback to ensure delivery
        if (data.mailto) {
          window.open(data.mailto, "_blank")
        }
      }
    } catch {
      alert("Something went wrong. Please try again or email directly at alphariansamuel@gmail.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="booking" className="py-24 lg:py-32" ref={ref as React.RefObject<HTMLElement>}>
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
              Book a Service
            </span>
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            {"Let's Work "}
            <span className="text-primary">Together</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Fill out the form below and I will get back to you within 24 hours. Payments accepted in
            USD, EUR, and GHS.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div
              className={`text-center py-16 rounded-2xl border border-primary/30 bg-card transition-all duration-700 ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <CheckIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Booking Request Sent!</h3>
              <p className="mt-2 text-muted-foreground">
                I will review your request and respond to your email within 24 hours.
              </p>
              <p className="mt-4 text-xs font-mono text-muted-foreground">
                Reference: {visitorId}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-sm text-primary hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={`rounded-2xl border border-border bg-card p-8 lg:p-10 space-y-6 transition-all duration-700 delay-200 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="booking-name" className="block text-sm font-medium text-foreground mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="booking-email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="booking-email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="booking-service" className="block text-sm font-medium text-foreground mb-1.5">
                  <CalendarIcon className="w-4 h-4 inline mr-1.5" />
                  Service Required
                </label>
                <select
                  id="booking-service"
                  name="service"
                  required
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label} - {s.price}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="booking-currency" className="block text-sm font-medium text-foreground mb-1.5">
                    <DollarIcon className="w-4 h-4 inline mr-1.5" />
                    Preferred Currency
                  </label>
                  <select
                    id="booking-currency"
                    name="currency"
                    value={formState.currency}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  >
                    {currencyOptions.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="booking-budget" className="block text-sm font-medium text-foreground mb-1.5">
                    Budget Range
                  </label>
                  <input
                    id="booking-budget"
                    name="budget"
                    type="text"
                    value={formState.budget}
                    onChange={handleChange}
                    placeholder={`e.g. ${
                      currencyOptions.find((c) => c.value === formState.currency)?.symbol
                    }500 - ${
                      currencyOptions.find((c) => c.value === formState.currency)?.symbol
                    }1000`}
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="booking-description" className="block text-sm font-medium text-foreground mb-1.5">
                  Project Description
                </label>
                <textarea
                  id="booking-description"
                  name="description"
                  required
                  rows={5}
                  value={formState.description}
                  onChange={handleChange}
                  placeholder="Describe your project, goals, and timeline..."
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-50 glow-cyan"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <SendIcon className="w-4 h-4" />
                    Send Booking Request
                  </>
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                Your request will be sent to{" "}
                <span className="text-primary font-mono">alphariansamuel@gmail.com</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
