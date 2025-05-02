import { ReactNode } from 'react';

export enum NAV_ITEMS {
	ABOUT = 'about',
	SKILLS = 'skills',
	PROJECTS = 'projects',
}

export interface Skill {
	name: string;
	icon?: ReactNode;
	iconName?: string;
}

export interface Project {
	title: string;
	description: string;
	images: string[];
	techStack: string[];
}
