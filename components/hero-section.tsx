"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Download } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";
import { TypingAnimation } from "@/components/ui/typing-animation";

const words = ["code", "design", "be moved"];
const longestWord = words.reduce((longest, current) =>
  current.length > longest.length ? current : longest,
  words[0] ?? ""
);

export function HeroSection({ performanceMode = false }: { performanceMode?: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSphere, setShowSphere] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    if (performanceMode) return;
    const timer = setTimeout(() => setShowSphere(true), 650);
    return () => clearTimeout(timer);
  }, [performanceMode]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated sphere background */}
      {showSphere && !performanceMode ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] pointer-events-none"
        >
          <AnimatedSphere />
        </motion.div>
      ) : null}

      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            Hello, It's Bedul here.
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12">
          <h1
            className={`text-[clamp(2rem,8vw,8rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <span className="block">The man who </span>
            <span className="block">
              can{" "}
              <span className="relative inline-block min-w-[7.5ch] align-baseline">
                <span className="invisible block whitespace-nowrap">{longestWord}</span>
                <TypingAnimation
                  words={words}
                  as="span"
                  startOnView={false}
                  loop
                  pauseDelay={900}
                  typeSpeed={90}
                  deleteSpeed={45}
                  className="absolute inset-0 whitespace-nowrap !leading-[0.9] !tracking-tight"
                />
                {/* <span className="pointer-events-none absolute -bottom-1 left-0 right-0 h-2 bg-foreground/10" /> */}
              </span>
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              I love building visual experiences and creating compelling designs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">

              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
                {/* <span className="w-8 h-px bg-foreground/30" /> */}
                My Resume <ChevronRight/>
              </span>

              <a
                href="/CV-Mhmdabdalaziz-2026.pdf"
                download="CV-Mhmdabdalaziz-2026.pdf"
                data-cursor-hover
                className="group inline-flex h-12 items-center justify-center gap-2 border border-foreground/20 px-6 text-sm font-mono tracking-[0.12em] uppercase text-foreground/85 transition-colors duration-300 hover:bg-foreground hover:text-background"
              >
                Download CV
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          <div />
        </div>

      </div>

      {/* Stats marquee - full width outside container */}
      {/* <div 
        className={`absolute bottom-24 left-0 right-0 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16">
              {[
                { value: "20 days", label: "saved on builds", company: "NETFLIX" },
                { value: "98%", label: "faster deployment", company: "STRIPE" },
                { value: "300%", label: "throughput increase", company: "LINEAR" },
                { value: "6x", label: "faster to ship", company: "NOTION" },
              ].map((stat) => (
                <div key={`${stat.company}-${i}`} className="flex items-baseline gap-4">
                  <span className="text-4xl lg:text-5xl font-display">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                    <span className="block font-mono text-xs mt-1">{stat.company}</span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div> */}

      {/* Scroll indicator */}

    </section>
  );
}
