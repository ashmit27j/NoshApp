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
		{ label: "Copyright", href: "#" },
	];

	return (
		<footer id="contact" className="bg-card border-t border-border">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Brand */}
					<div>
						<Link href="/" className="flex items-center gap-2 mb-4">
							<Image
								src="images/WhiteLogo-nobg.png"
								alt="Nosh Logo"
								width={32}
								height={32}
								className="object-contain w-16 h-16" // Adjusted to fit without stretching
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
						<ul className="space-y-2">
							<li>
								<Link
									href="https://github.com/your-android-repo"
									className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Android GitHub
								</Link>
							</li>
							<li>
								<Link
									href="https://github.com/your-ios-repo"
									className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									iOS GitHub
								</Link>
							</li>
							<li>
								<Link
									href="https://www.figma.com/your-figma-link"
									className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Figma
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<Separator className="bg-border" />

				{/* Copyright */}
				<div className="pt-8 text-center text-sm text-muted-foreground">
					<p>© {currentYear} Nosh. Built with love</p>
				</div>
			</div>
		</footer>
	);
}
