import React from 'react';
import Navigation from './Navigation'; // Import your Navigation component
import MobileNavigation from './MobileNavigation'; // Import your MobileNavigation component
import image from '../images/movie-cat.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<NavLink to='/'>
				<div className='logo'>
					<img src={image} alt='logo' />
				</div>
			</NavLink>
			<Navigation /> {/* Render your Navigation component */}
		</header>
	);
};

export default Header;
