"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

interface GhlEstimateFormProps {
  className?: string;
}

export default function GhlEstimateForm({ className = "" }: GhlEstimateFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let formIsVisible = false;
    let widget: HTMLElement | null = null;

    const syncWidget = () => {
      const nextWidget = document.querySelector<HTMLElement>("chat-widget");
      if (nextWidget) widget = nextWidget;
      if (!widget) return;

      if (formIsVisible) {
        widget.style.setProperty("display", "none", "important");
      } else {
        widget.style.removeProperty("display");
      }
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        formIsVisible = entry.isIntersecting;
        syncWidget();
      },
      { threshold: 0.02 },
    );
    if (containerRef.current) intersectionObserver.observe(containerRef.current);

    const mutationObserver = new MutationObserver(syncWidget);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    syncWidget();

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
      widget?.style.removeProperty("display");
    };
  }, []);

  return (
    <div ref={containerRef} className={`w-full overflow-hidden rounded-xl bg-white ${className}`} data-estimate-form>
      <iframe
        src="https://neurodesk.windsorexteriorpros.com/widget/form/I72UixqHGUzhnhvkQVSh"
        id="inline-I72UixqHGUzhnhvkQVSh"
        className="block w-full border-0"
        style={{ height: "1227px", borderRadius: 0 }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Free Estimate Form"
        data-height="1227"
        data-layout-iframe-id="inline-I72UixqHGUzhnhvkQVSh"
        data-form-id="I72UixqHGUzhnhvkQVSh"
        title="Free Estimate Form"
      />
      <Script
        id="windsor-exterior-pros-estimate-form-loader"
        src="https://neurodesk.windsorexteriorpros.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
