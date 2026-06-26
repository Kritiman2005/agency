import React from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import Process from "../components/Process";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Navbar />

			{/* Hero Section */}
			<Hero />

			{/* Services Section */}
			<Services />

			{/* Work Section */}
			<Work />

			{/* Process Section */}
			<Process />

			{/* ABOUT SECTION */}
			<section
				id="about"
				className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/5"
			>
				<div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-96 h-96 orange-glow opacity-20 pointer-events-none" />

				<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
						{/* Left Content */}
						<div className="lg:col-span-6 space-y-6">
							<motion.p
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="text-xs font-bold uppercase tracking-widest text-brand-orange"
							>
								Who We Are
							</motion.p>

							<motion.h2
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.1 }}
								className="text-3xl sm:text-5xl font-display font-black leading-tight tracking-tight uppercase"
							>
								We build products that grow businesses.
							</motion.h2>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.2 }}
								className="text-xl md:text-2xl text-white font-light leading-relaxed font-sans"
							>
								We combine design, development and strategy to
								help ambitious businesses launch, grow and scale
								digital products.
							</motion.p>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.3 }}
								className="text-sm md:text-base text-muted-text/80 leading-relaxed font-sans"
							>
								Our team acts as a dedicated engineering and
								design force for founders, startups, and
								enterprises. We reject the standard
								assembly-line agency approach in favor of craft,
								premium aesthetics, and highly performant custom
								software.
							</motion.p>
						</div>

						{/* Right Image Collage */}
						<div className="lg:col-span-6 relative flex items-center justify-center pt-12 lg:pt-0">
							{/* Main Collage Image */}
							<motion.div
								initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									rotate: -1,
								}}
								viewport={{ once: true }}
								transition={{
									duration: 1,
									ease: [0.16, 1, 0.3, 1],
								}}
								className="w-[280px] sm:w-[380px] aspect-[3/4] border border-white/10 rounded-sm overflow-hidden bg-black shadow-2xl relative"
							>
								<img
									src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=800&q=80"
									alt="Agency Team Workshop"
									className="w-full h-full object-cover grayscale brightness-95"
									loading="lazy"
								/>
							</motion.div>

							{/* Overlapping small collage image */}
							<motion.div
								initial={{ opacity: 0, x: 50, rotate: 6 }}
								whileInView={{ opacity: 1, x: 0, rotate: 4 }}
								viewport={{ once: true }}
								transition={{
									duration: 1.2,
									ease: [0.16, 1, 0.3, 1],
									delay: 0.2,
								}}
								className="absolute -bottom-8 right-[5%] sm:right-[15%] w-[160px] sm:w-[220px] aspect-square border border-white/10 shadow-2xl rounded-sm overflow-hidden z-10 bg-black"
							>
								<img
									src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&h=400&q=80"
									alt="Team Design Session"
									className="w-full h-full object-cover grayscale brightness-95"
									loading="lazy"
								/>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<CTA />

			{/* Footer Section */}
			<Footer />
		</>
	);
}
