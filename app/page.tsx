"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Screens from "@/components/screens"
import Downloads from "@/components/downloads"
import Team from "@/components/team"
import Footer from "@/components/footer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
		<main className="relative min-h-screen bg-background overflow-hidden">
			<Header />
			<Hero />
			<Features />
			<Screens />
			<Downloads />
			<Team />
			<Footer />
		</main>
	);
}
