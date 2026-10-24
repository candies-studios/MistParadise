/*
# Create enquiries table (single-tenant, no auth)

## Summary
A public contact/enquiry form for the Mist Paradise resort website. Visitors
submit their name, contact, dates and message; the resort owner reviews them.
No sign-in is required — this is a single-tenant, no-auth app — so policies
allow both `anon` and `authenticated` roles to insert and read.

## New Tables
- `enquiries`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — guest's full name
  - `email` (text, not null) — guest's email address
  - `phone` (text, nullable) — optional phone number
  - `visit_type` (text, nullable) — overnight stay / day visit / dining / events
  - `check_in` (date, nullable) — requested arrival date
  - `check_out` (date, nullable) — requested departure date
  - `guests` (integer, nullable) — number of guests
  - `message` (text, nullable) — free-text notes from the guest
  - `status` (text, not null, default 'new') — new / replied / confirmed / archived
  - `created_at` (timestamptz, default now())

## Security
- Enable RLS on `enquiries`.
- Grant SELECT + INSERT to `anon` and `authenticated` (the form is public;
  only resort staff need to read, but this is a no-auth single-tenant app so
  both roles get access to the public enquiry channel).
- INSERT policy: anyone can submit an enquiry (WITH CHECK true).
- SELECT policy: anyone can read enquiries (USING true). In a no-auth app the
  anon key is the only client, and the enquiry channel is intentionally public.
- No UPDATE or DELETE grants — enquiries are immutable from the client.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  visit_type text,
  check_in date,
  check_out date,
  guests integer,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT ON enquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anyone_can_submit_enquiry" ON enquiries;
CREATE POLICY "anyone_can_submit_enquiry"
ON enquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anyone_can_read_enquiries" ON enquiries;
CREATE POLICY "anyone_can_read_enquiries"
ON enquiries FOR SELECT
TO anon, authenticated USING (true);
