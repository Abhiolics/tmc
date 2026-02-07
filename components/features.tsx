"use client"

import { CardSpotlight } from "@/components/ui/card-spotlight"
import {
  Star,
  Utensils,
  Wine,
  PartyPopper,
} from "lucide-react"

const features = [
  {
    title: "5 Star Hospitality",
    desc: "We take pride in our unmatched service, world-class ambience, and premium amenities for every guest.",
    icon: Star,
  },
  {
    title: "Scrumptious Food",
    desc: "Delicious veg & non-veg cuisine with a wide range of international flavors and fine-dine experience.",
    icon: Utensils,
  },
  {
    title: "Best Spirits & Ambience",
    desc: "Experience premium cocktails, mocktails, gin, and beverages in the most vibrant lounge atmosphere.",
    icon: Wine,
  },
  {
    title: "Gracious Venue",
    desc: "Plush banquet halls for weddings, parties, corporate meetings, and special celebrations.",
    icon: PartyPopper,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-black py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="mb-16 text-center">

          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>

          <p className="font-jost text-white/70 max-w-3xl mx-auto text-base md:text-lg">
            Experience luxury, comfort, and excellence with our premium
            hospitality, dining, and event services.
          </p>

        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon

            return (
              <CardSpotlight
                key={index}
                className="
                  h-full min-h-[18rem]
                  rounded-2xl
                  p-6
                  bg-zinc-900/80
                  border border-white/10
                "
              >

                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-pink-500">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="relative z-20 font-playfair text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative z-20 font-jost text-md leading-relaxed text-white/75">
                  {item.desc}
                </p>

              </CardSpotlight>
            )
          })}

        </div>

      </div>

    </section>
  )
}
