"use client";

import { useEffect, useRef, useState } from "react";

export default function FlodeskForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
   const formHost = containerRef.current!;
    if (!formHost) return;

    let cancelled = false;

    async function loadForm() {
      try {
        const response = await fetch("/flodesk-form.html", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Unable to load the consultation form.");
        }

        const html = await response.text();

        if (cancelled) return;

        formHost.innerHTML = html;

        // Use our reliable Vercel submission route.
        for (const script of Array.from(formHost.querySelectorAll("script"))) {
          script.remove();
        }

        const form = formHost.querySelector<HTMLFormElement>(
          "[data-ff-el='form']",
        );

        if (!form) {
          throw new Error("The form markup is incomplete.");
        }

        form.addEventListener("submit", async (event) => {
          event.preventDefault();

          const button = form.querySelector<HTMLButtonElement>(
            "button[type='submit']",
          );

          setMessage("Sending your request…");
          if (button) button.disabled = true;

          try {
            const result = await fetch("/api/consultation", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: new URLSearchParams(
                Array.from(new FormData(form).entries()).filter(
                  (entry): entry is [string, string] =>
                    typeof entry[1] === "string",
                ),
              ),
            });

            if (!result.ok) {
              const data = await result.json().catch(() => null);
              throw new Error(
                data?.error || "Your request could not be submitted.",
              );
            }

            window.location.assign("/thank-you");
          } catch (error) {
            setMessage(
              error instanceof Error
                ? error.message
                : "The form could not be sent. Please try again.",
            );

            if (button) button.disabled = false;
          }
        });
      } catch (error) {
        if (!cancelled) {
          setMessage(
            error instanceof Error
              ? error.message
              : "The form could not be loaded.",
          );
        }
      }
    }

    loadForm();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="rounded-md border border-brand-line bg-white p-3 shadow-soft sm:p-5">
      {message && (
        <p className="mb-4 text-center text-sm font-semibold text-brand-muted">
          {message}
        </p>
      )}
      <div ref={containerRef} />
    </div>
  );
}
