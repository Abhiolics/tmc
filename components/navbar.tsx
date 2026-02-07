"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
   <header className="
  fixed top-0 z-50 w-full font-jost
  backdrop-blur-2xl
  bg-black/30
  supports-[backdrop-filter]:bg-black/20
">
      {/* Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      <nav className="relative -z-50 flex w-full items-center justify-between px-4 sm:px-6 lg:px-12 py-4 backdrop-blur-xl bg-black/40 border-b border-white/10">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Metropolitan Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/80">

          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/events" className="hover:text-white transition">Events</Link>
          <Link href="/gallery" className="hover:text-white transition">Gallery</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>

          {/* Contact Dropdown */}
          <div className="relative">

            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 hover:text-white transition"
            >
              Contact
              <ChevronDown
                size={16}
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`
                absolute right-0 top-full mt-3 w-64 rounded-2xl
                border border-white/15 bg-black/80 backdrop-blur-xl
                shadow-2xl p-4
                transition-all duration-200
                ${open
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible"}
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
        <div className="flex items-center gap-3">

          {/* Desktop CTA */}
          <Link
            href="/book"
            className="
              hidden sm:inline-flex items-center justify-center
              rounded-md bg-pink-600
              px-5 py-2.5 text-sm font-semibold text-white
              hover:bg-pink-700 transition
            "
          >
            Book Table
          </Link>

          <Link
            href="/contact"
            className="
              hidden sm:inline-flex items-center justify-center
              rounded-md border border-white/30
              bg-white/10 backdrop-blur-xl
              px-5 py-2.5 text-sm font-semibold text-white
              hover:bg-white/20 transition
            "
          >
            Contact
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={26} />
          </button>

        </div>
      </nav>

      {/* Mobile Sidebar */}
      <aside
        className={`
     fixed top-0 right-0 h-full w-[85%] max-w-sm
          bg-black/90 backdrop-blur-xl
          border-l border-white/10
          z-50
          transform transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">

          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
          />

          <button onClick={() => setMobileOpen(false)}>
            <X size={26} className="text-white" />
          </button>

        </div>

        {/* Menu */}
        <div className="flex flex-col p-6 space-y-6 text-white text-base bg-gradient-to-b from-black/95 via-black/85 to-black/75
backdrop-blur-2xl backdrop-blur-xl
          border-l border-white/10
          z-50">

          {[
            ["Home", "/"],
            ["Events", "/events"],
            ["Gallery", "/gallery"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="hover:text-pink-400 transition"
            >
              {label}
            </Link>
          ))}

          {/* Divider */}
          <div className="h-px bg-white/10 my-4" />

          {/* Mobile CTA */}
          <Link
            href="/book"
            onClick={() => setMobileOpen(false)}
            className="
              w-full text-center rounded-md
              bg-pink-600 py-3
              font-semibold text-white
              hover:bg-pink-700 transition
            "
          >
            Book Your Table
          </Link>

          {/* Contact Info */}
          <div className="pt-6 space-y-2 text-sm text-white/70">

            <p>📞 +91-955 930 9666</p>
            <p>✉️ info@metropolitanclubs.com</p>

          </div>
          <Image
            src="/ccomingsoon.svg"
            alt="Contact Us"
            width={300}
            height={300}
            className="object-contain mt-4"
            />

        </div>

      </aside>

    </header>
  )
}
