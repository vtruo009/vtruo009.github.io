import StackIcon from 'tech-stack-icons';
import { SKILLS } from '../lib/constants';

const SkillCard = () => {
	return (
		<div className='grid grid-cols-4 gap-y-10'>
			{SKILLS.map((skill) => (
				<div className='flex flex-col items-center justify-center capitalize hover:text-atomic-tangerine'>
					{skill.icon ? (
						skill.icon
					) : (
						<StackIcon name={skill.iconName} className='skill-icon' />
					)}
					{skill.label}
				</div>
			))}
		</div>
	);
};

export default SkillCard;
