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
		<header className="fixed top-0 z-50 w-full bg-background/60 backdrop-blur-md border-b border-border">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2 group">
						<Image
							src="/images/WhiteLogo-nobg.png"
							alt="Nosh Logo"
							width={40}
							height={40}
							className="w-10 h-10 object-contain"
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex flex-1 items-center justify-center gap-8">
						{navItems.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
							>
								{item.label}
							</Link>
						))}
					</nav>

					{/* CTA Buttons */}
					<div className="hidden md:flex items-center gap-3">
						<Button variant="outline" className="bg-transparent gap-2">
							<Github className="w-4 h-4" />
							View GitHub
						</Button>
						<Link href="#downloads">
							<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
								Download
							</Button>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
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
								className="block text-base font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
								onClick={() => setIsOpen(false)}
							>
								{item.label}
							</Link>
						))}
						<div className="flex flex-col gap-2 pt-2">
							<Button
								variant="outline"
								className="w-full bg-transparent gap-2"
							>
								<Github className="w-4 h-4" />
								View GitHub
							</Button>
							<Link href="#downloads" className="w-full">
								<Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
									Download
								</Button>
							</Link>
						</div>
					</nav>
				)}
			</div>
		</header>
	);
}
