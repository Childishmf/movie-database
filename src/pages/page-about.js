import Nav from "../components/Nav"

function PageAbout() {
	return (
		<div className="about">
            <Nav />
            <div className="content">
                <h1>About Us</h1>
                <p className="about-content">
                MovieMax is dedicated to bringing you information on all the newest and upcoming movies, popular feature films, and top rated classics. <br></br><br></br>
                Add movies to your Favorites collection, browse movie ratings, or discover your next must-watch through watching the newest trailers!
                <br></br><br></br>
                Max out your enjoyment with MovieMax.
                </p>
            </div>
        </div>
	);
}

export default PageAbout;