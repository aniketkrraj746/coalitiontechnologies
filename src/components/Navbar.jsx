import React from 'react';
import logo from '../assets/Logo.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <a href="#LandingPage">
          <img src={logo} alt="logo" />
          <p>
            LOSANGELES
            <br />
            MOUNTAINS
          </p>
        </a>
        {/* <div className="internalTags"> */}
        <div>
          <a href="#History">01.HISTORY</a>
          <a href="#Team">02.TEAM</a>
        </div>
        <br />
        {/* </div> */}
      </nav>
    </div>
  );
}

export default Navbar;