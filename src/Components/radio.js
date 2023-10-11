import React, { useState } from 'react';

const Radio = () => {
	const [selected, setSelected] = useState('popular');
    
    // preparing buttons by removing selected class
    
    return (
		<div className='radio-wrapper'>
            <button id='popular' className='radio-btn selected'>Popular</button>
            <button id='top-rated' className='radio-btn'>Top Rated</button>
            <button id='now-playing' className='radio-btn'>Now Playing</button>
            <button id='upcoming' className='radio-btn'>Upcoming</button>
        </div>
	);
};

export default Radio;