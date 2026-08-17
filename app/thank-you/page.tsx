import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, MessageCircle, PlayCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You - Your Request Has Been Received",
  description: "Your Digital Shahidhir AI digital marketing consultation request has been received."
};

const nextSteps = [
  ["Watch the video", "Learn what to expect from your consultation."],
  ["Keep your phone nearby", "We'll use the contact information you provided to communicate with you about the consultation."],
  ["Come prepared", "Think about your biggest marketing challenge and what you want your business to achieve."]
];

export default function ThankYouPage() {
  return (
    <main className="min-h-screen pb-16">
      <header className="section-shell py-5">
        <a href="/" className="focus-ring inline-block rounded-sm" aria-label="Digital Shahidhir home">
          <Image src="/dsd-removebg-preview.png" alt="Digital Shahidhir" width={420} height={180} className="h-14 w-auto object-contain" priority />
        </a>
      </header>

      <section className="section-shell py-10 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border border-brand-line bg-white p-7 text-center shadow-soft sm:p-12">
            <CheckCircle2 className="mx-auto text-brand-primary" aria-hidden="true" size={42} />
            <p className="mt-5 text-sm font-extrabold uppercase tracking-wide text-brand-secondary">Request received</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-ink sm:text-5xl">Thank You - Your Request Has Been Received</h1>
            <h2 className="mt-7 text-xl font-extrabold text-brand-ink sm:text-2xl">You&apos;re One Step Closer to a Clear Marketing Strategy</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-brand-muted">Thank you for requesting your free AI digital marketing consultation. We&apos;ve received your information.</p>
            <p className="mt-5 font-bold text-brand-ink">Before your consultation, watch the short video below.</p>
            <p className="mx-auto mt-2 max-w-2xl leading-7 text-brand-muted">It will help you understand what to expect from the consultation and how we can identify the right marketing opportunities for your business.</p>
          </div>

          <section className="mt-8 rounded-lg border border-brand-line bg-white p-7 shadow-sm sm:p-10">
            <h2 className="text-2xl font-extrabold text-brand-ink sm:text-3xl">Watch This Video Before Your Consultation</h2>
            <div className="mt-6 flex aspect-video items-center justify-center rounded-md bg-brand-ink px-6 text-center text-white">
              <div>
                <PlayCircle className="mx-auto text-brand-secondary" aria-hidden="true" size={48} />
                <p className="mt-4 text-lg font-extrabold">Watch the Video</p>
                <p className="mt-2 text-sm text-white/70">Video will be added here.</p>
              </div>
            </div>
            <p className="mt-5 text-center font-bold text-brand-ink">Please watch the video before your consultation.</p>
          </section>

          <section className="mt-8 rounded-lg bg-brand-ink p-7 text-center text-white shadow-soft sm:p-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Have a Question? WhatsApp Me Directly</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">If you have a question about your business, marketing, or the consultation, you can contact me directly on WhatsApp.</p>
            <a href="https://wa.me/9779851137809" className="focus-ring mt-7 inline-flex h-12 items-center gap-2 rounded-md bg-brand-primary px-6 font-extrabold text-white transition hover:bg-[#0b8581]">
              <MessageCircle aria-hidden="true" size={19} />
              WhatsApp Me Now
            </a>
            <p className="mt-4 text-sm font-bold text-brand-secondary">WhatsApp: 9851137809</p>
          </section>

          <section className="mt-8 rounded-lg border border-brand-line bg-white p-7 shadow-sm sm:p-10">
            <h2 className="text-2xl font-extrabold text-brand-ink sm:text-3xl">Your Next Steps</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {nextSteps.map(([title, copy], index) => (
                <div key={title} className="rounded-md bg-[#f5faf8] p-5">
                  <p className="text-sm font-extrabold text-brand-secondary">{index + 1}.</p>
                  <h3 className="mt-2 text-lg font-extrabold text-brand-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">{copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 text-center">
            <h2 className="text-2xl font-extrabold text-brand-ink sm:text-3xl">Ready to Get More From Your Marketing?</h2>
            <p className="mt-3 leading-7 text-brand-muted">Watch the video now, then message me on WhatsApp if you have any questions.</p>
            <a href="https://wa.me/9779851137809" className="focus-ring mt-6 inline-flex h-12 items-center gap-2 rounded-md bg-brand-primary px-6 font-extrabold text-white shadow-glow transition hover:bg-[#0b8581]">
              <MessageCircle aria-hidden="true" size={19} />
              WhatsApp Me Now
            </a>
            <div>
              <a href="/" className="focus-ring mt-4 inline-flex h-11 items-center rounded-md border border-brand-line bg-white px-5 text-sm font-extrabold text-brand-ink transition hover:border-brand-primary hover:text-brand-primary">
                Back to Home
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
