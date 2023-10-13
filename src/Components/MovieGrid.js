import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { favouritesKey } from '../globals/constants';
import axios from 'axios';

function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [sortingOption, setSortingOption] = useState('popular');
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const navigate = useNavigate();
  const [ratings, setRatings] = useState({});

  // Function to fetch movie details from TMDb
  const fetchMovieDetails = async (movieID) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2MyNjM0MDM3ZGFhYTAwMGRkYzI0NjY4N2ZmZDEwOCIsInN1YiI6IjYzYmRiNTE4NWJlMDBlMDBiMDkwMjYxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HfjmWn35gIo5XPJy72F5D8qw8lu5NOOKAXZpBtmJtjc',
          },
        }
      );

      if (response.status === 200) {
        const imdbID = response.data.imdb_id;
        return imdbID;
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }

    return null;
  };

  // Function to fetch movie ratings from OMDb API
  const fetchRatings = async (imdbID) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=4304486b`
      );

      if (response.status === 200) {
        const rating = response.data.imdbRating;
        return rating;
      }
    } catch (error) {
      console.error('Error fetching ratings:', error);
    }

    return null;
  };

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

        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2MyNjM0MDM3ZGFhYTAwMGRkYzI0NjY4N2ZmZDEwOCIsInN1YiI6IjYzYmRiNTE4NWJlMDBlMDBiMDkwMjYxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HfjmWn35gIo5XPJy72F5D8qw8lu5NOOKAXZpBtmJtjc',
            },
          }
        );

        if (response.status === 200) {
          const data = response.data.results.slice(0, 12);

          // Fetch and set ratings for each movie
          const ratingsMap = {};
          for (const movie of data) {
            const imdbID = await fetchMovieDetails(movie.id);

            if (imdbID) {
              const rating = await fetchRatings(imdbID);
              if (rating) {
                ratingsMap[movie.id] = rating;
              }
            }
          }

          setMovies(data);
          setRatings(ratingsMap);
        }
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
          <p>Rating: {[movie.vote_average] ? [movie.vote_average] : 'NA'}</p>
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
