import Link from "next/link";
import { legalLinks, nav, site } from "@/lib/site";
import { WakilMark } from "./WakilMark";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-on-ink-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 text-on-ink">
            <WakilMark className="h-7 w-auto" />
            <span className="text-[15px] font-semibold">
              Wakil <span className="font-normal text-on-ink-2">Fleet</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6">
            Vehicle tracking and safety for fleets in Kenya. A product of{" "}
            <a href={site.mainSiteUrl} className="text-on-ink underline underline-offset-4">
              {site.mainSiteName}
            </a>
            .
          </p>
        </div>
        <nav aria-label="Product">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-on-ink">Product</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-on-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Legal">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-on-ink">Legal</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-on-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-ink-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:justify-between sm:px-6">
          <p>© 2026 {site.company.legalName}. All rights reserved.</p>
          <p>
            Part of{" "}
            <a href={site.mainSiteUrl} className="underline underline-offset-4 hover:text-on-ink">
              wakilsecurity.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
