import useMediaQuery from '../hooks/useMediaQuery';
import tmdb from '../images/tmdb.svg';

function PageAbout() {
	const isDesktop = useMediaQuery('(min-width: 600px)');
	return (
		<div className='about'>
			<div className='content'>
				<h1 className='about-heading'>About Us</h1>
				<div className='about-content'>
					<p>
						MovieMax is dedicated to bringing you information on all the newest and upcoming movies, popular feature films, and top rated
						classics.
					</p>
					<p>
						Add movies to your Favorites collection, browse movie ratings, or discover your next must-watch through watching the newest
						trailers!
					</p>
					<p>Max out your enjoyment with MovieCat.</p>
					
					<img src={tmdb} alt='tmdb logo' width='70px'></img>
					<p>This project is made by Cam, Mohamed, Lourane, and Justin using React JS.</p>
					<p className='tmdb'>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
				</div>

			</div>
		</div>
	);
}

export default PageAbout;
