"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function PDFViewer() {
  const params = useParams()
  const [pdfUrl, setPdfUrl] = useState("")

  useEffect(() => {
    if (params.filename) {
      setPdfUrl(`/${params.filename}`)
    }
  }, [params.filename])

  return (
    <div className="flex flex-col h-screen bg-slate-100 dark:bg-slate-900">
      <div className="bg-white dark:bg-slate-800 p-4 shadow-md flex justify-between items-center">
        <Link href="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver al Portfolio
          </Button>
        </Link>

        <a href={pdfUrl} download className="inline-block">
          <Button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600">
            <Download className="h-4 w-4" />
            Descargar PDF
          </Button>
        </a>
      </div>

      <div className="flex-1 w-full">
        {pdfUrl && (
          <object data={pdfUrl} type="application/pdf" className="w-full h-full">
            <div className="flex items-center justify-center h-full">
              <p className="text-center p-4">
                Tu navegador no puede mostrar el PDF directamente.{" "}
                <a href={pdfUrl} download className="text-blue-500 hover:underline">
                  Haz clic aquí para descargarlo
                </a>
              </p>
            </div>
          </object>
        )}
      </div>
    </div>
  )
}
