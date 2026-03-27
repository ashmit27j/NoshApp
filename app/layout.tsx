import type React from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
};

export const metadata: Metadata = {
	title: "Nosh - Smart Meal Planning & Pantry Management",
	description:
		"Plan meals intelligently, manage your pantry effortlessly, and reduce food waste with Nosh.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth dark">
			<body className="font-sans antialiased">
				{children}
				<Analytics />
			</body>
		</html>
	);
}
