"use client"

import { motion } from "framer-motion"
import { PinContainer } from "../ui/3d-pin"
import Image from "next/image"

export default function AutoPin() {
  return (
    <motion.div
      animate={{
        rotateX: [0, 8, 0, -8, 0],
        rotateY: [0, -8, 0, 8, 0],
        y: [0, -8, 0],
      }}
     
      className="inline-block"
    >
  <PinContainer
  title="Metropolitan Club"
  href="https://maps.google.com"
>
  <div className="flex w-90 h-[240px] flex-col items-center justify-center rounded-2xl bg-white/5 backdrop-blur-xl  p-4 gap-3">

 {/* India Map */}
<Image
  src="/in.svg"
  alt="India Map"
  width={96}
  height={96}
  className="object-contain"
/>


    {/* Address */}
    <p className="text-center text-sm font-jost text-white/80 leading-relaxed">
      CP 134, Viraj Khand,<br />
      Gomti Nagar, Lucknow (UP), India<br />
      226010
    </p>

  </div>
</PinContainer>

    </motion.div>
  )
}
