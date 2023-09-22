import React from 'react';
import Navigation from './Navigation'; // Import your Navigation component
import MobileNavigation from './MobileNavigation'; // Import your MobileNavigation component

const Header = () => {
	return (
		<header>
			 {/* Render your Navigation component */}
			<MobileNavigation /> {/* Render your MobileNavigation component */}
		</header>
	);
};

export default Header;
