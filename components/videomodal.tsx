"use client"

import React from "react"

const videos = [
  {
    src: "https://metropolitanclubs.com/W.mp4",
    title: "Epic Night Vibes",
  },
  {
    src: "https://metropolitanclubs.com/metro.mp4",
    title: "Metro Party Energy",
  },
  {
    src: "https://metropolitanclubs.com/mbuffet.mp4",
    title: "Buffet & Beats",
  },
]

export default function VerticalReels() {
  return (
    <section className="w-full bg-black py-16">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-3">
            Live Moments
          </h2>

          <p className="font-jost text-white/70 text-sm sm:text-base max-w-xl mx-auto">
            Experience the vibe through our latest live reels.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {videos.map((video, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-xl"
            >

              {/* Aspect Ratio Wrapper (9:16) */}
              <div className="relative aspect-[9/16] w-full">

                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  playsInline
                  className="h-full w-full object-cover"
                />

              </div>

              {/* Footer */}
              <div className="p-3 bg-black/70 backdrop-blur">

                <p className="font-jost text-white text-sm text-center">
                  {video.title}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

