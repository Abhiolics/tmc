import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Carousel from "@/components/carousel"
import Footer from "@/components/footer"
import OurVentures from "@/components/ventures"
import WhyChooseUs from "@/components/features"
import FeatureGrid from "@/components/featuresgrid"
import ContactSection from "@/components/contact"

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black font-jost overflow-x-hidden">

      {/* Main Wrapper */}
      <div className="relative w-full">

        {/* Navbar */}
       <Navbar />

        {/* Hero */}
        <Hero />
        <Carousel />
        <OurVentures />
        <WhyChooseUs />
        <FeatureGrid  />
        <ContactSection />
        <Footer />

      </div>

    </div>
  )
}
