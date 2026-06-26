import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";

const floatingCards = [
	// 1. Founder Portrait - Top Left
	{
		id: "founder",
		img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=750&q=80",
		className:
			"top-[12%] left-[6%] w-[180px] md:w-[240px] aspect-[3/4] z-10",
		parallaxSpeed: -60,
		mouseFactor: 0.015,
		overlay: {
			img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&h=300&q=80",
			className:
				"absolute -bottom-8 -left-8 w-24 h-24 md:w-32 md:h-32 border border-white/10 shadow-2xl rounded-sm overflow-hidden z-20",
			parallaxSpeed: -30,
		},
	},
	// 2. Modern City Skyline - Top Right
	{
		id: "skyline",
		img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&h=500&q=80",
		className:
			"top-[10%] right-[6%] w-[260px] md:w-[380px] aspect-[16/10] z-10",
		parallaxSpeed: -40,
		mouseFactor: 0.01,
	},
	// 3. Luxury Villa Mockup - Bottom Left
	{
		id: "villa",
		img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=500&q=80",
		className:
			"bottom-[12%] left-[4%] w-[280px] md:w-[400px] aspect-[16/10] z-20",
		parallaxSpeed: 40,
		mouseFactor: 0.012,
	},
	// 4. Mobile App / Headphone Portrait - Bottom Right
	{
		id: "headphone",
		img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&h=450&q=80",
		className:
			"bottom-[12%] right-[14%] w-[200px] md:w-[280px] aspect-[1.4/1] z-20",
		parallaxSpeed: 30,
		mouseFactor: 0.015,
		overlay: {
			img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&h=300&q=80",
			className:
				"absolute -top-12 -right-8 w-24 h-32 md:w-32 md:h-40 border border-white/10 shadow-2xl rounded-sm overflow-hidden z-30",
			parallaxSpeed: 60,
		},
	},
	// Extra card A: Branding visual - Center Left
	{
		id: "branding",
		img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=500&h=500&q=80",
		className:
			"top-[42%] left-[1%] w-[110px] md:w-[150px] aspect-square z-5 opacity-40 hover:opacity-100 transition-opacity duration-300",
		parallaxSpeed: -10,
		mouseFactor: 0.005,
	},
	// Extra card B: Analytics dashboard - Center Right
	{
		id: "dashboard",
		img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&h=350&q=80",
		className:
			"top-[45%] right-[2%] w-[130px] md:w-[180px] aspect-[1.4/1] z-5 opacity-40 hover:opacity-100 transition-opacity duration-300",
		parallaxSpeed: 20,
		mouseFactor: 0.007,
	},
];

export default function Hero() {
	const containerRef = useRef(null);

	// Get scroll-linked values for parallax
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	// Track mouse coordinates for cursor follow effect
	const mouseX = useSpring(0, { stiffness: 60, damping: 20 });
	const mouseY = useSpring(0, { stiffness: 60, damping: 20 });

	const handleMouseMove = (e) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		mouseX.set(x);
		mouseY.set(y);
	};

	const handleMouseLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
	};

	// Create customized motion variables for scroll-linked movement
	const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
	const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

	return (
		<section
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			id="home"
			className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col items-center justify-center pt-24"
		>
			{/* Background Glow Centered behind the Hero */}
			<div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] min-w-[600px] min-h-[600px] orange-glow pointer-events-none opacity-80" />

			{/* Main Container */}
			<div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center select-none pt-12 pb-24 md:py-0">
				{/* Subheading Fades In First */}
				<motion.p
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1,
						ease: [0.16, 1, 0.3, 1],
						delay: 0.2,
					}}
					className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-brand-orange mb-6"
				>
					SEO, Design, Development & Product Strategy
				</motion.p>

				{/* Central Bold Headline */}
				<motion.h1
					style={{ y: titleY, opacity: titleOpacity }}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1.2,
						ease: [0.16, 1, 0.3, 1],
						delay: 0.3,
					}}
					className="text-[42px] sm:text-[64px] md:text-[88px] lg:text-[108px] font-display font-black leading-[0.9] tracking-tight uppercase max-w-5xl"
				>
					Building <br />
					<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#a6a6a6]">
						Digital
					</span>{" "}
					<br />
					Products <br />
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-glow to-brand-light">
						That Scale
					</span>
				</motion.h1>

				{/* Interactive Down Arrow indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.6 }}
					transition={{ delay: 1.5, duration: 1 }}
					className="mt-12 md:mt-16 animate-bounce text-muted-text/80 hover:text-brand-orange cursor-pointer transition-colors"
					onClick={() =>
						document
							.getElementById("services")
							?.scrollIntoView({ behavior: "smooth" })
					}
				>
					<HiArrowDown size={28} />
				</motion.div>
			</div>

			{/* FLOATING CARD COMPOSITION - ONLY ON DESKTOP & TABLET IN ABSOLUTE SPACE */}
			<div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
				{floatingCards.map((card) => {
					// Calculate individual motion transitions
					const yScroll = useTransform(
						scrollYProgress,
						[0, 1],
						[0, card.parallaxSpeed],
					);
					const xMouse = useTransform(
						mouseX,
						(x) => x * card.mouseFactor,
					);
					const yMouse = useTransform(
						mouseY,
						(y) => y * card.mouseFactor,
					);

					return (
						<motion.div
							key={card.id}
							style={{ y: yScroll, x: xMouse, y: yMouse }}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 1.5,
								ease: [0.16, 1, 0.3, 1],
								delay: 0.5 + Math.random() * 0.3,
							}}
							className={`absolute ${card.className} pointer-events-auto rounded-sm overflow-visible group`}
						>
							{/* Outer Glow behind the card */}
							<div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/15 blur-xl transition-all duration-500 -z-10" />

							{/* Main Card Image container */}
							<motion.div
								whileHover={{ scale: 1.03, y: -6, rotate: 1.5 }}
								transition={{
									type: "spring",
									stiffness: 300,
									damping: 15,
								}}
								className="w-full h-full border border-white/10 rounded-sm overflow-hidden bg-black shadow-2xl relative"
							>
								<img
									src={card.img}
									alt="Premium Showcase"
									className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
									loading="lazy"
								/>
							</motion.div>

							{/* Nested/Overlapping card details if they exist */}
							{card.overlay && (
								<motion.div
									style={{
										y: useTransform(
											scrollYProgress,
											[0, 1],
											[0, card.overlay.parallaxSpeed],
										),
										x: useTransform(
											mouseX,
											(x) => x * card.mouseFactor * 1.5,
										),
									}}
									className={`${card.overlay.className} pointer-events-auto group/overlay`}
								>
									<motion.div
										whileHover={{
											scale: 1.05,
											y: -4,
											rotate: -2,
										}}
										className="w-full h-full"
									>
										<img
											src={card.overlay.img}
											alt="Overlay visual"
											className="w-full h-full object-cover grayscale brightness-95 group-hover/overlay:grayscale-0 transition-all duration-500"
											loading="lazy"
										/>
									</motion.div>
								</motion.div>
							)}
						</motion.div>
					);
				})}
			</div>

			{/* MOBILE DISPLAY OF PORTRAIT/MOCKUP CARDS FOR CONTINUOUS DESIGN SYSTEM AESTHETIC */}
			<div className="w-full px-6 grid grid-cols-2 gap-4 pb-20 md:hidden relative z-30">
				<div className="space-y-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="w-full aspect-[3/4] rounded-sm overflow-hidden border border-white/10 relative"
					>
						<img
							src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=533&q=80"
							alt="Founder"
							className="w-full h-full object-cover grayscale"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="w-full aspect-[16/10] rounded-sm overflow-hidden border border-white/10"
					>
						<img
							src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&h=250&q=80"
							alt="Mockup"
							className="w-full h-full object-cover grayscale"
						/>
					</motion.div>
				</div>
				<div className="space-y-4 pt-8">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="w-full aspect-[16/10] rounded-sm overflow-hidden border border-white/10"
					>
						<img
							src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&h=250&q=80"
							alt="Skyline"
							className="w-full h-full object-cover grayscale"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="w-full aspect-[1.4/1] rounded-sm overflow-hidden border border-white/10"
					>
						<img
							src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&h=286&q=80"
							alt="Mobile"
							className="w-full h-full object-cover grayscale"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
