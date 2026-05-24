"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { DATA } from "@/resume"

export function Experience() {
  return (
    <section id="experience" className="relative px-8 py-28 md:px-12 md:py-32">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent md:inset-x-12" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-14 grid gap-8 md:mb-16 md:grid-cols-12"
      >
        <div className="md:col-span-7">
          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-muted-foreground">04 - EXPERIENCE</p>
          <h2 className="max-w-3xl font-sans text-3xl font-light leading-tight md:text-5xl">Explore My Professional Journey</h2>
        </div>

        <div className="md:col-span-5 md:pt-10">
          <p className="max-w-md text-sm leading-relaxed text-foreground/75 md:text-base">
            Perjalanan kerja yang membentuk pendekatan saya dalam membangun produk digital dengan keseimbangan antara visual,
            sistem, dan eksekusi teknis.
          </p>
        </div>
      </motion.div>

      <div className="border-t border-foreground/10">
        {DATA.work.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.start}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="border-b border-foreground/10"
          >
            <details className="group">
              <summary className="list-none cursor-pointer py-8 md:py-10">
                <div className="grid gap-5 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-5">
                    <h3 className="font-sans text-2xl font-light tracking-tight md:text-3xl">{item.company}</h3>
                    <p className="mt-1 font-mono text-[11px] tracking-[0.22em] text-muted-foreground">
                      {item.start} - {item.end}
                    </p>
                  </div>

                  <div className="md:col-span-4">
                    <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
                      {item.title}, {item.location}
                    </p>
                  </div>

                  <div className="flex items-start justify-between gap-3 md:col-span-3 md:justify-end">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 transition-colors duration-300 group-open:bg-foreground group-open:text-background">
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" />
                    </span>
                  </div>
                </div>
              </summary>

              <div className="pb-8 md:pb-10">
                <div className="md:grid md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-5" />
                  <div className="md:col-span-4">
                    <p className="text-sm leading-relaxed text-foreground/70 md:text-base">{item.description}</p>
                  </div>

                  <div className="mt-5 md:col-span-3 md:mt-0 md:flex md:justify-end">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor-hover
                      aria-label={`Open ${item.company}`}
                      className="group/link inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 transition-colors duration-300 hover:bg-foreground hover:text-background"
                    >
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </details>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
