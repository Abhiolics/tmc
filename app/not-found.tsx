"use client"

import Image from "next/image"
import Link from "next/link"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">

        <div className="max-w-xl text-center">

          {/* Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/party.svg"
              alt="Page Not Found"
              width={280}
              height={280}
              className="object-contain"
              priority
            />
          </div>

          {/* Heading */}
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Oops! The Page You're Looking for Doesn't Exist 
          </h1>

          {/* Subheading */}
          <p className="font-jost text-white/70 text-sm sm:text-base mb-8 max-w-md mx-auto">
            Looks like you’ve entered the wrong address.
            The page you’re looking for doesn’t exist.
            Let’s get you back to the vibe!
          </p>

          {/* Button */}
          <Link
            href="/"
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-pink-600
              px-8 py-3
              text-sm font-semibold text-white
              shadow-lg
              hover:bg-pink-700
              transition
            "
          >
            Go Back Home
          </Link>

        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}
