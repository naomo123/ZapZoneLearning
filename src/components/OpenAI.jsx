/*import React, { useState } from 'react';

const OpenAI = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleChatSubmit = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: inputText }],
        temperature: 0.4,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        setOutputText(data.choices[0].message.content);
      } else {
        setOutputText('No se pudo generar una respuesta.');
      }
    } else {
      const errorData = await response.json();
      setOutputText(`Error: ${errorData.error.message}`);
    }
  };

  return (
    <div>
      <div>
        <textarea value={inputText} onChange={handleInputChange} />
        <button onClick={handleChatSubmit}>Enviar</button>
      </div>
      <div>
        <p>Respuesta del bot:</p>
        <p>{outputText}</p>
      </div>
    </div>
  );
};

export default OpenAI;
*/