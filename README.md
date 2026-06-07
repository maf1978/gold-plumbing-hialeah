# Gold Plumbing Hialeah

Production Astro website for Gold Plumbing Hialeah — bilingual EN/ES, SEO-optimized, conversion-focused with GHL webhook quote forms.

## Quick Start

```bash
npm install
cp .env.example .env
# Add your GHL webhook URL to .env
npm run dev
```

Open http://localhost:4321

## Build & Deploy

```bash
npm run build
npm run preview
```

### Cloudflare Pages (production)

**One-time setup**

```bash
npx wrangler login
```

**Deploy from your machine**

```bash
npm run deploy
```

**Or connect GitHub (recommended)**

1. Cloudflare Dashboard → Workers & Pages → Create → Connect to Git
2. Select `gold-plumbing-hialeah` repo
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `22` (or use `.node-version`)
4. Environment variables → add `PUBLIC_QUOTE_ENDPOINT` with your GHL webhook URL
5. Save and deploy

Preview URL format: `https://gold-plumbing-hialeah.pages.dev`

## GHL Webhook Setup

1. In GoHighLevel: Settings → Integrations → Webhooks → Create inbound webhook
2. Copy the webhook URL
3. Set `PUBLIC_QUOTE_ENDPOINT` in `.env` (local) or Cloudflare Pages env vars (production)
4. Form POSTs JSON with: `full_name`, `phone`, `email`, `service`, `property_type`, `address_zip`, `message`, `lead_source`
5. Wire webhook to Conversation AI workflow and sales pipeline

## Before Launch — Replace [CLIENT TO PROVIDE]

- Owner name (`src/data/site.ts`)
- Email address
- Street address and ZIP (schema + footer)
- FL plumbing license number
- Google review count/rating
- Social media URLs (Facebook, GBP)
- Testimonial quotes on Reviews page
- Production domain in `siteConfig.siteUrl` and `astro.config.mjs`

## Site Structure

- **Tier:** Growth+ (6 service pages, 5 city pages, bilingual)
- **Pages:** Home, Services hub, 6 service pages, 5 area pages, About, Contact, Reviews, Free Quote
- **Spanish:** `/es/`, `/es/servicios`, `/es/servicios/[slug]`, `/es/cotizacion-gratis`

## Post-Launch SEO

1. Submit sitemap to Google Search Console
2. Verify LocalBusiness schema in Rich Results Test
3. Connect Google Business Profile
4. Add real review schema once reviews are available
