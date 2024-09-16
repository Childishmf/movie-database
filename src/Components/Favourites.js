import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { favouritesKey } from '../globals/constants';
import { setFavourites, getFavouriteStatus } from './SetFavourites';

function Favourites() {
  const [movies, setMovies] = useState([]);
  const [refreshCount, setRefreshCount] = useState(0); 
  const navigate = useNavigate();
  const onMoreInfo = (id) => navigate('/details', {state: {movieId: id}});
  const favouritesIds = JSON.parse(localStorage.getItem(favouritesKey));

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2MyNjMwZDVhZGY4NjMwODBhNTdmMTc2MmEwNmU3YSIsInN1YiI6IjYzYmRiNTE4NWJlMDBlMDBiMDkwMjYxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HfjmWn35gIo5XPJy72F5D8qw8lu5NOOKAXZpBtmJtjc',
      },
    };

    const getMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=1023dc74f9f53c0eb05e0bbc7feb54c0`,
          options
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const allMovies = data.results;
        const favouriteMovies = allMovies.filter(movie => favouritesIds.includes(movie.id));
        setMovies(favouriteMovies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getMovies();
  }, []);
  function getFavouriteButton(movieId) {
    const isFavourite = getFavouriteStatus(movieId);

    if (isFavourite) {
      return <button className='unFavsBtn' type="button" onClick={() => setFavourite(movieId)}>Unfavorite</button>
    } else {
      return <button className='favsBtn' type="button" onClick={() => setFavourite(movieId)}>Favorite</button>
    }
  }

  const refreshComponent = () => {
    setRefreshCount(refreshCount + 1);
  }

  function setFavourite(movieId) {
    setFavourites(movieId);

  
    refreshComponent();
  }

  

  return (
    <div className="movie-grid">
      {favouritesIds.length === 0 ? (
        <h1 className="no-favorites-message">
          Sorry, it looks like you haven’t added any movies to your Favourites page. Return to the Home page to add a favorite movie.
        </h1>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
            <button className='infoBtn' type="button" onClick={() => onMoreInfo(movie.id)}>More Info</button>
            <br />
            <br />
            {getFavouriteButton(movie.id)}
          </div>
        ))
      )}
    </div>
  );
}

export default Favourites;
