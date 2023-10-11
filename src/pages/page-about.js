import useMediaQuery from '../hooks/useMediaQuery';

function PageAbout() {
	const isDesktop = useMediaQuery('(min-width: 600px)');
	return (
		<div className='about'>
			<div className='content'>
				<h1>About Us</h1>
				<div className='about-content'>
					<p>
						MovieMax is dedicated to bringing you information on all the newest and upcoming movies, popular feature films, and top rated
						classics.
					</p>
					<p>
						Add movies to your Favorites collection, browse movie ratings, or discover your next must-watch through watching the newest
						trailers!
					</p>
					<p>Max out your enjoyment with MovieMax.</p>
					<img src='../images/tmdb.svg' alt='tmdb logo'></img>
				</div>

			</div>
		</div>
	);
}

export default PageAbout;
