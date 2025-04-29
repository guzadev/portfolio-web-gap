import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const pdfPath = url.searchParams.get("path")

  if (!pdfPath) {
    return new NextResponse("PDF path is required", { status: 400 })
  }

  try {
    const filePath = path.join(process.cwd(), "public", pdfPath)
    const fileBuffer = fs.readFileSync(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=" + path.basename(pdfPath),
      },
    })
  } catch (error) {
    console.error("Error serving PDF:", error)
    return new NextResponse("PDF not found", { status: 404 })
  }
}
