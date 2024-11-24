import logoImage from "@/assets/images/logo.svg"
import { footer } from "framer-motion/client";
import Image from "next/image";

const footerLinks = [
	{ href: "#", label: "Contact" },
	{ href: "#", label: "Privacy Policy" },
	{ href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
	return (
		<section>
			<div className="container">
				<div>
					<div>
						<Image 
							src={logoImage}
							alt="Layers Logo"
						/>
					</div>
					<div>
						<nav>
							{footerLinks.map((link) => (
								<a href={link.href} key={link.label}>{link.label}</a>
							))}
						</nav>
					</div>
				</div>
			</div>
		</section>
	)
}
