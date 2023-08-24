import React, { useEffect, useState } from 'react';
import giphy from '../assets/bitcoin-03.gif';
import '../styles/SplashScreen.css';

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="fond" style={{ display: isLoading ? 'block' : 'none' }}>
      <div className="img_div">
        <img src={giphy} alt="GIF" />
      </div>
    </div>
  );
};

export default SplashScreen;
