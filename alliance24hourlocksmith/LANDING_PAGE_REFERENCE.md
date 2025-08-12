### Alliance 24hr Locksmith — Emergency Landing Page Reference

- **Company**: Alliance 24hr Locksmith
- **Phone**: (914) 406-4474
- **Website**: `https://alliance24hourlocksmith.com`
- **Service**: Emergency lockout dispatch — Westchester County, NY

### Goals
- **Primary SEO goal**: Rank #1 for “emergency locksmith Westchester County”
- **UX goals**: Mobile-first, load under 3 seconds, prominent click-to-call
- **Conversion**: Drive phone calls via multiple `tel:` CTAs

### Page Overview
- **File**: `alliance24hourlocksmith/index.html`
- **Type**: Single static HTML file
- **Design**: Professional blue/white, large typography, urgency-focused
- **Performance**: No frameworks, inline CSS, minimal JS, fast render on Vercel

### Content Structure
- **Topbar**: Brand + prominent call button `(914) 406-4474)`
- **Hero**: 24/7 emergency message, phone CTA, key trust badge (Licensed • Insured • 24/7)
- **Services**: Car Lockouts, Home Lockouts, Business Lockouts (each with call CTA)
- **Coverage Areas**: White Plains, Purchase, Rye, Scarsdale, New Rochelle, Yonkers (Westchester County)
- **Trust Signals**: Licensed & Insured, 24/7 Dispatch, Upfront Pricing
- **CTA Banner**: Reinforces urgency + phone CTA
- **Footer**: NAP (Name, Area, Phone), copyright
- **Mobile Sticky Call Bar**: Fixed bottom `Call Now (914) 406-4474)`

### Key Copy (editable)
- **Hero H1**: “Emergency Locksmith in Westchester County — Fast 24/7 Lockout Dispatch”
- **Subhead**: “Locked out of your car, home, or business? … Average dispatch under 30 minutes.”
- **Services Descriptions**:
  - Car: “Locked keys in your car or trunk? Fast, non-destructive entry for most makes and models.”
  - Home: “Gain entry to your house or apartment quickly with licensed and insured technicians.”
  - Business: “Minimize downtime. We handle storefronts, offices, and commercial doors.”
- **Coverage tagline**: “Serving All of Westchester County”

### SEO Implementation
- **Title**: “Emergency Locksmith Westchester County | 24/7 Dispatch | Alliance 24hr Locksmith”
- **Meta description**: “Alliance 24hr Locksmith provides fast, 24/7 emergency lockout dispatch across Westchester County, NY. Car, home, and business lockouts. Call (914) 406-4474.”
- **Canonical**: `https://alliance24hourlocksmith.com/`
- **Open Graph/Twitter Cards**: Title + description + site_name + locale
- **Local keywords**: “emergency locksmith Westchester County”, “car/home/business lockout Westchester”

### Local SEO Schema (JSON-LD)
- **Types**: `Locksmith` (LocalBusiness) and `Service`
- **Coverage**: Cities listed as `areaServed` + `Westchester County`
- **Hours**: 24/7 via `OpeningHoursSpecification`
- **Phone**: `+1-914-406-4474`

Minimal example (already embedded in `index.html`):
```json
{
  "@context": "https://schema.org",
  "@type": "Locksmith",
  "@id": "https://alliance24hourlocksmith.com/#locksmith",
  "name": "Alliance 24hr Locksmith",
  "url": "https://alliance24hourlocksmith.com/",
  "telephone": "+1-914-406-4474",
  "areaServed": [
    {"@type":"City","name":"White Plains"},
    {"@type":"City","name":"Purchase"},
    {"@type":"City","name":"Rye"},
    {"@type":"City","name":"Scarsdale"},
    {"@type":"City","name":"New Rochelle"},
    {"@type":"City","name":"Yonkers"},
    {"@type":"AdministrativeArea","name":"Westchester County"}
  ]
}
```

### Analytics (GA4)
- **Location**: In `<head>` of `index.html`
- **Action needed**: Replace `G-XXXXXXXXXX` with your Measurement ID
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);} // GA4 shim
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); // TODO: Replace with GA4 Measurement ID
</script>
```
- **Event tracking**: All `tel:` links fire a GA4 `click` event with `event_label` = `data-cta` value

### Accessibility & Mobile
- **Mobile-first** with responsive grid
- **Sticky call button** visible on small screens
- **High-contrast buttons** and large tap targets
- **ARIA labels** on key CTAs and icons

### Performance Notes
- No external CSS/JS frameworks
- Inline critical CSS (single request)
- Minimal SVG icons inline (no render-blocking requests)
- Avoid large images; none required for MVP

### Deployment (Vercel)
- **Structure**: Single static file `alliance24hourlocksmith/index.html`
- **Vercel UI**:
  - Create new project → Import repo → Set project root to `alliance24hourlocksmith/`
  - Framework Preset: “Other” (static)
  - Build command: none
  - Output directory: `.`
- **Vercel CLI** (optional):
```bash
# From repo root
npm i -g vercel
vercel --cwd alliance24hourlocksmith --prod
```
- **Custom Domain**: Add `alliance24hourlocksmith.com` → update DNS to Vercel → set as primary

### Edit Points Checklist
- **Phone number**: Update everywhere if it changes (`tel:+19144064474` and visible text)
- **GA4 ID**: Replace `G-XXXXXXXXXX`
- **Cities**: Add/remove in the Coverage Areas list and JSON-LD `areaServed`
- **Copy**: H1/Subhead/Service blurbs for experimentation
- **Brand asset**: If you have a logo, replace the badge or add `<img>` in header

### QA Checklist
- Links: All `tel:` links dial `(914) 406-4474)`
- Mobile: Sticky call bar appears on phones; hidden on larger screens
- Performance: Lighthouse LCP under ~2.5s on 4G profiles
- SEO: Title/description present; canonical correct; schema valid (test with Rich Results)
- Analytics: GA4 receives events; verify `click` event on tel taps

### File Map
- `index.html` — Production landing page (all in one)
- `LANDING_PAGE_REFERENCE.md` — This reference document

### Change Log (start here)
- v1.0: Initial release — hero, services, coverage, trust, CTA banner, schema, GA4, mobile call bar 