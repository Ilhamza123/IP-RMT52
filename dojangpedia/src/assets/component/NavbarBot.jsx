import React, { useState, useRef } from 'react';
import axiosInstance from '../../config/axiosInstance';

const NavbarBot = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', content: 'Halo! Ada yang bisa saya bantu?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatMessagesRef = useRef(null);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  }

  const sendMessage = async () => {
    if (userInput.trim() === '') return;
  
    const newMessage = { type: 'user', content: userInput }; 
    setChatMessages(function(prevMessages) {
      const updatedMessages = prevMessages.concat([newMessage]);
      return updatedMessages;
    });
    setUserInput('');
    setIsLoading(true);
  
    try {
      const { data: response } = await axiosInstance({
        url: "/tell-me", 
        method: "POST",
        data: { message: userInput.trim() },
        timeout: 10000
      });
      
      const botMessage = { type: 'bot', content: response };
      setChatMessages(function(prevMessages) {
        return prevMessages.concat([botMessage]);
      });
      //mengembalikan array baru yang berisi elemen-elemen dari array asli ditambah dengan elemen-elemen yang ditambahkan.
    } catch (error) {
      console.error('Error mengirim pesan:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="navbar-chatbot">
    <button 
      className="chatbot-button"
      onClick={toggleChatbot}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',
        zIndex: 1000
      }}
      >
        <i className="fas fa-robot">Talk with Us</i>
      </button>
      {isChatbotOpen && (
        <div className="chatbot-window" style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '300px',
          height: '400px',
          backgroundColor: 'white',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000
        }}>
          <div className="chat-header" style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Chatbot Taekwondo
          </div>
          <div className="chat-messages" ref={chatMessagesRef} style={{
            flex: 1,
            overflowY: 'auto',
            padding: '10px'
          }}>
            {chatMessages.map((message, index) => (
              <div key={index} className={`message ${message.type}`} style={{
                padding: '5px 10px',
                marginBottom: '10px',
                borderRadius: '10px',
                maxWidth: '80%',
                alignSelf: message.type === 'user' ? 'flex-end' : 'flex-start',
                backgroundColor: message.type === 'user' ? '#007bff' : '#f0f0f0',
                color: message.type === 'user' ? 'white' : 'black'
              }}>
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="message bot" style={{
                padding: '5px 10px',
                marginBottom: '10px',
                borderRadius: '10px',
                maxWidth: '80%',
                alignSelf: 'flex-start',
                backgroundColor: '#f0f0f0',
                color: 'black'
              }}>
                Sedang mengetik...
              </div>
            )}
          </div>
          <div className="chat-input" style={{
            display: 'flex',
            padding: '10px',
            borderTop: '1px solid #e0e0e0'
          }}>
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ketik pesan..."
              style={{
                flex: 1,
                marginRight: '10px',
                padding: '5px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            />
            <button onClick={sendMessage} style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            >Kirim</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarBot;