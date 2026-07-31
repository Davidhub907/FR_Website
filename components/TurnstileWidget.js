"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

export default function TurnstileWidget({ action, resetSignal = 0 }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  const resetWidget = useCallback(() => {
    if (widgetIdRef.current !== null && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }, []);

  const renderWidget = useCallback(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    if (!action) {
      console.error("TurnstileWidget requires an action prop.");
      return;
    }

    if (!siteKey) {
      console.error("Missing NEXT_PUBLIC_TURNSTILE_SITE_KEY.");
      return;
    }

    if (
      !containerRef.current ||
      !window.turnstile ||
      widgetIdRef.current !== null
    ) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: "light",
      size: "flexible",
      action,
      "response-field": true,
      "response-field-name": "cf-turnstile-response",

      "expired-callback": () => {
        resetWidget();
      },

      "timeout-callback": () => {
        resetWidget();
      },

      "error-callback": (errorCode) => {
        console.error("Turnstile client error:", errorCode);

        return true;
      },
    });
  }, [action, resetWidget]);

  useEffect(() => {
    renderWidget();

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  useEffect(() => {
    if (resetSignal > 0) {
      resetWidget();
    }
  }, [resetSignal, resetWidget]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={renderWidget}
      />

      <div ref={containerRef} className="min-h-[65px] w-full" />
    </>
  );
}
