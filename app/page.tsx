"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { IBM_Plex_Sans } from "next/font/google"
import { useEffect, useState } from "react"

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500/60 to-purple-500/60 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", updateMousePosition)

    const hoverElements = document.querySelectorAll("a, button, [data-hover]")
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-blue-500/30 rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    />
  )
}

export default function Home() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 300], [0, -50])
  const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8])

  return (
    <div className={`min-h-screen bg-white text-[#0a0a0a] ${ibmPlexSans.className} overflow-x-hidden`}>
      <CustomCursor />
      <ScrollProgress />

      {/* Ambient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/20 via-white to-purple-50/10 pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <motion.main
          className="flex-1 flex items-center justify-center px-6 md:px-8 py-20"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <motion.span
                className="inline-block text-xs font-medium text-blue-600/80 mb-8 tracking-[0.2em] uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Mission Statement
              </motion.span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight">
                We're on a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                  mission
                </span>{" "}
                to make digital communication more{" "}
                <span className="italic font-light text-gray-700">emotionally intelligent</span>.
              </h1>
            </motion.div>
          </div>
        </motion.main>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-100/50">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <motion.p
                className="text-xs text-gray-400 font-light tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                © 2025 ZETOX. All rights reserved.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.a
                  href="mailto:m@zetox.tech"
                  className="inline-flex items-center gap-3 text-sm font-medium text-blue-600 hover:text-purple-600 transition-colors duration-300"
                  data-hover
                  whileHover={{ x: 4 }}
                >
                  <span>m@zetox.tech</span>
                  <motion.div
                    className="w-3 h-3 border border-current rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-1 h-1 bg-current rounded-full" />
                  </motion.div>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
