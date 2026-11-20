status: BUILDING B 2026-11-20 17:50
lane: A
type: site
id: 1052
slug: email-signup
kd: n/a
push: traffic-nov18
---
## Site: email signup in the footer + one polite prompt (Sam go 2026-11-18)
Spec: docs/backlog/traffic-and-trust-nov18.md item 4. $0 fal, outside the 6-a-day cap. After #1051.
Do:
1. Footer form (src/layouts/Base.astro, under the founder line): one email field + button. Submits to the Storefront API `customerCreate` with `acceptsMarketing: true` and a random password the shopper never sees (check the current Storefront API for the right email-consent input before writing it; if the public Storefront token cannot create customers, stop and write the blocker in the log and docs/inbox.md rather than inventing another backend).
2. One prompt per visitor: after 50% scroll or exit intent on desktop, small, easy to close, keyboard and screen-reader friendly, never on /cart or checkout, remembered in localStorage inside try/catch so it shows once. Mobile-safe (no full-screen takeover, no layout shift).
3. Copy: "New drops and holiday deals, about twice a month." No discount, no code, no "10% off" until Sam OKs a code (feedback rule: Sam OKs each discount; Claude creates it). Honest success and error messages; already-subscribed counts as success.
4. Lighthouse stays at 100 (R10.2): the prompt script is small, deferred and loads no third-party code.
Done when: astro build passes, a test signup with a +test address on a domain we own (not a real person's email) shows success, and the log says how it was tested. Set REVIEW with a log line. Claude checks the abandoned-checkout email automation in Shopify admin separately (not builder work).
---
## Log
- 2026-11-18 23:17 UTC director: brief written, READY (inbox 2026-11-18 traffic push item 4).
