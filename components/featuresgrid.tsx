"use client"

import Image from "next/image"

export default function FeatureGrid() {
  return (
    <section className="w-full bg-black py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[260px]">

          {/* FOOD Image */}
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/feature/food.jpg"
              alt="Food"
              fill
              className="object-cover"
            />
          </div>

          {/* FOOD Text */}
          <div className="flex flex-col justify-center bg-zinc-950 p-6 rounded-xl">

            <h3 className="font-playfair text-2xl text-white mb-3">
              FOOD
            </h3>

            <p className="font-jost text-sm text-white/70 leading-relaxed">
              We have a passion for veg & non-veg food and a desire to share that
              passion. Utilizing fresh, sustainable ingredients, we add a
              pinch to this and a dash of that to create pure Indian tastes
              with a global twist.
            </p>

          </div>

           <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/feature/disco.jpg"
              alt="Food"
              fill
              className="object-cover"
            />
          </div>
          

          {/* DISCOTHEQUE Image */}
          <div className="relative overflow-hidden rounded-xl row-span-2">
            <Image
              src="/logo.svg"
              alt="logo"
              fill
              className=" -rotate-90"
            />
          </div>

      

          {/* DRINKS Text */}
          <div className="flex flex-col justify-center bg-zinc-950 p-6 rounded-xl">

            <h3 className="font-playfair text-2xl text-white mb-3">
              DRINKS
            </h3>

            <p className="font-jost text-sm text-white/70 leading-relaxed">
              A wine bar with ample single varietals and blends from diverse
              regions and a truly educated staff to help guide you.
            </p>

          </div>

          {/* DRINKS Image */}
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/feature/drinks.jpg"
              alt="Drinks"
              fill
              className="object-cover"
            />
          </div>

              <div className="flex flex-col justify-center bg-zinc-950 p-6 rounded-xl">



            <h3 className="font-playfair text-2xl text-white mb-3">
               DISCOTHEQUE
            </h3>

            <p className="font-jost text-sm text-white/70 leading-relaxed">
             Mind boggling music, heavenly food and terrific drinks—all you
              need for hardcore partying. Cut a rug on overwhelming music and
              get the real kick out of it. We are first choice for merrymaking
              and nightlife in Lucknow.
            </p>

          </div> 

        </div>

        

      </div>

    </section>
  )
}
