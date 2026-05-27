"use client"

import { motion } from "framer-motion"
import { DATA } from "@/resume"

const pillars = [
  {
    id: "01",
    title: "Profile",
    desc: DATA.description,
  },
  {
    id: "02",
    title: "Summary",
    desc: DATA.summary,
  },
  {
    id: "03",
    title: "Location",
    desc: DATA.location,
  },
]

const metrics = [
  { label: "Work Experience", value: `${DATA.work.length}` },
  { label: "Projects Built", value: `${DATA.projects.length}` },
  { label: "Tech Stack", value: `${DATA.code.length}` },
]

export function About() {
  return (
    <section id="about" className="relative px-8 py-8 md:px-12 md:py-16">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent md:inset-x-12" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-14 md:mb-20"
      >
        <p className="mb-4 font-mono text-xs tracking-[0.3em] text-muted-foreground">02 - ABOUT</p>
        <h2 className="max-w-4xl font-sans text-3xl font-light leading-tight md:text-5xl">
          I turn ideas into visuals that people can feel and products they can truly use. 
        </h2>
      </motion.div>

      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-5"
        >
          <p className="max-w-md text-justify leading-relaxed text-foreground/80 md:text-lg">
            {DATA.summary}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-1">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                className="border-l border-foreground/20 pl-4"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{metric.label}</p>
                <p className="mt-1 font-sans text-3xl font-light tracking-tight md:text-4xl">{metric.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="md:col-span-7">
          <div className="space-y-4">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                className="group relative overflow-hidden border border-foreground/15 bg-background/70 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-foreground/[0.03] md:p-8"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-foreground/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-5 md:gap-8">
                  <span className="mt-1 font-mono text-[11px] tracking-[0.24em] text-muted-foreground">{pillar.id}</span>
                  <div>
                    <h3 className="font-sans text-2xl font-light tracking-tight md:text-3xl">{pillar.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/75 md:text-justify">{pillar.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
