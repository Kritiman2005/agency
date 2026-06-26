import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
	return (
		<section
			id="contact"
			className="relative py-28 md:py-36 bg-[#050505] overflow-hidden border-t border-white/5"
		>
			{/* Background large radial glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] orange-glow opacity-30 pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
				{/* Glow point */}
				<div className="w-2 h-2 rounded-full bg-brand-orange animate-ping mb-6" />

				<motion.p
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-4"
				>
					Let's Collaborate
				</motion.p>

				{/* Large premium title */}
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.1 }}
					className="text-4xl sm:text-6xl md:text-8xl font-display font-black leading-[1] tracking-tight uppercase max-w-4xl mb-12"
				>
					Ready To Build <br />
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-muted-text to-brand-orange">
						Something Exceptional?
					</span>
				</motion.h2>

				{/* Action Button */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<a
						href="mailto:contact@upscaleagency.in"
						className="inline-flex items-center space-x-3 px-8 py-5 bg-brand-orange hover:bg-brand-glow text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-[0_8px_30px_rgba(255,91,46,0.3)] hover:shadow-[0_8px_40px_rgba(255,91,46,0.5)] hover:scale-105 group"
					>
						<span>Mail Us</span>
					</a>
				</motion.div>

				{/* Minimal Subtext */}
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 0.5 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 1 }}
					className="text-xs text-muted-text/80 mt-6 tracking-wider uppercase"
				>
					Typically replies in less than 24 hours
				</motion.p>
			</div>
		</section>
	);
}
