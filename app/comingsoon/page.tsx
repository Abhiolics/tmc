"use client"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { div } from "motion/react-client"
import Image from "next/image"
import Link from "next/link"

export default function ComingSoon() {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
  
    <main className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <div className="text-center lg:text-left space-y-6">

          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Coming Soon 🚀
          </h1>

          <p className="font-jost text-white/70 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            We are working hard to bring you something amazing.
            Our new experience is almost ready. Stay tuned for the launch!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">

            <Link
              href="/"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-md
                bg-pink-600 text-white font-semibold
                hover:bg-pink-700 transition
              "
            >
              Go Back Home
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-md
                border border-white/30
                bg-white/10 text-white font-semibold
                hover:bg-white/20 transition
              "
            >
              Contact Us
            </Link>

          </div>

        </div>

        {/* Image Section */}
        <div className="flex justify-center">

          <div className="relative w-[280px] sm:w-[350px] md:w-[420px] aspect-square">

            <Image
              src="/ccomingsoon.svg"
              alt="Coming Soon"
              fill
              className="object-contain"
              priority
            />

          </div>

        </div>

      </div>

    </main>
    <Footer />
    </div>
  )
}
