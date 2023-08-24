import React from 'react';
import '../styles/WeareWorking.css';
import astrosvg from '../assets/working.svg'

const WeareWorking = () => {

  return (
    <>
    <div className='container-work'>
      <img src={astrosvg} alt="Astronaut" className="astronaut"/>
      </div>
  </>
  );
};

export default WeareWorking;
