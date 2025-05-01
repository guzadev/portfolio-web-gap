"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTitle from "./section-title"
import Link from "next/link"

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  isPdf?: boolean;
  github?: boolean;
}

const projectCategories = [
  {
    title: "Ingeniería Mecánica",
    projects: [
      {
        title: "Proyecto Final: Viscosímetro de cilindros concéntricos",
        description: "El objetivo de este proyecto de ingeniería es mejorar la precisión de un viscosímetro de cilindros concéntricos existente, mediante la incorporación de un motor y un microprocesador. Esto permitirá medir de manera precisa el nivel de viscosidad de diferentes aceites a diversas temperaturas, eliminando así los errores humanos en el cálculo de los valores de viscosidad.",
        image: "/viscosimetro.png?height=400&width=600",
        link: "https://drive.google.com/file/d/1Gl9X4UOEKFpmecwa3nQdv5CuKOoCftje/view?usp=sharing",
        isPdf: true,
      },
    ] as Project[],
  },
  {
    title: "Modelado e Impresión 3D",
    projects: [
      {
        title: "Modelos 3D y Fabricación Aditiva",
        description: "Como entusiasta del aprendizaje continuo, incorporé una impresora 3D a mis herramientas de trabajo, lo que me permitió desarrollar competencias en calibración, mantenimiento, optimización de parámetros de impresión y resolución de fallas. Combino estos conocimientos con mi formación en ingeniería y mi dominio de SolidWorks para diseñar modelos 3D funcionales, precisos y resistentes. Algunos de estos diseños están disponibles en mi perfil de Cults3D.",
        image: "/3d.jpeg?height=400&width=600",
        link: "https://cults3d.com/@gustavopaz",
      },
    ] as Project[],
  },
  {
    title: "Visualización Arquitectónica",
    projects: [
      {
        title: "MAG Studio",
        description: "La vida y mi pasión por el diseño me llevaron a descubrir el mundo de la visualización arquitectónica, una disciplina donde convergen técnica, estética y emoción. A partir de esta conexión, creé MAG Studio como proyecto personal, con el objetivo de desarrollar y mostrar mis habilidades en modelado 3D, renderizado y comunicación visual de espacios. Cada imagen que realizo busca transmitir realismo, intención y una experiencia visual que conecte con el espectador.",
        image: "/mag-studio.jpg?height=400&width=600",
        link: "https://magviz.vercel.app/",
      },
    ] as Project[],
  },
]

const programmingProjects = {
  title: "Programación",
  projects: [
    {
      title: "Análisis ICT: ¿Cómo influye el Rango Asiático en el Resultado de la Operación?",
      description: "Este proyecto forma parte de un enfoque basado en la metodología ICT (Inner Circle Trader) y el concepto de Smart Money. El análisis busca determinar si la amplitud del rango de la sesión asiática (Kill Zone) respecto al promedio de los últimos 5 días (AVG) puede influir significativamente en la probabilidad de éxito de una operación, tanto en EUR/USD como en NQ1!.",
      image: "/asia.png?height=400&width=600",
      link: "https://github.com/guzadev/ict-asia-killzone-analisis",
      github: true,
    },
    {
      title: "Bot de Trading EUR/USD | Rango Asiático + Ruptura + Reingreso",
      description: "Desarrollo de un bot en Python para automatizar una estrategia de trading en el par EUR/USD, basada en fases de acumulación, manipulación y distribución. El bot detecta rupturas del rango asiático antes de la sesión europea (04:00 UTC) y alerta sobre posibles manipulaciones del mercado. Lo utilizo diariamente para anticipar oportunidades de entrada: cuando hay una ruptura y reingreso al rango, realizo un análisis manual para confirmar el cambio de estructura y validar la operación, guiado por la EMA 21.",
      image: "/bot.png?height=400&width=600",
      link: "https://github.com/guzadev/trading-bot-eurusd",
      github: true,
    },
    {
      title: "Organizador de archivos | Librería de Modelos 3D y Texturas de MAG Studio",
      description: "Este proyecto surge como solución a una necesidad real en MAG Studio, donde trabajamos con cientos de modelos 3D descargados desde Zeel Project. Como muchos de ellos comparten una estructura de carpetas similar, desarrollé un script para organizarlos automáticamente, preservando la relación entre modelos y texturas. Esta herramienta nos permitió ahorrar tiempo en tareas repetitivas y optimizar el flujo de trabajo del estudio, enfocándonos más en la parte creativa.",
      image: "/org-mag.jpg?height=400&width=600",
      link: "https://github.com/guzadev/org-mag-library",
      github: true,
    },
  ] as Project[],
}

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const handleProjectClick = (project: Project) => {
    if (project.isPdf) {
      window.open(project.link, "_blank", "noopener,noreferrer")
    } else {
      window.open(project.link, "_blank")
    }
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle>Proyectos</SectionTitle>

        <div className="mt-12 space-y-16">
          {/* Primera fila: Ingeniería Mecánica, Modelado e Impresión 3D, Visualización Arquitectónica */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
              {projectCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6 flex flex-col h-full">
                  <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white border-l-4 border-slate-700 pl-4">
                    {category.title}
                  </h3>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-8 flex-grow"
                  >
                    {category.projects.map((project, projectIndex) => (
                      <motion.div
                        key={projectIndex}
                        variants={item}
                        className="group bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                          <h4 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">{project.title}</h4>
                          <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>

                          <div className="mt-auto">
                            {project.isPdf ? (
                              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">
                                  <FileText className="mr-2 h-4 w-4" />
                                  Ver Proyecto
                                </Button>
                              </Link>
                            ) : (
                              <Button
                                onClick={() => window.open(project.link, "_blank")}
                                className="w-full bg-slate-700 hover:bg-slate-600 text-white"
                              >
                                {project.github ? (
                                  <Github className="mr-2 h-4 w-4" />
                                ) : (
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                )}
                                Ver Proyecto
                              </Button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Segunda fila: Programación */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white border-l-4 border-slate-700 pl-4">
              {programmingProjects.title}
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {programmingProjects.projects.map((project, projectIndex) => (
                <motion.div
                  key={projectIndex}
                  variants={item}
                  className="group bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">{project.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">{project.description}</p>

                    <Button
                      onClick={() => window.open(project.link, "_blank")}
                      className="w-full bg-slate-700 hover:bg-slate-600 text-white mt-auto"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Ver Proyecto
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex justify-center mt-10">
              <Button
                onClick={() => window.open("https://github.com/guzadev", "_blank")}
                className="bg-slate-700 hover:bg-slate-600 text-white px-8"
                size="lg"
              >
                <Github className="mr-2 h-5 w-5" />
                Ver Más Proyectos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
