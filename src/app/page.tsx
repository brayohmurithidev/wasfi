import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { WakilMark } from "@/components/WakilMark";
import { site } from "@/lib/site";

/*
 * Every claim here is checked against the Fleet app as built (Nov 2026).
 * Journeys and the activity feed are still placeholders in the app, and the
 * vehicle panic button is switched off, so none of them is promised here.
 */

const features = [
  {
    title: "Live fleet map",
    body: "See every vehicle on one map with its speed, ignition and current driver. Each vehicle shows whether it is live, parked or offline, and when it last reported.",
    icon: "M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.4-6.5 11-6.5 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  },
  {
    title: "Drivers and assignments",
    body: "Invite drivers by phone, assign each one to a vehicle, and keep a record of who drove what and when.",
    icon: "M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19M10 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM20 19v-1.5a3.5 3.5 0 0 0-2.5-3.35M15.5 4.6a3 3 0 0 1 0 5.8",
  },
  {
    title: "Roles for your team",
    body: "The Owner runs the account and chooses who helps. Managers help run the fleet, and drivers have their own access. Everyone signs in with their own account.",
    icon: "M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Zm-3 9 2 2 4-4",
  },
  {
    title: "SOS that reaches people",
    body: "A driver or manager can raise an SOS from the app. The Owner and the responders you choose are alerted by SMS and email, with the last known location.",
    icon: "M12 8v5m0 3.5h.01M10.3 3.9 2.6 17.5A2 2 0 0 0 4.3 20.5h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",
  },
  {
    title: "Installed and tested by us",
    body: "A Wakil technician fits the tracker, records the installation and checks that it reports before your vehicle goes live. No self-install guesswork.",
    icon: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3.5 17.5a1.4 1.4 0 0 0 2 2l5.8-5.8a4 4 0 0 0 5.4-5.4l-2.4 2.4-2-2 2.4-2.4Z",
  },
  {
    title: "Pay in the app",
    body: "Billing is per active vehicle, per month. The Owner pays in the app by M-Pesa or card, and can save a card so each bill is paid on its due date.",
    icon: "M3 7.5A1.5 1.5 0 0 1 4.5 6h15A1.5 1.5 0 0 1 21 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5v-9ZM3 10h18M7 14.5h3",
  },
] as const;

const steps = [
  {
    title: "Talk to us",
    body: "Tell us how many vehicles you run. We agree an installation date that suits your schedule.",
  },
  {
    title: "We install the tracker",
    body: "A Wakil technician fits a tracker in each vehicle and tests it before handing over.",
  },
  {
    title: "Bring in your team",
    body: "Download Wakil Fleet, invite your managers and drivers, and assign drivers to vehicles.",
  },
  {
    title: "Run your fleet",
    body: "Watch your vehicles live, set up who receives SOS alerts, and pay your monthly bill in the app.",
  },
] as const;

const faqs = [
  {
    q: "Who installs the tracker?",
    a: "A Wakil technician. We fit the tracker, record the installation and check that the vehicle reports its position before it goes live in your account.",
  },
  {
    q: "Does the app track my phone?",
    a: "No. Vehicle positions come from the tracker fitted in the vehicle. The app asks for your phone's location only to include it in an SOS you send, and only while you are using the app.",
  },
  {
    q: "Who receives an SOS?",
    a: "The fleet Owner always does. The Owner can add responders: managers in the fleet, or outside contacts such as a security company. They are alerted by SMS, and by email where we have one, with the last known location.",
  },
  {
    q: "What happens if a bill is unpaid?",
    a: "The account can be suspended until the bill is paid, but SOS keeps working while an account is suspended.",
  },
  {
    q: "How do I pay?",
    a: "The Owner pays monthly in the app by M-Pesa or card. Payments are processed by Paystack. Wakil never sees or stores your full card number.",
  },
  {
    q: "Can I delete my account?",
    a: "Yes. See how to delete your account and what happens to your data.",
    link: { href: "/delete-account", label: "Delete your account" },
  },
] as const;

function Icon({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d={d} />
    </svg>
  );
}

function PhonePreview() {
  const vehicles = [
    { name: "Delivery van 1", meta: "Live · 12 sec ago", detail: "42 km/h · Ignition on", tone: "bg-healthy" },
    { name: "Pickup 2", meta: "Parked · last seen 3 h ago", detail: "Ignition off", tone: "bg-on-ink-2" },
    { name: "Saloon 3", meta: "Live · 40 sec ago", detail: "0 km/h · Ignition on", tone: "bg-healthy" },
  ];
  return (
    <div
      className="relative mx-auto w-full max-w-[300px] rounded-[2.2rem] border border-ink-line bg-ink-raised p-3 shadow-2xl shadow-black/50"
      aria-hidden
    >
      <div className="rounded-[1.7rem] bg-ink px-4 pb-5 pt-6">
        <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-ink-line" />
        <p className="text-xs font-semibold uppercase tracking-wider text-on-ink-2">Your fleet</p>
        <p className="mt-1 text-lg font-semibold text-on-ink">3 vehicles</p>
        <div className="relative mt-4 h-28 overflow-hidden rounded-2xl bg-[#1b1c1e]">
          <svg viewBox="0 0 260 112" className="absolute inset-0 h-full w-full">
            <path d="M0 80 C60 60 90 96 150 70 S230 30 260 40" stroke="#2f3034" strokeWidth="10" fill="none" />
            <path d="M40 0 C60 40 70 70 120 112" stroke="#2f3034" strokeWidth="7" fill="none" />
            <path d="M190 0 C185 40 200 80 230 112" stroke="#2f3034" strokeWidth="6" fill="none" />
          </svg>
          <span className="absolute left-[30%] top-[38%] h-3 w-3 rounded-full bg-yellow ring-4 ring-yellow/25" />
          <span className="absolute left-[62%] top-[55%] h-3 w-3 rounded-full bg-yellow ring-4 ring-yellow/25" />
          <span className="absolute left-[80%] top-[22%] h-3 w-3 rounded-full bg-on-ink-2" />
        </div>
        <ul className="mt-4 space-y-2">
          {vehicles.map((v) => (
            <li key={v.name} className="rounded-xl border border-ink-line px-3 py-2.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-on-ink">{v.name}</span>
                <span className={`h-2 w-2 rounded-full ${v.tone}`} />
              </div>
              <p className="mt-0.5 text-[11px] text-on-ink-2">{v.meta}</p>
              <p className="text-[11px] text-on-ink-2">{v.detail}</p>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-xl bg-critical px-3 py-2.5 text-center text-sm font-semibold text-white">
          SOS
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android",
    description: site.description,
    url: site.url,
    areaServed: "KE",
    publisher: { "@type": "Organization", name: site.mainSiteName, url: site.mainSiteUrl },
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-on-ink">
        <WakilMark className="pointer-events-none absolute -right-24 top-10 hidden h-[36rem] w-auto text-white/[0.05] md:block" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-16 sm:px-6 md:grid-cols-[1.15fr_1fr] md:pb-28 md:pt-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-ink-line px-3 py-1 text-xs font-medium text-on-ink-2">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
              Fleet tracking and safety, in Kenya
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-[3.4rem]">
              Know where every vehicle is. Reach your driver when it matters.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-on-ink-2">
              Wakil Fleet puts your vehicles on one live map, keeps track of who is driving, and
              sends an SOS to the right people. The tracker is fitted and tested by
              Wakil technicians.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#get-started"
                className="rounded-full bg-yellow px-6 py-3 text-center font-semibold text-ink transition-opacity hover:opacity-90"
              >
                Get Wakil Fleet
              </Link>
              <Link
                href="#how-it-works"
                className="rounded-full border border-ink-line px-6 py-3 text-center font-semibold text-on-ink transition-colors hover:bg-ink-raised"
              >
                How it works
              </Link>
            </div>
          </div>
          <PhonePreview />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-16 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-text-3">Features</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to run a fleet you can trust
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="rounded-2xl border border-line bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-tint text-ink">
                  <Icon d={f.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 leading-7 text-text-2">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-16 border-y border-line bg-paper-sunken py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-text-3">How it works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From first call to a live fleet
            </h2>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl bg-white p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm font-semibold text-on-ink">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-semibold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-text-2">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SOS */}
      <section id="safety" className="scroll-mt-16 bg-ink py-20 text-on-ink md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow">SOS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              When something goes wrong, the right people know
            </h2>
            <p className="mt-5 text-lg leading-8 text-on-ink-2">
              You decide who responds. The Owner is always alerted, and you can add managers or
              outside contacts. Each one is alerted by SMS, and by email where we have one, with the
              last known location, so help knows where to go.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              ["Raised from the app", "Drivers and managers can send an SOS straight from the app."],
              ["Location included", "The alert carries the last known position."],
              ["Works when suspended", "SOS keeps working even if a bill is overdue."],
              ["Personal contacts too", "Owners can alert their own emergency contacts."],
            ].map(([title, body]) => (
              <li key={title} className="flex gap-4 rounded-2xl border border-ink-line p-5">
                <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-yellow" />
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-on-ink-2">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-16 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-text-3">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Common questions</h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold">
                  {f.q}
                  <span className="text-xl leading-none text-text-3 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-7 text-text-2">
                  {f.a}
                  {"link" in f ? (
                    <>
                      {" "}
                      <Link href={f.link.href} className="font-medium text-text underline underline-offset-4">
                        {f.link.label}
                      </Link>
                    </>
                  ) : null}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Get started */}
      <section id="get-started" className="scroll-mt-16 px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl bg-yellow px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Ready to put your fleet on the map?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-ink/75">
            Wakil Fleet is coming to the App Store and Google Play. Talk to us to book your
            installation.
          </p>
          <a
            href={`mailto:${site.email.support}?subject=Wakil%20Fleet`}
            className="mt-8 inline-block rounded-full bg-ink px-7 py-3 font-semibold text-on-ink transition-opacity hover:opacity-90"
          >
            Email {site.email.support}
          </a>
        </div>
      </section>
    </>
  );
}
