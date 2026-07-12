# Waitlist setup (Loops)

This landing page collects waitlist signups via [Loops](https://loops.so). Each signup is tagged with a `project` (e.g. `synema`) so you can reuse the same Loops account across future landing pages.

## 1. Create a Loops account

Sign up at [loops.so](https://loops.so) (free tier: 1,000 contacts, 4,000 sends/month).

## 2. Add custom contact properties

In Loops, go to **Audience → Contact properties** and create:

| Property | Type   | Example value |
| -------- | ------ | ------------- |
| `project` | string | `synema`      |
| `platform` | string | `ios`         |
| `source` | string | `waitlist`    |

These are set automatically when someone signs up.

## 3. Create the confirmation email

1. Go to **Transactional → Create**
2. Name it something like `Waitlist confirmation`
3. Suggested content:

   **Subject:** You're on the {{appName}} waitlist

   **Body (example):**
   > Thanks for signing up!
   >
   > We'll email you when {{appName}} launches on {{platform}}. No spam — just one email when we're live.
   >
   > — The {{appName}} team

4. Add **data variables** in the email editor:
   - `appName` (string)
   - `platform` (string)

5. **Publish** the email and copy its **Transactional ID** (starts with `cl...`).

## 4. Get your API key

Go to **Settings → API** and create an API key.

## 5. Configure environment variables

Locally, copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in:

```env
LOOPS_API_KEY=your_api_key
LOOPS_WAITLIST_CONFIRMATION_ID=your_transactional_email_id
```

On Vercel, add the same variables under **Project → Settings → Environment Variables** for Production (and Preview if you want to test there).

## 6. Test

1. Run `npm run dev`
2. Submit your email on the homepage
3. Check Loops **Audience** for a new contact with `project = synema`
4. Check your inbox for the confirmation email

## Launch day

When you're ready to announce the launch:

1. Open Loops → **Campaigns → Create broadcast**
2. Audience filter: `project` equals `synema` (and optionally `platform` equals `ios`)
3. Write your launch email with App Store / download links
4. Send

## Reuse on future landing pages

Copy `src/components/waitlist-form.tsx` and `src/app/actions/waitlist.ts` into the new repo, then use:

```tsx
<WaitlistForm project="my-new-idea" appName="My New Idea" platform="ios" />
```

Same Loops account, same API key — filter by `project` when sending launch emails.
