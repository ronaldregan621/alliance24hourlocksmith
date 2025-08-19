# SEO Additions (Mobile Lockouts & Residential Emergency Focus)

## Goals
- Capture local-intent lockout traffic for priority Westchester cities
- Emphasize mobile response, residential emergencies, no-damage entry
- Add targeted service pages that support primary queries without diluting focus

## Local SEO Enhancements
- JSON-LD on each city page: LocalBusiness with `openingHours` (24/7), `areaServed` (city), and neighborhoods in copy
- Landmarks in copy to match “near me” intent (ex: Foodtown, Pelham Rd, downtown New Rochelle; Larchmont Village, Palmer Ave; Pelham Manor; Scarsdale Village; Fleetwood)
- Internal links from homepage and footer to all city/service pages
- Add concise local FAQs with FAQPage schema where useful (proof of ownership, response times, no-damage entry)

## New City Pages (emergency-led)
- /larchmont-locksmith/
- /pelham-locksmith/
- /scarsdale-locksmith/
- /mount-vernon-locksmith/

Each page includes: 24/7 headline, mobile CTA, service list (car/home lockouts prioritized), ETA note, neighborhoods/landmarks, LocalBusiness JSON-LD.

## New Service Pages (supporting)
- /key-duplication/ – basic key copying context; defer complex/key fobs to dedicated pages
- /key-fob/ – programming/replace fobs on-site; capture “replace key fob Westchester”
- /rfid-fob/ – access cards/fobs duplication (supporting commercial/residential buildings)
- /commercial/ – commercial emergency lockouts only (lightweight), point deeper needs to /access-control/
- /access-control/ – overview page for future expansion; keep copy concise

## Comparison Page (vehicle keys vs dealership)
- /car-keys-vs-dealership/
- Target: “replace key fob Westchester”, “transponder programming near me”, “dealer vs locksmith cost/time”
- Content outline: speed/onsite vs appointments/towing, supported vehicles, transparent quote, warranty notes

## On-page Copy Guidelines
- Keep residential/mobile emergency lockouts as the primary narrative
- Short paragraphs, prominent CTAs, sticky mobile call bar
- Avoid fixed pricing; emphasize quote before dispatch; after-hours premium exists

## Schema
- City pages: LocalBusiness JSON-LD with `openingHours`: Mo-Su 00:00-23:59, `areaServed` city
- Service pages: Service JSON-LD with `serviceType`, `areaServed`: Westchester County
- Add FAQPage JSON-LD where Q&A provided (optional lightweight)

## Internal Linking
- Homepage Services section: link to /car-lockout/, /house-lockout/, and new supporting pages
- Footer: add links to all city pages and key supporting services

## Next Steps
1) Build pages listed above (done)
2) Add footer links and select homepage links to new pages
3) Enable analytics (Vercel or GA4) for performance measurement
4) Add “Text Now” CTA sitewide if desired


