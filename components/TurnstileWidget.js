"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

export default function TurnstileWidget({ action }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  const renderWidget = useCallback(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    if (
      !siteKey ||
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
    });
  }, [action]);

  useEffect(() => {
    renderWidget();

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

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
