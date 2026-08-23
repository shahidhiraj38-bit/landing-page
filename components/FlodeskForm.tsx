"use client";

import { useEffect, useRef, useState } from "react";

export default function FlodeskForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const host = containerRef.current;
    if (!host) return;

    const formHost: HTMLDivElement = host;

    fetch("/flodesk-form.html")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load the form.");
        return response.text();
      })
      .then((html) => {
        formHost.innerHTML = html;

        // Submit normally and directly to Flodesk.
        formHost.querySelectorAll("script").forEach((script) => script.remove());
      })
      .catch(() => setError("Could not load the form. Please refresh the page."));
  }, []);

  return (
    <div className="rounded-md border border-brand-line bg-white p-3 shadow-soft sm:p-5">
      {error && <p className="mb-3 text-center text-red-700">{error}</p>}
      <div ref={containerRef} />
    </div>
  );
}
