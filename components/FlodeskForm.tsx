"use client";

import { useEffect, useRef, useState } from "react";

const SUCCESS_DELAY_MS = 1800;

/** Loads the live Flodesk embed without intercepting its native submission flow. */
export default function FlodeskForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasLoadError, setHasLoadError] = useState(false);

  useEffect(() => {
    const host = containerRef.current;
    if (!host) return;

    let observer: MutationObserver | undefined;
    let redirectTimer: number | undefined;
    let disposed = false;
    let redirectScheduled = false;

    const scheduleThankYouRedirect = () => {
      if (redirectScheduled) return;
      redirectScheduled = true;

      // Flodesk has already confirmed the subscriber at this point. The short
      // delay leaves its native success and automation work undisturbed.
      redirectTimer = window.setTimeout(() => {
        window.location.assign("/thanks");
      }, SUCCESS_DELAY_MS);
    };

    const loadForm = async () => {
      try {
        const response = await fetch("/flodesk-form.html", { cache: "no-store" });
        if (!response.ok) throw new Error("Unable to load the Flodesk form.");

        host.innerHTML = await response.text();
        if (disposed) return;

        const root = host.querySelector<HTMLElement>("[data-ff-el='root']");
        if (!root) throw new Error("Flodesk form markup is incomplete.");

        observer = new MutationObserver(() => {
          if (root.dataset.ffStage === "success" || root.classList.contains("fd-has-success")) {
            scheduleThankYouRedirect();
          }
        });
        observer.observe(root, {
          attributes: true,
          attributeFilter: ["class", "data-ff-stage"],
          subtree: true,
        });

        // Scripts inserted through innerHTML do not run. Appending equivalent
        // scripts to the document head runs Flodesk's supplied loader and handler.
        for (const script of Array.from(host.querySelectorAll("script"))) {
          const executableScript = document.createElement("script");
          for (const attribute of Array.from(script.attributes)) {
            executableScript.setAttribute(attribute.name, attribute.value);
          }
          executableScript.textContent = script.textContent;
          script.remove();
          document.head.appendChild(executableScript);
        }
      } catch {
        if (!disposed) setHasLoadError(true);
      }
    };

    loadForm();

    return () => {
      disposed = true;
      observer?.disconnect();
      if (redirectTimer) window.clearTimeout(redirectTimer);
    };
  }, []);

  if (hasLoadError) {
    return (
      <div className="rounded-md border border-red-200 bg-red-50 p-5 text-center text-sm font-semibold text-red-700" role="alert">
        The consultation form could not be loaded. Please refresh the page and try again.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-brand-line bg-white shadow-soft">
      <div ref={containerRef} aria-label="Consultation request form" />
    </div>
  );
}
