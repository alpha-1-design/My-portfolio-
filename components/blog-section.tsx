"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ArrowRightIcon } from "./icons"

const posts = [
  {
    category: "Tutorial",
    title: "How I Built a Full E-Commerce App in 3 Months",
    date: "March 1, 2026",
    read: "2 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    summary: "From zero to a live shopping app with payments, admin dashboard, push notifications and cloud storage — here is exactly how I did it.",
    article: `Starting with nothing but a laptop and Termux on my Android phone, I built and deployed a full e-commerce platform for a real business in Ghana in under 3 months.

The app — Rehoboth Kitchen — has everything a modern shopping app needs: product listings with images, a cart system, mobile money checkout, order tracking, push notifications, an admin dashboard, and even WhatsApp receipt generation.

Here is what I used: React on the frontend, Node.js and Express on the backend, MongoDB for the database, Cloudinary for image storage, Render for backend hosting, and Vercel for the frontend.

The biggest lesson? Start simple and add features one at a time. I did not try to build everything at once. I got the basics working first — login, products, cart — then added the advanced features week by week.

If you have an idea for an app, start today. You do not need a powerful computer or a university degree. You need consistency, the right tools, and someone to help when you get stuck.`,
  },
  {
    category: "Insights",
    title: "Why Every Small Business in Ghana Needs a Website in 2026",
    date: "February 20, 2026",
    read: "2 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    summary: "Most businesses in Ghana still rely only on WhatsApp. Here is why that is leaving money on the table.",
    article: `Walk through any market in Accra, Kumasi or Takoradi and you will find talented, hardworking business owners with great products — but no online presence beyond a WhatsApp number.

That is a massive missed opportunity.

When someone searches for your product online and cannot find you, they find your competitor instead. A website works for you 24 hours a day, 7 days a week, even when you are asleep. It shows customers you are serious, professional, and here to stay.

A basic business website can be built for as little as $80. That is a one-time investment that keeps paying you back forever. Compare that to the thousands of cedis spent on flyers, banners, and radio ads that people forget in a week.

The businesses that will dominate Ghana in the next 5 years are the ones building their digital presence today. Do not wait until everyone else is doing it — be the one who got there first.`,
  },
  {
    category: "Creative",
    title: "Video Editing Tips That Will Make Your Reels Go Viral",
    date: "February 10, 2026",
    read: "2 min read",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    summary: "Simple editing tricks that make videos look professional even when shot on a phone.",
    article: `You do not need expensive equipment to make great videos. Some of the most viral content in the world was shot on a phone just like yours. The difference is in the editing.

Here are the things that matter most:

First, cut fast. Attention spans are short. Remove every second of footage that does not add value. If it is boring to you, it is boring to your audience.

Second, use music strategically. Find a trending sound and sync your cuts to the beat. This single trick makes any video feel more professional and engaging.

Third, start strong. You have about 2 seconds to stop someone from scrolling. Start with your most interesting moment, not a slow introduction.

Fourth, use text overlays. Many people watch videos with no sound. Add captions or text so your message lands even on mute.

Finally, keep it short. Even if you have 5 minutes of content, edit it down to 60 seconds. Leave people wanting more.`,
  },
  {
    category: "Tutorial",
    title: "How to Deploy Your Website for Free Using Vercel and Render",
    date: "January 25, 2026",
    read: "2 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    summary: "A step by step guide to getting your website live without spending a single dollar on hosting.",
    article: `One of the biggest myths in web development is that hosting is expensive. It does not have to be — especially when you are just starting out.

Here is the setup I use for all my projects: Vercel for the frontend and Render for the backend. Both are free on their starter plans and both are used by serious developers all over the world.

For your frontend — any React, Next.js or plain HTML project — go to vercel.com, connect your GitHub account, and import your repository. Vercel will automatically build and deploy your site every time you push code. Your site gets a free domain ending in vercel.app within minutes.

For your backend — Node.js, Express, any server — go to render.com, create a new Web Service, connect your GitHub repo, and set your start command. Render will build and run your server automatically. You also get a free domain ending in onrender.com.

Add your environment variables in both dashboards, and you are live. No credit card needed. No monthly fees. Just your code, running on the internet for free.`,
  },
]

export function BlogSection() {
  const { ref, isInView } = useInView(0.05)
  const [openPost, setOpenPost] = useState<number | null>(null)

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
            <div key={post.title}>
              <div
                className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 cursor-pointer ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setOpenPost(openPost === index ? null : index)}
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
                    <span className="flex items-center gap-1 text-xs text-primary font-medium">
                      {openPost === index ? "Close" : "Read More"} <ArrowRightIcon className={`w-3 h-3 transition-transform ${openPost === index ? "rotate-90" : ""}`} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Article Expansion */}
              {openPost === index && (
                <div className="mt-2 rounded-2xl border border-primary/20 bg-card p-6 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {post.article}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
