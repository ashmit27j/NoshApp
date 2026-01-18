"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import AnimatedGradientBg from "@/components/animated-gradient-bg";
import { asset } from "@/lib/asset";

export default function Hero() {
	const scrollToFeatures = () => {
		const featuresSection = document.getElementById("features");
		if (featuresSection) {
			featuresSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
			<AnimatedGradientBg />

			<div className="absolute inset-0 bg-background/40 backdrop-blur-sm -z-10" />
			<div className="max-w-6xl mx-auto w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 relative z-10">
				{" "}
				<div className="flex justify-center">
					<Image
						// src={asset("/images/nosh-20banner-20-20nobg.png")}
						src="images/nosh-20banner-20-20nobg.png"
						alt="Nosh"
						width={350}
						height={350}
						className="w-56 sm:w-72 lg:w-96 h-auto"
						priority
					/>
				</div>
				{/* Description */}
				<p className="text-lg sm:text-xl text-white max-w-2xl mx-auto leading-relaxed">
					Aesthetic meals, organized schedules, and zero last-minute panic.{" "}
					<br />
					Why wait? Nosh Now
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
					<Link href="#downloads">
						<Button
							size="lg"
							className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold px-8 py-6 rounded-full transition-transform transform hover:scale-105 hover:shadow-lg active:translate-y-1 active:shadow-none active:bg-primary/80"
						>
							Download Now
						</Button>
					</Link>
					<Button
						size="lg"
						variant="outline"
						onClick={scrollToFeatures}
						className="border-primary/50 text-foreground text-base font-semibold px-8 py-6 rounded-full bg-transparent"
					>
						Learn More
					</Button>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div
				className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10"
				onClick={scrollToFeatures}
				style={{ cursor: "pointer" }}
			>
				<ChevronDown className="text-white w-8 h-8 drop-shadow-lg stroke-2" />
			</div>
		</section>
	);
}
