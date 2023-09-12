import React from 'react';
import { Link } from 'react-router-dom'; 


function Footer() {
	return (
		<div className='footer'>
			<section className='footer-left'>
				<h1>Moviemax</h1>
			</section>
			<section className='footer-center'>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/favorites'>Favorites</Link>
			</section>
			<section className='footer-column'>
				<Link to='/contact'>Contact</Link>
				<Link to='/help'>Help</Link>
				<Link to='/media'>Media</Link>
			</section>
		</div>
	);
}

export default Footer;