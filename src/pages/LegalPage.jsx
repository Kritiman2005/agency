import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Privacy from "../components/Legal/Privacy";
import Terms from "../components/Legal/Terms";
import Regulatory from "../components/Legal/Regulatory";
import Additional from "../components/Legal/Additional";

export const SectionTitle = ({ children }) => (
	<h2 className="text-2xl font-display font-bold uppercase tracking-wide text-white mt-12 mb-6 border-b border-white/10 pb-4">
		{children}
	</h2>
);

export const SubTitle = ({ children }) => (
	<h3 className="text-xl font-display font-semibold text-white/90 mt-8 mb-4">
		{children}
	</h3>
);

export const Paragraph = ({ children }) => (
	<p className="text-muted-text/80 leading-relaxed font-sans text-base mb-6">
		{children}
	</p>
);

export const List = ({ children }) => (
	<ul className="list-disc list-inside text-muted-text/80 leading-relaxed font-sans text-base space-y-2 mb-6 ml-4">
		{children}
	</ul>
);

const LegalPage = () => {
	const [activeSection, setActiveSection] = useState("privacy");

	// Smooth scroll to top when changing tabs
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [activeSection]);

	const tabs = [
		{ id: "privacy", label: "Privacy Policy" },
		{ id: "terms", label: "Terms of Service" },
		{ id: "regulatory", label: "Regulatory Compliance" },
		{ id: "additional", label: "Additional Terms" },
	];

	return (
		<>
			<Navbar />

			<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#050505] overflow-hidden min-h-screen">
				{/* Glow Effects */}
				<div className="absolute top-0 left-[20%] -translate-x-1/2 -translate-y-1/2 w-96 h-96 orange-glow opacity-30 pointer-events-none" />
				<div className="absolute bottom-0 right-[20%] translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] orange-glow opacity-10 pointer-events-none" />

				<div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-8 lg:gap-16">
					{/* Sidebar Navigation */}
					<div className="md:w-64 lg:w-72 shrink-0">
						<div className="sticky top-32 space-y-2">
							<p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-6">
								Legal Directory
							</p>
							{tabs.map((tab) => (
								<button
									key={tab.id}
									onClick={() => setActiveSection(tab.id)}
									className={`block w-full text-left px-5 py-4 rounded-xl font-sans font-medium transition-all duration-300 ${
										activeSection === tab.id
											? "bg-brand-orange/10 text-brand-orange border border-brand-orange/20"
											: "text-muted-text/60 hover:text-white hover:bg-white/5 border border-transparent"
									}`}
								>
									{tab.label}
								</button>
							))}
						</div>
					</div>

					{/* Content Area */}
					<div className="flex-1">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="glass-panel p-8 md:p-12 lg:p-16 rounded-2xl border border-white/5 relative overflow-hidden"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-100 pointer-events-none" />

							<div className="relative z-10">
								<AnimatePresence mode="wait">
									{activeSection === "privacy" && (
										<Privacy key="privacy" />
									)}
									{activeSection === "terms" && (
										<Terms key="terms" />
									)}
									{activeSection === "regulatory" && (
										<Regulatory key="regulatory" />
									)}
									{activeSection === "additional" && (
										<Additional key="additional" />
									)}
								</AnimatePresence>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default LegalPage;
