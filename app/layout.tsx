import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Jost, Playfair_Display } from "next/font/google"

import "./globals.css"

/* Geist (optional – for system UI / code) */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

/* 🎯 Party / Aesthetic Fonts */
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "The Metropolitan Club",
  description: "Premium Nightlife Experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${jost.variable}
          ${playfair.variable}
          antialiased
          bg-black
          text-white
        `}
      >
        {children}
      </body>
    </html>
  )
}
