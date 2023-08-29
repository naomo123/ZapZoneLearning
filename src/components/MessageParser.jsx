// MessageParser.jsx
import React from 'react';
import termsAndDefinitions from '../assets/Glossary.json';



const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    } else {
      const matchedTerm = termsAndDefinitions.terms.find((term) => {
        const lowercaseMessage = message.toLowerCase();
        console.log(lowercaseMessage)
        const a =lowercaseMessage === term.title.toLowerCase();
        console.log(a)
        return a
      });

      if (matchedTerm) {
        actions.handleTerm(matchedTerm.title, matchedTerm.definition);
      
       
      } else {
        actions.handleTermNotFound();
      }
    }
  };




  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
