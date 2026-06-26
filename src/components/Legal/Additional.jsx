import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, SubTitle, Paragraph, List } from '../../pages/LegalPage';

export default function AdditionalContent() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.4 }}
		>
			<h1 className="text-4xl sm:text-5xl font-display font-black leading-tight tracking-tight uppercase mb-4 text-white">
				Additional Terms
			</h1>

			<SectionTitle>Dispute Resolution and Arbitration</SectionTitle>
			<SubTitle>Informal Dispute Resolution</SubTitle>
			<Paragraph>
				Before filing a claim against us, you agree to attempt to
				resolve the dispute informally by contacting us. We will attempt
				to resolve the dispute by contacting you via email.
			</Paragraph>

			<SubTitle>Agreement to Arbitrate</SubTitle>
			<Paragraph>
				You and we agree to resolve any disputes between us through
				binding and final arbitration instead of through court
				proceedings. You acknowledge and agree that you are waiving the
				right to sue in court, have a jury trial, or participate in a
				class action.
			</Paragraph>

			<SubTitle>Class Action Waiver</SubTitle>
			<Paragraph>
				YOU AND WE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER
				ONLY IN YOUR OR OUR INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF
				OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE
				PROCEEDING.
			</Paragraph>

			<SectionTitle>Intellectual Property Rights</SectionTitle>
			<SubTitle>Our Intellectual Property</SubTitle>
			<Paragraph>
				The Service and its original content (excluding Content provided
				by users), features, and functionality are and will remain the
				exclusive property of UpScale Agency and its licensors. The
				Service is protected by copyright, trademark, and other laws.
			</Paragraph>

			<SubTitle>Your License to Use Our Content</SubTitle>
			<Paragraph>
				Subject to these Terms, we grant you a limited, non-exclusive,
				non-transferable, and revocable license to access and use the
				Service for your personal or internal business purposes.
			</Paragraph>

			<SubTitle>DMCA Compliance</SubTitle>
			<Paragraph>
				If you are a copyright owner or an agent thereof and believe
				that any content on the Service infringes upon your copyrights,
				you may submit a notification pursuant to the Digital Millennium
				Copyright Act ("DMCA") by providing our Copyright Agent with the
				necessary information in writing, including a statement that you
				have a good faith belief that use of the material in the manner
				complained of is not authorized by the copyright owner, its
				agent, or the law.
			</Paragraph>
		</motion.div>
	);
}
