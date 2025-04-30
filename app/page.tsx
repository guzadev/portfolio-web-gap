import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Gustavo Adrian Paz – Ingeniero Mecánico, Python, Diseño 3D, Renders.",
  description: "Portfolio de Gustavo Adrian Paz, Ingeniero Mecánico en Argentina con experiencia en visualización arquitectónica 3D, diseño CAD, modelado 3D, impresión 3D, desarrollo con Python y automatización. Buscando nuevas oportunidades profesionales.",
  keywords: [
    "ingeniero mecánico",
    "portfolio profesional",
    "diseño 3D",
    "SolidWorks",
    "impresión 3D",
    "automatización con Python",
    "visualización arquitectónica",
    "archviz",
    "modelado CAD",
    "desarrollo web",
    "Next.js",
    "Tailwind CSS",
    "proyectos de ingeniería",
    "Argentina",
    "MAG Studio",
    "Power BI",
    "SAP MM",
    "Arduino",
    "MATLAB",
    "diseño mecánico",
    "fabricación aditiva",
    "documentación técnica"
  ]
  ,
  openGraph: {
    title: "Gustavo Adrian Paz - Portfolio Profesional",
    description: "Portfolio profesional de Gustavo Paz, Ingeniero Mecánico con experiencia en automatización y desarrollo con Python, diseño CAD, impresión 3D y renders fotorrealistas.",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Gustavo Adrian Paz - Ingeniero Mecánico y Desarrollador"
      }
    ],
    siteName: "Portfolio de Gustavo Adrian Paz"
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
