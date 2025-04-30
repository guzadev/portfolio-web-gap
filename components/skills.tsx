"use client"
import { motion } from "framer-motion"
import { Code, Cpu, Database, Layers } from "lucide-react"
import SectionTitle from "./section-title"

const skillCategories = [
  {
    title: "Programación",
    icon: <Code className="h-6 w-6" />,
    skills: ["Python", "Django", "Flask", "SQL", "Numpy", "Pandas", "Matplotlib", "Seaborn", "JavaScript", "TypeScript", "Arduino", "MATLAB"],
    color: "bg-blue-500",
  },
  {
    title: "Herramientas Web",
    icon: <Layers className="h-6 w-6" />,
    skills: ["Node.js", "Next.js", "Tailwind CSS", "Aceternity UI", "Vercel",  "Render", "Replit", "Git & GitHub"],
    color: "bg-purple-500",
  },
  {
    title: "Modelado 3D & Visualización",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["3ds Max", "Corona Renderer", "V-Ray", "SolidWorks", "Solid Edge", "AutoCAD", "3D Printing"],
    color: "bg-green-500",
  },
  {
    title: "Datos y Gestión",
    icon: <Database className="h-6 w-6" />,
    skills: ["Power BI", "Tableau", "Jira", "Excel", "Word", "PowerPoint", "SAP MM", "GDE"],
    color: "bg-amber-500",
  },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <SectionTitle>Habilidades y Herramientas</SectionTitle>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`${category.color} p-3 rounded-lg text-white mr-4`}>{category.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
