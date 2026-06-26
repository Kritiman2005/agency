import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const footerSections = [
	{
		title: "Services",
		links: [
			{ name: "SEO & Growth", href: "#services" },
			{ name: "Software Development", href: "#services" },
			{ name: "Product Strategy", href: "#services" },
		],
	},
	{
		title: "Company",
		links: [
			{ name: "About Us", href: "#about" },
			{ name: "Our Work", href: "#work" },
			{ name: "Process Workflow", href: "#process" },
		],
	},
];

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative bg-[#050505] pt-20 pb-12 overflow-hidden border-t border-white/5">
			{/* Background Watermark LOGO */}
			<div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
				<h2 className="text-[14vw] font-display font-black leading-none text-white/[0.015] tracking-[0.1em] text-center uppercase">
					upscale.agency
				</h2>
			</div>

			<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
				{/* Top footer row */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-white/5">
					{/* Brand Col */}
					<div className="col-span-2 lg:col-span-4 space-y-6">
						<a href="#home" className="flex items-center">
							<span
								className="text-xl md:text-4xl font-bold tracking-wider text-white"
								style={{ fontFamily: "'Amarante', cursive" }}
							>
								UpScale
							</span>
						</a>
						<p className="text-sm text-muted-text/80 max-w-sm leading-relaxed">
							We design, build, and scale digital products that
							drive measurable business growth. A modern
							engineering approach with a focus on luxury
							aesthetics.
						</p>

						{/* Social Icons */}
						<div className="flex items-center space-x-4 pt-2">
							<a
								href="https://instagram.com/upscale.agency__"
								target="_blank"
								rel="noreferrer"
								className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white border border-white/5 hover:border-brand-orange flex items-center justify-center text-muted-text transition-all duration-300"
								aria-label="Instagram"
							>
								<FaInstagram size={16} />
							</a>
							<a
								href="https://www.linkedin.com/company/upscaleagencyin/"
								target="_blank"
								rel="noreferrer"
								className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white border border-white/5 hover:border-brand-orange flex items-center justify-center text-muted-text transition-all duration-300"
								aria-label="LinkedIn"
							>
								<FaLinkedin size={16} />
							</a>
							<a
								href="https://x.com/upscaleagencyin"
								target="_blank"
								rel="noreferrer"
								className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white border border-white/5 hover:border-brand-orange flex items-center justify-center text-muted-text transition-all duration-300"
								aria-label="Twitter"
							>
								<FaXTwitter size={16} />
							</a>
						</div>
					</div>

					{/* Links columns */}
					{footerSections.map((sec) => (
						<div
							key={sec.title}
							className="col-span-1 lg:col-span-2 space-y-5"
						>
							<h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange">
								{sec.title}
							</h4>
							<ul className="space-y-3">
								{sec.links.map((link) => (
									<li key={link.name}>
										<a
											href={link.href}
											className="text-sm text-muted-text hover:text-white transition-colors duration-200"
										>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}

					{/* Contact Col */}
					<div className="col-span-2 lg:col-span-2 space-y-5">
						<h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange">
							Let's Connect
						</h4>
						<ul className="space-y-3 text-sm text-muted-text">
							<li>
								<span className="block text-white/50 text-sm md:text-base uppercase tracking-wider">
									Email
								</span>
								<a
									href="mailto:contact@upscaleagency.in"
									className="hover:text-white transition-colors"
								>
									contact@upscaleagency.in
								</a>
							</li>
							<li>
								<span className="block text-white/50 text-sm md:text-base uppercase tracking-wider">
									Phone
								</span>
								<a
									href="tel:+918822617263"
									className="hover:text-white transition-colors"
								>
									+91-8822617263
								</a>
							</li>
							<li>
								<span className="block text-white/50 text-sm md:text-base uppercase tracking-wider">
									Instagram
								</span>
								<a
									href="https://instagram.com/upscale.agency__"
									target="_blank"
									rel="noreferrer"
									className="hover:text-white transition-colors"
								>
									@upscale.agency__
								</a>
							</li>
							<li>
								<span className="block text-white/50 text-sm md:text-base uppercase tracking-wider">
									Location
								</span>
								<span>Guwahati, Assam</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom row */}
				<div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-sm md:text-base text-muted-text/60 gap-4">
					<div>
						&copy; {currentYear} upscale.agency. All rights
						reserved.
					</div>
					<div className="flex space-x-6">
						<a
							href="/legal"
							className="hover:text-white transition-colors"
						>
							Privacy Policy
						</a>
						<a
							href="/legal"
							className="hover:text-white transition-colors"
						>
							Terms of Service
						</a>
						<a
							href="/#"
							className="hover:text-white transition-colors"
						>
							Sitemap
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
