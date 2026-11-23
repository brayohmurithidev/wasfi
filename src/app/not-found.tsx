import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start px-4 py-28 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-text-3">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight">This page doesn&apos;t exist</h1>
      <p className="mt-4 text-text-2">The link may be old, or the address mistyped.</p>
      <Link href="/" className="mt-8 rounded-full bg-ink px-6 py-3 font-semibold text-on-ink">
        Go to the home page
      </Link>
    </section>
  );
}
