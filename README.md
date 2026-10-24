# Mist Paradise Resort — website

Landing page for Mist Paradise Resort, Karjat. Built in Bolt with
React, TypeScript, Vite and Tailwind CSS. Enquiries are saved to a Supabase database.

## Run locally

Needs Node.js 18 or newer.

```
npm install
cp .env.example .env      # then fill in your Supabase URL and anon key
npm run dev               # http://localhost:5173
```

Other scripts: `npm run build` (production build into `dist/`), `npm run preview`,
`npm run lint`, `npm run typecheck`.

## Environment variables

| Name | Where to find it |
| --- | --- |
| `VITE_SUPABASE_URL` | Supabase dashboard → Project Settings → API → Project URL |
| `VITE_SUPABASE_ANON_KEY` | Same page → `anon` `public` key |

`.env` is git-ignored — never commit it. Add both variables in your hosting
provider's settings instead.

## Deploy

**Netlify / Vercel / Cloudflare Pages:** import this repo, build command `npm run build`,
output directory `dist`, and add the two environment variables above.

**GitHub Pages** works too, but needs a GitHub Actions workflow that builds the site;
Netlify or Vercel is simpler for a Vite app.

## Database (Supabase)

`supabase/migrations/` holds the SQL for the `enquiries` table:

1. `20261024081344_create_enquiries_table.sql`: creates the table (from Bolt).
2. `20261024090000_restrict_enquiry_reads.sql`: **run this one.** Bolt's original rules
   let anyone with the public key read every enquiry, including guests' names, emails and
   phone numbers. This removes public read access, so visitors can still submit but only
   you can read enquiries.

If Bolt already created the table for you, open Supabase → SQL Editor and run the second
file. Read new enquiries under Supabase → Table Editor → `enquiries`.

## Editing content

Text, sections and image paths live in `src/data/content.ts`. Photos are in `public/`.
Contact details appear in `src/components/Location.tsx`, `Footer.tsx` and `Enquiry.tsx`.
