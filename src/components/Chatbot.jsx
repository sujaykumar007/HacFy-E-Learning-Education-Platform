import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://bot.orimon.ai/deploy/index.js';
    script.setAttribute('tenantId', 'a57b8a06-19fc-459f-9c37-2f95e9a56740');
    
    // Add theme configuration
    script.setAttribute('theme', JSON.stringify({
      primaryColor: '#000000',
      backgroundColor: '#1F2937', // dark gray
      secondaryColor: '#374151', // lighter gray
      textColor: '#FFFFFF',
      botMessageColor: '#1F2937',
      userMessageColor: '#374151',
      fontFamily: 'Arial, sans-serif'
    }));
    
    // Append script to body
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Remove the iframe return since we only want the default bot button
  return null;
};

export default Chatbot; 