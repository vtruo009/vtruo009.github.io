import { Project } from '../lib/mixins';

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<div className='w-[350px] h-[500px] grid grid-rows-[30%_70%] text-start bg-gray-30 rounded-3xl items-start'>
			<div className='bg-atomic-tangerine rounded-t-3xl w-full h-full py-4 px-6 overflow-hidden'>
				<img src={project.images[0]} className='w-full h-full object-contain' />
			</div>

			<div className='flex flex-col justify-evenly items-start py-4 px-6 h-full'>
				<p className='text-3xl font-semibold'>{project.title}</p>

				<div>{project.description}</div>

				<div className='flex gap-2 flex-wrap'>
					{project.techStack.map((tool) => (
						<p className='bg-black text-sea-salt text-xs text-center py-1.5 px-2 rounded-3xl'>
							{tool}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
