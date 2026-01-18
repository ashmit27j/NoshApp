"use client"
import { useState } from "react"
import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Heart, ExternalLink } from "lucide-react";

interface TeamMember {
  name: string
  role: string
  email: string
  portfolio: string
  image?: string
  social: {
    github: string
    linkedin: string
    instagram: string
  }
}

const initialTeam: TeamMember[] = [
	{
		name: "Sukhada",
		role: "Android Developer",
		email: "sukhadag35@gmail.com",
		portfolio: "sukhada.dev",
		image: undefined,
		social: {
			github: "https://github.com/sukhada35",
			linkedin: "https://www.linkedin.com/in/sukhada-gulhane-68834a242/",
			instagram: "https://www.instagram.com/sukhada.gulhane/",
		},
	},
	{
		name: "Ashmit",
		role: "iOS Developer",
		email: "ashmit27j@gmail.com",
		portfolio: "https://ashmit27j.github.io/",
		image: undefined,
		social: {
			github: "https://github.com/ashmit27j",
			linkedin: "https://www.linkedin.com/in/ashmitjain/",
			instagram: "https://www.instagram.com/ashmit.poetry/",
		},
	},
];

export default function Team() {
	const [team] = useState(initialTeam);

	return (
		<section
			id="team"
			className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card/20"
		>
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="text-center space-y-4 mb-16">
					<h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
						Meet the Team
					</h2>
					<p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
						Built with <Heart className="w-5 h-5 fill-primary text-primary" />{" "}
						by us
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{team.map((member, index) => (
						<Card
							key={index}
							className="p-8 glass-card border-primary/20 hover:border-primary hover:glow-green transition-all duration-300"
						>
							{/* Team Member Image Upload Section */}
							{/* <div className="relative mb-6">
								{member.image ? (
									<div className="relative">
										<img
											src={member.image || "/placeholder.svg"}
											alt={member.name}
											className="w-full aspect-square object-cover"
										/>
										<button
											onClick={() => removeImage(index)}
											className="absolute top-2 right-2 p-2 bg-background/80 hover:bg-background rounded-full transition-colors"
										>
											<X className="w-4 h-4 text-primary" />
										</button>
									</div>
								) : (
									<label className="flex items-center justify-center w-full aspect-square bg-card/50 border border-dashed border-primary/30 rounded cursor-pointer hover:border-primary/60 transition-colors">
										<div className="flex flex-col items-center justify-center gap-2"></div>
									</label>
								)}
							</div> */}

							<div className="">
								<h3 className="text-2xl font-semibold text-foreground mb-1">
									{member.name}
								</h3>
								<p className="text-primary font-normal tracking-wide">
									{member.role}
								</p>
							</div>

							<div className="space-y-3 mb-3">
								<a
									href={`mailto:${member.email}`}
									className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
								>
									<Mail className="w-4 h-4" />
									{member.email}
								</a>
								<a
									href="#"
									className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
								>
									<ExternalLink className="w-5 h-5" />
									<span className="text-base">{member.portfolio}</span>
								</a>
							</div>

							<div className="flex gap-3">
								<Button
									size="lg"
									variant="outline"
									className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 p-6 hover:scale-110"
									asChild
								>
									<a
										href={member.social.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="/images/Github-Fill.svg"
											alt="GitHub"
											className="w-5 h-5"
										/>
									</a>
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 p-6 hover:scale-110"
									asChild
								>
									<a
										href={member.social.linkedin}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="/images/Linkedin-Fill-White-Nobg.svg"
											alt="Linkedin"
											className="w-5 h-5"
										/>
									</a>
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 p-6 hover:scale-110"
									asChild
								>
									<a
										href={member.social.instagram}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="/images/instagram-white-icon.svg"
											alt="Instagram"
											className="w-5 h-5"
										/>
									</a>
								</Button>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
