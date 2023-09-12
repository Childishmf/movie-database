import React from 'react';
import { Link } from 'react-router-dom'; 

function Footer() {
	return (
		<div>
			<section>
				<h2>Moviemax</h2>
			</section>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Link to='/favorites'>Favorites</Link>
		</div>
	);
}

export default Footer;