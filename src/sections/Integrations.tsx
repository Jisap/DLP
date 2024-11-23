import Tag from "@/components/Tag";

const integrations = [
	{ name: "Figma", icon: "figma-logo.svg", description: "Figma is a collaborative interface design tool." },
	{ name: "Notion", icon: "notion-logo.svg", description: "Notion is an all-in-one workspace for notes and docs." },
	{ name: "Slack", icon: "slack-logo.svg", description: "Slack is a powerful team communication platform." },
	{ name: "Relume", icon: "relume-logo.svg", description: "Relume is a no-code website builder and design system." },
	{ name: "Framer", icon: "framer-logo.svg", description: "Framer is a professional website prototyping tool." },
	{ name: "GitHub", icon: "github-logo.svg", description: "GitHub is the leading platform for code collaboration." },
];

export default function Integrations() {
	return (
		<section className="py-28 lg:py-40">
			<div className="container">
				<Tag>Integrations</Tag>
				<h2>Play well with <span>others</span></h2>
				<p>
					Layers seamlessly connects with your favorite tools, maling it easy to plug into any workflow and collaborate across platforms.
				</p>
				<div>
					{integrations.map((integration) => (
						<div key={integration.name} >
							<div></div>
							<h3>{integration.name}</h3>
							<p>{integration.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
