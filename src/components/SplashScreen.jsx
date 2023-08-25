import React, { useEffect, useState } from 'react';
import giphy from '../assets/icono2.svg';
import '../styles/SplashScreen.css';

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="fond">
    {isLoading && (
      <img className='imgsplash' src={giphy} alt="img" />
    )}
  </div>
  
  );
};

export default SplashScreen;
