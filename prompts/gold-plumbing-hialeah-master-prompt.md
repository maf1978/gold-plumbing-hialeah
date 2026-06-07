# Gold Plumbing Hialeah — Master Website Build Prompt

Copy everything between `=== PROMPT ===` and `=== END PROMPT ===` into Lovable, v0, Bolt, Base44, or Cursor.

---

=== PROMPT ===

# ROLE

You are a senior frontend developer and local SEO specialist. Build a complete, production-ready, conversion-optimized website for a plumbing company. The site must rank in local Google search under 2026 SEO standards and convert visitors into free-quote leads.

# BUSINESS CONTEXT

- **Business name:** Gold Plumbing Hialeah
- **Industry:** Plumbing (home services)
- **Owner:** [CLIENT TO PROVIDE]
- **Phone:** (305) 488-6833
- **Email:** [CLIENT TO PROVIDE]
- **Primary market:** Hialeah, FL
- **Service areas:** Hialeah, Hialeah Gardens, Miami Lakes, Miami Gardens, Doral
- **Audience:** Residential & Commercial. Bilingual EN/ES — native Spanish, not word-for-word translation.
- **Brand personality:** Bold, confident, local, trustworthy, premium-local
- **Primary conversion goal:** Free quote form submissions + phone calls.
- **Existing presence:** [CLIENT TO PROVIDE — Facebook / GBP / website URLs]

# DESIGN DIRECTION

- **Aesthetic:** Clean, premium-local, bold & confident. Strong/dependable plumbing vibe — not generic corporate.
- **Color palette:** Deep blue `#10243F` (hero background), bright blue `#2E9BE0` (buttons, highlights, city name in H1), gold `#D4A017` (logo accents), white background, dark text `#1A1A2E`. Use accent blue confidently on all CTAs.
- **Typography:** Archivo or Sora for headings (bold geometric, all-caps H1s), Inter for body. Large confident headlines.
- **Imagery:** Friendly uniformed plumber next to branded service van on residential Florida street. High-quality hero with keyword-rich alt text: "Licensed Gold Plumbing Hialeah plumber standing next to branded service van in Hialeah Florida."
- **Feel:** Mobile-first. Fast-loading. Generous whitespace. Large tap-friendly CTAs. Sticky "Book a Plumber" button on mobile.
- **Hero layout (match mockup):** Split-screen — deep blue left panel with headline/subhead/trust badges/CTA; right panel plumber+van photo fading into blue.
- **Service icon bar:** White strip directly below hero with 6 service icons and bilingual EN/ES labels.
- **Avoid:** Generic purple gradients, stock handshakes, "Welcome to [Business]" H1, clutter, tiny text.

# SITE STRUCTURE (SITEMAP)

1. Home (`/`)
2. Services hub (`/services`)
3. Individual service pages:
   - `/services/drain-cleaning`
   - `/services/water-heaters`
   - `/services/leak-repair`
   - `/services/repiping`
   - `/services/fixtures`
   - `/services/emergency-plumbing`
4. Service Areas hub (`/service-areas`) + one page per city:
   - `/plumbing-hialeah-fl`
   - `/plumbing-hialeah-gardens-fl`
   - `/plumbing-miami-lakes-fl`
   - `/plumbing-miami-gardens-fl`
   - `/plumbing-doral-fl`
5. About (`/about`)
6. Free Quote (`/free-quote`)
7. Contact (`/contact`)
8. Reviews (`/reviews`)
9. Spanish mirror at `/es/` — Home, `/es/servicios`, `/es/servicios/[slug]`, `/es/cotizacion-gratis`, `/es/about`, `/es/contact`

# SERVICE STRUCTURE (CRITICAL — build in detail)

Create a reusable Service Page template. Each service page includes:

1. Hero — H1 `[Service] in Hialeah, FL & Surrounding Areas`, benefit subheadline, "Book a Plumber" CTA + click-to-call.
2. Service intro — 80-120 word paragraph answering what the service is (optimized for Google AI Overviews / featured snippets).
3. What's included — bulleted coverage list.
4. Signs you need this service — 4-6 high-intent bullets.
5. Our process — 4 numbered trust-building steps.
6. Why choose Gold Plumbing Hialeah — local, reliable, upfront pricing, bilingual, 24/7.
7. Service-specific FAQ — 3-4 question-format H3s (FAQ schema).
8. CTA section — free quote form.

---

## SERVICE 1: Drain Cleaning
**Target keyword:** drain cleaning hialeah
**Slug:** `/services/drain-cleaning`

**What it is:** Drain cleaning removes blockages from sinks, tubs, showers, and main sewer lines so water flows freely again. Gold Plumbing Hialeah uses professional snaking, hydro-jetting, and camera inspection to clear clogs at the source — not just push the problem deeper. We serve homes, condos, and commercial kitchens across Hialeah and Miami-Dade.

**What's included:**
- Kitchen, bathroom, and utility sink clogs
- Shower and tub drain clearing
- Main line and sewer cleanout access
- Hydro-jetting for grease and root buildup
- Camera inspection to locate the blockage
- Upfront pricing before work begins

**Signs you need it:** Slow drains, multiple fixtures backing up, gurgling sounds, recurring clogs, foul odors from drains.

**FAQs:**
- How much does drain cleaning cost in Hialeah? — Depends on clog location/severity; upfront pricing after diagnosis.
- Do you offer same-day drain cleaning? — Yes, throughout all service areas; emergencies prioritized 24/7.
- Can hydro-jetting damage my pipes? — Safe on sound pipes; camera-inspect first.
- Why does my drain keep clogging? — Usually grease, deep blockages, or tree roots; camera finds root cause.

---

## SERVICE 2: Water Heaters
**Target keyword:** water heaters hialeah
**Slug:** `/services/water-heaters`

**What it is:** Water heater service covers tank and tankless units — from pilot light issues and thermostat failures to full replacement. Gold Plumbing Hialeah installs energy-efficient models sized for your home or business, handles permitting, and hauls away the old unit. Gas and electric systems throughout Miami-Dade.

**What's included:**
- Tank and tankless water heater repair
- New installation and replacement
- Gas and electric unit service
- Expansion tank and code-compliant upgrades
- Sediment flush and maintenance
- Old unit removal and disposal

**Signs you need it:** No hot water, rusty water, rumbling tank, water pooling under heater, unit over 10-12 years old.

**FAQs:**
- How much does water heater replacement cost in Hialeah? — Depends on size, fuel type, venting; exact quote before commit.
- Tank or tankless — which is better in Florida? — Tank costs less upfront; tankless saves space/energy long-term.
- How long does installation take? — Most tank replacements 2-4 hours; tankless may take a full day.
- Do you pull permits? — Yes, Florida code requires permits for most replacements.

---

## SERVICE 3: Leak Repair
**Target keyword:** leak repair hialeah
**Slug:** `/services/leak-repair`

**What it is:** Leak repair finds hidden and visible water leaks in walls, slabs, supply lines, and fixtures before they cause mold, structural damage, or high water bills. Electronic leak detection, pressure testing, and targeted repairs fix the source — not just the symptom.

**What's included:**
- Slab and underground leak detection
- Supply line and valve repair
- Fixture and faucet leak fixes
- Pipe section replacement where needed
- Damage assessment and dry-out recommendations
- Emergency shutoff guidance

**Signs you need it:** Rising water bill, water stains, running water sound when fixtures off, warm/damp floor spots, low pressure in one area.

**FAQs:**
- How do you find a leak without tearing up my house? — Acoustic detection, thermal imaging, pressure testing first.
- How much does leak repair cost? — Simple fixture leaks less than slab/underground; quoted after detection.
- Is a slab leak an emergency? — Yes; shut off main water and call immediately.
- Will insurance cover leak repair? — Policies vary; we document findings for claims.

---

## SERVICE 4: Repiping
**Target keyword:** repiping hialeah
**Slug:** `/services/repiping`

**What it is:** Repiping replaces corroded galvanized, polybutylene, or failing copper lines with modern PEX or copper supply systems. Plans minimize downtime, handles permits, brings older Miami-Dade properties up to current code — especially pre-1980s Hialeah homes.

**What's included:**
- Whole-house and partial repiping
- PEX and copper installation
- Galvanized and polybutylene replacement
- Permitting and code compliance
- Drywall patch coordination referrals
- System pressure test and flush

**Signs you need it:** Frequent leaks in different areas, discolored water, low pressure throughout, visible corrosion, pre-1980 galvanized plumbing.

**FAQs:**
- How much does repiping cost in Hialeah? — Whole-house several thousand to low five figures; fixed quote after assessment.
- PEX or copper? — PEX flexible and corrosion-resistant; copper lasts decades, preferred some commercial.
- How long does repiping take? — Most single-family 2-5 days.
- Do I need to leave my home? — Usually not; water restored each evening.

---

## SERVICE 5: Fixtures
**Target keyword:** fixtures hialeah
**Slug:** `/services/fixtures`

**What it is:** Fixture installation and repair covers faucets, toilets, sinks, garbage disposals, and shower valves. Handles customer-supplied fixtures or recommends reliable brands, ensures proper sealing and code-compliant connections.

**What's included:**
- Faucet repair and replacement
- Toilet repair, rebuild, and installation
- Sink and vanity hookup
- Garbage disposal install and repair
- Shower and tub valve replacement
- Supply line and shutoff valve upgrades

**Signs you need it:** Dripping faucet, running toilet, low flow after DIY install, rust on supply lines, remodel needs professional hookup.

**FAQs:**
- Can you install a fixture I bought? — Yes; we flag incompatible connections before starting.
- How much does toilet installation cost? — Flat rate standard install; complex flange repairs quoted upfront.
- Repair or replace dripping faucet? — Repair if cartridge available; replace if corroded/older.
- Commercial fixture installs? — Yes, restaurants, offices, retail in service area.

---

## SERVICE 6: Emergency Plumbing
**Target keyword:** emergency plumber hialeah
**Slug:** `/services/emergency-plumbing`

**What it is:** Emergency plumbing covers burst pipes, sewer backups, overflowing toilets, and active water damage threats. Licensed plumbers dispatched 24/7 across Hialeah, Miami Lakes, Miami Gardens, Doral, and Hialeah Gardens — upfront pricing even on after-hours calls.

**What's included:**
- 24/7 dispatch across Miami-Dade
- Burst pipe isolation and repair
- Sewer backup clearing and diagnosis
- Overflowing toilet and drain emergencies
- Water shutoff and damage containment
- After-hours upfront pricing

**Signs you need it:** Active flooding, sewage backup, no shutoff and water flowing, gas smell near water heater, ceiling bulging from water.

**FAQs:**
- How fast can an emergency plumber arrive? — Active flooding prioritized; ETA given on call.
- Is emergency plumbing more expensive? — After-hours rates may apply; disclosed before work begins.
- What should I do before the plumber arrives? — Shut off main water if safe; evacuate if gas smell.
- Commercial emergencies? — Yes, restaurants/offices get priority dispatch.

# FREE QUOTE FORM (PRIMARY CONVERSION)

Build a prominent, low-friction form. Appear on: `/free-quote` (full), Home hero (short on desktop, compact strip on mobile), bottom CTA on every service page, sticky mobile bar.

**Fields:**
1. Full Name (required)
2. Phone Number (required)
3. Email (optional)
4. Service Needed (dropdown — all 6 services)
5. Property Type (radio: Residential / Commercial)
6. Service Address or Zip Code (required)
7. Brief description (optional textarea)
8. Submit button: **"Book a Plumber"**

**Behavior:**
- Inline validation, numeric keypad for phone on mobile
- Success: "Thanks! We'll call you within 1 business hour."
- Spanish success: "¡Gracias! Le llamaremos dentro de 1 hora hábil."
- Trust microcopy: "No obligation. Free estimate. We respond fast."
- POST to `QUOTE_ENDPOINT` constant (placeholder for GHL webhook)
- Hidden field `lead_source` capturing page/service submitted from

```javascript
const QUOTE_ENDPOINT = "QUOTE_ENDPOINT_PLACEHOLDER"; // Wire to GHL inbound webhook
```

# HOMEPAGE STRUCTURE

1. **Sticky header** — GP logo (gold wrench mark), nav (Home, About, Services, How It Works, Reviews, Contact), click-to-call (305) 488-6833, "BOOK NOW" button (accent blue pill), EN/ES toggle.
2. **Hero** — H1 two-line all-caps: "FAST, RELIABLE PLUMBING" / "SERVICES IN **HIALEAH**" (city in accent blue). Subhead EN: "We fix it right the first time." Subhead ES: "Lo reparamos bien la primera vez." Trust badges: 24/7 Service · Upfront Pricing · Licensed & Insured. CTA: "Book a Plumber / Reserve un Plomero". Hero image: plumber + branded van.
3. **Service icon bar** — 6 icons with bilingual labels (Drain Cleaning / Limpieza de Drenajes, etc.)
4. **Pain section** — Lead with the problem: plumbing emergencies don't wait.
5. **Services grid** — 6 cards with icon, name, 1-line hook, "Learn More"
6. **Why choose us** — 4 blocks: Local & Reliable, Upfront Pricing, Fast Response, Bilingual Service
7. **Service area list** — 5 cities linking to area pages
8. **Reviews** — 3 testimonial cards [CLIENT TO PROVIDE]
9. **Process** — 4 steps: Request quote → We assess → We get to work → Enjoy peace of mind
10. **Big CTA** — phone + full quote form
11. **Footer** — NAP, service links, area links, license #, social, Spanish toggle
12. **Sticky mobile bar** — "Call Now" + "Book a Plumber"

# SERVICE AREA PAGES

Each `/plumbing-[city]-fl` page:

**Hialeah** (`/plumbing-hialeah-fl`): H1 "Plumber in Hialeah, FL". Local intro covering zip codes 33010-33016, cast iron drains, galvanized lines, condo/high-rise experience. Link to all 6 services. FAQs: neighborhoods served, response time, Spanish service. Nearby: Hialeah Gardens, Miami Lakes, Miami Gardens.

**Hialeah Gardens** (`/plumbing-hialeah-gardens-fl`): Okeechobee corridor commercial + residential. Zips 33016, 33018.

**Miami Lakes** (`/plumbing-miami-lakes-fl`): Planned community homes, Main Street area, HOA coordination. Zips 33014, 33016.

**Miami Gardens** (`/plumbing-miami-gardens-fl`): Older homes + newer construction, 24/7 emergency. Zips 33054-33056.

**Doral** (`/plumbing-doral-fl`): Luxury condos, commercial corridor, grease traps, high-rises. Zips 33122, 33166, 33178.

Each page: local trust paragraph, services list with internal links, 2-3 city FAQs, free quote CTA, nearby area cross-links.

# 2026 SEO REQUIREMENTS

**Technical:** Semantic HTML5; one H1 per page with primary keyword; logical H2/H3; clean slugs; lazy-loaded WebP images with descriptive alt text; mobile-first responsive; Core Web Vitals friendly.

**Meta (every page):** Unique title <60 chars `[Keyword] | Gold Plumbing Hialeah | Hialeah FL`; unique meta description <155 chars with benefit + CTA; Open Graph + Twitter cards; canonical URLs.

**Structured data (JSON-LD):**
- `Plumber` LocalBusiness on home
- `Service` on each service page
- `FAQPage` wherever FAQs appear
- `BreadcrumbList` on inner pages

**Keyword targets:**
- Primary: `plumber hialeah fl`, `plumbing hialeah`, `plumber near me`
- Per-service: `drain cleaning hialeah`, `water heaters hialeah`, `leak repair hialeah`, `repiping hialeah`, `fixtures hialeah`, `emergency plumber hialeah`
- AI Overview: "how much does [service] cost in hialeah", "best plumber near me"

```json
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Gold Plumbing Hialeah",
  "image": "https://goldplumbinghialeah.com/images/hero-plumber.png",
  "telephone": "+1-305-488-6833",
  "email": "[CLIENT TO PROVIDE]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[CLIENT TO PROVIDE]",
    "addressLocality": "Hialeah",
    "addressRegion": "FL",
    "postalCode": "[CLIENT TO PROVIDE]",
    "addressCountry": "US"
  },
  "areaServed": ["Hialeah", "Hialeah Gardens", "Miami Lakes", "Miami Gardens", "Doral"],
  "priceRange": "$$",
  "openingHours": "Mo-Su 00:00-23:59",
  "sameAs": ["[CLIENT TO PROVIDE — social URLs]"]
}
```

# CONVERSION OPTIMIZATION

- Click-to-call (305) 488-6833 in header, hero, footer
- "Book a Plumber" CTA repeated: hero, after services, after process, footer, sticky mobile bar
- Trust signals near every CTA: Licensed & Insured, Upfront Pricing, 24/7
- Fast-response promise: callback within 1 business hour
- Lead with the problem in all customer-facing copy, never the feature

# BILINGUAL (EN/ES)

- Language toggle EN/ES in header
- Spanish mirror: Home (`/es/`), Services (`/es/servicios`), all 6 service pages, Free Quote (`/es/cotizacion-gratis`), About, Contact
- Native Spanish copy — not word-for-word translation
- Bilingual form labels and success messages
- Service icon bar shows both languages

# TECHNICAL OUTPUT

Build with React + Tailwind (or Astro + Tailwind for production). Component-based: ServiceCard, QuoteForm, CTASection, Testimonial, AreaCard, Header, Footer, MobileCTABar, ServiceIconBar, Hero. Functional forms with QUOTE_ENDPOINT placeholder. Accessible (ARIA, keyboard nav, contrast). Production-ready — no Lorem Ipsum.

# DELIVERABLE

A complete, multi-page, SEO-optimized, mobile-first plumbing website with deep service structure, 5 city landing pages, bilingual EN/ES support, and a high-converting "Book a Plumber" quote form as the primary conversion mechanism — ready to deploy.

=== END PROMPT ===

---

## Implementation Notes

### Why this structure ranks

Individual service pages target `[service] + hialeah` keyword clusters — never collapse into one generic services page. Service-area pages (`/plumbing-[city]-fl`) are the strongest local SEO lever for multi-city plumbers. Internal linking (home → services → service pages → area pages → nearby areas) builds topical authority. FAQ sections with question-format H3s feed Google AI Overviews and featured snippets.

### GHL webhook wiring

1. Create inbound webhook in GoHighLevel (Settings → Integrations → Webhooks)
2. Set `QUOTE_ENDPOINT` / `PUBLIC_QUOTE_ENDPOINT` to the webhook URL
3. Form POSTs JSON: `full_name`, `phone`, `email`, `service`, `property_type`, `address_zip`, `message`, `lead_source`
4. GHL workflow: webhook received → Conversation AI auto-SMS/call → create/update pipeline opportunity
5. The website is the entry point to the automation stack — not a standalone brochure

### Recommended builders

| Use case | Platform |
|----------|----------|
| Production deploy (built) | **Astro + Tailwind** — see repo at `Gold Plumbing Hialeah/` |
| Rapid UI iteration | Lovable, v0, Bolt |
| Agency handoff | This master prompt → any builder |

### Pre-launch checklist

- [ ] Paste GHL webhook URL as `PUBLIC_QUOTE_ENDPOINT`
- [ ] Owner name, email, street address, FL license # in `src/data/site.ts`
- [ ] Replace GP logo placeholder with final asset
- [ ] Add real Google reviews (remove `[CLIENT TO PROVIDE]` placeholders)
- [ ] Deploy to Netlify + connect domain
- [ ] Submit sitemap to Google Search Console
