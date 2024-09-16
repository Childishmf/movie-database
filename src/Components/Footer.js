import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className='footer'>
			<section className='footer-left'>
				<h1>Movie Cat</h1>
			</section>
			<section className='footer-center'>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/favorites'>Favorites</Link>
			</section>
			<section className='footer-column'>
				<Link to='#'>Contact</Link>
				<Link to='#'>Help</Link>
				<Link to='#'>Media</Link>
			</section>
		</div>
	);
}

export default Footer;
