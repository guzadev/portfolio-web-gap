"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, Linkedin } from "lucide-react"
import SectionTitle from "./section-title"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle>Sobre Mí</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800">
              <img
                src="/conoceme.jpeg?height=600&width=600"
                alt="Gustavo Adrian Paz"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-700 dark:bg-slate-600 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">
              Ingeniero con visión integral
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            Ingeniero Mecánico con perfil multidisciplinario y enfoque en resultados.
            Experiencia en visualización arquitectónica, modelado e impresión 3D, programación en Python, gestión de proyectos y documentación técnica.
            Apasionado por la mejora continua, combino creatividad, tecnología aplicada y pensamiento analítico para desarrollar soluciones efectivas.
            Me definen la proactividad, el aprendizaje constante y la atención al detalle.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button
                className="bg-[#0A66C2] hover:bg-[#004182] text-white"
                onClick={() => window.open("https://www.linkedin.com/in/gustavo-adrian-paz", "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>

              <Link href="https://drive.google.com/file/d/1Zh2nMPFRjk6tjLcFW93Whn-VDhgughvK/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Button className="bg-slate-700 hover:bg-slate-600 text-white">
                  <FileText className="mr-2 h-5 w-5" />
                  Descargar CV
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
