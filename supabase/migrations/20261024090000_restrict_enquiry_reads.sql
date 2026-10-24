/*
# Keep guest enquiries private

The first migration let the public (anon) key read every row in `enquiries`,
which would expose guests' names, emails and phone numbers to anyone who
copies the key from the website's JavaScript.

Visitors only need to submit enquiries. This removes public read access;
resort staff read enquiries from the Supabase dashboard (or a future
signed-in admin page).
*/

DROP POLICY IF EXISTS "anyone_can_read_enquiries" ON enquiries;
REVOKE SELECT ON enquiries FROM anon, authenticated;
