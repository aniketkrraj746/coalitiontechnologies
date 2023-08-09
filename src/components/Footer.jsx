import React from 'react';
import logo from '../assets/Logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='left'>
            <img src={logo} />
            <p>LOSANGELES<br/>MOUNTAINS</p>
        </div>
        <div className='right'>
            Copyright 2016, All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer;