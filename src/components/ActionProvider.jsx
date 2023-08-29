// ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleTerm = (title, definition) => {
    const botMessage = createChatBotMessage(definition);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTermNotFound = () => {
    const botMessage = createChatBotMessage(
      "I'm sorry, I couldn't find that term in the glossary."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleTerm,
            handleTermNotFound,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
