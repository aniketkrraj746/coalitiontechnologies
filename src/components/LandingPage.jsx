import React from 'react'
import LandingImage from '../assets/LANDING PAGE IMAGE.png'
import LandingCover from '../assets/landingpagecover.png';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='landingpage' id='#LandingPage'>
      <img id='HeroImage' src={LandingImage} alt='landingImage'/>
      <img id='overlayImage' src={LandingCover} alt='landingcover'/>
      <h1>LOSANGELES<br/> MOUNTAIN</h1> 
    </div>
  )
}

export default LandingPage;