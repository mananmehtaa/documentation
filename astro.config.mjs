import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Hardhat Enterprises',
			social: {
				github: 'https://github.com/Hardhat-Enterprises',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', link: '/guides/getting-started/' },
						{ label: 'Github Guide', link: '/guides/github-guide/' },
						{ label: 'Teams Guide', link: '/guides/teams-guide/' },
						{ label: 'Trello Guide', link: '/guides/trello-guide/' },
					],
				},
				{
					label: 'Projects',
					items: [
						{ label: 'Projects Overview', link: '/projects/projects-overview' },
						{ label: 'PT-GUI', link: '/projects/pt-gui/' },
						{ label: 'CyberSafe VR', link: '/projects/cybersafe-vr' },
						{ label: 'Smishing Detection', link: '/projects/smishing-detection' },
						{ label: 'Threat Mirror', link: '/projects/threat-mirror' },
						{ label: 'Company Website', link: '/projects/company-website' },
						{ label: 'App Attack', link: '/projects/app-attack' },
					],
				},
			],
		}),
	],
});
