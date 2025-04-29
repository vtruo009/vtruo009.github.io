import { NAV_ITEMS } from '../lib/constants';

const NavItems = () => {
	return (
		<div className='flex justify-evenly items-center px-4'>
			{NAV_ITEMS.map((item) => (
				<li key={item} className='p-4 capitalize text-2xl'>
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
		<header>
			<nav className='flex items-center justify-between'>
				<a href='/' className='text-4xl'>
					Van Truong
				</a>

				<ul className='flex justify-evenly items-center'>
					<NavItems />
					<ContactButton />
				</ul>
			</nav>
		</header>
	);
};

export default Header;
