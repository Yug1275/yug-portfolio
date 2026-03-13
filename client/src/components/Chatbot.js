import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Botpress inject script
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
    script1.async = true;

    // Your bot configuration script
    const script2 = document.createElement("script");
    script2.src =
      "https://files.bpcontent.cloud/2026/03/13/04/20260313040503-1C3NZITT.js";
    script2.defer = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null;
};

export default Chatbot;