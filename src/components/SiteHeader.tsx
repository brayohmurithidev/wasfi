import Link from "next/link";
import { nav, site } from "@/lib/site";
import { WakilMark } from "./WakilMark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-line bg-ink/95 text-on-ink backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <WakilMark className="h-7 w-auto" />
          <span className="text-[15px] font-semibold tracking-tight">
            Wakil <span className="font-normal text-on-ink-2">Fleet</span>
          </span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm text-on-ink-2 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-on-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#get-started"
          className="rounded-full bg-yellow px-4 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
        >
          Get started
        </Link>
      </div>
    </header>
  );
}
