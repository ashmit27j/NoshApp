"use client"

export default function Screens() {
	const screens = [
		{
			title: "iOS Screen Recording",
			description: "Experience our app on iOS",
		},
		{
			title: "Android Screen Recording",
			description: "Experience our app on Android",
		},
	];

	return (
		<section
			id="screens"
			className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card/20"
		>
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center space-y-4 mb-16">
					<h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
						Product Overviews
					</h2>
					<p className="text-lg text-muted-foreground">
						Screenshots from our app
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
					{/* Changed to flex with gap */}
					{screens.map((screen, index) => (
						<div
							key={index}
							className="flex flex-col items-center group w-full max-w-sm"
						>
							{/* Phone Frame */}
							<div className="relative w-full">
								{/* Phone bezel */}
								<div className="glass-card border-primary/20 rounded-3xl p-3 shadow-2xl hover:border-primary/40 transition-all duration-300">
									{/* Screen content */}
									<div className="bg-gradient-to-br from-primary/20 via-background to-primary/10 rounded-2xl h-140 flex flex-col items-center justify-center p-6 space-y-8">
										{/* Screen placeholder with green accent */}
										<div className="w-40 h-40 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center">
											<div className="w-32 h-32 rounded-full bg-primary/30" />
										</div>
									</div>
								</div>
							</div>

							{/* Card info below phone */}
							<div className="mt-6 text-center space-y-2">
								<h3 className="text-xl font-semibold text-foreground">
									{screen.title}
								</h3>
								<p className="text-sm text-muted-foreground">
									{screen.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
