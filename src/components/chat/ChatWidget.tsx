// app/components/ChatWidget.tsx
'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
        }) => void;
        open: () => void;
        close: () => void;
      };
      
    };
  }
}

export const ChatWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = () => {
      // Initialize Voiceflow chat after script loads
      window.voiceflow.chat.load({
        verify: { projectID: '67abfc50aa2ecfb91f7d9caa' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';

    // Add script to document
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything visible
};

export default ChatWidget;