import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, SubTitle, Paragraph, List } from '../../pages/LegalPage';

export default function RegulatoryContent() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.4 }}
		>
			<h1 className="text-4xl sm:text-5xl font-display font-black leading-tight tracking-tight uppercase mb-4 text-white">
				Regulatory Compliance
			</h1>

			<SectionTitle>
				General Data Protection Regulation (GDPR)
			</SectionTitle>
			<Paragraph>
				In compliance with the General Data Protection Regulation
				(GDPR), we collect and process your personal data only when we
				have a lawful basis to do so. This includes processing based on
				your consent, to fulfill a contract with you, to comply with a
				legal obligation, to protect your vital interests, to perform a
				task in the public interest, or for our legitimate interests
				where those don't override your fundamental rights and freedoms.
			</Paragraph>
			<Paragraph>
				If you are located in the European Economic Area (EEA), you have
				rights to access, rectification, erasure, restriction of
				processing, data portability, and objection.
			</Paragraph>

			<SectionTitle>California Consumer Privacy Act (CCPA)</SectionTitle>
			<Paragraph>
				Under the California Consumer Privacy Act (CCPA), we are
				required to inform California residents about the categories of
				personal information we collect and the purposes for which we
				use this information. If you are a California resident, you have
				the right to know, right to delete, right to opt-out, and right
				to non-discrimination.
			</Paragraph>

			<SectionTitle>Lei Geral de Proteção de Dados (LGPD)</SectionTitle>
			<Paragraph>
				In accordance with the Brazilian General Data Protection Law
				(LGPD), we only process your personal data when we have a legal
				basis to do so. You have rights including confirmation of
				processing, access, correction, anonymization, portability, and
				deletion.
			</Paragraph>

			<SectionTitle>PIPEDA (Canada)</SectionTitle>
			<Paragraph>
				In accordance with the Personal Information Protection and
				Electronic Documents Act (PIPEDA), we obtain your consent when
				we collect, use, or disclose your personal information. You have
				the right to access, challenge accuracy, amend, and withdraw
				consent.
			</Paragraph>

			<SectionTitle>POPIA (South Africa)</SectionTitle>
			<Paragraph>
				In compliance with the Protection of Personal Information Act
				(POPIA), we process your personal information lawfully and
				minimally, for specific purposes. You have rights to request
				confirmation, access, correction, deletion, and to object to
				processing.
			</Paragraph>

			<SectionTitle>Australian Privacy Principles (APPs)</SectionTitle>
			<Paragraph>
				We comply with the Australian Privacy Principles (APPs)
				contained in the Privacy Act 1988 (Cth). We are committed to
				being open and transparent about how we manage your personal
				information.
			</Paragraph>
		</motion.div>
	);
}
