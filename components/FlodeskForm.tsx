"use client";

import { useEffect, useRef, useState } from "react";

const SUCCESS_DELAY_MS = 1200;
type FormState = "loading" | "ready" | "submitting" | "error";

export default function FlodeskForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<FormState>("loading");
  const [loadAttempt, setLoadAttempt] = useState(0);

  useEffect(() => {
    const formContainer = containerRef.current;
    if (!formContainer) return;
    const host: HTMLDivElement = formContainer;

    let observer: MutationObserver | undefined;
    let redirectTimer: number | undefined;
    let hasScheduledRedirect = false;
    let isDisposed = false;

    async function loadEmbed() {
      setFormState("loading");
      const response = await fetch("/flodesk-form.html", { cache: "no-store" });
      if (!response.ok) throw new Error("Unable to load the Flodesk form.");
      const markup = await response.text();
      if (isDisposed) return;

      host.innerHTML = markup;
      const root = host.querySelector<HTMLElement>("[data-ff-el='root']");
      const form = host.querySelector<HTMLFormElement>("[data-ff-el='form']");
      if (!root || !form) throw new Error("Flodesk form markup is incomplete.");

      const scheduleRedirectAfterSuccess = () => {
        // Flodesk sets this only after its own lead-capture request succeeds.
        const stage = root.dataset.ffStage;
        if (stage !== "success" || hasScheduledRedirect) return;

        hasScheduledRedirect = true;
        redirectTimer = window.setTimeout(() => window.location.assign("/thank-you"), SUCCESS_DELAY_MS);
      };

      form.addEventListener("submit", () => setFormState("submitting"));
      observer = new MutationObserver(scheduleRedirectAfterSuccess);
      observer.observe(root, { attributes: true, attributeFilter: ["class", "data-ff-stage"], subtree: true });

      // Scripts inserted through innerHTML do not run, so recreate the supplied Flodesk scripts in their original order.
      for (const script of Array.from(host.querySelectorAll("script"))) {
        const liveScript = document.createElement("script");
        for (const attribute of Array.from(script.attributes)) liveScript.setAttribute(attribute.name, attribute.value);
        liveScript.text = script.text;
        script.replaceWith(liveScript);
      }

      setFormState("ready");
    }

    loadEmbed().catch(() => {
      if (!isDisposed) setFormState("error");
    });

    return () => {
      isDisposed = true;
      observer?.disconnect();
      if (redirectTimer) window.clearTimeout(redirectTimer);
    };
  }, [loadAttempt]);

  const loadingMessage = formState === "submitting" ? "Sending your consultation request…" : "Loading consultation form…";

  return (
    <div className="rounded-md border border-brand-line bg-white p-3 shadow-soft sm:p-5" aria-busy={formState === "loading" || formState === "submitting"}>
      {(formState === "loading" || formState === "submitting") && <p className="px-4 py-8 text-center text-sm font-semibold text-brand-muted" role="status">{loadingMessage}</p>}
      {formState === "error" && (
        <div className="px-4 py-5 text-center" role="alert">
          <p className="text-sm font-semibold text-red-700">We couldn&apos;t submit your consultation request. Please check your connection and try again.</p>
          <button className="mt-3 text-sm font-bold text-brand-secondary underline underline-offset-4" type="button" onClick={() => setLoadAttempt((attempt) => attempt + 1)}>Reload the form</button>
        </div>
      )}
      <div ref={containerRef} className={formState === "ready" || formState === "submitting" ? "block" : "hidden"} />
    </div>
  );
}
