import Link from "next/link";
import type { ReactNode } from "react";
import { legalLinks, site } from "@/lib/site";

export function LegalPage({
  title,
  intro,
  current,
  children,
}: {
  title: string;
  intro: ReactNode;
  current: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="bg-ink text-on-ink">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-yellow">Legal</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          <div className="mt-4 text-lg leading-8 text-on-ink-2">{intro}</div>
          <p className="mt-6 text-sm text-on-ink-2">Last updated {site.legalUpdated}</p>
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <article className="prose-legal">{children}</article>
        <nav aria-label="Other legal pages" className="mt-14 border-t border-line pt-8">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {legalLinks
              .filter((l) => l.href !== current)
              .map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-medium underline underline-offset-4">
                    {l.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export function Mail({ to }: { to: string }) {
  return <a href={`mailto:${to}`}>{to}</a>;
}
