"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Apple, Smartphone, Github } from "lucide-react";

export default function Downloads() {
	return (
		<section
			id="downloads"
			className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8"
		>
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="text-center space-y-4 mb-16">
					<h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
						Download Nosh
					</h2>
					<p className="text-lg text-muted-foreground">
						Available on both iOS and Android
					</p>
				</div>

				{/* Download Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					<Card className="p-8 glass-card border-primary/20 hover:border-primary hover:glow-green transition-all duration-300">
						<div className="flex items-center gap-4 mb-0">
							<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
								<Apple className="w-6 h-6 text-primary" />
							</div>
							<h3 className="text-2xl font-bold text-foreground">iOS</h3>
						</div>
						<p className="text-muted-foreground mb-3 leading-relaxed">
							Download Nosh from the App Store and start meal planning today.
							Sync your pantry across all your Apple devices.
						</p>
						<div className="flex gap-2">
							<Button
								size="lg"
								className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold px-8 py-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg active:translate-y-1 active:shadow-none active:bg-primary/80"
							>
								Download for iOS
							</Button>
						</div>
						<div className="flex gap-2">
							<Button
								size="lg"
								className="flex-1 bg-card text-card-foreground border border-white hover:bg-card/80 text-base font-normal px-8 py-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg active:translate-y-1 active:shadow-none active:bg-card/70"
								asChild
							>
								<a
									href="https://github.com/ashmit27j/Nosh"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/images/Github-Fill.svg"
										alt="GitHub"
										className="w-5 h-5 mr-2"
									/>
									View on GitHub
								</a>
							</Button>
						</div>
					</Card>

					<Card className="p-8 glass-card border-primary/20 hover:border-primary hover:glow-green transition-all duration-300">
						<div className="flex items-center gap-4 mb-0">
							<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
								<Smartphone className="w-6 h-6 text-primary" />
							</div>
							<h3 className="text-2xl font-bold text-foreground">Android</h3>
						</div>
						<p className="text-muted-foreground mb-3 leading-relaxed">
							Get it on Google Play and bring Nosh to your Android device.
							Manage your meals anywhere, anytime.
						</p>
						<div className="flex gap-2">
							<Button
								size="lg"
								className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold px-8 py-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg active:translate-y-1 active:shadow-none active:bg-primary/80"
							>
								Download for Android
							</Button>
						</div>
						<div className="flex gap-2">
							<Button
								size="lg"
								className="flex-1 bg-card text-card-foreground border border-white hover:bg-card/80 text-base font-normal px-8 py-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg active:translate-y-1 active:shadow-none active:bg-card/70"
								asChild
							>
								<a
									href="https://github.com/sukhada35/NoshApp"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/images/Github-Fill.svg"
										alt="GitHub"
										className="w-5 h-5 mr-2"
									/>
									View on GitHub
								</a>
							</Button>
						</div>
					</Card>
				</div>

				{/* Disclaimer */}
				<p className="text-center text-sm text-muted-foreground mt-8">
					Requires iOS 14+ or Android 8+. Syncing available with free account.
				</p>
			</div>
		</section>
	);
}
