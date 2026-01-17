"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react";

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
							src="images/WhiteLogo-nobg.png"
							alt="Nosh Logo"
							width={32}
							height={32}
							className="object-contain w-16 h-16" // Adjusted to fit without stretching
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex flex-1 items-center justify-center gap-8">
						{navItems.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="text-base text-white relative group transition-colors"
							>
								{item.label}
								<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
							</Link>
						))}
					</nav>

					{/* CTA Buttons */}
					<div className="hidden md:flex items-center gap-3">
						<Link href="#team">
							<Button className="border border-white text-white bg-black-20 hover:bg-white hover:text-black transition-colors">
								Contact Us
							</Button>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden ml-auto text-white"
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
								className="block text-base text-muted-foreground hover:text-foreground py-2 transition-colors"
								onClick={() => setIsOpen(false)}
							>
								{item.label}
							</Link>
						))}
						<div className="flex flex-col gap-2 pt-2">
							<Link href="#team" className="w-full">
								<Button className="w-full border border-white text-white bg-black-20 hover:bg-white hover:text-black transition-colors">
									Contact Us
								</Button>
							</Link>
						</div>
					</nav>
				)}
			</div>
		</header>
	);
}
