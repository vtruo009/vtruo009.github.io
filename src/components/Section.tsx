import { ReactNode } from 'react';

const Section = ({
	sectionId,
	children,
	className,
}: {
	sectionId: string;
	children: ReactNode;
	className?: string;
}) => {
	return (
		<section id={sectionId} className={`h-screen px-32 ${className}`}>
			{children}
		</section>
	);
};

export default Section;
