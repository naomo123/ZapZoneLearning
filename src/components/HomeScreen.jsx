import React, { useState } from 'react';
import '../styles/HomeScreen.css';
import content from '../assets/content.json';

import logo from '../assets/logotest.svg';
import icono1 from '../assets/icono1.svg';
import icono2 from '../assets/icon2.svg';
import icono3 from '../assets/icono3.svg';
import icono4 from '../assets/icono4.svg';
import icono5 from '../assets/icono5.svg';

const HomeScreen = () => {
  const [buttonVisible, setButtonVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const generalContent = content.generalContent;

  const handleStartClick = () => {
    setButtonVisible(false);
    setExpanded(true);
  };

  return (
    <main className="main">
      <div className={`container-i ${expanded ? 'expanded' : ''}`}>
        <div className='rocket'>
          <img src={logo} alt="ZapZone Learning Logo" className="logo" /> 


        </div>
        <div className={`start-button ${buttonVisible ? '' : 'hide'}`}>
          <button onClick={handleStartClick}>{generalContent['btn-start']}</button>
        </div>
        {expanded && (

          <>
            <div className="expanded-content">
            <h1 className="title">Key Features</h1>
              <div className='section2'>
                <ul className="list">
                  {content.list.map((list, index) => (
                  <li className="list__item" key={index}>
                    <h1 className="titlesect2">{list.title}</h1>
                    <p className="txtsect2">{list.content}</p>
                  </li>
               )) }
                </ul>
              </div>
              <h1 className="title">Fostering Dynamic Learning: Our Platform's Key Aspects</h1>
              <div className="section1">
            
                <div className='cards'>
                  {content.cards.map((card, index) => (
                    <div className="card" key={index}>
                      <div className="card-logo">
                        {card.image && (
                          <img className="img-card" src={index === 0 ? icono1 : index === 1 ? icono2 : index === 2 ? icono3 : index === 3 ? icono4 : icono5} alt={`Card ${index}`} />
                        )}
                      </div>
                      <h4 className="titlecards">{card.title}</h4>
                      <p className="txtcards">{card.content}</p>
                    </div>
                  ))}
                </div>


              </div>

              <div className="section3">
                <div className='text-row'> <h1 className="title">
                  Our blog
                </h1>
                  <h2 className="title">Sneak peeks from our writings</h2>
                </div>
                <div className='list2'>

                  <a href="#" className="img-card-pre ">
                    <div className="img-card-pre__img img-card-pre__img--first"></div>
                    <h2 className="img-card-pre__info">
                      <span className="img-card-pre__cat">Protips • </span><span className="img-card-pre__aut"> by Ann Timothy</span> <span className="img-card-pre__date"> - 5 mins read</span>
                    </h2>
                    <h1 className="img-card-pre__title">How to improve analytics using few tools in Bricks<span className="img-card-pre__arrow--purple"> →</span></h1>
                  </a>



                </div>

              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default HomeScreen;
