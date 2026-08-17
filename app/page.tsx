"use client";

import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  LineChart,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: Search,
    title: "Marketing Audit",
    copy: "A practical review of your website, ads, content, offers, and customer journey."
  },
  {
    icon: Bot,
    title: "AI Growth Systems",
    copy: "Use AI to speed up campaign ideas, lead follow-up, content planning, and reporting."
  },
  {
    icon: LineChart,
    title: "90-Day Action Plan",
    copy: "Leave with clear priorities, realistic channels, and next steps your team can execute."
  }
];

const outcomes = [
  "Find the biggest leaks in your current marketing",
  "Clarify who to target and what offer to lead with",
  "Map the best channels for your stage and budget",
  "Get a focused AI-assisted plan for the next 90 days"
];

const stats = [
  { value: "1:1", label: "consultation" },
  { value: "30 min", label: "strategy call" },
  { value: "90 day", label: "growth plan" }
];

const steps = [
  {
    icon: ClipboardList,
    title: "Share your situation",
    copy: "Tell us what you sell, where your customers come from now, and what feels stuck."
  },
  {
    icon: BarChart3,
    title: "Review your growth gaps",
    copy: "We look at your offer, visibility, funnel, and follow-up opportunities."
  },
  {
    icon: CalendarCheck,
    title: "Walk away with priorities",
    copy: "You get a simple plan that shows what to improve first and why it matters."
  }
];

export default function Home() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/thank-you");
  }

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="section-shell flex items-center justify-between py-5">
        <a href="#top" className="focus-ring rounded-sm" aria-label="Digital Shahidhir home">
          <Image src="/dsd-removebg-preview.png" alt="Digital Shahidhir" width={420} height={180} className="h-14 w-auto object-contain" priority />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-muted md:flex">
          <a className="transition hover:text-brand-ink" href="#services">
            Services
          </a>
          <a className="transition hover:text-brand-ink" href="#process">
            Process
          </a>
          <a className="transition hover:text-brand-ink" href="#consultation">
            Contact
          </a>
        </nav>
        <a
          href="#consultation"
          className="focus-ring inline-flex h-11 items-center gap-2 rounded-md bg-brand-ink px-4 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-primary"
        >
          Book Call
          <ArrowRight aria-hidden="true" size={16} />
        </a>
      </header>

      <section id="top" className="section-shell grid gap-12 pb-16 pt-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:pb-20 lg:pt-16">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-brand-line bg-white px-3 py-2 text-sm font-semibold text-brand-primary shadow-sm">
            <Sparkles aria-hidden="true" size={16} />
            Free AI digital marketing consultation
          </div>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-normal text-brand-ink sm:text-5xl lg:text-6xl">
            Get a clear marketing plan to help your business win more customers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
            Stop guessing what to post, where to advertise, or what to do next. Get a personalized strategy designed to help you focus your marketing efforts where they matter most.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#consultation"
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md bg-brand-primary px-6 text-base font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#0b8581]"
            >
              Request Free Plan
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-brand-line bg-white/80 px-4 py-4 shadow-sm">
                <p className="text-2xl font-extrabold text-brand-ink">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase text-brand-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-md border border-brand-line bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between border-b border-brand-line pb-4">
              <div>
                <p className="text-sm font-bold text-brand-primary">Growth Snapshot</p>
                <p className="mt-1 text-2xl font-extrabold text-brand-ink">AI marketing readiness</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-primary text-white">
                <Target aria-hidden="true" size={24} />
              </div>
            </div>
            <div className="mt-5 space-y-4">
              {[
                ["Offer clarity", "78%"],
                ["Lead generation", "64%"],
                ["Follow-up speed", "41%"],
                ["Content consistency", "58%"]
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm font-semibold">
                    <span className="text-brand-ink">{label}</span>
                    <span className="text-brand-muted">{value}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-[#eaf1ef]">
                    <div className="h-2.5 rounded-full bg-brand-secondary" style={{ width: value }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-md bg-[#f5faf8] p-4">
              <p className="text-sm font-bold text-brand-ink">Recommended next move</p>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                Build one focused campaign with stronger follow-up automation before expanding ad spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-line bg-white/70 py-12">
        <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <div key={outcome} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 shrink-0 text-brand-primary" aria-hidden="true" size={20} />
              <p className="text-sm font-semibold leading-6 text-brand-ink">{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section-shell py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-extrabold uppercase text-brand-secondary">What you get</p>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-ink sm:text-4xl">A focused consultation built for practical decisions.</h2>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-md border border-brand-line bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#eaf7f6] text-brand-primary">
                  <Icon aria-hidden="true" size={24} />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-brand-ink">{service.title}</h3>
                <p className="mt-3 leading-7 text-brand-muted">{service.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="process" className="bg-brand-ink py-16 text-white lg:py-20">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-extrabold uppercase text-brand-secondary">Simple process</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">From unclear marketing to a clear next move.</h2>
              <p className="mt-5 leading-8 text-white/72">
                The session is designed for owners and small teams who need clarity before committing more time or budget.
              </p>
            </div>
            <div className="grid gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="grid gap-4 rounded-md border border-white/12 bg-white/[0.06] p-5 sm:grid-cols-[auto_1fr]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-brand-primary">
                      <Icon aria-hidden="true" size={23} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-secondary">Step {index + 1}</p>
                      <h3 className="mt-1 text-xl font-extrabold">{step.title}</h3>
                      <p className="mt-2 leading-7 text-white/72">{step.copy}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="consultation" className="section-shell grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div>
          <p className="text-sm font-extrabold uppercase text-brand-secondary">Book your consultation</p>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-ink sm:text-4xl">Tell us where you want your marketing to go.</h2>
          <p className="mt-5 max-w-xl leading-8 text-brand-muted">
            Send the essentials and we will follow up with available times for your free strategy call.
          </p>
          <div className="mt-8 space-y-4 text-sm font-semibold text-brand-ink">
            <a className="flex items-center gap-3 transition hover:text-brand-primary" href="mailto:digital@shahidhir.com.np">
              <Mail aria-hidden="true" size={19} />
              digital@shahidhir.com.np
            </a>
            <a className="flex items-center gap-3 transition hover:text-brand-primary" href="mailto:shahidhiraj38@gmail.com">
              <Mail aria-hidden="true" size={19} />
              shahidhiraj38@gmail.com
            </a>
            <a className="flex items-center gap-3 transition hover:text-brand-primary" href="https://www.shahidhir.com.np">
              <Phone aria-hidden="true" size={19} />
              www.shahidhir.com.np
            </a>
            <a className="flex items-center gap-3 transition hover:text-brand-primary" href="https://www.digital.shahidhir.com">
              <Phone aria-hidden="true" size={19} />
              www.digital.shahidhir.com
            </a>
            <a className="flex items-center gap-3 transition hover:text-brand-primary" href="tel:+9779851137809">
              <Phone aria-hidden="true" size={19} />
              9851137809
            </a>
            <a className="flex items-center gap-3 transition hover:text-brand-primary" href="https://wa.me/9779851137809">
              <MessageCircle aria-hidden="true" size={19} />
              WhatsApp consultation request
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-md border border-brand-line bg-white p-5 shadow-soft sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-bold text-brand-ink">
              Name
              <input className="focus-ring mt-2 h-12 w-full rounded-md border border-brand-line px-4 text-base font-medium text-brand-ink" name="name" required />
            </label>
            <label className="text-sm font-bold text-brand-ink">
              Business name
              <input className="focus-ring mt-2 h-12 w-full rounded-md border border-brand-line px-4 text-base font-medium text-brand-ink" name="businessName" required />
            </label>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-bold text-brand-ink">
              Email
              <input className="focus-ring mt-2 h-12 w-full rounded-md border border-brand-line px-4 text-base font-medium text-brand-ink" name="email" type="email" required />
            </label>
            <label className="text-sm font-bold text-brand-ink">
              WhatsApp number
              <input className="focus-ring mt-2 h-12 w-full rounded-md border border-brand-line px-4 text-base font-medium text-brand-ink" name="whatsapp" type="tel" placeholder="+977 98..." required />
            </label>
          </div>
          <label className="mt-4 block text-sm font-bold text-brand-ink">
            Website link or Facebook link
            <input className="focus-ring mt-2 h-12 w-full rounded-md border border-brand-line px-4 text-base font-medium text-brand-ink" name="websiteOrFacebook" type="url" placeholder="https://" />
          </label>
          <label className="mt-4 block text-sm font-bold text-brand-ink">
            What do you want to improve?
            <textarea className="focus-ring mt-2 min-h-32 w-full resize-y rounded-md border border-brand-line px-4 py-3 text-base font-medium text-brand-ink" name="message" required />
          </label>
          <button
            type="submit"
            className="focus-ring mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-primary px-6 text-base font-extrabold text-white shadow-glow transition hover:bg-[#0b8581]"
          >
            <Users aria-hidden="true" size={18} />
            Send Request
          </button>
        </form>
      </section>
    </main>
  );
}
