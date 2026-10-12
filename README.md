# Gym Tracker

A mobile web app (installable PWA) built from the Claude Design handoff in `project/Gym Tracker.dc.html`.
It covers workouts and live sessions, a weekly schedule, progress history, and nutrition and diet plans built around food available in Bangladesh.

## Run locally

```bash
npm install
cp .env.example .env.local   # add ANTHROPIC_API_KEY to enable the AI features
npm run dev                  # http://localhost:5173 (also on your LAN with --host)
```

`npm run build` typechecks and builds to `dist/`. `npm run preview` serves the build, including the AI proxy.

## Put it on your iPhone

1. Deploy it, either way works:
   - **Netlify:** import the repo. `netlify.toml` sets the build, and `netlify/edge-functions/complete.ts` serves the AI proxy. Add `ANTHROPIC_API_KEY` under Site configuration, then Environment variables, and redeploy.
   - **Vercel:** import the repo with the Vite defaults and add `ANTHROPIC_API_KEY`. `api/complete.ts` deploys as a serverless function.
2. Open the deployed URL in Safari, tap **Share**, then **Add to Home Screen**.
3. Open it from the icon. It runs full screen, respects the notch and home bar, and works offline. AI features and exercise photos need a connection.

## How it's put together

| Path | What it is |
|---|---|
| `src/screens/*.tsx` | One component per design screen (Welcome to Profile). Converted from the design's templates, with the phone frame replaced by the real viewport. |
| `src/logic/*.js` | The design's behaviour (plans, sessions, schedule, progress, nutrition, diet), split into modules. `AppLogic.renderVals()` produces the values every screen renders. |
| `src/logic/runtime.ts` | A small host that runs the logic in React. `setState` applies synchronously, as it did in the prototype. |
| `src/lib/persist.ts` | Saves workouts, plans, meals and goals to `localStorage`. |
| `src/lib/settings.ts` | Theme (System / Dark / Light, set on Profile) and first-run state. |
| `src/lib/ai.ts`, `server/complete.ts` | AI: the browser calls `POST /api/complete`, which calls Claude (`claude-opus-5-5`) with the server-side key. |
| `netlify/edge-functions/complete.ts`, `api/complete.ts` | That endpoint on Netlify (an edge function that streams a keep-alive so long AI replies don't time out) and on Vercel. |
| `project/`, `chats/`, `HANDOFF.md` | The original design bundle, kept for reference. |

Navigation uses the URL hash (`#dashboard`, `#session`, …), so each screen can be linked directly.

## Known limitations

- **Demo calendar:** like the design, "today" is fixed at Fri 2 Oct 2026, and history before today is generated sample data. Moving to the real date needs the date logic in `progress.js`, `app.js` and `nutrition.js` reworked.
- **Local only:** the account is local, with no real sign-in or sync. Data lives on the one device.
- **Static sections:** some parts of the design are static, such as the Profile weight history and the Session complete summary numbers.
