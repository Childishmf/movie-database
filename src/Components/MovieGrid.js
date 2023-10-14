import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setFavourites, getFavouriteStatus} from './SetFavourites';


function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const onMoreInfo = (id) => navigate('/details', {state: {movieId: id}});
  // const test = (id) => console.log(id);
  const [selected, setSelected] = useState('popular');
  const [refreshCount, setRefreshCount] = useState(0); //used to refresh page
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
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2MyNjMwZDVhZGY4NjMwODBhNTdmMTc2MmEwNmU3YSIsInN1YiI6IjYzYmRiNTE4NWJlMDBlMDBiMDkwMjYxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HfjmWn35gIo5XPJy72F5D8qw8lu5NOOKAXZpBtmJtjc',
      },
    };

    const getMovies = async () => {
      try {
        let url = '';
        

        if (selected === 'popular') {
          url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
        } else if (selected === 'top-rated') {
          url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
        } else if (selected === 'now-playing') {
          url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
        } else if (selected === 'upcoming') {
          url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
        }

        const response = await fetch(
          url,
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
  }, [selected]);

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

    // Force refresh component to show the new favourite button status
    refreshComponent();
  }



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
            <br />
            {getFavouriteButton(movie.id)}
          </div>
        ))}
      </div>

    
    </div>
  );
}

export default MovieGrid;
