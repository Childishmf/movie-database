import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { favouritesKey } from '../globals/constants';

function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [sortingOption, setSortingOption] = useState('popular');
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const navigate = useNavigate();

  function addFavourites(id) {
    let favourites = JSON.parse(localStorage.getItem(favouritesKey));

    if (favourites == null) {
      favourites = [];
    }

    favourites = [...favourites, id];
    let favouritesAsJson = JSON.stringify(favourites);
    localStorage.setItem(favouritesKey, favouritesAsJson);
  }

  const onMoreInfo = (id) => {
    navigate(`/details/${id}`);
  };

  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2MyNjM0MDM3ZGFhYTAwMGRkYzI0NjY4N2ZmZDEwOCIsInN1YiI6IjYzYmRiNTE4NWJlMDBlMDBiMDkwMjYxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HfjmWn35gIo5XPJy72F5D8qw8lu5NOOKAXZpBtmJtjc',
      },
    };

    const getMovies = async () => {
      try {
        let endpoint = '';

        if (sortingOption === 'popular') {
          endpoint = 'now_playing';
        } else if (sortingOption === 'best_rated') {
          endpoint = 'top_rated';
        } else if (sortingOption === 'now_playing') {
          endpoint = 'now_playing';
        } else if (sortingOption === 'upcoming') {
          endpoint = 'upcoming';
        }

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
          options
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMovies(data.results.slice(0, 12));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getMovies();
  }, [sortingOption]);

  return (
    <div className="movie-grid">
      <div>
        <label>Sort By:</label>
        <select onChange={handleSortingChange} value={sortingOption}>
          <option value="popular">Popular</option>
          <option value="best_rated">Best Rated</option>
          <option value="now_playing">Now Playing</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>

      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-card"
          onMouseEnter={() => setHoveredMovie(movie)}
          onMouseLeave={() => setHoveredMovie(null)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <button
            className="infoBtn"
            type="button"
            onClick={() => onMoreInfo(movie.id)}
          >
            More Info
          </button>
          <br />
          <button
            className="favsBtn"
            type="button"
            onClick={() => addFavourites(movie.id)}
          >
            Favorite
          </button>
          {hoveredMovie === movie && (
            <div className="plot-tooltip">
              <p>{movie.overview}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MovieGrid;
