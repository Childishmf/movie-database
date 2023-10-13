import React, { useEffect, useState } from 'react';
import YoutubeEmbed from "../components/YoutubeEmbed";
import logo from '../images/Spider-man-2.png';
import { Authorization, favouritesKey } from '../globals/constants';
import { useLocation } from "react-router-dom";
import { setFavourites, getFavouriteStatus} from '../components/SetFavourites';


const PageDetails = () => {
  const location = useLocation();
  let movieId = location.state ? location.state.movieId : null;
  const [movieDetail, setMovieDetail] = useState(null);
  const [refreshCount, setRefreshCount] = useState(0); //used to refresh page

  function addFavourites() {
    let favourites = JSON.parse(localStorage.getItem(favouritesKey));

    if (favourites == null) {
      favourites = [];
    }

    favourites = [...favourites, movieId];
    let favouritesAsJson = JSON.stringify(favourites);
    localStorage.setItem(favouritesKey, favouritesAsJson);
  }

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: Authorization
      },
    };

    const getMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          options
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovieDetail(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getMovies();
  }, []);

  function getFavouriteButton() {
    const isFavourite = getFavouriteStatus(movieId);

    if (isFavourite) {
      return <button className='favsBtn' type="button" onClick={() => setFavourite()}>Unfavorite</button>
    } else {
      return <button className='favsBtn' type="button" onClick={() => setFavourite()}>Favorite</button>
    }
  }

  const refreshComponent = () => {
    setRefreshCount(refreshCount + 1);
  }

  function setFavourite() {
    setFavourites(movieId);

    // Force refresh component to show the new favourite button status
    refreshComponent();
  }

  
  return (
    <div className="movieDetail">
      <div className="MovieBio">
      <div className="MovieInfo">
        <h1>{movieDetail?.title}</h1>
        <p>{movieDetail?.release_date}</p>
        {/* <p>2023-06-02</p> */}
        <h2>Overview</h2>
        {getFavouriteButton()}

        <p>{movieDetail?.overview}</p>
        {/* <p>//////////After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.</p> */}
        </div>
        <div className="MovieLogo">
        {/* <img src={logo}  alt="logo" /> */}
        <img
            src={`https://image.tmdb.org/t/p/w400${movieDetail?.poster_path}`}
            alt={movieDetail?.title}
          />
        </div>
      </div>
      <iframe
      className='youtubeEmbed'
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/VIDEO_ID`}
            title="YouTube Video Player"
            frameborder="0"
            allowfullscreen
          ></iframe>
        {/* <YoutubeEmbed embedId="cqGjhVJWtEg"/> */}
        <p>below youtube</p>
    </div>
  );
};

export default PageDetails;
