import React from "react";
import { motion } from "framer-motion";
import { SectionTitle, SubTitle, Paragraph, List } from "../../pages/LegalPage";

export default function PrivacyContent() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.4 }}
		>
			<h1 className="text-4xl sm:text-5xl font-display font-black leading-tight tracking-tight uppercase mb-4 text-white">
				Privacy Policy
			</h1>
			<p className="text-brand-orange font-medium mb-10">
				Effective Date: 6/21/2026
			</p>

			<SectionTitle>1. INTRODUCTION</SectionTitle>
			<Paragraph>
				This Privacy Policy describes how UpScale Agency ("we," "us," or
				"our") collects, uses, and discloses your personal information
				when you use our software as a service (the "Service").
			</Paragraph>
			<Paragraph>
				We are committed to protecting your personal information and
				your right to privacy. When you visit our software as a service
				and use our products, you trust us with your personal
				information. We take your privacy very seriously. In this
				Privacy Policy, we seek to explain to you in the clearest way
				possible what information we collect, how we use it, and what
				rights you have in relation to it.
			</Paragraph>
			<Paragraph>
				This Privacy Policy applies to all information collected through
				our software as a service, as well as any related services,
				sales, marketing, or events.
			</Paragraph>
			<Paragraph>
				Please read this Privacy Policy carefully as it will help you
				understand what we do with the information we collect.
			</Paragraph>

			<SectionTitle>2. DEFINITIONS</SectionTitle>
			<Paragraph>
				To help explain things as clearly as possible in this Privacy
				Policy, every time any of these terms are referenced, they are
				strictly defined as:
			</Paragraph>
			<List>
				<li>
					<strong>Cookie:</strong> a small file placed on your device
					to enable certain features and functionality.
				</li>
				<li>
					<strong>Company:</strong> when this policy mentions
					"Company," "we," "us," or "our," it refers to UpScale
					Agency.
				</li>
				<li>
					<strong>Country:</strong> where UpScale Agency or the
					owners/founders of UpScale Agency are based, in this case
					India.
				</li>
				<li>
					<strong>Customer:</strong> refers to the company,
					organization, or person that signs up to use the UpScale
					Agency Service.
				</li>
				<li>
					<strong>Device:</strong> any internet-connected device such
					as a phone, tablet, computer, or any other device that can
					be used to visit UpScale Agency and use the services.
				</li>
				<li>
					<strong>Personal Data:</strong> any information that
					directly, indirectly, or in connection with other
					information allows for the identification of a natural
					person.
				</li>
				<li>
					<strong>Service:</strong> refers to the software as a
					service provided by UpScale Agency as described in the
					relative terms and on this platform.
				</li>
				<li>
					<strong>Third-party service:</strong> refers to advertisers,
					contest sponsors, promotional and marketing partners, and
					others who provide our content or whose products or services
					we think may interest you.
				</li>
				<li>
					<strong>Website:</strong> UpScale Agency's site, which can
					be accessed via https://www.upscaleagency.in/.
				</li>
				<li>
					<strong>You:</strong> a person or entity that is registered
					with UpScale Agency to use the Services.
				</li>
			</List>

			<SectionTitle>3. INFORMATION WE COLLECT</SectionTitle>
			<Paragraph>
				We collect several different types of information for various
				purposes to provide and improve our Service to you.
			</Paragraph>

			<SubTitle>3.1 Personal Data</SubTitle>
			<Paragraph>
				While using our Service, we may ask you to provide us with
				certain personally identifiable information that can be used to
				contact or identify you. Personally identifiable information may
				include, but is not limited to:
			</Paragraph>
			<List>
				<li>Email address</li>
				<li>First name and last name</li>
				<li>Phone number</li>
				<li>Address, State, Province, ZIP/Postal code, City</li>
				<li>Cookies and Usage Data</li>
			</List>

			<SubTitle>3.2 Usage Data</SubTitle>
			<Paragraph>
				We may also collect information about how the Service is
				accessed and used ("Usage Data"). This Usage Data may include
				information such as your computer's Internet Protocol address
				(e.g. IP address), browser type, browser version, the pages of
				our Service that you visit, the time and date of your visit, the
				time spent on those pages, unique device identifiers and other
				diagnostic data.
			</Paragraph>

			<SubTitle>3.3 Location Data</SubTitle>
			<Paragraph>
				We may use and store information about your location if you give
				us permission to do so ("Location Data"). We use this data to
				provide features of our Service, to improve and customize our
				Service.
			</Paragraph>
			<Paragraph>
				You can enable or disable location services when you use our
				Service at any time, through your device settings.
			</Paragraph>

			<SectionTitle>4. HOW WE USE YOUR INFORMATION</SectionTitle>
			<Paragraph>
				UpScale Agency uses the collected data for various purposes:
			</Paragraph>
			<List>
				<li>To provide and maintain our Service</li>
				<li>To notify you about changes to our Service</li>
				<li>
					To allow you to participate in interactive features of our
					Service when you choose to do so
				</li>
				<li>To provide customer support</li>
				<li>
					To gather analysis or valuable information so that we can
					improve our Service
				</li>
				<li>To monitor the usage of our Service</li>
				<li>To detect, prevent and address technical issues</li>
				<li>To fulfill any other purpose for which you provide it</li>
				<li>
					To provide you with news, special offers and general
					information about other goods, services and events which we
					offer that are similar to those that you have already
					purchased or enquired about unless you have opted not to
					receive such information
				</li>
				<li>
					In any other way we may describe when you provide the
					information
				</li>
				<li>For any other purpose with your consent</li>
			</List>

			<SectionTitle>6. RETENTION OF YOUR PERSONAL DATA</SectionTitle>
			<Paragraph>
				UpScale Agency will retain your Personal Data only for as long
				as is necessary for the purposes set out in this Privacy Policy.
				We will retain and use your Personal Data to the extent
				necessary to comply with our legal obligations (for example, if
				we are required to retain your data to comply with applicable
				laws), resolve disputes, and enforce our legal agreements and
				policies.
			</Paragraph>
			<Paragraph>
				UpScale Agency will also retain Usage Data for internal analysis
				purposes. Usage Data is generally retained for a shorter period
				of time, except when this data is used to strengthen the
				security or to improve the functionality of our Service, or we
				are legally obligated to retain this data for longer time
				periods.
			</Paragraph>

			<SubTitle>6.1 Data Retention for Physical Goods</SubTitle>
			<Paragraph>
				For orders involving physical goods, we retain your shipping and
				billing information, including your name, address, and contact
				details, as necessary to fulfill your order, process returns,
				manage warranty claims, and comply with tax, legal, and
				regulatory obligations. This information may be retained for a
				longer period than other personal data to ensure proper delivery
				of goods and to handle any post-purchase issues that may arise.
			</Paragraph>

			<SectionTitle>7. TRANSFER OF YOUR PERSONAL DATA</SectionTitle>
			<Paragraph>
				Your information, including Personal Data, may be transferred to
				— and maintained on — computers located outside of your state,
				province, country or other governmental jurisdiction where the
				data protection laws may differ from those of your jurisdiction.
			</Paragraph>
			<Paragraph>
				If you are located outside India and choose to provide
				information to us, please note that we transfer the data,
				including Personal Data, to India and process it there.
			</Paragraph>
			<Paragraph>
				Your consent to this Privacy Policy followed by your submission
				of such information represents your agreement to that transfer.
			</Paragraph>
			<Paragraph>
				UpScale Agency will take all steps reasonably necessary to
				ensure that your data is treated securely and in accordance with
				this Privacy Policy and no transfer of your Personal Data will
				take place to an organization or a country unless there are
				adequate controls in place including the security of your data
				and other personal information.
			</Paragraph>

			<SectionTitle>8. DISCLOSURE OF YOUR PERSONAL DATA</SectionTitle>
			<SubTitle>Business Transactions:</SubTitle>
			<Paragraph>
				If UpScale Agency is involved in a merger, acquisition or asset
				sale, your Personal Data may be transferred. We will provide
				notice before your Personal Data is transferred and becomes
				subject to a different Privacy Policy.
			</Paragraph>

			<SubTitle>Disclosure for Law Enforcement:</SubTitle>
			<Paragraph>
				Under certain circumstances, UpScale Agency may be required to
				disclose your Personal Data if required to do so by law or in
				response to valid requests by public authorities (e.g. a court
				or a government agency).
			</Paragraph>

			<SubTitle>Legal Requirements:</SubTitle>
			<Paragraph>
				UpScale Agency may disclose your Personal Data in the good faith
				belief that such action is necessary to:
			</Paragraph>
			<List>
				<li>Comply with a legal obligation</li>
				<li>
					Protect and defend the rights or property of UpScale Agency
				</li>
				<li>
					Prevent or investigate possible wrongdoing in connection
					with the Service
				</li>
				<li>
					Protect the personal safety of users of the Service or the
					public
				</li>
				<li>Protect against legal liability</li>
			</List>

			<SectionTitle>9. THIRD-PARTY DISCLOSURE</SectionTitle>
			<SubTitle>9.1 Analytics</SubTitle>
			<Paragraph>
				We may use third-party Service Providers to monitor and analyze
				the use of our Service.
			</Paragraph>
			<List>
				<li>
					<strong>Google Analytics:</strong> Google Analytics is a web
					analytics service offered by Google that tracks and reports
					website traffic. Google uses the data collected to track and
					monitor the use of our Service. This data is shared with
					other Google services. Google may use the collected data to
					contextualize and personalize the ads of its own advertising
					network. You can opt-out of having made your activity on the
					Service available to Google Analytics by installing the
					Google Analytics opt-out browser add-on. For more
					information, please visit the Google Privacy & Terms web
					page.
				</li>
			</List>

			<SectionTitle>10. SECURITY OF YOUR PERSONAL DATA</SectionTitle>
			<Paragraph>
				The security of your Personal Data is important to us, but
				remember that no method of transmission over the Internet, or
				method of electronic storage is 100% secure. While we strive to
				use commercially acceptable means to protect your Personal Data,
				we cannot guarantee its absolute security.
			</Paragraph>

			<SectionTitle>11. CHILDREN'S PRIVACY</SectionTitle>
			<Paragraph>
				Our Service does not address anyone under the age of 13. We do
				not knowingly collect personally identifiable information from
				anyone under the age of 13. If you are a parent or guardian and
				you are aware that your child has provided us with Personal
				Data, please contact us. If we become aware that we have
				collected Personal Data from anyone under the age of 13 without
				verification of parental consent, we take steps to remove that
				information from our servers.
			</Paragraph>

			<SectionTitle>12. YOUR DATA PROTECTION RIGHTS</SectionTitle>
			<Paragraph>
				Depending on your location and applicable laws, you may have
				certain rights regarding your personal information, including
				rights to access, correct, delete, or restrict use of your
				information. We honor these rights regardless of your location
				and are committed to providing reasonable access to the
				information that you have shared with us.
			</Paragraph>

			<SubTitle>12.1 General Data Access & Deletion Rights</SubTitle>
			<Paragraph>
				Regardless of your location, you can make the following requests
				regarding your personal data:
			</Paragraph>
			<List>
				<li>
					<strong>Access Your Data:</strong> You can request a copy of
					the personal information we have about you. We will provide
					this information in a structured, commonly used, and
					machine-readable format.
				</li>
				<li>
					<strong>Delete Your Data:</strong> You can request that we
					delete your personal information from our systems. We will
					comply with this request unless there is a legal requirement
					for us to keep certain information.
				</li>
			</List>

			<SectionTitle>13. SERVICE PROVIDERS</SectionTitle>
			<Paragraph>
				We may employ third-party companies and individuals to
				facilitate our Service ("Service Providers"), to provide the
				Service on our behalf, to perform Service-related services or to
				assist us in analyzing how our Service is used.
			</Paragraph>

			<SectionTitle>14. LINKS TO OTHER SITES</SectionTitle>
			<Paragraph>
				Our Service may contain links to other sites that are not
				operated by us. If you click on a third party link, you will be
				directed to that third party's site. We strongly advise you to
				review the Privacy Policy of every site you visit.
			</Paragraph>

			<SectionTitle>15. CHANGES TO THIS PRIVACY POLICY</SectionTitle>
			<Paragraph>
				We may update our Privacy Policy from time to time. We will
				notify you of any changes by posting the new Privacy Policy on
				this page.
			</Paragraph>

			<SectionTitle>16. CONTACT US</SectionTitle>
			<Paragraph>
				If you have any questions about this Privacy Policy, please
				contact us:
			</Paragraph>
			<List>
				<li>By email: contact@upscaleagency.in</li>
				<li>
					By visiting this page on our website:
					https://www.upscaleagency.in/legal
				</li>
				<li>By phone number: +918822617263</li>
			</List>
		</motion.div>
	);
}
