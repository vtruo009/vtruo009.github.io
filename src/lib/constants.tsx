import { Project, Skill } from './mixins';

export const TECH_STACK: Skill[] = [
	{
		name: 'TypeScript',
		iconName: 'typescript',
	},
	{
		name: 'JavaScript',
		iconName: 'js',
	},
	{
		name: 'NodeJS',
		iconName: 'nodejs',
	},
	{
		name: 'ExpressJS',
		icon: <img src='src/assets/icons/express.svg' className='skill-icon' />,
	},
	{
		name: 'HTML',
		iconName: 'html5',
	},
	{
		name: 'Tailwind',
		iconName: 'tailwindcss',
	},
	{
		name: 'React (Native)',
		iconName: 'reactjs',
	},
	{
		name: 'NextJS',
		iconName: 'nextjs2',
	},
	{
		name: 'Expo',
		icon: <img src='src/assets/icons/expo.svg' className='skill-icon' />,
	},
	{
		name: 'PostgreSQL',
		iconName: 'postgresql',
	},
	// {
	// 	name: 'Swift(UI)',
	// 	iconName: 'swift',
	// },
];

export const PROJECTS: Project[] = [
	{
		title: 'Pokesteps',
		description:
			"A gamified step counter inspired by Ash Ketchum's journey on becoming a Pokémon Master",
		images: ['src/assets/images/pokesteps-screenshots/pokeball.svg'],
		techStack: ['React Native', 'TypeScript', 'Tailwind', 'Expo'],
	},
	{
		title: 'Media Communications',
		description:
			'A platform empowering individuals who wants to make a difference in the school district.',
		images: ['src/assets/images/pokesteps-screenshots/pokeball.svg'],
		techStack: ['React', 'TypeScript', 'Tailwind', 'NextJS', 'PostgreSQL'],
	},
];
