"use client"

import { ReactLenis } from "lenis/react"
import type { ReactNode } from "react"

export function SmoothScroll({ children, enabled = true }: { children: ReactNode; enabled?: boolean }) {
  if (!enabled) return <>{children}</>

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
