import Header from './components/Header';

const App = () => {
	return (
		<main className='py-12 px-40 bg-sea-salt'>
			<Header />
			<section id='about' className='h-screen'>
				This is the about section/landing page
			</section>
			<section id='skills' className='h-screen'>
				Skills
			</section>
			<section id='projects' className='h-screen'>
				Projects
			</section>
			<p>Tentative: contact me section or a popup</p>
			<p>Footer</p>
		</main>
	);
};

export default App;
