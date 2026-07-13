# Supabase migrations

**Status: no migration files exist yet — there is nothing to run in the
Supabase SQL editor at this time.**

The Supabase backend has not been implemented. The app still calls the
browser-only `window.storage` API left over from its prototype days, which only
exists inside the claude.ai artifact sandbox. On any real deployment those
calls fail (`window.storage` is `undefined`), which is why the dashboard shows
no quizzes — no data can be read or written anywhere outside the sandbox.

When the Supabase migration lands, this directory will contain numbered SQL
migration files and this README will list the exact order to run them in, so
the Supabase dashboard can be checked against it.
