import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageAbout from './pages/page-about';
import PageHome from './pages/page-home';
import PageDetails from './pages/page-details';
import PageFavourites from './pages/page-favourites';
import Footer from './components/Footer'; // Adjust the import path as needed
import Header from './components/header';
import useMediaQuery from './hooks/useMediaQuery';

function AppRouter() {
	return (
		<BrowserRouter>
			<Header /> {/* Include the Header component */}
			<div className='wrapper'>
				<main>
					<Routes>
						<Route path='/' exact element={<PageHome />} />
						<Route path='/about' element={<PageAbout />} />
						<Route path='/details' element={<PageDetails />} />
						<Route path='/favourites' element={<PageFavourites />} />
					</Routes>
				</main>
				{/* Include the Footer component here */}
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default AppRouter;
