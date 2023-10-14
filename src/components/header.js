import React from 'react';
import Navigation from './Navigation';
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
			<Navigation />
		</header>
	);
};

export default Header;
