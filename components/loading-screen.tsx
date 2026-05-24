"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function LoadingScreen({ duration = 2800 }: { duration?: number }) {
  const [progress, setProgress] = useState(1)

  useEffect(() => {
    const tick = 20
    const steps = Math.max(1, Math.floor(duration / tick))
    let current = 1

    const interval = setInterval(() => {
      current += 99 / steps
      if (current >= 100) {
        setProgress(100)
        clearInterval(interval)
        return
      }
      setProgress(Math.round(current))
    }, tick)

    return () => clearInterval(interval)
  }, [duration])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-[120] bg-background"
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      <div className="relative h-full w-full px-6 py-10 md:px-12 md:py-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground"
        >
          INITIALIZING PORTFOLIO
        </motion.p>

        <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 md:left-12 md:right-12">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[clamp(2.6rem,11vw,8rem)] leading-[0.88] tracking-tight"
          >
            {progress}%
          </motion.h1>

          <div className="mt-5 h-2 w-full bg-foreground/15">
            <motion.div
              className="h-full bg-foreground/85"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15, ease: "linear" }}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.7 }}
          className="absolute bottom-10 left-6 right-6 flex items-center justify-between md:bottom-12 md:left-12 md:right-12"
        >
          <span className="font-mono text-[11px] tracking-[0.22em] text-muted-foreground">READY</span>
          <span className="font-mono text-[11px] tracking-[0.22em] text-muted-foreground">2026</span>
        </motion.div>
      </div>
    </motion.div>
  )
}
