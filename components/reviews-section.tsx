"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { useVisitor } from "./visitor-provider"
import { StarIcon, QuoteIcon, SendIcon, UserIcon } from "./icons"

interface Review {
  id: string
  name: string
  rating: number
  text: string
  visitorId: string
  date: string
}

const seedReviews: Review[] = [
  {
    id: "1",
    name: "Kwame",
    rating: 5,
    text: "I needed a professional flyer for my business and Samuel delivered beyond my expectations. Premium quality, fast turnaround. Very impressed!",
    visitorId: "SAM-XXXX-SEED",
    date: "2025-11-20",
  },
  {
    id: "2",
    name: "Grace U.",
    rating: 5,
    text: "Samuel built a full e-commerce app for our kitchen appliances business. It has everything — product listings, orders, admin dashboard. Truly professional work.",
    visitorId: "SAM-XXXX-SEED",
    date: "2026-01-10",
  },
  {
    id: "3",
    name: "Church Client",
    rating: 5,
    text: "Samuel edited our wedding video beautifully. Every moment was captured perfectly. We will treasure it forever. Thank you!",
    visitorId: "SAM-XXXX-SEED",
    date: "2026-02-14",
  },
]

export function ReviewsSection() {
  const { ref, isInView } = useInView(0.05)
  const { visitorId } = useVisitor()
  const [reviews, setReviews] = useState<Review[]>(seedReviews)
  const [name, setName] = useState("")
  const [rating, setRating] = useState(5)
  const [text, setText] = useState("")
  const [hoveredStar, setHoveredStar] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !text.trim()) return

    const newReview: Review = {
      id: Date.now().toString(),
      name: name.trim(),
      rating,
      text: text.trim(),
      visitorId,
      date: new Date().toISOString().split("T")[0],
    }

    setReviews([newReview, ...reviews])
    setName("")
    setText("")
    setRating(5)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      id="reviews"
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
              Reviews
            </span>
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            What people say about working with me. No sign-up required to leave a review.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Reviews list */}
          <div className="lg:col-span-3 space-y-4">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`rounded-xl border border-border bg-card p-6 transition-all duration-500 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="text-sm font-semibold text-foreground">{review.name}</h4>
                      <span className="text-xs text-muted-foreground font-mono">{review.date}</span>
                    </div>
                    <div className="flex items-center gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < review.rating ? "text-primary" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="mt-3 relative">
                      <QuoteIcon className="absolute -top-1 -left-1 w-4 h-4 text-primary/20" />
                      <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                        {review.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Review form */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="rounded-xl border border-border bg-card p-6 sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-1">Leave a Review</h3>
              <p className="text-xs text-muted-foreground mb-6">No account needed</p>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <StarIcon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">Thank you for your review!</p>
                  <p className="text-sm text-muted-foreground mt-1">Your feedback is appreciated.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="review-name" className="block text-sm font-medium text-foreground mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="review-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                      className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Rating
                    </label>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setRating(i + 1)}
                          onMouseEnter={() => setHoveredStar(i + 1)}
                          onMouseLeave={() => setHoveredStar(0)}
                          className="transition-transform hover:scale-110"
                          aria-label={`Rate ${i + 1} star${i > 0 ? "s" : ""}`}
                        >
                          <StarIcon
                            className={`w-6 h-6 ${
                              i < (hoveredStar || rating)
                                ? "text-primary"
                                : "text-muted"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="review-text" className="block text-sm font-medium text-foreground mb-1.5">
                      Your Review
                    </label>
                    <textarea
                      id="review-text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Share your experience..."
                      required
                      rows={4}
                      className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-cyan"
                  >
                    <SendIcon className="w-4 h-4" />
                    Submit Review
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
