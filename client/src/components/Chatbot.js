import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // ── 1. Inject Botpress scripts ────────────────────────────────────
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

    // ── 2. Close Bot helper ───────────────────────────────────────────
    const closeBotpress = () => {
      try {
        window.botpressWebChat?.sendEvent({ type: "hide" });
        window.botpressWebChat?.sendEvent({ type: "close" });
      } catch (_) {}
      try {
        if (window.botpress) {
          window.botpress.close?.();
          window.botpress.hide?.();
        }
      } catch (_) {}
    };

    // ── 3. Check if a DOM element is part of the Botpress widget ─────
    const isBotEl = (el) => {
      while (el && el !== document.body) {
        const id = (el.id || "").toLowerCase();
        const cls = (typeof el.className === "string" ? el.className : "").toLowerCase();
        if (
          id.includes("bp") ||
          cls.includes("bp") ||
          id.includes("botpress") ||
          cls.includes("botpress")
        )
          return true;
        el = el.parentElement;
      }
      return false;
    };

    let isOverBot = false;

    // ── 4. Capture wheel events at window level BEFORE Lenis sees them ─
    //    If the mouse is over the Botpress widget, stop Lenis and let
    //    the browser handle the wheel natively (so the iframe scrolls).
    const handleWheelCapture = (e) => {
      // Use elementFromPoint to figure out what's under the cursor
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el && isBotEl(el)) {
        // Tell Lenis to stop – this prevents it stealing the scroll
        if (window.lenis) window.lenis.stop();
        isOverBot = true;
        // Don't stopPropagation/preventDefault – the iframe needs the event
      } else if (isOverBot) {
        // Cursor moved away; restart Lenis
        isOverBot = false;
        if (window.lenis) window.lenis.start();
      }
    };

    // MUST be capture:true so we intercept before Lenis
    window.addEventListener("wheel", handleWheelCapture, { capture: true, passive: true });

    // ── 5. Also handle touch for mobile ──────────────────────────────
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      const el = document.elementFromPoint(touch.clientX, touch.clientY);
      if (el && isBotEl(el)) {
        if (window.lenis) window.lenis.stop();
        isOverBot = true;
      }
    };

    const handleTouchEnd = () => {
      if (isOverBot) {
        isOverBot = false;
        if (window.lenis) window.lenis.start();
      }
    };

    window.addEventListener("touchmove", handleTouchMove, { capture: true, passive: true });
    window.addEventListener("touchend", handleTouchEnd, { capture: true });

    // ── 6. Click-outside to close ─────────────────────────────────────
    //    iframe clicks cause window.blur, main page clicks are document events.
    let botFocused = false;

    const handleBlur = () => {
      setTimeout(() => {
        const active = document.activeElement;
        if (active && active.tagName === "IFRAME" && isBotEl(active)) {
          botFocused = true;
          if (window.lenis) window.lenis.stop();
        }
      }, 0);
    };

    const handleFocus = () => {
      if (botFocused) {
        botFocused = false;
        closeBotpress();
        isOverBot = false;
        if (window.lenis) window.lenis.start();
      }
    };

    const handlePageClick = () => {
      if (botFocused) {
        botFocused = false;
        closeBotpress();
        isOverBot = false;
        if (window.lenis) window.lenis.start();
      }
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("pointerdown", handlePageClick, false);

    // ── 7. Observe DOM: set data-lenis-prevent on bot containers ─────
    const observer = new MutationObserver(() => {
      document
        .querySelectorAll('[id*="bp"], [class*="bp-"]')
        .forEach((el) => {
          if (!el.dataset.bpLenisDone) {
            el.dataset.bpLenisDone = "true";
            el.setAttribute("data-lenis-prevent", "true");
          }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("wheel", handleWheelCapture, { capture: true });
      window.removeEventListener("touchmove", handleTouchMove, { capture: true });
      window.removeEventListener("touchend", handleTouchEnd, { capture: true });
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("pointerdown", handlePageClick, false);
      observer.disconnect();
      if (window.lenis) window.lenis.start();
    };
  }, []);

  return null;
};

export default Chatbot;