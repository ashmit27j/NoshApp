"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Github } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Screens", href: "#screens" },
    { label: "Team", href: "#team" },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/nosh-20banner-20-20nobg.png"
              alt="Nosh Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="text-sm bg-transparent gap-2">
              <Github className="w-4 h-4" />
              View GitHub
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm">Download</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="w-full text-sm bg-transparent gap-2">
                <Github className="w-4 h-4" />
                View GitHub
              </Button>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm">
                Download
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
