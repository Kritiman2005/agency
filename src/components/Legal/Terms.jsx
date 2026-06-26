import React from "react";
import { motion } from "framer-motion";
import { SectionTitle, SubTitle, Paragraph, List } from "../../pages/LegalPage";

export default function TermsContent() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.4 }}
		>
			<h1 className="text-4xl sm:text-5xl font-display font-black leading-tight tracking-tight uppercase mb-4 text-white">
				Terms of Service
			</h1>

			<SectionTitle>1. Introduction</SectionTitle>
			<Paragraph>
				These Terms of Service ("Terms") govern your access to and use
				of the consulting and professional services (the "Services")
				provided by UpScale Agency ("we," "us," or "our"). These Terms
				constitute a legally binding agreement between you and UpScale
				Agency. By accessing or using our Services, you acknowledge that
				you have read, understood, and agree to be bound by these Terms.
			</Paragraph>

			<SectionTitle>2. Definitions</SectionTitle>
			<Paragraph>
				"Client," "you," and "your" refer to the individual or entity
				accessing or using our Services.
			</Paragraph>
			<Paragraph>
				"Deliverables" refers to the work product, reports, analyses,
				presentations, or other materials we provide to you as part of
				the Services.
			</Paragraph>
			<Paragraph>
				"Intellectual Property Rights" means all patent rights,
				copyright rights, moral rights, rights of publicity, trademark
				rights, trade dress and service mark rights, goodwill, trade
				secret rights, and other intellectual property rights.
			</Paragraph>

			<SectionTitle>3. Acceptance of Terms</SectionTitle>
			<Paragraph>
				By accessing or using our Services, you agree to be bound by
				these Terms. If you are using our Services on behalf of an
				organization, you represent and warrant that you have the
				authority to bind that organization to these Terms. If you do
				not agree to these Terms, you may not access or use our
				Services.
			</Paragraph>

			<SectionTitle>4. Changes to Terms</SectionTitle>
			<Paragraph>
				We reserve the right to modify these Terms at any time. We will
				provide notice of significant changes by posting a prominent
				notice on our website or by sending you an email. Your continued
				use of our Services after any such changes constitutes your
				acceptance of the revised Terms. If you do not agree to the
				revised Terms, you must stop using our Services.
			</Paragraph>

			<SectionTitle>5. Services</SectionTitle>
			<Paragraph>
				We will provide the Services as described in any applicable
				Statement of Work or other written agreement between you and
				UpScale Agency. We will use reasonable skill, care, and
				diligence in providing the Services in accordance with
				applicable professional standards.
			</Paragraph>

			<SectionTitle>6. Your Responsibilities</SectionTitle>
			<Paragraph>You agree to:</Paragraph>
			<List>
				<li>
					Provide timely access to information, personnel, systems,
					and facilities reasonably necessary for us to perform the
					Services
				</li>
				<li>Make decisions and provide approvals in a timely manner</li>
				<li>
					Designate a primary contact with authority to make decisions
					regarding the Services
				</li>
				<li>
					Pay all fees as set forth in any applicable SOW or invoice
				</li>
			</List>

			<SectionTitle>7. Fees and Payment</SectionTitle>
			<Paragraph>
				You agree to pay all fees specified in any applicable SOW or
				invoice. Unless otherwise specified, fees are quoted in INR and
				payment is due within the specified timeframe. We may charge
				interest on late payments. Fees do not include taxes, which will
				be added where applicable.
			</Paragraph>

			<SectionTitle>8. Term and Termination</SectionTitle>
			<Paragraph>
				These Terms will remain in effect until the completion of the
				Services or until terminated. Either party may terminate these
				Terms or any SOW for convenience upon written notice to the
				other party.
			</Paragraph>

			<SectionTitle>9. Confidentiality</SectionTitle>
			<Paragraph>
				Each party agrees to maintain the confidentiality of the other
				party's confidential information, which includes any non-public
				information disclosed during the provision of Services.
			</Paragraph>

			<SectionTitle>10. Intellectual Property</SectionTitle>
			<Paragraph>
				Unless otherwise specified in an applicable SOW, we own all
				right, title, and interest in and to any pre-existing materials,
				methodologies, tools, techniques, processes, know-how, and
				software that we use in providing the Services.
			</Paragraph>

			<SectionTitle>11. Representations and Warranties</SectionTitle>
			<Paragraph>
				Each party represents and warrants that it has the full right,
				power, and authority to enter into and perform its obligations
				under these Terms.
			</Paragraph>

			<SectionTitle>12. Limitation of Liability</SectionTitle>
			<Paragraph>
				To the maximum extent permitted by law, UpScale Agency shall not
				be liable for any indirect, incidental, special, consequential,
				or punitive damages.
			</Paragraph>

			<SectionTitle>13. Indemnification</SectionTitle>
			<Paragraph>
				You agree to indemnify, defend, and hold harmless UpScale
				Agency, its officers, directors, employees, agents, and
				affiliates from and against any and all claims, liabilities,
				damages, losses, costs, expenses, or fees that such parties may
				incur as a result of or arising from your use of the Services or
				Deliverables in violation of these Terms.
			</Paragraph>

			<SectionTitle>14. Independent Contractor Relationship</SectionTitle>
			<Paragraph>
				UpScale Agency is an independent contractor and not your
				employee, agent, joint venturer, or partner.
			</Paragraph>

			<SectionTitle>15. Non-Solicitation</SectionTitle>
			<Paragraph>
				During the term of any SOW and for a period thereafter, you
				agree not to solicit for employment or hire any employee of
				UpScale Agency who was involved in providing Services, without
				our prior written consent.
			</Paragraph>

			<SectionTitle>16. Governing Law</SectionTitle>
			<Paragraph>
				These Terms shall be governed by and construed in accordance
				with the laws of India.
			</Paragraph>
		</motion.div>
	);
}
