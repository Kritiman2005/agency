import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
	{ name: "Home", href: "/#home" },
	{ name: "Services", href: "/#services" },
	{ name: "Work", href: "/#work" },
	{ name: "Process", href: "/#process" },
	{ name: "About", href: "/#about" },
	{ name: "Legal", href: "/legal" },
	{ name: "Contact", href: "/#contact" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<motion.nav
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
				className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
					isScrolled
						? "py-4 bg-[#050505]/75 backdrop-blur-md border-b border-white/5"
						: "py-6 bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
					{/* Logo */}
					<a href="#home" className="flex items-center">
						<span
							className="text-xl md:text-2xl font-bold tracking-wider text-white"
							style={{ fontFamily: "'Amarante', cursive" }}
						>
							UpScale
						</span>
					</a>

					{/* Desktop Nav Links */}
					<div className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="text-sm font-medium text-muted-text hover:text-white transition-colors duration-200 relative group"
							>
								{link.name}
								<span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-brand-orange transition-all duration-300 group-hover:w-full" />
							</a>
						))}
					</div>

					{/* CTA Button */}
					<div className="hidden md:flex items-center space-x-4">
						<a
							href="mailto:contact@upscaleagency.in"
							className="px-6 py-2.5 bg-brand-orange hover:bg-brand-glow text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(255,91,46,0.4)] hover:shadow-[0_4px_25px_-2px_rgba(255,91,46,0.6)]"
						>
							LET'S TALK
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 text-white hover:text-brand-orange transition-colors"
						aria-label="Toggle Menu"
					>
						{isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
					</button>
				</div>
			</motion.nav>

			{/* Mobile Navigation Panel */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
						className="fixed inset-0 z-40 bg-[#050505] pt-28 px-6 flex flex-col md:hidden"
					>
						{/* Background Glow */}
						<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 orange-glow opacity-30 pointer-events-none" />

						<div className="flex flex-col space-y-6 text-center z-10">
							{navLinks.map((link, i) => (
								<motion.a
									key={link.name}
									href={link.href}
									onClick={() => setIsOpen(false)}
									initial={{ opacity: 0, y: 15 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										delay: i * 0.05,
										duration: 0.5,
									}}
									className="text-2xl font-bold font-display text-muted-text hover:text-brand-orange transition-colors"
								>
									{link.name}
								</motion.a>
							))}

							<motion.div
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay: navLinks.length * 0.05,
									duration: 0.5,
								}}
								className="pt-8 flex flex-col items-center space-y-4"
							>
								<a
									href="#contact"
									onClick={() => setIsOpen(false)}
									className="w-full max-w-xs px-6 py-4 bg-brand-orange hover:bg-brand-glow text-white text-sm font-bold uppercase tracking-widest rounded-sm text-center transition-all duration-300"
								>
									LET'S TALK
								</a>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
