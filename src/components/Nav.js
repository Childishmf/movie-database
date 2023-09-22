import { NavLink } from 'react-router-dom';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

import '../scss/App.scss';

const Nav = () => {
	return (
		<div className='{classes.NavBar}'>
			<Navigation />
		</div>
	);
};

export default Nav;

// return (
// 	<nav className='nav' onClick={blur}>
// 		<ul>
// 			<li>
// 				<NavLink to='/'>Home</NavLink>
// 			</li>
// 			<li>
// 				<NavLink to='/about'>About</NavLink>
// 			</li>
// 			<li>
// 				<NavLink to='/details'>Details</NavLink>
// 			</li>
// 			<li>
// 				<NavLink to='/favourites'>Favourites</NavLink>
// 			</li>
// 		</ul>
// 	</nav>
// ); justins code - cam
//<MobileNavigation /> commenting iit out for now
