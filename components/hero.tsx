"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SparklesCore } from "./sparkles-core"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles"
          background="#0f172a"
          particleColor="#64748b"
          particleDensity={100}
          speed={1}
          className="w-full h-full"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Gustavo Adrian Paz</h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Ingeniero Mecánico | Desarrollador Python | Renderista Arquitectónico | Modelado e impresión 3D
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Button
              onClick={() => scrollToSection("about")}
              className="bg-slate-700 hover:bg-slate-600 text-white border border-slate-600"
              size="lg"
            >
              Conoceme
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-slate-700 hover:bg-slate-600 text-white border border-slate-600"
              size="lg"
            >
              Ver Proyectos
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute bottom-8 z-10"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("about")}
          className="text-white hover:bg-slate-800/50"
        >
          <ChevronDown className="h-8 w-8" />
        </Button>
      </motion.div>
    </section>
  )
}
