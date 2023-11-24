import React, { useState } from 'react';

const Home = () => {
  const [response, setResponse] = useState('');
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add user's message to the conversation
      const userMessage = { role: 'user', content: userInput };
      setConversation([...conversation, userMessage]);

      // Fetch response from the server
      const apiResponse = await fetch('/api/get-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [...conversation, userMessage] }),
      });

      // Parse the response JSON
      const responseData = await apiResponse.json();

      // Update conversation and response
      const assistantMessage = { role: 'assistant', content: responseData.response };
      setConversation([...conversation, assistantMessage]);
      setResponse(responseData.response);

      // Apply typewriter effect
      if (responseData.response) {
        typewriterEffect(responseData.response);
      }
    } catch (error) {
      console.error('Error fetching response from server:', error);
    }
  };

  const typewriterEffect = async (text, speed = 50) => {
    let newText = '';
    for (let i = 0; i <= text.length; i++) {
      newText = text.slice(0, i);
      setResponse(newText);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }

    // Update the last message in the conversation array
    setConversation((prevConversation) => [
      ...prevConversation.slice(0, -1),
      { ...prevConversation[prevConversation.length - 1], content: newText },
    ]);
  };

  return (
    <div>
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          text-align: left;
          margin: 50px;
        }

        #userInput {
          width: 80%;
          padding: 8px;
          font-size: 16px;
          margin-bottom: 10px;
        }

        #response {
          margin-top: 20px;
        }

        .assistant-response {
          background-color: #f5f5f5;
          border: 1px solid #ddd;
          padding: 5px;
          margin-bottom: 10px;
          border-radius: 5px;
          white-space: pre-line;
        }

        .assistant-response p {
          margin: 0;
        }
      `}</style>

      <h1>Next.js OpenAI Chat</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <strong>Response:</strong> {response}
      </div>
      <div>
        {/* Display conversation messages */}
        {conversation.map((message, index) => (
          <div key={index} className="assistant-response">
            <strong>{message.role === 'user' ? 'Me:' : 'Assistant:'}</strong> {message.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
