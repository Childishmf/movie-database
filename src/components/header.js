import React from 'react';
import Navigation from './Navigation'; // Import your Navigation component
import MobileNavigation from './MobileNavigation'; // Import your MobileNavigation component
import image from '../images/movie-cat.svg';

const Header = () => {
	return (
		<header>
			<div className='logo'>
				<img src={image} alt='logo' />
			</div>
			<Navigation /> {/* Render your Navigation component */}
		</header>
	);
};

export default Header;
