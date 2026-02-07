"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full font-jost">
      <nav className="flex w-full items-center justify-between px-4 sm:px-6 lg:px-12 py-4 backdrop-blur-xl bg-black/40 border-b border-white/10">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Metropolitan Logo"
            width={132}
            height={132}
            className="object-contain" >
          </Image>
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/80">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/events" className="hover:text-white transition">Events</Link>
          <Link href="/gallery" className="hover:text-white transition">Gallery</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
 <div className="relative">

            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition"
            >
              Contact
              <ChevronDown
                size={16}
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown */}
            <div
              className={`
                absolute right-0 top-full mt-3 w-64 rounded-2xl
                border border-white/15 bg-black/80 backdrop-blur-xl
                shadow-2xl p-4
                transition-all duration-200
                ${open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}
              `}
            >
              <p className="mb-2 text-xs text-white/60">Get in Touch</p>

              <div className="space-y-2 text-sm text-white">
                <p>📞 <span className="font-medium">+91-955 930 9666</span></p>
                <p className="break-all">✉️ info@metropolitanclubs.com</p>
              </div>
            </div>

          </div>
          
        </div>

        {/* Right Section */}
 <div className="relative flex items-center gap-4">

  {/* Primary CTA */}
  <Link
    href="/book"
    className="
      hidden sm:inline-flex items-center justify-center
      rounded-md
      bg-pink-600
      px-6 py-2.5
      text-sm font-semibold text-white
      shadow-md
      hover:bg-pink-700
      transition
    "
  >
    Book Your Table
  </Link>

  {/* Secondary CTA */}
  <Link
    href="/contact"
    className="
      inline-flex items-center justify-center
      rounded-md
      border border-white/30
      bg-white/10 backdrop-blur-xl
      px-6 py-2.5
      text-sm font-semibold text-white
      hover:bg-white/20
      transition
    "
  >
    Contact Us
  </Link>

</div>

      </nav>
    </header>
  )
}
