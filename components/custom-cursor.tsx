"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [enabled, setEnabled] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const dotX = useSpring(x, { stiffness: 500, damping: 28, mass: 0.5 })
  const dotY = useSpring(y, { stiffness: 500, damping: 28, mass: 0.5 })
  const ringX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.8 })
  const ringY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.8 })

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!finePointer || reducedMotion) {
      setEnabled(false)
      return
    }

    setEnabled(true)

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true)
      }
    }

    const handleHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleHoverStart)
    document.addEventListener("mouseout", handleHoverEnd)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleHoverStart)
      document.removeEventListener("mouseout", handleHoverEnd)
    }
  }, [x, y, isVisible])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{ x: dotX, y: dotY }}
        animate={{ scale: isHovering ? 0 : 5, opacity: isVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />

      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-foreground rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: isHovering ? 1 : 0, opacity: isVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
      />
    </>
  )
}
