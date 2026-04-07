# Alliance 24hr Locksmith — SEO To-Do List

Last updated: 2026-04-06

---

## Immediate (do this week)

- [ ] **Submit sitemap to Google Search Console**
  - Go to search.google.com/search-console
  - Add property: alliance24hourlocksmith.com
  - Submit: https://alliance24hourlocksmith.com/sitemap.xml
  - Manually request indexing for all 25 location pages via URL Inspection

- [ ] **Run Google PageSpeed Insights**
  - Test mobile AND desktop at pagespeed.web.dev
  - Paste results back into Claude — we'll fix everything flagged

- [ ] **Verify schema with Google's Rich Results Test**
  - Test a few location pages at search.google.com/test/rich-results
  - Confirm FAQPage and BreadcrumbList are reading correctly

- [ ] **Set up Google Analytics (GA4)**
  - Add GA4 tracking snippet to all pages
  - Set up a "Call Click" event on tel: links (already have data-cta attributes on CTAs)

---

## Content — High Priority

- [ ] **Expand the 13 service pages** — all are currently 120–310 words (well below 500)
  - car-lockout, house-lockout, emergency-locksmith (core pages — expand first)
  - car-key-replacement, lock-rekey, key-duplication, key-fob, rfid-fob
  - commercial, access-control, high-security-locks, smart-lock-installation, master-key-system
  - Each needs: detailed process explanation, who it's for, FAQs, FAQ schema, internal links

- [ ] **Expand car-keys-vs-dealership** — 176 words, should be 800+ (informational pillar)

- [ ] **Expand price-list page** — 246 words, competitors have detailed pricing content
  - Keep pricing ranges vague (per current strategy) but add more context and FAQs

- [ ] **Add NYC neighborhood pages** (from SEO_TIER1_MARKETS.md)
  - Upper East Side, Upper West Side, Tribeca, SoHo, West Village, Battery Park City
  - Midtown East, Financial District
  - Brooklyn Heights, DUMBO, Williamsburg, Park Slope
  - Forest Hills, Long Island City, Riverdale
  - These are mapped out in SEO_TIER1_MARKETS.md — just need to be built

---

## Technical — High Priority

- [ ] **Add NAP (physical address) to homepage schema and contact page**
  - The business needs a consistent street address in structured data for Google Maps trust
  - Add to the Locksmith schema on homepage and all city pages

- [ ] **Add Open Graph image** to all pages
  - Currently og:image is missing — social shares show no image
  - Create a 1200x630 branded image and add og:image meta tag sitewide

- [ ] **Fix homepage hero image** — currently loading from Unsplash URL
  - Download, convert to WebP, host locally
  - Reduces external dependency and improves load time

- [ ] **Add Google Business Profile link** to the contact page and footer
  - Consistency between GBP and site NAP is a local ranking signal

---

## Technical — Medium Priority

- [ ] **Set up Vercel Analytics or GA4 tel: click tracking**
  - Confirm call click events are firing correctly
  - Set up conversion goals for each page

- [ ] **Add hreflang tags** for pages targeting NJ and CT audiences (optional)

- [ ] **Build a /blog/ section** for informational content
  - "How to not get locked out" type posts that link back to service pages
  - Target long-tail informational keywords competitors aren't covering

- [ ] **Add mobile-locksmith-faq to a proper /mobile-locksmith-faq/ directory**
  - Currently mobile-locksmith-faq.html at root — Vercel serves it but URL structure is inconsistent
  - Move to /mobile-locksmith-faq/index.html for clean URL parity

---

## Ongoing / Monthly

- [ ] **Track rankings monthly** for all 25 Tier 1 markets
  - Target keywords: "emergency locksmith [city]", "24 hour locksmith [city]", "[city] locksmith"
  - Use Google Search Console or a rank tracker

- [ ] **Check Google Search Console for crawl errors** after each deployment

- [ ] **Resubmit sitemap** after adding new pages (NYC neighborhoods, blog posts, etc.)

- [ ] **Run PageSpeed Insights again** after any significant content or image changes

---

## Completed ✓

- [x] robots.txt created
- [x] sitemap.xml created (41 pages, correct priority values)
- [x] llm.txt created for AI discoverability
- [x] All 25 location pages expanded to 500–750 words with unique content
- [x] FAQPage JSON-LD schema added to all 25 location pages (4–5 Q&As each)
- [x] BreadcrumbList schema added to all 25 location pages
- [x] Location page schema upgraded: LocalBusiness → Locksmith with geo coordinates
- [x] Internal linking fixed: homepage and all inner pages link to all 25 locations
- [x] Full location footer added to all 41 pages
- [x] Robotic keyword-dump paragraphs removed from 10 location pages
- [x] Non-breaking hyphens in visible text fixed (Same day, After hours, No damage)
- [x] mobile-locksmith-faq.html canonical trailing slash fixed
- [x] Deployed to Vercel via GitHub push
