# WASFI public site

The public site for Wakil Fleet (Wakil Security Fleet Intelligence), served at
https://wasfi.wakilsecurity.com and hosted on Vercel.

Pages: home, `/privacy`, `/terms`, `/delete-account` (the links the App Store and
Google Play listings use), plus `sitemap.xml`, `robots.txt` and a generated share image.

## Develop

```bash
npm install
npm run dev
```

## Before deploying

```bash
npm run check:placeholders   # fails while any unconfirmed company fact remains
npx tsc --noEmit && npm run lint && npm run build
```

Company facts, contact email and retention periods live in `src/lib/site.ts`.
The site's claims are checked against the Fleet app as built: update them when the
app changes, and update the privacy policy whenever a new kind of data or a new
service provider is added. The legal pages are drafts until reviewed by a lawyer.
