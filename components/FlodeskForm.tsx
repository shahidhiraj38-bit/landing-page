"use client";

import { useEffect, useRef, useState } from "react";

export default function FlodeskForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const host = containerRef.current;
    if (!host) return;

    let disposed = false;

    async function loadForm() {
      try {
        const response = await fetch("/flodesk-form.html", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Unable to load the consultation form.");
        }

        host.innerHTML = await response.text();

        if (disposed) return;

        // Run Flodesk's original scripts.
        for (const oldScript of Array.from(host.querySelectorAll("script"))) {
          const script = document.createElement("script");

          for (const attribute of Array.from(oldScript.attributes)) {
            script.setAttribute(attribute.name, attribute.value);
          }

          script.textContent = oldScript.textContent;
          oldScript.replaceWith(script);
        }
      } catch {
        if (!disposed) {
          setError("The form could not load. Please refresh the page and try again.");
        }
      }
    }

    loadForm();

    return () => {
      disposed = true;
    };
  }, []);

  if (error) {
    return (
      <div className="rounded-md border border-red-200 bg-red-50 p-5 text-center text-sm text-red-700">
        {error}
      </div>
    );
  }

  return (
    <div className="rounded-md border border-brand-line bg-white p-3 shadow-soft sm:p-5">
      <div ref={containerRef} />
    </div>
  );
}
