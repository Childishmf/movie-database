import React, { useState } from 'react';
import YoutubeEmbed from '../components/YoutubeEmbed';
import logo from '../images/Spider-man-2.png';

const PageDetails = () => {
	return (
		<div className='movieDetail'>
			<div className='MovieBio'>
				<div className='MovieInfo'>
					<h1>Spider-Man: Across the Spider-Verse</h1>
					<p>2023-06-02</p>
					<h2>Overview</h2>
					<p>
						After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse,
						where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But
						when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on
						his own to save those he loves most.
					</p>
				</div>
				<div className='MovieLogo'>
					<img src={logo} alt='logo' />
				</div>
			</div>

			<YoutubeEmbed embedId='cqGjhVJWtEg' />
			<p>below youtube</p>
		</div>
	);
};

export default PageDetails;
