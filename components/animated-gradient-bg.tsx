"use client";

import { useEffect } from "react";

export default function AnimatedGradientBg() {
	useEffect(() => {
		const interBubble = document.querySelector<HTMLDivElement>(
			".interactive-bubble"
		);
		if (!interBubble) return;

		let curX = 0;
		let curY = 0;
		let tgX = 0;
		let tgY = 0;

		function move() {
			curX += (tgX - curX) / 20;
			curY += (tgY - curY) / 20;
			interBubble.style.transform = `translate(${Math.round(
				curX
			)}px, ${Math.round(curY)}px)`;
			requestAnimationFrame(() => {
				move();
			});
		}

		window.addEventListener("mousemove", (event) => {
			tgX = event.clientX;
			tgY = event.clientY;
		});

		move();
	}, []);

	return (
		<div className="gradient-bg-container">
			<svg xmlns="http://www.w3.org/2000/svg">
				<defs>
					<filter id="goo">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="10"
							result="blur"
						/>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
							result="goo"
						/>
						<feBlend in="SourceGraphic" in2="goo" />
					</filter>
				</defs>
			</svg>
			<div className="gradients-container">
				<div className="gradient g1" />
				<div className="gradient g2" />
				<div className="gradient g3" />
				<div className="gradient g4" />
				<div className="gradient g5" />
				<div className="interactive-bubble" />
			</div>
			<div className="glowing-grid" />
		</div>
	);
}
