"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import SectionTitle from "./section-title"

type FormData = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || 'Error al enviar el mensaje');
      }

      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme. Te responderé lo antes posible.",
      })

      reset()
    } catch (error) {
      console.error('Error en el formulario:', error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor, intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <SectionTitle>Contacto</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white">
              ¿Tenes algún proyecto en mente?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Estoy interesado en nuevas oportunidades y desafíos. Si tienes alguna pregunta o propuesta, no dudes en
              contactarme a través del formulario o por mis redes sociales.
            </p>

            <div className="flex flex-col space-y-4">
              <Button
                variant="outline"
                className="justify-start border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700"
                onClick={() => window.open("https://www.linkedin.com/in/gustavo-adrian-paz", "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5 text-[#0A66C2]" />
                LinkedIn
              </Button>

              <Button
                variant="outline"
                className="justify-start border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700"
                onClick={() => window.open("https://github.com/guzadev", "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>

              <Button
                variant="outline"
                className="justify-start border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700"
                onClick={() => (window.location.href = "mailto:pazgustavoadrian@gmail.com")}
              >
                <Mail className="mr-2 h-5 w-5 text-red-500" />
                pazgustavoadrian@gmail.com
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Nombre
                </label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600"
                  {...register("name", { required: "El nombre es requerido" })}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600"
                  {...register("email", {
                    required: "El email es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido",
                    },
                  })}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Tu mensaje"
                  className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 min-h-[150px]"
                  {...register("message", { required: "El mensaje es requerido" })}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensaje
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
