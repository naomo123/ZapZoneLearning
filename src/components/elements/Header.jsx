import React, { useState } from 'react';
import '../../styles/Header.css';
import rocket from '../../assets/zapzone.svg';
import content from '../../assets/content.json';


const Header = () => {
  const [language, setLanguage] = useState('es'); 

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
  };

  return (
    <div className="header">
      <div className='brand'>
      <img src={rocket} className='imgr' alt="img" />
      <h1 className="titulo">{content.generalContent.title}</h1>
    
      </div>
      <button className="language-button" onClick={toggleLanguage}>
        {language === 'es' ? 'EN' : 'ES'}
      </button>
    </div>
  );
};

export default Header;
