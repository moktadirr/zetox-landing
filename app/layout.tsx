import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "ZETOX - Emotionally Intelligent Digital Communication",
  description: "We're on a mission to make digital communication more emotionally intelligent.",
  openGraph: {
    title: "ZETOX - Emotionally Intelligent Digital Communication",
    description: "We're on a mission to make digital communication more emotionally intelligent.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-987XN0ZZEG"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-987XN0ZZEG');
        </script>
      </head>
      <body className="antialiased cursor-none">{children}</body>
    </html>
  )
}
