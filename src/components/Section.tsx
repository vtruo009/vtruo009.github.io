import { ReactNode } from 'react';

const Section = ({
	sectionId,
	title,
	subtitle,
	children,
	className,
}: {
	sectionId: string;
	title?: string;
	subtitle?: string;
	children: ReactNode;
	className?: string;
}) => {
	return (
		<section id={sectionId} className={`h-screen px-32 ${className}`}>
			<p className='text-lg text-gray-500 capitalize'>{subtitle}</p>
			<h2 className='text-6xl capitalize'>{title}</h2>
			{children}
		</section>
	);
};

export default Section;
