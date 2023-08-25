import React, { useState } from 'react';
import '../styles/CoreScreen.css';
import content from '../assets/corecontent.json';

const CoreScreen = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className='core-container'>
      <div className="accordion-container">
        {content.questions.map((question, index) => (
          <div className="accordion" key={index}>
            <details className={`accordion-details ${index === openIndex ? 'open' : ''}`}>
              <summary className="accordion-summary" onClick={() => toggleAccordion(index)}>
                {question.question}
                <div className='icon-acordion-acordion'>
                  {index === openIndex ? (
                       <svg className='icon-acordion' width="17" height="2" viewBox="0 0 17 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path className='icon-acordion' d="M16.313 1.26437H1.31305" stroke="black" strokeLinecap="round"/>
                     </svg>
                   
                  ) : (
                    <svg className='icon-acordion' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='icon-acordion' fillRule="evenodd" clipRule="evenodd" d="M7.31305 0.264374C7.57827 0.264374 7.83262 0.369731 8.02016 0.557267C8.20769 0.744803 8.31305 0.999157 8.31305 1.26437V6.26437H13.313C13.5783 6.26437 13.8326 6.36973 14.0202 6.55727C14.2077 6.7448 14.313 6.99916 14.313 7.26437C14.313 7.52959 14.2077 7.78394 14.0202 7.97148C13.8326 8.15902 13.5783 8.26437 13.313 8.26437H8.31305V13.2644C8.31305 13.5296 8.20769 13.7839 8.02016 13.9715C7.83262 14.159 7.57827 14.2644 7.31305 14.2644C7.04783 14.2644 6.79348 14.159 6.60594 13.9715C6.41841 13.7839 6.31305 13.5296 6.31305 13.2644V8.26437H1.31305C1.04783 8.26437 0.793479 8.15902 0.605942 7.97148C0.418406 7.78394 0.313049 7.52959 0.313049 7.26437C0.313049 6.99916 0.418406 6.7448 0.605942 6.55727C0.793479 6.36973 1.04783 6.26437 1.31305 6.26437H6.31305V1.26437C6.31305 0.999157 6.41841 0.744803 6.60594 0.557267C6.79348 0.369731 7.04783 0.264374 7.31305 0.264374Z" fill="black"/>
                  </svg>
                  )}
                </div>
              </summary>
              <div className={`accordion-content ${index === openIndex ? 'open' : ''}`}>
                {question.answer}
              </div>
            </details>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default CoreScreen;
/*  <div className="table-container">
          <h2 className='title-table'>Table</h2>
          <table className="comparison-table">
            <thead>
              <tr>

                <th> A</th>
                <th> B</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>c</td>
                <td>d</td>
              </tr>
              <tr>
                <td>e</td>
                <td>f</td>
              </tr>

            </tbody>
          </table>
        </div>*/