import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ZETOX - Emotionally Intelligent Digital Communication",
  description: "We're on a mission to make digital communication more emotionally intelligent.",
  openGraph: {
    title: "ZETOX - Emotionally Intelligent Digital Communication",
    description: "We're on a mission to make digital communication more emotionally intelligent.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased cursor-none">{children}</body>
    </html>
  )
}
