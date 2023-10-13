import { NavLink } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';
import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Navigation = () => {
	const isDesktop = useMediaQuery('(min-width: 700px)');
	const [open, setOpen] = useState(false);
	const Hamburgericon = <HiOutlineMenu className='Hamburger' size='40px' color='black' onClick={() => setOpen(!open)} />;
	const closeicon = <AiOutlineClose className='Closebtn' size='40px' color='black' onClick={() => setOpen(!open)} />;

	return (
		<>
			{isDesktop ? (
				<nav className='Navigation'>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/about'>About</NavLink>
						</li>
						<li>
							<NavLink to='/details'>Details</NavLink>
						</li>
						<li>
							<NavLink to='/favourites'>Favourites</NavLink>
						</li>
					</ul>
					<NavLink />
				</nav>
			) : (
				<nav className='MobileNavigation'>
					{open ? closeicon : Hamburgericon}
					{open && (
						<ul>
							<li>
								<NavLink to='/'>Home</NavLink>
							</li>
							<li>
								<NavLink to='/about'>About</NavLink>
							</li>
							<li>
								<NavLink to='/details'>Details</NavLink>
							</li>
							<li>
								<NavLink to='/favourites'>Favourites</NavLink>
							</li>
						</ul>
					)}
				</nav>
			)}
		</>
	);
};
export default Navigation;
