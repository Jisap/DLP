import Tag from "@/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg"
import notionIcon from "@/assets/images/notion-logo.svg"
import slackIcon from "@/assets/images/slack-logo.svg"
import relumeIcon from "@/assets/images/relume-logo.svg"
import framerIcon from "@/assets/images/framer-logo.svg"
import githubIcon from "@/assets/images/github-logo.svg"
import IntegrationsColumn from "@/components/IntegrationsColumn";

const integrations = [
	{ name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
	{ name: "Notion", icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
	{ name: "Slack", icon: slackIcon, description: "Slack is a powerful team communication platform." },
	{ name: "Relume", icon: relumeIcon, description: "Relume is a no-code website builder and design system." },
	{ name: "Framer", icon: framerIcon, description: "Framer is a professional website prototyping tool." },
	{ name: "GitHub", icon: githubIcon, description: "GitHub is the leading platform for code collaboration." },
];

export type IntegrationsType = typeof integrations;


export default function Integrations() {
	return (
		<section className="py-28 overflow-hidden">
			<div className="container">
				<Tag>Integrations</Tag>
				<h2 className="text-6xl font-medium mt-6">
					Play well with <span className="text-lime-400">others</span>
				</h2>
				<p className="text-white/50 mt-4 text-lg">
					Layers seamlessly connects with your favorite tools, making it easy to plug into any workflow and collaborate across platforms.
				</p>
				<div className="h-[400px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
					<IntegrationsColumn 
						integrations={integrations}
					/>
				</div>
			</div>
		</section>
	)
}
