import React from "react";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const projects = [
	{
		id: 1,
		title: "Aarogyadost",
		category: "Health OS & AI Layer",
		desc: "Worked for a startup building their Health OS product, and also built their core AI layer with backend.",
		img: "/AarogyaDost.png",
		url: "https://www.aarogyadost.in",
		className: "md:col-span-1 lg:col-span-6 aspect-[16/10]",
	},
	{
		id: 2,
		title: "Ziddfit",
		category: "Gym Website",
		desc: "A gym's website focusing on fitness missions, training, and athletic excellence.",
		img: "/ziddfit.png",
		url: "https://www.ziddfit.com/mission",
		className: "md:col-span-1 lg:col-span-6 aspect-[16/10]",
	},
];

export default function Work() {
	return (
		<section
			id="work"
			className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/5"
		>
			{/* Background ambient light */}
			<div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] orange-glow opacity-15 pointer-events-none" />
			<div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] orange-glow opacity-15 pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
				{/* Section Header */}
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
					<div className="space-y-4 max-w-xl">
						<motion.p
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="text-xs font-bold uppercase tracking-widest text-brand-orange"
						>
							Case Studies
						</motion.p>
						<motion.h2
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-tight tracking-tight uppercase"
						>
							Featured <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-light">
								Client Work
							</span>
						</motion.h2>
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-muted-text text-sm md:text-base max-w-xs md:text-right"
					>
						A curated selection of digital products built to scale
						businesses, streamline operations, and engage users.
					</motion.div>
				</div>

				{/* Symmetrical Project Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
					{projects.map((project, index) => (
						<motion.a
							key={project.id}
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, y: 60 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{
								duration: 1,
								ease: [0.16, 1, 0.3, 1],
								delay: index * 0.15,
							}}
							className={`${project.className} group relative flex flex-col justify-end overflow-hidden border border-white/10 rounded-sm bg-black hover:border-brand-orange/30 transition-all duration-500 cursor-pointer`}
						>
							{/* Overlay for hover glow and text legibility */}
							<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 transition-opacity duration-500 opacity-90 group-hover:opacity-95" />

							{/* Glow element */}
							<div className="absolute inset-0 bg-brand-orange/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

							{/* Background Project Image */}
							<img
								src={project.img}
								alt={project.title}
								className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:brightness-95 transition-all duration-[800ms] z-0"
								loading="lazy"
							/>

							{/* Action Link button top-right (slides in on hover) */}
							<div className="absolute top-6 right-6 z-20 text-white/50 group-hover:text-brand-orange bg-[#050505]/80 hover:bg-brand-orange hover:text-white p-3 rounded-full border border-white/5 group-hover:border-brand-orange/20 transition-all duration-300 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
								<HiArrowUpRight size={20} />
							</div>

							{/* Project Card Content */}
							<div className="p-6 md:p-8 relative z-20 space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
								<span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-orange">
									{project.category}
								</span>

								<h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-wide text-white group-hover:text-brand-light transition-colors duration-300">
									{project.title}
								</h3>

								<p className="text-xs md:text-sm text-muted-text max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
									{project.desc}
								</p>
							</div>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
}
