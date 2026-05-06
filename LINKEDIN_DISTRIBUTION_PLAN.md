# Letterman → FranchiseNow Blog → LinkedIn Distribution Plan

## Goal
Turn each published Letterman article into **LinkedIn-native posts** that can be reviewed and published through **PostStream**.

This is **not** a blog syndication pipeline.
It is a **content derivation pipeline**:

**Letterman article → blog asset → LinkedIn post drafts → approval → PostStream publish**

---

## Core Decision
Do **not** paste the blog article into LinkedIn.

Instead, derive **1–3 LinkedIn posts** from each article:
1. **Authority post** — one strong idea from the article, native to LinkedIn
2. **Traffic post** — article summary + blog link
3. **Lead post** — problem/opportunity angle + DM / consult CTA

This gives us:
- more reach than direct link-dumping
- more authority than a pure CTA post
- more business signal than a blog-only workflow

---

## Recommended MVP
Build **Version 1** first:

For each newly published article:
- fetch article metadata + content from Letterman
- generate **1 LinkedIn post draft**
- save as **draft**
- approve manually
- publish to **LinkedIn only** through PostStream

Once stable, expand to **Version 2**:
- generate **3 post variants per article**
- schedule them across 7–10 days
- add mixed CTA modes: authority / traffic / lead

---

## Important Architecture Note
The current FranchiseNow blog integration is **pull-based**.
The site reads published articles from Letterman at runtime via `app/blog/lib/posts.ts`.

That means LinkedIn distribution should **not** run inside page rendering or ISR.

### Correct approach
Use a **separate worker/script/automation step** that:
- calls the same Letterman API
- detects newly published articles
- generates LinkedIn drafts
- publishes through PostStream
- records state so nothing posts twice

---

## Proposed Pipeline

### Stage 1 — Source Fetch
Pull published articles from the same Letterman storage already used by the blog:

- `LETTERMAN_API_KEY`
- `LETTERMAN_STORAGE_ID`
- endpoint:
  - `GET /newsletters-storage/{storageId}/newsletters?state=PUBLISHED&type=ARTICLE`
- sections endpoint for full body:
  - `GET /newsletters/{articleId}/sections`

### Stage 2 — Normalize Article
Normalize into an internal content object:

```json
{
  "source": "letterman",
  "articleId": "69f...",
  "title": "Why Most Businesses Don’t Need More Leads",
  "slug": "why-most-businesses-don-t-need-more-leads",
  "url": "https://franchisenow.ai/blog/why-most-businesses-don-t-need-more-leads",
  "excerpt": "Most businesses do not need more leads. They need better follow-up.",
  "content": "Full rendered article text...",
  "tags": ["ai", "automation", "lead generation"],
  "image": "https://...",
  "publishedAt": "2026-05-05T00:00:00.000Z"
}
```

### Stage 3 — Deduplicate
Before generating anything, check a state store.

Recommended state file:

`/root/.openclaw/workspace/franchise-now-openclaw/data/linkedin-distribution-state.json`

Track:
- article ID
- slug
- whether drafts were generated
- which LinkedIn variants were created
- whether published
- PostStream post ID(s)
- permalink(s)

### Stage 4 — Generate LinkedIn Drafts
Generate at least one draft per article.

#### Recommended V2 output
```json
{
  "articleId": "69f...",
  "blogUrl": "https://franchisenow.ai/blog/example",
  "variants": [
    {
      "type": "authority",
      "ctaMode": "engagement",
      "title": "Operators are using AI wrong",
      "hook": "Most business owners are still treating AI like a toy.",
      "body": "LinkedIn-native post body here...",
      "cta": "What part of your workflow still depends too much on manual follow-up?",
      "hashtags": ["#AI", "#Automation", "#LeadGeneration"]
    },
    {
      "type": "traffic",
      "ctaMode": "traffic",
      "title": "Full breakdown: follow-up systems",
      "hook": "Most businesses do not need more leads. They need better follow-up.",
      "body": "LinkedIn-native post body here...",
      "cta": "Full article: https://franchisenow.ai/blog/example",
      "hashtags": ["#AI", "#SalesSystems", "#BusinessGrowth"]
    },
    {
      "type": "lead",
      "ctaMode": "lead",
      "title": "If you want this built for your business",
      "hook": "If your pipeline breaks the second you stop manually following up, you do not have a system.",
      "body": "LinkedIn-native post body here...",
      "cta": "If you want help building this into your business, DM me 'AI'.",
      "hashtags": ["#AIConsulting", "#Automation", "#BookedCalls"]
    }
  ]
}
```

---

## CTA Rules

### 1. Authority / Engagement posts
Use when the goal is reach and credibility.

**CTA examples:**
- `What part of your follow-up process still breaks most often?`
- `Are you using AI as a content tool or an operating system?`

### 2. Traffic posts
Use when the goal is blog traffic.

**CTA examples:**
- `Full article here: {blogUrl}`
- `I broke the full system down here: {blogUrl}`

### 3. Lead posts
Use when the goal is conversations and booked calls.

**CTA examples:**
- `If you want this built into your business, DM me 'AI'.`
- `If you want help installing a system like this, message me.`

### Rule of thumb
For FranchiseNow, bias toward:
- **70% authority / engagement**
- **30% traffic / direct response**

LinkedIn usually rewards native value more than constant outbound-link behavior.

---

## LinkedIn Copy Rules

### Format
Each post should follow:
1. **Hook**
2. **One strong insight**
3. **Short breakdown**
4. **Business implication**
5. **CTA**

### Constraints
- Keep most posts around **600–1,200 characters**
- Use short paragraphs
- Avoid hashtags overload
- Use **3–5 hashtags max**
- No corporate tone
- No "check out our latest blog" filler
- Write like an operator, not a newsletter robot

### Tone
- direct
- practical
- high-signal
- mildly contrarian when useful
- focused on leverage, systems, lead generation, appointment booking, revenue

---

## Approval Layer
Do **not** auto-publish immediately in V1.

### Recommended flow
- generator creates draft JSON
- Noah reviews one draft
- approved draft is sent to PostStream

### Storage options
#### Simple option (fastest)
Store generated drafts locally:
- `data/linkedin-drafts/{article-slug}.json`

#### Better option
Store drafts in Control Board or a structured queue later.

For MVP, local JSON + Telegram review is enough.

---

## PostStream Integration
Use PostStream only for the final publish step.

### Why
PostStream is the distribution layer, not the idea-generation layer.

### PostStream payload shape
For LinkedIn-only publishing, use something like:

```json
{
  "title": "Why Most Businesses Don’t Need More Leads",
  "caption": "Most businesses do not need more leads...\n\nFull article: https://franchisenow.ai/blog/example",
  "platforms": ["linkedin"]
}
```

### Optional media
If the article has a good preview image, test:

```json
{
  "title": "Why Most Businesses Don’t Need More Leads",
  "caption": "Post text here...",
  "platforms": ["linkedin"],
  "mediaType": "image",
  "mediaUrls": ["https://..."]
}
```

But do not force media in V1.
A strong text post may outperform a weak image post.

---

## Recommended File Layout

```text
franchise-now-openclaw/
  app/
  components/
  data/
    linkedin-distribution-state.json
    linkedin-drafts/
      article-slug.json
  scripts/
    generate-linkedin-from-letterman.ts
    publish-linkedin-draft.ts
  LINKEDIN_DISTRIBUTION_PLAN.md
```

---

## Suggested Command Flow

### Command 1 — Generate drafts
**Purpose:** fetch new articles and create draft variants

Example:
```bash
pnpm tsx scripts/generate-linkedin-from-letterman.ts
```

**Behavior:**
- fetch published articles
- skip already-processed article IDs
- build blog URL from slug
- fetch sections for full body
- generate 1–3 LinkedIn variants
- save draft JSON
- update state file

### Command 2 — Publish approved draft
**Purpose:** send one selected draft to PostStream

Example:
```bash
pnpm tsx scripts/publish-linkedin-draft.ts --slug why-most-businesses-don-t-need-more-leads --variant lead
```

**Behavior:**
- load draft file
- select variant
- create PostStream post for `linkedin`
- optionally publish immediately or create as draft first
- save PostStream ID / status / permalink to state file

---

## Scheduling

### Best first setup
Start **manual**.

When stable, add cron:
- run draft generator every 6–12 hours
- publish only after approval

### Do not do yet
- full auto-posting of every article
- multi-platform auto-syndication
- complicated branching logic

Keep the first version tight.

---

## Best Initial Prompt Strategy
When generating from an article, instruct the model to:
- extract the strongest business insight
- avoid sounding like an article summary bot
- write natively for LinkedIn
- choose one CTA mode: `authority`, `traffic`, or `lead`
- keep the hook sharp
- preserve the business operator tone

Prompt target:
- audience = franchise operators, business owners, AI-curious entrepreneurs
- value = lead generation, follow-up, booked calls, operational leverage

---

## MVP Build Order

### Phase 1
- [ ] Create state file
- [ ] Create generator script
- [ ] Create one LinkedIn variant per article
- [ ] Save draft locally

### Phase 2
- [ ] Create publish script using PostStream
- [ ] Publish to LinkedIn only
- [ ] Record PostStream IDs and status

### Phase 3
- [ ] Expand to 3 variants per article
- [ ] Add approval workflow
- [ ] Add cron for draft generation

### Phase 4
- [ ] Add analytics / reporting
- [ ] Track which CTA mode performs best
- [ ] Recycle top article angles into reels / carousels / email

---

## Final Recommendation
Build this as a **separate distribution worker**, not as part of page rendering.

### The correct V1 stack:
1. Letterman article detected
2. Normalize article + blog URL
3. Generate **one LinkedIn-native draft**
4. Approve manually
5. Publish via PostStream to LinkedIn
6. Record state so it never duplicates

### The correct V2 stack:
1. Same source
2. Generate **authority + traffic + lead** variants
3. Schedule across several days
4. Measure which CTA mode produces:
   - views
   - clicks
   - DMs
   - booked calls

That is the clean move.
