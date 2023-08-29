import React from "react";

import BotAvatar from '../assets/astro.svg';


const CoBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
        className="react-chatbot-kit-chat-bot-avatar-container"
        style={{ background: "none" }}
      >
        <img alt="BotAvatar" src={BotAvatar}  style={{width:'30px' } }/>
      </div>
    </div>
  );    
};

export default CoBotAvatar;