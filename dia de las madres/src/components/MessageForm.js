import React, { useState } from 'react';

const MessageForm = () => {
  const [message, setMessage] = useState('Te amo mamá <3');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado a mamá: "${message}" ❤️`);
    setMessage('Te amo mamá <3');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Deja tu mensaje</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300" 
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button 
          type="submit" 
          className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg hover:from-pink-600 hover:to-red-600 transition-colors duration-300"
        >
          Enviar con amor
        </button>
      </form>
    </div>
  );
};

export default MessageForm;

// DONE