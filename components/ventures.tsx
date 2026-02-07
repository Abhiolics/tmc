"use client"

import { DirectionAwareHover } from "./ui/direction-aware-hover"

const ventures = [
  {
    title: "Mister Buffet",
    subtitle: "Luxury Dining Experience",
    image: "/our_ventures/misterbuffet.jpg",
  },
  {
    title: "Banquet Hall",
    subtitle: "Grand Celebrations Venue",
    image: "/our_ventures/banquet.jpeg",
  },
  {
    title: "Galeregale Resort",
    subtitle: "Serene Stay & Comfort",
    image: "/our_ventures/galeregale.jpg",
  },
  {
    title: "Urban Turban",
    subtitle: "Modern Indian Cuisine",
    image: "/our_ventures/urbanturban.jpg",
  },
  {
    title: "Grill Drill",
    subtitle: "Premium Grilled Delicacies",
    image: "/our_ventures/grilldrill.png",
  },
]

export default function OurVentures() {
  return (
    <section className="w-full bg-black py-20">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="mb-16 text-center">

          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Our Ventures
          </h2>

          <p className="font-jost text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            Discover our handpicked premium destinations crafted for luxury,
            comfort, and unforgettable experiences.
          </p>

        </div>

        {/* First Row → 2 Cards */}
      <div className="mb-10 flex justify-center">

  {/* Inner Grid */}
  <div className="grid w-full max-w-4xl grid-cols-1 sm:grid-cols-2">

    {ventures.slice(0, 2).map((item, index) => (
      <div key={index} className="h-[24rem]">

        <DirectionAwareHover imageUrl={item.image}>

          <div className="flex flex-col items-center justify-end h-full p-6 text-white">

            <p className="font-playfair text-3xl font-semibold mb-1">
              {item.title}
            </p>

            <p className="font-jost text-sm text-white/80">
              {item.subtitle}
            </p>

          </div>

        </DirectionAwareHover>

      </div>
    ))}

  </div>

</div>


        {/* Second Row → 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {ventures.slice(2).map((item, index) => (
            <div key={index} className="h-[22rem]">

              <DirectionAwareHover imageUrl={item.image}>

                <div className="flex flex-col justify-end h-full p-6 text-white">

                  <p className="font-playfair text-3xl font-semibold mb-1">
                    {item.title}
                  </p>

                  <p className="font-jost text-sm text-white/80">
                    {item.subtitle}
                  </p>

                </div>

              </DirectionAwareHover>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
