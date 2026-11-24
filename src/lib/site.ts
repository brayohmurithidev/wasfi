/*
 * One place for every fact the public pages state about the company.
 * Values wrapped in double square brackets are not confirmed yet: `npm run check:placeholders`
 * fails while any remain, so they cannot ship by accident.
 */
export const site = {
  name: "Wakil Fleet",
  url: "https://wasfi.wakilsecurity.com",
  mainSiteUrl: "https://wakilsecurity.com",
  mainSiteName: "Wakil Security",
  description:
    "Wakil Fleet is vehicle tracking and safety for fleets in Kenya: live location, journeys you can replay, alerts, driver assignments, and an SOS that reaches the right people, on a tracker installed and tested by Wakil technicians.",
  appBundleId: "com.wakilsecurity.fleet",
  legalUpdated: "23 November 2026",
  company: {
    legalName: "Wakil Security",
    address: "Diamond Plaza, 3rd Floor",
  },
  email: {
    support: "contact@wakilsecurity.com",
    privacy: "contact@wakilsecurity.com",
  },
  retention: {
    // Requests made by email (people who cannot sign in) are done within this.
    emailRequestDays: 30,
    installationEvidenceDays: 90,
  },
} as const;

// "Get started": opens an email to Wakil straight away (Brian, 24 Nov).
export const getStartedHref = `mailto:${site.email.support}?subject=${encodeURIComponent(
  "Wakil Fleet: book an installation",
)}&body=${encodeURIComponent(
  "Hello Wakil,\n\nI'd like to use Wakil Fleet.\n\nCompany:\nNumber of vehicles:\nPhone:\n",
)}`;

export const nav = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#safety", label: "SOS" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const legalLinks = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
  { href: "/delete-account", label: "Delete your account" },
] as const;
