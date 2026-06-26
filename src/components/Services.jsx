import React from "react";
import { motion } from "framer-motion";
import {
	HiOutlineSearch,
	HiOutlineCode,
	HiOutlineLightBulb,
	HiArrowNarrowRight,
} from "react-icons/hi";

const services = [
	{
		num: "01",
		title: "SEO & Growth",
		icon: HiOutlineSearch,
		description:
			"We drive intent-based organic traffic that converts into active pipeline. No vanity metrics, just revenue-focused visibility.",
		features: [
			"Technical SEO Audits",
			"Content & Keyword Strategy",
			"Local SEO Optimization",
			"Conversion Rate Optimization",
		],
	},
	{
		num: "02",
		title: "Software Development",
		icon: HiOutlineCode,
		description:
			"Custom end-to-end design and engineering. We build high-converting interfaces, modern React/Next.js web applications, premium iOS/Android mobile apps, and AI-powered solutions that automate and scale.",
		features: [
			"UI/UX & Design Systems",
			"React, Next.js & Custom Web Apps",
			"iOS & Android App Development",
			"AI Chatbots & Assistants",
			"Custom AI Agents & Workflows",
			"LLM Integration",
			"Process Automation",
			"AI-Powered Analytics",
			"API & SaaS Integrations",
			"High-Converting Landing Pages",
		],
	},
	{
		num: "03",
		title: "Product Strategy",
		icon: HiOutlineLightBulb,
		description:
			"Bridge the gap between business goals and engineering output. We help founders validate, plan, and build their MVPs.",
		features: [
			"MVP Scoping & Mapping",
			"Product Roadmap Planning",
			"User Research & Personas",
			"Feature Prioritization",
		],
	},
];

export default function Services() {
	return (
		<section
			id="services"
			className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/5"
		>
			{/* Background radial glow */}
			<div className="absolute -top-[10%] right-[5%] w-[45%] h-[45%] orange-glow opacity-30 pointer-events-none" />
			<div className="absolute bottom-[5%] left-[5%] w-[40%] h-[40%] orange-glow opacity-20 pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
					{/* Left Sticky/Intro Column */}
					<div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit space-y-6">
						<motion.p
							initial={{ opacity: 0, x: -25 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.6 }}
							className="text-xs font-bold uppercase tracking-widest text-brand-orange"
						>
							Our Expertise
						</motion.p>

						<motion.h2
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-tight tracking-tight uppercase"
						>
							We Build <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-light">
								Digital Growth
							</span>{" "}
							<br />
							Engines
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-base md:text-lg text-muted-text max-w-md leading-relaxed"
						>
							We combine world-class aesthetics with robust
							software engineering to deliver products that move
							business needles.
						</motion.p>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1, delay: 0.3 }}
							className="pt-6"
						>
							<a
								href="#contact"
								className="inline-flex items-center space-x-3 text-sm font-bold uppercase tracking-widest text-white hover:text-brand-orange transition-colors group"
							>
								<span>View all services</span>
								<HiArrowNarrowRight
									className="group-hover:translate-x-2 transition-transform duration-300 text-brand-orange"
									size={20}
								/>
							</a>
						</motion.div>
					</div>

					{/* Right Cards List Column */}
					<div className="lg:col-span-7 space-y-6 md:space-y-8">
						{services.map((service, index) => {
							const IconComponent = service.icon;
							return (
								<motion.div
									key={service.num}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-80px" }}
									transition={{
										duration: 0.8,
										ease: [0.16, 1, 0.3, 1],
										delay: index * 0.1,
									}}
									className="glass-panel glass-panel-hover p-8 md:p-10 rounded-sm relative group overflow-hidden"
								>
									{/* Subtle inner card accent background */}
									<div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

									<div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
										<div className="space-y-4 max-w-xl">
											<div className="flex items-center space-x-4">
												<span className="text-xs md:text-sm font-bold font-display text-brand-orange/80 tracking-widest">
													{service.num}
												</span>
												<h3 className="text-2xl font-display font-bold uppercase tracking-wide group-hover:text-brand-orange transition-colors duration-300">
													{service.title}
												</h3>
											</div>

											<p className="text-sm md:text-base text-muted-text/90 leading-relaxed">
												{service.description}
											</p>

											{/* Service features tags */}
											<div className="flex flex-wrap gap-2 pt-4">
												{service.features.map(
													(feat) => (
														<span
															key={feat}
															className="text-[11px] font-semibold tracking-wider text-white/70 bg-white/5 border border-white/5 hover:border-brand-orange/30 px-3 py-1 rounded-full hover:text-white transition-all duration-300"
														>
															{feat}
														</span>
													),
												)}
											</div>
										</div>

										<div className="text-white/20 group-hover:text-brand-orange transition-colors duration-300 flex-shrink-0 self-end md:self-start">
											<IconComponent size={32} />
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
