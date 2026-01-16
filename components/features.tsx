"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Package, Lightbulb, Calendar, ShoppingCart, Leaf, Zap } from "lucide-react"

const features = [
  {
    icon: Package,
    title: "Pantry Tracking",
    description: "Keep tabs on your ingredients with real-time pantry management. Never forget what you have.",
  },
  {
    icon: Lightbulb,
    title: "Smart Recipe Discovery",
    description: "Find delicious recipes based on ingredients you already own. Discover new dishes effortlessly.",
  },
  {
    icon: Calendar,
    title: "Meal Schedule Planning",
    description: "Plan your weekly meals with ease. Organize your dining with an intuitive calendar view.",
  },
  {
    icon: ShoppingCart,
    title: "Smart Shopping Lists",
    description: "Auto-generate shopping lists from your meal plans. Shop smarter, save more.",
  },
  {
    icon: Leaf,
    title: "Dietary Preferences",
    description: "Customize for allergies, dietary restrictions, and preferences. Perfect recipes for your needs.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Intuitive interface that just works. Experience speed and simplicity like never before.",
  },
]

export default function Features() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [visibleCards])

  return (
    <section id="features" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your meals and pantry like a pro.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Card className="h-full p-6 sm:p-8 glass-card border-primary/20 hover:border-primary group feature-card-hover hover:glow-green transition-all duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
