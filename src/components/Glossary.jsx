import React, { useState } from 'react';
import '../styles/Glossary.css';
import glossaryData from '../assets/Glossary.json';

const Glossary = () => {
/*  const [currentCard, setCurrentCard] = useState(null);
  const [nextCard, setNextCard] = useState(null);

  const handleCardClick = (index) => {
    if (currentCard !== index) {
      setCurrentCard(index);
      setNextCard((index + 1) % glossaryData.length);
    }
  };
  
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
      </div>*
  */   const [selectedTerm, setSelectedTerm] = useState(null);

  const handleTermClick = (index) => {
    setSelectedTerm(index);
  };

  return (
    <div className='Container'>
      <h1>Dynamic Glossary</h1>
      <div className="glossary">
        <div className="term-list">
          <h2>Terms</h2>
          <ul>
            {glossaryData.terms.map((term, index) => (
              <li key={index} onClick={() => handleTermClick(index)}>
                {term.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="definition">
          <h2>Definition</h2>
          {selectedTerm !== null && (
            <p>{glossaryData.terms[selectedTerm].definition}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Glossary;
