import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
	{
		num: "01",
		title: "Discovery",
		desc: "Deep diving into your brand, target audience, business bottlenecks, and technical requirements.",
	},
	{
		num: "02",
		title: "Strategy",
		desc: "Crafting the product blueprint, prioritizing scope, mapping user journeys, and setting key metrics.",
	},
	{
		num: "03",
		title: "Design",
		desc: "Creating high-fidelity UI designs, custom design systems, prototypes, and dynamic micro-animations.",
	},
	{
		num: "04",
		title: "Development",
		desc: "Writing clean, scalable code in modern React/Vite frameworks. Robust APIs and pixel-perfect layouts.",
	},
	{
		num: "05",
		title: "Launch",
		desc: "Rigorous optimization, SEO setups, speed fine-tuning, automated tests, and deployment to staging & production.",
	},
];

export default function Process() {
	const sectionRef = useRef(null);

	// Use scroll progress to animate the horizontal line on scroll
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end center"],
	});

	const lineScale = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

	return (
		<section
			ref={sectionRef}
			id="process"
			className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/5"
		>
			{/* Glow effect */}
			<div className="absolute top-[30%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-80 h-80 orange-glow opacity-25 pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
				{/* Header */}
				<div className="text-center max-w-2xl mx-auto mb-20 md:mb-28 space-y-4">
					<motion.p
						initial={{ opacity: 0, y: 15 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-xs font-bold uppercase tracking-widest text-brand-orange"
					>
						How We Partner
					</motion.p>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.1 }}
						className="text-4xl sm:text-5xl font-display font-black leading-tight tracking-tight uppercase"
					>
						Our Product{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-light">
							Workflow
						</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-sm md:text-base text-muted-text"
					>
						A high-touch, structured strategy designed to build
						products that delight users and scale seamlessly.
					</motion.p>
				</div>

				{/* Timeline Layout */}
				<div className="relative">
					{/* Desktop connecting line */}
					<div className="absolute top-[18px] left-[5%] right-[5%] h-[2px] bg-white/5 hidden lg:block z-0">
						<motion.div
							style={{ scaleX: lineScale, originX: 0 }}
							className="w-full h-full bg-gradient-to-r from-brand-orange via-brand-glow to-brand-light"
						/>
					</div>

					{/* Grid Steps Container */}
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
						{steps.map((step, index) => (
							<motion.div
								key={step.num}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-80px" }}
								transition={{
									duration: 0.8,
									ease: [0.16, 1, 0.3, 1],
									delay: index * 0.15,
								}}
								className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 group"
							>
								{/* Step node/circle */}
								<div className="relative flex items-center justify-center">
									{/* Glowing ring under circle on hover */}
									<div className="absolute inset-[-4px] bg-brand-orange/0 group-hover:bg-brand-orange/30 blur-md rounded-full transition-all duration-300 -z-10" />

									{/* Connecting line for mobile */}
									{index < steps.length - 1 && (
										<div className="absolute top-[38px] left-1/2 -translate-x-1/2 w-[2px] h-[70px] bg-white/5 lg:hidden z-0" />
									)}

									<div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#050505] border-2 border-white/20 group-hover:border-brand-orange text-white text-xs font-bold font-display flex items-center justify-center transition-colors duration-300 relative z-10">
										{step.num}
									</div>
								</div>

								{/* Step Content */}
								<div className="pt-2 space-y-2 max-w-xs md:max-w-sm lg:max-w-none">
									<h3 className="text-xl font-display font-bold uppercase tracking-wider group-hover:text-brand-orange transition-colors duration-300">
										{step.title}
									</h3>
									<p className="text-xs md:text-sm text-muted-text/80 leading-relaxed">
										{step.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
