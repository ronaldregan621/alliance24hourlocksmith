# Call baseline, Alliance 24 Hour Locksmith line, pulled 2026-09-26

Source: OpenPhone API, line (914) 406-4474 (id PNw57o3lVF), read only. Method: list conversations on the line updated in the window, then list calls per participant, de-duplicated by call id. Filter sanity check: a made up participant returned 0 calls. Times are America/New_York. Window: 2026-08-28 through 2026-09-26 (30 days). Aggregate counts only, no customer numbers.

## Totals

| Window | Calls | Inbound | Answered (answeredAt set) | Missed (no-answer) | Outbound |
|---|---|---|---|---|---|
| Last 30 days (Aug 28 to Sep 26) | 30 | 30 | 0 | 28 | 0 |
| Last 7 days (Sep 20 to Sep 26) | 7 | 7 | 0 | 5 | 0 |

Notes on the two calls that are not in either column: both on Sep 24 evening, status "completed", duration 0, answeredAt null. OpenPhone recorded them as ended, not as answered. Treat the practical answer count as 0 of 30 for the window.

Averages: 1.0 inbound call per day over 30 days, 1.0 per day over the last 7 days. Every call had callRoute "phone-number" and no forwarding. No outbound calls were placed from this line in the window.

## Calls per day (last 30 days)

| Date | Day | Calls |
|---|---|---|
| 2026-08-28 | Fri | 1 |
| 2026-08-29 | Sat | 0 |
| 2026-08-30 | Sun | 0 |
| 2026-08-31 | Mon | 3 |
| 2026-09-01 | Tue | 1 |
| 2026-09-02 | Wed | 2 |
| 2026-09-03 | Thu | 6 |
| 2026-09-04 | Fri | 1 |
| 2026-09-05 | Sat | 4 |
| 2026-09-06 | Sun | 0 |
| 2026-09-07 | Mon | 0 |
| 2026-09-08 | Tue | 0 |
| 2026-09-09 | Wed | 0 |
| 2026-09-10 | Thu | 1 |
| 2026-09-11 | Fri | 1 |
| 2026-09-12 | Sat | 1 |
| 2026-09-13 | Sun | 1 |
| 2026-09-14 | Mon | 0 |
| 2026-09-15 | Tue | 0 |
| 2026-09-16 | Wed | 1 |
| 2026-09-17 | Thu | 0 |
| 2026-09-18 | Fri | 0 |
| 2026-09-19 | Sat | 0 |
| 2026-09-20 | Sun | 1 |
| 2026-09-21 | Mon | 4 |
| 2026-09-22 | Tue | 0 |
| 2026-09-23 | Wed | 0 |
| 2026-09-24 | Thu | 2 |
| 2026-09-25 | Fri | 0 |
| 2026-09-26 | Sat | 0 |

## How to re-run for the week 4 comparison

Same method, same line id, shift the window. The calls endpoint needs `phoneNumberId` plus `participants[]`, so enumerate participants from `/v1/conversations?phoneNumbers[]=PNw57o3lVF&updatedAfter=...` first. Always send a User-Agent header (OpenPhone returns 403 without one). Compare inbound per day and the answered count; the site changes shipped 2026-09-26 (week 1) and 2026-09-27 (weeks 2 and 3).
