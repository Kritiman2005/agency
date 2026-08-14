import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Privacy from "../components/Legal/Privacy";

const PrivacyPolicyPage = () => {
	return (
		<>
			<Navbar />

			<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#050505] overflow-hidden min-h-screen">
				<div className="absolute top-0 left-[20%] -translate-x-1/2 -translate-y-1/2 w-96 h-96 orange-glow opacity-30 pointer-events-none" />
				<div className="absolute bottom-0 right-[20%] translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] orange-glow opacity-10 pointer-events-none" />

				<div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="glass-panel p-8 md:p-12 lg:p-16 rounded-2xl border border-white/5 relative overflow-hidden"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-100 pointer-events-none" />
						<div className="relative z-10">
							<Privacy />
						</div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default PrivacyPolicyPage;
