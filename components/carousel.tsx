"use client"

import { useEffect, useRef, useState } from "react"
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
    image: "/gallery/MC2020_7.jpeg",
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

  // For swipe
  const startX = useRef(0)

  /* Auto Slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  // Touch start
  const handleTouchStart = (e: any) => {
    startX.current = e.touches[0].clientX
  }

  // Touch end
  const handleTouchEnd = (e: any) => {
    const endX = e.changedTouches[0].clientX
    const diff = startX.current - endX

    // Swipe Left → Next
    if (diff > 50) {
      setActive((prev) => (prev + 1) % slides.length)
    }

    // Swipe Right → Prev
    if (diff < -50) {
      setActive((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      )
    }
  }

  return (
    <section
      className="
        w-full bg-black
        py-10 sm:py-16
        px-4 sm:px-8 lg:px-16
        overflow-hidden
      "
    >

      {/* Slides */}
      <div
        className="
          flex transition-transform duration-700 ease-in-out
          gap-6 sm:gap-12
          select-none
        "
        style={{
          transform: `translateX(-${active * 100}%)`,
        }}

        // Swipe events
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {slides.map((slide) => (
          <div
            key={slide.id}
            className="
              relative min-w-full
              h-[40vh] sm:h-[60vh]
              rounded-xl overflow-hidden
              bg-zinc-900
            "
          >

            {/* Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="flex object-cover pointer-events-none items-center"
            />

            {/* Text */}
            <div
              className="
                absolute bottom-4 left-4
                sm:bottom-8 sm:left-10
                max-w-[90%] sm:max-w-lg
                text-white
              "
            >

              <h3 className="font-playfair text-xl sm:text-3xl font-semibold mb-2">
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
              h-2.5 w-2.5 rounded-full
              transition-all duration-300
              cursor-pointer
              ${active === index
                ? "bg-white w-10 sm:w-12"
                : "bg-white/40 hover:bg-white/70"}
            `}
          />
        ))}

      </div>

    </section>
  )
}
