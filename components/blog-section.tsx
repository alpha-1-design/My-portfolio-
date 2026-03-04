"use client"

import { useInView } from "@/hooks/use-in-view"
import { ArrowRightIcon } from "./icons"

const posts = [
  {
    category: "Tutorial",
    title: "How I Built a Full E-Commerce App in 3 Months",
    date: "March 1, 2026",
    read: "6 min read",
    summary: "From zero to a live shopping app with payments, admin dashboard, push notifications and cloud storage — here is exactly how I did it.",
  },
  {
    category: "Insights",
    title: "Why Every Small Business in Ghana Needs a Website in 2026",
    date: "February 20, 2026",
    read: "4 min read",
    summary: "Most businesses in Ghana still rely only on WhatsApp. Here is why that is leaving money on the table and what to do about it.",
  },
  {
    category: "Creative",
    title: "Video Editing Tips That Will Make Your Reels Go Viral",
    date: "February 10, 2026",
    read: "3 min read",
    summary: "Simple editing tricks I use every day that make videos look professional even when shot on a phone.",
  },
  {
    category: "Tutorial",
    title: "How to Deploy Your Website for Free Using Vercel and Render",
    date: "January 25, 2026",
    read: "5 min read",
    summary: "A step by step guide to getting your website live on the internet without spending a single dollar on hosting.",
  },
]

export function BlogSection() {
  const { ref, isInView } = useInView(0.05)

  return (
    <section
      id="blog"
      className="py-24 lg:py-32"
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
              Blog
            </span>
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Latest <span className="text-primary">Thoughts</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Insights on development, design, and building things in Africa.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <div
              key={post.title}
              className={`group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 cursor-pointer ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="inline-block text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {post.summary}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground font-mono">
                  {post.date} • {post.read}
                </div>
                <span className="flex items-center gap-1 text-xs text-primary font-medium group-hover:gap-2 transition-all">
                  Read More <ArrowRightIcon className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
