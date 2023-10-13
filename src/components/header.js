import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import image from '../images/movie-cat.svg';

const Header = () => {
	const navigate = useNavigate(); // Get the navigate function from useNavigate

	const handleLogoClick = () => {
		// Navigate to the home page
		navigate('/');
	};

	return (
		<header>
			<div className='logo'>
				<img src={image} alt='logo' onClick={handleLogoClick} />
			</div>
			<Navigation />
		</header>
	);
};

export default Header;
