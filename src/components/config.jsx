import { createChatBotMessage } from 'react-chatbot-kit';
import CoBotAvatar from "./CoBotAvatar";

const botName = 'Zappernaut';

const config = {
  initialMessages: [createChatBotMessage(`¡Hola! Soy ${botName}`)],
  lang: "no",
  botName: "CoBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a"
    },
    chatButton: {
      backgroundColor: "#0f5faf"
    }
  },
    customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> }
  }

export default config;
