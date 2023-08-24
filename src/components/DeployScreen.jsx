import React from 'react';
import '../styles/DeployScreen.css';
import { Link } from 'react-router-dom';
import implementation from '../assets/content.json';
import lndimg from '../assets/LNDlogo.png';
import eclairimg from '../assets/eclair.jpg';
import cln from '../assets/cln.png';

const DeployScreen = () => {
  return (
    <>


      <div class="div-im">
        
          {implementation.implementations.map((implementationData, index) => (
            <div class="card-im" key={index}>
              <img  src={index === 0 ? cln : index === 1 ? eclairimg :  lndimg} alt={`Card ${index}`} />
              <div class="card-im-title">
                <h3>{implementationData.title}</h3>
                </div>
                <div class="card-im-text">
                <p>{implementationData.content}</p>
                </div>
                <Link
                 
                to={implementationData.linkroute}
                >
                  <div className="icon">
                    <svg  className="icon" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                      <path className="icon" d="M12.109 8.34296C11.3589 7.59307 10.3417 7.17181 9.28102 7.17181C8.22037 7.17181 7.20314 7.59307 6.45303 8.34296L2.45303 12.343C2.07098 12.7119 1.76626 13.1533 1.55662 13.6413C1.34698 14.1294 1.23664 14.6542 1.23202 15.1854C1.22741 15.7165 1.32862 16.2432 1.52974 16.7348C1.73086 17.2264 2.02787 17.673 2.40345 18.0485C2.77902 18.4241 3.22562 18.7211 3.71721 18.9222C4.20879 19.1234 4.73551 19.2246 5.26663 19.22C5.79775 19.2153 6.32263 19.105 6.81064 18.8954C7.29866 18.6857 7.74004 18.381 8.10903 17.999L9.21103 16.898M8.45303 11.999C9.20314 12.7488 10.2204 13.1701 11.281 13.1701C12.3417 13.1701 13.3589 12.7488 14.109 11.999L18.109 7.99896C18.8377 7.24455 19.2408 6.23414 19.2317 5.18535C19.2226 4.13656 18.8019 3.13331 18.0603 2.39168C17.3187 1.65005 16.3154 1.22937 15.2666 1.22026C14.2178 1.21115 13.2074 1.61432 12.453 2.34296L11.353 3.44296" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
                <a
                  href={implementationData.link}
                  className="linkgit"
                >
                  Learn more
                </a>
         
            </div>
          ))}
      

      </div>
    </>
  );
};

export default DeployScreen;
