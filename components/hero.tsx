"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-background -z-10" />
      <div className="absolute inset-0 bg-background -z-10" />

      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 glow-green" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl -z-10 glow-green-intense" />

      <div className="max-w-6xl mx-auto w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="flex justify-center">
          <Image
            src="/images/nosh-20banner-20-20nobg.png"
            alt="Nosh"
            width={300}
            height={300}
            className="w-48 sm:w-64 lg:w-80 h-auto"
            priority
          />
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Plan your meals intelligently, track your pantry in real-time, and discover recipes that match what you
          already have. Say goodbye to food waste.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40"
          >
            Download Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToFeatures}
            className="border-primary/50 text-foreground hover:bg-white hover:text-background hover:border-white text-base font-semibold px-8 py-6 rounded-full bg-transparent transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary w-6 h-6" />
      </div>
    </section>
  )
}
