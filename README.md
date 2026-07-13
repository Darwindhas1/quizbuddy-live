# QuizBuddy

A live quiz game for classrooms. A teacher hosts a quiz, players join on their
own devices with a 6-digit code, everyone answers in sync, and a live
leaderboard keeps score. Built for classrooms across Malaysia.

## Run locally

This is a static site with no build step. Serve the folder and open it in a
browser:

```
npx serve .
# or
python -m http.server 8000
```

Then visit `http://localhost:8000` (or whatever port your server prints).

> **Note:** the current prototype relies on a browser-only `window.storage` API
> that only exists inside the environment it was prototyped in. Hosting a game
> and joining across devices will not sync until the real backend
> (`src/storage.js`, Supabase) lands in a follow-up PR.

## Workflow

- **Never commit directly to `main`.** Branch protection enforces this.
- For every change, no matter how small:
  1. Create a branch named `feature/<short-description>` or
     `fix/<short-description>` — e.g. `git checkout -b feature/xyz` as the
     first step of any task.
  2. Commit on that branch and push it.
  3. Open a pull request with `gh pr create --fill`.
  4. Wait for review — PRs are merged by the repo owner, never by the author
     of the change.
