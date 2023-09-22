import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);
    const Hamburgericon = <HiOutlineMenu className='Hamburger' size='40px' color='red' onClick={() => setOpen(!open)} />;
    const closeicon = <AiOutlineClose className='Closebtn' size='40px' color='red' onClick={() => setOpen(!open)} />;
	return (
		
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
	);
};
export default MobileNavigation;

//to break it down.. its pretty much a like a else if fuctionanlity with open? and open && 
// if open show close menu icon, if closed show hamburger icon