"use client"

export default function Screens() {
  const screens = [
    {
      title: "Pantry Dashboard",
      description: "Get a clear overview of all your ingredients",
    },
    {
      title: "Recipe Explorer",
      description: "Discover meals based on what you have",
    },
    {
      title: "Meal Calendar",
      description: "Plan your week with an intuitive interface",
    },
  ]

  return (
    <section id="screens" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">Product Overviews</h2>
          <p className="text-lg text-muted-foreground">Screenshots from our iOS app</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {screens.map((screen, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Phone Frame */}
              <div className="relative w-full max-w-sm">
                {/* Phone bezel */}
                <div className="glass-card border-primary/20 rounded-3xl p-3 shadow-2xl hover:border-primary/40 transition-all duration-300">
                  {/* Screen content */}
                  <div className="bg-gradient-to-br from-primary/20 via-background to-primary/10 rounded-2xl aspect-[9/16] flex flex-col items-center justify-center p-6 space-y-8">
                    {/* Screen placeholder with green accent */}
                    <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/30" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card info below phone */}
              <div className="mt-6 text-center space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{screen.title}</h3>
                <p className="text-sm text-muted-foreground">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
