import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import setFavourites from './SetFavourites';


function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [sortingOption, setSortingOption] = useState('popular'); // 'popular', 'best_rated', 'now_playing', or 'upcoming'
  const navigate = useNavigate();
  const onMoreInfo = (id) => navigate('/details', {state: {movieId: id}});
  // const test = (id) => console.log(id);
  const [selected, setSelected] = useState('popular');
  const buttonSelect = (e) => {
    let id = e.target.id;
    id === 'popular' 
    ? setSelected('popular')
    : id === 'top-rated'
    ? setSelected('top-rated')
    : id === 'now-playing'
    ? setSelected('now-playing')
    : setSelected('upcoming')
  }
  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ',
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
    <div className="movie-wrapper">
      <div className='radio-wrapper'>
              <button id='popular' className={selected === "popular" ? "selected radio-btn" : "radio-btn"} onClick={buttonSelect}>Popular</button>
              <button id='top-rated' className={selected === "top-rated" ? "selected radio-btn" : "radio-btn"} onClick={buttonSelect}>Top Rated</button>
              <button id='now-playing' className={selected === "now-playing" ? "selected radio-btn" : "radio-btn"} onClick={buttonSelect}>Now Playing</button>
              <button id='upcoming' className={selected === "upcoming" ? "selected radio-btn" : "radio-btn"} onClick={buttonSelect}>Upcoming</button>
      </div>
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

    
    </div>
  );
}

export default MovieGrid;
