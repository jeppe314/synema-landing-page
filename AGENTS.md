<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

- Install with `npm ci`. The dev server is `npm run dev` (Next.js 16 listens on `0.0.0.0:3000` by default). Lint with `npm run lint`; production build with `npm run build`.
- The only automated tests use Node's test runner. There is no `npm test` script: `node --experimental-strip-types --test src/lib/waitlist-attribution.test.ts`.
- Waitlist signup needs `LOOPS_API_KEY` and `LOOPS_WAITLIST_CONFIRMATION_ID` from `.env.example` (see `docs/WAITLIST-SETUP.md`). Without them the site still runs, and a valid email submission returns "Waitlist is not configured yet."
