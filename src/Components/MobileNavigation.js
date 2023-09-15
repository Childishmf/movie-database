import { NavLink } from 'react-router-dom';
const MobileNavigation = () => {
    return (
		<nav className='MobileNavigation'>
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

			<NavLink />
		</nav>
	);
};
export default MobileNavigation;
