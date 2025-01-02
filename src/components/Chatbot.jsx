import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Remove any existing Orimon scripts first
    const existingScript = document.querySelector('script[data-orimon-bot]');
    if (existingScript) {
      document.body.removeChild(existingScript);
    }

    // Create new script with unique identifier
    const script = document.createElement('script');
    script.src = 'https://bot.orimon.ai/deploy/index.js';
    script.setAttribute('data-orimon-bot', 'true');
    script.setAttribute('tenantId', 'a57b8a06-19fc-459f-9c37-2f95e9a56740');
    
    // Updated configuration for better mobile responsiveness
    const config = {
      primaryColor: '#000000',
      backgroundColor: '#1F2937',
      secondaryColor: '#374151',
      textColor: '#FFFFFF',
      botMessageColor: '#1F2937',
      userMessageColor: '#374151',
      fontFamily: 'Arial, sans-serif',
      windowSize: {
        mobile: {
          width: '80vw',        // Use viewport width
          height: '50vh',       // Use viewport height
          // maxWidth: '300px',    // Maximum width constraint
          // maxHeight: '400px'    // Maximum height constraint
        },
        desktop: {
          width: '300px',
          height: '500px'
        }
      },
      position: {
        bottom: '100px',        // Increased bottom spacing
        right: '20px'
      },
      buttonSize: {
        mobile: '45px',         // Smaller button for mobile
        desktop: '60px'
      },
      forceSize: true,
      useCustomStyles: true,
      initiallyOpen: false,     // Start with closed chat
      responsiveBreakpoint: 768 // Mobile breakpoint
    };
    
    script.setAttribute('theme', JSON.stringify(config));
    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-orimon-bot]');
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove);
      }
    };
  }, []);

  return null;
};

export default Chatbot; 