"use client"

import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Github, Figma } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "GitHub", href: "#" },
  ]

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/nosh-20banner-20-20nobg.png"
                alt="Nosh Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Smart meal planning and pantry management for the modern kitchen.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Development */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Development</h4>
            <div className="space-y-3">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Figma className="w-4 h-4" />
                Figma
              </Link>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Copyright */}
        <div className="pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Nosh. Built with care for food enthusiasts everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
