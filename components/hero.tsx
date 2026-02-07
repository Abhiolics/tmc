"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_bg.jpg"
          alt="Club Party"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Left Shadow */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        {/* Global Dark */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
    <div className="w-full px-4 sm:px-6 lg:px-12">

          <div className="max-w-xl space-y-6">

            {/* Badge */}
            <span className="inline-block rounded-full bg-pink-500/20 px-4 py-1 text-sm font-semibold text-pink-400 backdrop-blur font-jost">
              Night Life Experience
            </span>

            {/* Heading */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-[0_5px_30px_rgba(0,0,0,0.9)]">
              Feel The Beat.
              <br />
              Own The Night.
            </h1>

            {/* Description */}
            <p className="max-w-lg text-base md:text-lg text-gray-200 font-jost leading-relaxed">
              Step into the ultimate party destination where music,
              lights, and energy collide. Experience unforgettable
              nights with world-class DJs.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">

              <button
                className="rounded-full border border-white/30 bg-white/10 backdrop-blur-xl px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-white/20 transition"
              >
                Book Your Table Now
              </button>

            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
