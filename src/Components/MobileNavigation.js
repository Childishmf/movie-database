import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';


const MobileNavigation = () => {
    const [open, setOpen] = useState(false);
	const closeMenu = () => {
        setOpen(false);
    };
    const Hamburgericon = <HiOutlineMenu className='Hamburger' size='40px' color='black' onClick={() => setOpen(!open)} />;
    const closeicon = <AiOutlineClose className='Closebtn' size='40px' color='black' onClick={() => setOpen(!open)} />;
	return (
		
		<nav className='MobileNavigation'>
			{open ? closeicon : Hamburgericon}
			{open && (
				<ul>
					<li>
                        <NavLink to='/' onClick={closeMenu}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' onClick={closeMenu}>About</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to='/details' onClick={closeMenu}>Details</NavLink>
                    </li> */}
                    <li>
                        <NavLink to='/favourites' onClick={closeMenu}>Favourites</NavLink>
                    </li>
				</ul>
			)}
		</nav>
	);
};
export default MobileNavigation;

//to break it down.. its pretty much a like a else if fuctionanlity with open? and open && 
// if open show close menu icon, if closed show hamburger icon