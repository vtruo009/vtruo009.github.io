import { NAV_ITEMS } from '../lib/constants';

const NavItems = () => {
	return (
		<div className='flex justify-evenly items-center gap-x-10'>
			{NAV_ITEMS.map((item) => (
				<li
					key={item}
					className='capitalize text-2xl py-2 hover:underline hover:underline-offset-8'
				>
					<a href={`#${item}`}>{item}</a>
				</li>
			))}
		</div>
	);
};

const ContactButton = () => {
	return (
		<button
			className='bg-atomic-tangerine rounded-full px-4 py-1.5 text-xl font-semibold'
			onClick={() => window.alert('contact Van')}
		>
			Contact
		</button>
	);
};

const Header = () => {
	return (
		<header className='absolute w-full pt-10 px-32'>
			<nav className='flex justify-between items-center'>
				<a href='/' className='text-4xl'>
					Van Truong
				</a>

				<ul className='flex justify-evenly items-center gap-x-10'>
					<NavItems />
					<ContactButton />
				</ul>
			</nav>
		</header>
	);
};

export default Header;
