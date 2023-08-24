import React, { useState } from 'react';
import '../styles/Glossary.css';
import glossaryData from '../assets/Glossary.json';

const Glossary = () => {
  const [currentCard, setCurrentCard] = useState(null);
  const [nextCard, setNextCard] = useState(null);

  const handleCardClick = (index) => {
    if (currentCard !== index) {
      setCurrentCard(index);
      setNextCard((index + 1) % glossaryData.length);
    }
  };

  return (
    <div className='Container'>
      <div className="Cards Cards--active">
        {glossaryData.map((entry, index) => (
          <li
            key={index}
            className={`Card ${currentCard === index ? 'Card--current' : ''} ${nextCard === index ? 'Card--next' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <h1>{entry.title}</h1>
            <p>{entry.content}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Glossary;
