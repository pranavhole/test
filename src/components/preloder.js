import React from 'react';
// import './css/glowing.css'// Make sure to adjust the path to your CSS file
import { logo } from '../assets';

function Prelode() {
  return (
    <div className='landing h-screen flex justify-center items-center'>
      <img src={logo} className='filter brightness-150 shadow-lg' alt='Logo' />
    </div>
  );
}

export default Prelode;
