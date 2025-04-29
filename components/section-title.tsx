"use client"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionTitleProps {
  children: ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white inline-block relative">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-slate-700 dark:bg-slate-600 transform translate-y-2"></span>
      </h2>
    </motion.div>
  )
}
