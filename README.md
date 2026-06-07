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

Deploy to Netlify: connect repo, set `PUBLIC_QUOTE_ENDPOINT` in site environment variables, deploy.

## GHL Webhook Setup

1. In GoHighLevel: Settings → Integrations → Webhooks → Create inbound webhook
2. Copy the webhook URL
3. Set `PUBLIC_QUOTE_ENDPOINT` in `.env` (local) or Netlify env vars (production)
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
