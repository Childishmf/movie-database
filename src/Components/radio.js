import React, { useState } from 'react';

const Radio = () => {
	const [selected, setSelected] = useState('now-playing');
    // function setClass ( id ) {
    //   let buttons = document.querySelectorAll( '.radio-btn' );
    //   for (let button of buttons) {
    //     if (button.id !== selected) {
    //       if (button.classList.contains('selected') === true) {
    //         button.classList.remove('selected')
    //       }
    //     }
    //   }
    //   let selectedButton = document.getElementById( id );
    //   if (selectedButton.classList.contains('selected') !== true) {
    //     selectedButton.classList.add('selected');
    //     setSelected( id );
    //   }
    // }
    // setSelected('popular');
    // setClass(selected);
    // preparing buttons by removing selected class
    
    return (
		<div className='radio-wrapper'>
            <button id='popular' className='radio-btn selected'>Popular</button>
            <button id='top-rated' className='radio-btn selected'>Top Rated</button>
            <button id='now-playing' className='radio-btn selected'>Now Playing</button>
            <button id='upcoming' className='radio-btn selected'>Upcoming</button>
    </div>
	);
};

export default Radio;