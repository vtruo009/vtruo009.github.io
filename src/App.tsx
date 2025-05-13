import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';
import SkillCard from './components/SkillCard';
import { PROJECTS } from './lib/constants';

const App = () => {
	return (
		<>
			<Header />
			<main className='min-h-screen max-w-global m-auto'>
				<Section
					sectionId='about'
					className='h-[663px] flex items-center gap-11 bg-gray-30 rounded-b-3xl'
				>
					<div className='px-12 shrink-0'>
						<img
							src='src/assets/images/profile.jpg'
							className='w-[200px] h-[200px] object-cover rounded-full md:w-[400px] md:h-[400px]'
						/>
					</div>

					<div>
						<h2 className='text-7xl py-4'>Hello! 👋</h2>
						<p className='text-4xl font-light text-gray-500'>
							I'm Van. I'm a{' '}
							<span className='text-black font-semibold'>
								Web & Mobile Developer
							</span>{' '}
							looking for fun and exciting projects to work on.
						</p>

						<div className='flex items-center py-8 gap-2'>
							<button className='flex items-center font-semibold bg-transparent border-2 rounded-full py-2 px-5 text-xl hover:text-sea-salt hover:bg-black transition-colors duration-200 ease-in'>
								Resume
							</button>
							<a href='https://www.linkedin.com/in/vdtruong/' target='_blank'>
								<img src='src/assets/icons/linkedin.png' />
							</a>
							<a href='https://github.com/vtruo009' target='_blank'>
								<img src='src/assets/icons/github.png' />
							</a>
						</div>
					</div>
				</Section>

				<Section
					sectionId='skills'
					className='section-container'
					title='tech stack'
					subtitle='my go to'
				>
					<div className='max-w-[756px] mt-10 mx-auto py-16 bg-gray-30 rounded-3xl'>
						<SkillCard />
					</div>
				</Section>

				<Section
					sectionId='projects'
					className='section-container'
					title='projects'
					subtitle='browse my past'
				>
					<div className='flex gap-x-4'>
						{PROJECTS.map((project) => (
							<ProjectCard project={project} />
						))}
					</div>
				</Section>
			</main>
			{/* <p>Tentative: contact me section or a popup</p> */}
			{/* <p>Footer</p> */}
		</>
	);
};

export default App;
