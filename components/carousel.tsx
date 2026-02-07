"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

/* Slides Data */
const slides = [
  {
    id: 1,
    image: "/gallery/MC2020_3.jpeg",
    title: "Luxury Nights",
    subtitle: "Experience the finest clubbing",
  },
  {
    id: 2,
    image: "/gallery/MC2020_4.jpeg",
    title: "Live DJs",
    subtitle: "World-class music vibes",
  },
  {
    id: 3,
    image: "/gallery/MC2020_7.jpeg", // ❗ Empty = Skeleton
    title: "VIP Lounge",
    subtitle: "Private. Premium. Exclusive.",
  },
  {
    id: 4,
    image: "/gallery/MC2020_10.jpeg",
    title: "Signature Cocktails",
    subtitle: "Crafted to perfection",
  },
  {
    id: 5,
    image: "/gallery/MC2020_12.jpeg",
    title: "Unforgettable Nights",
    subtitle: "Where memories are made",  
  },
   {
    id: 6,
    image: "/gallery/MC2020_13.jpeg",
    title: "Signature Cocktails",
    subtitle: "Crafted to perfection",
  },
   {
    id: 7,
    image: "/gallery/MC2020_15.jpeg",
    title: "Signature Cocktails",
    subtitle: "Crafted to perfection",
  },
   {
    id: 8,
    image: "/gallery/MC2020_18.jpeg",
    title: "Signature Cocktails",
    subtitle: "Crafted to perfection",
  },
]

export default function Carousel() {
  const [active, setActive] = useState(0)

  /* Auto Slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full bg-black py-16 ml-16 mr-16 p-96">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out gap-12"
          style={{
            transform: `translateX(-${active * 100}%)`,
          }}
        >

          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative min-w-full h-[60vh] gap-16 rounded-xl overflow-hidden bg-zinc-900"
            >

              {/* Image / Skeleton */}
              {slide.image ? (
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              ) : (
                /* Skeleton */
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800" />
              )}

              {/* Text Content */}
              <div className="absolute bottom-8 left-6 sm:left-10 max-w-lg text-white">

                <h3 className="font-playfair text-2xl sm:text-3xl font-semibold mb-2">
                  {slide.title}
                </h3>

                <p className="font-jost text-sm sm:text-base text-white/80">
                  {slide.subtitle}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-3">

          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`
                h-2.5 w-2.5 rounded-full transition-all duration-300
                ${active === index
                  ? "bg-white w-16"
                  : "bg-white/40 hover:bg-white/70"}
              `}
            />
          ))}

        </div>


    </section>
  )
}
