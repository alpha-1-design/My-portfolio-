"use client"

import { useInView } from "@/hooks/use-in-view"
import { ArrowRightIcon } from "./icons"

const posts = [
  {
    category: "Tutorial",
    title: "How I Built a Full E-Commerce App in 3 Months",
    date: "March 1, 2026",
    read: "6 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    summary: "From zero to a live shopping app with payments, admin dashboard, push notifications and cloud storage — here is exactly how I did it.",
  },
  {
    category: "Insights",
    title: "Why Every Small Business in Ghana Needs a Website in 2026",
    date: "February 20, 2026",
    read: "4 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    summary: "Most businesses in Ghana still rely only on WhatsApp. Here is why that is leaving money on the table and what to do about it.",
  },
  {
    category: "Creative",
    title: "Video Editing Tips That Will Make Your Reels Go Viral",
    date: "February 10, 2026",
    read: "3 min read",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    summary: "Simple editing tricks I use every day that make videos look professional even when shot on a phone.",
  },
  {
    category: "Tutorial",
    title: "How to Deploy Your Website for Free Using Vercel and Render",
    date: "January 25, 2026",
    read: "5 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    summary: "A step by step guide to getting your website live on the internet without spending a single dollar on hosting.",
  },
]

export function BlogSection() {
  const { ref, isInView } = useInView(0.05)

  return (
    <section id="blog" className="py-24 lg:py-32 bg-secondary/30" ref={ref as React.RefObject<HTMLElement>}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary/30" />
            <span className="text-sm font-mono text-primary tracking-widest uppercase">Blog</span>
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
              className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 cursor-pointer ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute top-3 left-3 text-xs font-mono text-primary bg-card/80 border border-primary/20 px-3 py-1 rounded-full uppercase">{post.category}</span>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.summary}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground font-mono">{post.date} • {post.read}</div>
                  <span className="flex items-center gap-1 text-xs text-primary font-medium group-hover:gap-2 transition-all">
                    Read More <ArrowRightIcon className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
