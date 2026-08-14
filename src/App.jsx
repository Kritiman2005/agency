import React, { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Home from "./pages/Home";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsOfServicePage from "./pages/TermsOfService";

function App() {
	useEffect(() => {
		// Initialize Lenis smooth scroll
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: 1,
			infinite: false,
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return (
		<Router>
			{/* Global Grain/Film-noise Texture */}
			<div className="noise-overlay" />

			<Routes>
				{/* Main Agency Platform Page */}
				<Route path="/" element={<Home />} />
				<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
				<Route
					path="/terms-of-service"
					element={<TermsOfServicePage />}
				/>
			</Routes>
			<Analytics />
		</Router>
	);
}

export default App;
