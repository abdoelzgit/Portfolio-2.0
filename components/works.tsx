"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"

const projects = [
  {
    title: "Neural Interface",
    tags: ["Next.js", "OpenAI", "WebGL"],
    image: "/abstract-neural-network-visualization-dark-theme.jpg",
    year: "2024",
    client: "Stealth AI SaaS",
    role: "Product Designer + Frontend Engineer",
    duration: "12 weeks",
    overview:
      "Platform conversational analytics untuk tim product research dengan visual intent-mapping secara real-time.",
    challenge:
      "Tim riset sulit membaca pola user intent dari ribuan percakapan karena dashboard terlalu teknis dan fragmented.",
    solution:
      "Membangun interface berbasis graph + semantic filters yang membuat insight penting muncul hanya dalam beberapa klik.",
    impact: "Waktu analisis turun 43% dan proses validasi hipotesis naik 2.1x lebih cepat.",
    href: "#",
  },
  {
    title: "Quantum Dashboard",
    tags: ["React", "D3.js", "Python"],
    image: "/futuristic-data-dashboard-dark-minimal.jpg",
    year: "2024",
    client: "Enterprise Ops Team",
    role: "Lead Interface Designer",
    duration: "9 weeks",
    overview:
      "Command center untuk operasional multi-region yang menggabungkan alerting, forecasting, dan anomaly detection.",
    challenge:
      "Tim operasi harus berpindah antar tool untuk monitoring, membuat respon insiden lambat dan tidak konsisten.",
    solution:
      "Menyatukan semua signal kritikal dalam satu dashboard modular dengan hierarchy visual yang sangat tegas.",
    impact: "Mean time to resolve incident membaik 31% pada kuartal pertama penggunaan.",
    href: "#",
  },
  {
    title: "Synthetic Memory",
    tags: ["TypeScript", "LangChain", "Vector DB"],
    image: "/abstract-memory-storage-visualization.jpg",
    year: "2023",
    client: "Innovation Lab",
    role: "AI Product Builder",
    duration: "14 weeks",
    overview:
      "Knowledge workspace berbasis retrieval untuk membantu tim support menjawab pertanyaan kompleks secara kontekstual.",
    challenge:
      "Dokumentasi tersebar di banyak sumber sehingga kualitas jawaban support tidak stabil antar anggota tim.",
    solution:
      "Merancang memory pipeline dengan retrieval ranking dan evaluasi kualitas jawaban langsung di alur kerja harian.",
    impact: "First-response accuracy naik 28% dengan waktu onboarding agen baru lebih singkat.",
    href: "#",
  },
  {
    title: "Echo Protocol",
    tags: ["Rust", "WebAssembly", "Audio"],
    image: "/sound-wave-visualization-dark-theme.jpg",
    year: "2023",
    client: "Creative Audio Studio",
    role: "Interaction Engineer",
    duration: "10 weeks",
    overview:
      "Eksperimen web audio interaktif yang mengubah gesture pengguna menjadi komposisi suara adaptif.",
    challenge:
      "Performa audio di browser sering drop saat scene visual dan input gesture berjalan bersamaan.",
    solution:
      "Memindahkan proses audio kritikal ke WebAssembly dan mengoptimalkan pipeline rendering visual.",
    impact: "Latency audio berkurang signifikan dan sesi interaksi terasa jauh lebih responsif.",
    href: "#",
  },
]

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)
  const [modalReady, setModalReady] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  useEffect(() => {
    if (!selectedProject) return
    const original = document.body.style.overflow
    const originalHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"
    document.body.dataset.modalOpen = "true"
    document.body.dataset.modalFreeze = "true"
    return () => {
      document.body.style.overflow = original
      document.documentElement.style.overflow = originalHtmlOverflow
      delete document.body.dataset.modalOpen
      delete document.body.dataset.modalFreeze
    }
  }, [selectedProject])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  return (
    <>
      <section id="works" className="relative py-32 px-8 md:px-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">05 - SELECTED WORKS</p>
          <h2 className="font-sans text-3xl md:text-5xl font-light italic">The Distortion Gallery</h2>
        </motion.div>

        <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              type="button"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative w-full border-t border-foreground/10 py-8 text-left md:py-12"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                setModalReady(false)
                setSelectedProject(project)
              }}
              data-cursor-hover
            >
              <div className="group flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <span className="order-1 font-mono text-xs tracking-widest text-muted-foreground md:order-none">{project.year}</span>

                <motion.h3
                  className="flex-1 font-sans text-4xl font-light tracking-tight transition-colors duration-300 group-hover:text-foreground/70 md:text-6xl lg:text-7xl"
                  animate={{ x: hoveredIndex === index ? 20 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {project.title}
                </motion.h3>

                <div className="order-2 flex flex-wrap gap-2 md:order-none">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-foreground/20 px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}

          <motion.div
            className="pointer-events-none absolute z-50 h-40 w-64 overflow-hidden rounded-lg md:h-48 md:w-80"
            style={{ x: springX, y: springY, translateX: "-50%", translateY: "-320%" }}
            animate={{ opacity: hoveredIndex !== null ? 1 : 0, scale: hoveredIndex !== null ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {hoveredIndex !== null && (
              <motion.img
                src={projects[hoveredIndex].image}
                alt={projects[hoveredIndex].title}
                className="h-full w-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{ filter: "grayscale(50%) contrast(1.1)" }}
              />
            )}
            <div className="absolute inset-0 bg-[#2563eb]/10 mix-blend-overlay" />
          </motion.div>
        </div>

        <div className="border-t border-foreground/10" />
      </section>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[140] bg-background/75 backdrop-blur-sm"
            onClick={() => {
              setSelectedProject(null)
              setModalReady(false)
            }}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-[6vh] flex h-[94vh] w-full max-w-[1400px] flex-col overflow-hidden rounded-t-2xl border border-foreground/15 bg-background shadow-2xl"
              data-lenis-prevent
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-foreground/10 px-6 py-5 md:px-10">
                <p className="font-mono text-[11px] tracking-[0.26em] text-muted-foreground">CASE STUDY DETAIL</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null)
                    setModalReady(false)
                  }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 transition-colors hover:bg-foreground hover:text-background"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="overflow-y-auto overscroll-contain touch-pan-y" data-lenis-prevent>
                <div className="relative h-[40vh] min-h-[260px] w-full overflow-hidden border-b border-foreground/10 md:h-[52vh]">
                  {!modalReady ? (
                    <div className="absolute inset-0 animate-pulse bg-foreground/5" />
                  ) : null}
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className={`h-full w-full object-cover transition-opacity duration-300 ${modalReady ? "opacity-100" : "opacity-0"}`}
                    loading="lazy"
                    onLoad={() => setModalReady(true)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <p className="font-mono text-xs tracking-[0.22em] text-background/85">{selectedProject.year}</p>
                    <h3 className="mt-2 max-w-4xl font-sans text-4xl font-light tracking-tight text-white md:text-6xl">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                <div
                  className={`grid gap-10 px-6 py-10 md:grid-cols-12 md:px-10 md:py-12 transition-opacity duration-300 ${
                    modalReady ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="space-y-3 md:col-span-4">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">CLIENT</p>
                      <p className="mt-1 text-sm text-foreground/85">{selectedProject.client}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">ROLE</p>
                      <p className="mt-1 text-sm text-foreground/85">{selectedProject.role}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">DURATION</p>
                      <p className="mt-1 text-sm text-foreground/85">{selectedProject.duration}</p>
                    </div>
                    <div className="pt-2">
                      <a
                        href={selectedProject.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border-b border-foreground/50 pb-1 text-sm"
                      >
                        Visit Project <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-8 md:col-span-8">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">OVERVIEW</p>
                      <p className="mt-3 text-lg leading-relaxed text-foreground/85 md:text-xl">{selectedProject.overview}</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <article className="border border-foreground/15 p-5">
                        <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">CHALLENGE</p>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/75 md:text-base">{selectedProject.challenge}</p>
                      </article>
                      <article className="border border-foreground/15 p-5">
                        <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">SOLUTION</p>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/75 md:text-base">{selectedProject.solution}</p>
                      </article>
                    </div>

                    <article className="border border-foreground/15 p-5 md:p-6">
                      <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">IMPACT</p>
                      <p className="mt-3 text-base leading-relaxed text-foreground/80 md:text-lg">{selectedProject.impact}</p>
                    </article>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={`modal-${selectedProject.title}-${tag}`}
                          className="rounded-full border border-foreground/20 px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
