import React, { useState, useEffect } from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";
import logo from '../images/Spider-man-2.png';
import Nav from "../components/Nav";
import { apiKey } from "../globals/globalVariables"

const PageDetails = () => {

  const movieId = 615656;
  const endPoint = 'https://api.themoviedb.org/3/movie/615656?api_key=c56519c63bd649391e04b84e8ebb67f6'

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        console.log('pre fetch');
        const res = await fetch(endPoint, {
          headers: {
            'api_key': apiKey,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "text/plain",
          },
          mode: 'no-cors',
          method: 'GET',
          accept: 'application/json'
        });
        console.log('post fetch');
        console.log(res);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        let data = await res.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchMovieDetails();
  }, []); // Add an empty dependency array to run this effect only once when the component mounts

  return (
    <div className="movieDetail">
      <Nav />
      <div className="MovieBio">
        <div className="MovieInfo">
          <h1>Spider-Man: Across the Spider-Verse</h1>
          <p>2023-06-02</p>
          <h2>Overview</h2>
          <p>After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.</p>
        </div>
        <div className="MovieLogo">
          <img src={logo}  alt="logo" />
        </div>
      </div>
        
      <YoutubeEmbed embedId="cqGjhVJWtEg"/>
      <p>below youtube</p>
    </div>
  );
};

export default PageDetails;
