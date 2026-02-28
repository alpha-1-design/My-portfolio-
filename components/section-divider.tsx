"use client"

export function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={`relative h-px w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  )
}
