import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';

const MobileNavigation = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav className='MobileNavigation'>
			<HiOutlineMenu className='Hamburger' size='40px' color='red' onClick={() => setOpen(!open)} />
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
	);
};
export default MobileNavigation;
