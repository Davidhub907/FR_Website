The plan for building this website:

There is a lot ill have to learn in the process of building this website, including:
HTML, Tailwind CSS, Node.js, Java/TypeScript, React, and more. 

I will focus on learning as I build to avoid getting stuck in tutorial hell.

Ill start by building out the HTML and basic structure of the site, this should take 3-4 days.

Next, Ill add the styling to the site to make it look better using Tailwind CSS, this should take 2-3 days.

Next, I will add functionallity to the site using React and java/typescript, this should take 3-4 days. 

Ill revise this plan as needed. 

Current sitemap: 

# Frontier Restoration — Website Rebuild Plan

**Client:** Frontier Restoration LLC (Fairbanks, AK — water, fire & mold damage restoration)
**Goal:** Replace the current WordPress site with a faster, mobile-first build **without losing its existing Google rankings.**
**Builder:** David — learning Next.js/React on this project; also a portfolio/resume piece.

---

## 1. The one-sentence objective

Turn a stressed homeowner searching *"water damage restoration near me"* into a phone call within ~10 seconds — on their phone — while preserving (and ideally improving) the site's existing search rankings.

Every decision below serves that sentence.

---

## 2. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router)** | Node + JavaScript + React (the skills you want), but renders HTML ahead of time so Google sees full content — critical since this site ranks. Highest-demand React skill on job listings. |
| Language | JavaScript to start | TypeScript optional later if bandwidth allows — nice resume bonus, not required. |
| Styling | **Tailwind CSS** | Industry-standard, fast to build with, great for responsive/mobile-first. |
| Hosting | **Vercel** | Free for this size, two-click Next.js deploys, automatic HTTPS. |
| Code | **GitHub** (already set up) | Version control + the public artifact hiring managers actually look at. |
| Contact form | API route + email service (Resend or Formspree) | The one "backend" piece — decided in its own chat later. |

---

## 3. The #1 risk: don't break the SEO

The current site ranks **top 4–5** on Google. A careless redesign can tank that and hurt the client's actual revenue. This is the most important section of the plan.

**Protect (keep identical):**
- The **domain** (`frontierrestorationllc.com`) — rankings live on the domain.
- **Name / Address / Phone** exactly: Frontier Restoration LLC · 2155 Frank Ave, Fairbanks, AK 99701 · (907) 987-2916. Must match their Google Business Profile.
- Core keyword content: **water / fire / mold + Fairbanks**. Improve the copy; never delete the topics Google ranks.

**Upgrade (opportunities):**
- **Clean URLs.** Current ones are auto-generated junk (e.g. `/frontier-restoration-llc-3-3-2-2-...`). New: `/about`, `/services/water-damage`, etc.
- ⚠️ **301 redirects required.** Every changed URL needs a 301 (permanent redirect) from old → new so ranking value transfers. Skipping this throws away equity.
- **Better page titles.** Current title is duplicated with no keywords. New format: `Water Damage Restoration in Fairbanks, AK | Frontier Restoration`.
- **Per-service pages** (see sitemap) so each service can rank for its own search term.
- **LocalBusiness structured data** (schema.org) — helps local SEO and is a strong resume detail.

> Note: a chunk of their ranking likely comes from their **Google Business Profile** (the map listing), which is separate from the website. We don't touch it — we just keep the site's NAP consistent with it.

---

## 4. Sitemap (information architecture)

```
/                         Home
/about                    About
/services                 Services overview
/services/water-damage    ← per-service page
/services/fire-damage     ← per-service page
/services/mold-remediation← per-service page
/contact                  Contact
[Client Portal]           external link to existing portal — not rebuilt
```

Per-service pages are built from **one reusable template (dynamic route)** — a design win, an SEO win, and a good Next.js learning milestone all at once.

---

## 5. Design direction

Modeled on the reference site (saltriverresto.com) you liked. The language is **urgency + trust, everywhere:**

- Persistent top bar: phone number + "24/7 Emergency" — always tappable (click-to-call on mobile).
- Hero: big headline + two CTAs (Call Now / See Services).
- Trust badges: insurance-friendly, certified (IICRC), fast response.
- "How it works" numbered process (Inspection → Mitigation → Restoration).
- Stat counters (homes restored, years experience, etc.).
- Service cards linking to each service page.
- Contact form + click-to-call repeated down the page.
- **Mobile-first** — most emergency searches happen on a phone.

---

## 6. Guiding principles (how to actually finish)

1. **Deploy an empty site to Vercel on Day 1.** Get the scary "does it go live?" step out of the way early. After that, every change auto-deploys.
2. **MVP first, polish later.** Get an ugly-but-working version of every page up, *then* refine. Don't perfect the home page before the others exist.
3. **Always shippable.** At any point, the site should be in a state you could show the client.
4. **One thing at a time.** One page, one component, one concept per work session.
5. **Small daily wins beat big planning sessions.** Momentum > perfect plans.

---

## 7. Realistic timeline

You're new to React, so I'm being honest: **~3 weeks part-time is realistic** (aggressive but doable in ~2 if you push; could stretch to a month if the learning curve is steep — that's fine). Phased so there's always something working.

| Phase | What | Est. | Learning milestone |
|---|---|---|---|
| **0. Setup & fundamentals** | Install Node, scaffold Next app, run it locally, **deploy empty site to Vercel**, learn components/props/JSX | 2–4 days | React basics + first deploy |
| **1. Content & assets** | Get logo/photos from client, write/adapt copy, quick wireframe, pick colors/fonts *(do in parallel)* | 1–2 days | — |
| **2. Layout & shared UI** | Tailwind setup, header + phone bar, footer, base layout | 2–3 days | Reusable components |
| **3. Home page** | Hero, badges, services overview, process, stats, form UI | 2–3 days | Composing a full page |
| **4. Inner pages** | About, Services overview, **per-service pages (dynamic routes)**, Contact | 2–3 days | Dynamic routes |
| **5. Contact form works** | API route + email service, validation | 1–2 days | Backend / form handling |
| **6. SEO & migration** | Per-page titles/meta, sitemap.xml, robots, **301 redirects**, LocalBusiness schema | 1–2 days | Technical SEO |
| **7. Polish → launch** | Lighthouse, accessibility, mobile testing, client content review, **connect domain / DNS cutover**, README | 2–3 days | Testing + go-live |

---

## 8. Definition of done (resume-quality bar)

- [ ] Live on the client's real domain, HTTPS.
- [ ] Fully responsive; looks great on a phone first.
- [ ] Lighthouse: 90+ on Performance, SEO, Accessibility, Best Practices.
- [ ] All old URLs 301-redirect to new ones; rankings monitored after launch.
- [ ] Working contact form that actually emails the client.
- [ ] Clean GitHub repo with a real README (screenshots, stack, what you built and why).
- [ ] Client trained on / linked to anything they need to update.

---

## 9. Multi-chat workflow (which topic → which chat)

Keep this chat for strategy. Spin up focused chats for:

- **Env setup chat** — Node install, `create-next-app`, project structure tour, first Vercel deploy.
- **React/Next basics chat** — components, props, JSX, App Router routing.
- **Layout chat** — header/phone bar + footer with Tailwind.
- **Home page chat** — section by section.
- **Dynamic routes chat** — the per-service page template.
- **Contact form chat** — API route + email service.
- **SEO/migration chat** — meta, sitemap, 301s, schema.
- **Launch chat** — domain/DNS cutover, Lighthouse, README.

Bring this doc into each so the specific chat has the full context.

---

## 10. Open decisions (resolve as we go)

- [ ] **Domain/DNS access** — is the domain registered through Hostinger? You'll need DNS access to point it at Vercel. Confirm with client.
- [ ] **Contact form email service** — Resend (more resume value, an API route) vs Formspree (simplest). Decide in the form chat.
- [ ] **Client Portal** — confirm it's a third-party login you just link to (assumed yes).
- [ ] **Content** — who writes final copy, you or the client? Get their logo + real project photos (before/afters are gold).
- [ ] **TypeScript** — add later or skip? Decide after you're comfortable in JS.

---

*Living document — update as decisions get made.*