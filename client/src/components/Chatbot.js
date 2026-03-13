import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
    injectScript.async = true;

    injectScript.onload = () => {
      const botScript = document.createElement("script");
      botScript.src =
        "https://files.bpcontent.cloud/2026/03/13/04/20260313040503-1C3NZITT.js";
      botScript.defer = true;

      document.body.appendChild(botScript);
    };

    document.body.appendChild(injectScript);
  }, []);

  return null;
};

export default Chatbot;