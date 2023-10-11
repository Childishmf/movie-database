import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { favouritesKey } from '../globals/constants';
import setFavourites from './SetFavourites';

function Favourites() {
  const [movies, setMovies] = useState([]);
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
          'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
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
  }, []); // <-- You had an extra `()` here

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <button className='infoBtn' type="button" onClick={() => onMoreInfo(movie.id)}>More Info</button>
          <br />
          <button className='favsBtn' type="button" onClick={() => setFavourites(movie.id)}>Favorite</button>
        </div>
      ))}
    </div>
  );
}

export default Favourites;
