import StackIcon from 'tech-stack-icons';
import { TECH_STACK } from '../lib/constants';
import { Skill } from '../lib/mixins';

const SkillCard = () => {
	return (
		<div className='grid grid-cols-4 gap-y-10'>
			{TECH_STACK.map((skill: Skill) => (
				<div className='flex flex-col items-center justify-center capitalize hover:text-atomic-tangerine'>
					{skill.icon ? (
						skill.icon
					) : (
						<StackIcon name={skill.iconName} className='skill-icon' />
					)}
					{skill.name}
				</div>
			))}
		</div>
	);
};

export default SkillCard;
