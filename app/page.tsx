"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Works } from "@/components/works"
import { TechMarquee } from "@/components/tech-marquee"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import { SectionBlend } from "@/components/section-blend"
import { LoadingScreen } from "@/components/loading-screen"

const LOADER_MS = 2800
const LOADER_EXIT_MS = 550

export default function Home() {
  const [showLoader, setShowLoader] = useState(false)
  const [showApp, setShowApp] = useState(false)

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader")
    if (hasSeenLoader) {
      setShowApp(true)
      return
    }

    setShowLoader(true)
    const timer = setTimeout(() => {
      setShowLoader(false)
      sessionStorage.setItem("hasSeenLoader", "true")
      setTimeout(() => setShowApp(true), LOADER_EXIT_MS)
    }, LOADER_MS)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">{showLoader ? <LoadingScreen duration={LOADER_MS} /> : null}</AnimatePresence>

      {showApp ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }}>
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <main>
              <HeroSection />
              {/* <Hero /> */}
              {/* <SectionBlend /> */}
              <TechMarquee />
              <About />
              <Experience />
              <Works />
              <Footer />
            </main>
          </SmoothScroll>
        </motion.div>
      ) : null}
    </>
  )
}
