  import React, { useState } from 'react';
  import '../styles/HomeScreen.css';
  import content from '../assets/content.json';

  import logo from '../assets/logotest.svg';
  import icono1 from '../assets/icono1.svg';
  import icono2 from '../assets/icon2.svg';
  import icono3 from '../assets/icono3.svg';
  import icono4 from '../assets/icono4.svg';
  import icono5 from '../assets/icono5.svg';
  import rsc1 from '../assets/whitepaper.png';
  import rsclinux from '../assets/linux.webp'

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
                  <div className="list">
                    {content.list.map((list, index) => (
                      <div className="list__item" key={index}>
                        <h1 className="titlesect2">{list.title}</h1>
                        <p className="txtsect2">{list.content}</p>
                      </div>
                    ))}
                  </div>
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
                    Useful Links
                  </h1>
                  </div>
                  <div className='list2'>
                    {content.resources.map((resource, index) => (
                      <a key={index} href={resource.content} className="img-card-pre">
                        <img className='card-img-rsc' src={index === 0 ? rsc1 : rsclinux} alt={`Resource ${index}`} />
                        <h1 className="img-card-pre__title">
                          {resource.title}
                        </h1>
                      </a>
                    ))}
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
