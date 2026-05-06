# Letterman → FranchiseNow Blog Integration

## What This Does
Automatically publishes Letterman articles to the FranchiseNow blog at `franchisenow.ai/blog`

## How It Works
- Blog fetches from Letterman API at runtime (not static files)
- ISR revalidation: 60 minutes
- New articles appear within ~60 min of publishing in Letterman

## Key Files
- `app/blog/lib/posts.ts` — API integration logic
- `app/blog/page.tsx` — Blog listing page
- `app/blog/[slug]/page.tsx` — Individual article page
- `next.config.js` — Image domains (wasabisys.com for Letterman images)

## Environment Variables Required
```
LETTERMAN_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
LETTERMAN_STORAGE_ID=69f10c18a166af267eba86d4
```

## Letterman Details
- **Publication:** "The AI Workforce Insider"
- **Storage ID:** `69f10c18a166af267eba86d4`
- **Base URL:** `https://api.letterman.ai/api/ai`
- **Endpoint:** `GET /newsletters-storage/{storageId}/newsletters?state=PUBLISHED&type=ARTICLE`

## Current Status
✅ Live and working
✅ Auto-syncs every 60 minutes
✅ No manual steps needed after Letterman publish

## To Verify It's Working
1. Publish article in Letterman
2. Wait ~60 min OR run `curl https://franchisenow.ai/blog`
3. Check that article appears

## If Something Breaks
- Check `LETTERMAN_API_KEY` is valid
- Check `LETTERMAN_STORAGE_ID` matches publication
- Check Vercel env vars are set
- Check `next.config.js` has image domain: `news-letter.s3.wasabisys.com`

## Code Reference
See `app/blog/lib/posts.ts` lines 1-180 for full integration logic.
