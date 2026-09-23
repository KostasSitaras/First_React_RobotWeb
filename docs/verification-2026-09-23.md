# Portfolio verification — 23 September 2026

## Saved changes

- Contact submits to Web3Forms, preserves failed messages, validates fields, and prevents duplicate submissions while sending. The configured public access key is kept in `src/config/contact.js`.
- Analytics code is separated from its UI. Storage failures no longer break rendering; only explicit consent loads Google Analytics. Withdrawal disables measurement and expires accessible analytics cookies across applicable domains and paths. Choices synchronize between tabs.
- Preferences display the current choice and can close without changing it. Keyboard focus returns to the footer control.
- Scroll/reveal behavior is extracted from App. Tall sections reveal on short screens, and navigation scrolls directly to the new page. The skip link focuses main content without changing the hash route.
- FAQ controls have at least 44px height, a stable toggle icon, and updated contact instructions.
- Removed four unused direct dependencies (AOS, Boxicons, React Icons, Typewriter Effect), removing 35 installed packages. Removed a redundant CSS declaration without changing the effective style.
- Added a test command and lint/test gates to the existing CI workflows.

## Automated checks

- `npm run lint`: passed.
- `npm test`: 14 passed (contact responses, storage restrictions, analytics lifecycle and cookie cleanup, chapter scrolling).
- `npm run build`: passed.
- Form API requests in tests are mocked. No test email was sent.

## Browser checks

Tested the production build with the Codex Chromium browser at these viewport sizes:

| Width × height | Pages checked | Result |
| --- | --- | --- |
| 320 × 568 | Home, About, Projects, Contact, FAQ, Privacy, Terms, missing route | No horizontal document overflow |
| 390 × 844 | All seven main routes | No horizontal document overflow |
| 768 × 1024 | All seven main routes | No horizontal document overflow |
| 1440 × 900 | All seven main routes | No horizontal document overflow |
| 568 × 320 | All seven main routes | No horizontal document overflow |

Additional checks:

- All five FAQ answers opened at 320px; Enter closed the selected answer. Summary controls measured 48px high.
- Mobile landscape navigation stayed within the viewport and scrolled to remaining items. Selecting Contact closed the menu.
- Empty contact submission displayed all three field errors and focused Name without opening an app or sending a request. Mobile email input computed to 16px.
- Skip-to-content preserved the Contact route and focused `main-content`.
- First-visit analytics notice fit at 320px. No Google script was present before acceptance.
- Acceptance inserted one analytics script; preferences showed the enabled choice. Rejection followed by reload showed no banner, no Google script and no repeated splash.
- Accepting in one tab and rejecting in a second updated both tabs' displayed choices.
- No console errors or warnings were captured during the initial eight-route mobile pass.

## Performance and limits

The production build reports an initial JavaScript bundle of 266.77 kB (84.51 kB gzip)
and CSS of 36.82 kB (8.42 kB gzip): approximately 93 kB combined gzip. This is a build
size estimate, not a measured network transfer. Route chunks remain lazy-loaded.
The splash intentionally retains its 1.7-second minimum plus 0.6-second exit, with
a reduced-motion alternative and a maximum resource wait.

These are Chromium viewport checks, not real iPhone/Android hardware tests or
Lighthouse/Core Web Vitals measurements. Live email delivery requires an inbox check.

Google Analytics sends route pageviews manually. The account's Enhanced Measurement
setting for “Page changes based on browser history events” must be disabled to avoid
duplicate pageviews. The account setting and live Analytics reports were not accessed.
Reference: [Google pageview documentation](https://developers.google.com/analytics/devguides/collection/ga4/views).

Changes are saved locally; publication requires a separate deployment.
