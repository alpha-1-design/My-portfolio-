"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface VisitorContextType {
  visitorId: string
  isReady: boolean
}

const VisitorContext = createContext<VisitorContextType>({
  visitorId: "",
  isReady: false,
})

export function useVisitor() {
  return useContext(VisitorContext)
}

function generateVisitorId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  const segments = []
  for (let s = 0; s < 3; s++) {
    let segment = ""
    for (let i = 0; i < 4; i++) {
      segment += chars[Math.floor(Math.random() * chars.length)]
    }
    segments.push(segment)
  }
  return `SAM-${segments.join("-")}`
}

export function VisitorProvider({ children }: { children: ReactNode }) {
  const [visitorId, setVisitorId] = useState("")
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    let id = localStorage.getItem("alpharian_visitor_id")
    if (!id) {
      id = generateVisitorId()
      localStorage.setItem("alpharian_visitor_id", id)
    }
    setVisitorId(id)
    setIsReady(true)
  }, [])

  return (
    <VisitorContext.Provider value={{ visitorId, isReady }}>
      {children}
    </VisitorContext.Provider>
  )
}
