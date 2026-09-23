# Konstantinos Sitaras — Developer Portfolio

A responsive personal portfolio for presenting my background, technical skills and software projects.

## Live demo

[View the deployed portfolio](https://kostassitaras.github.io/First_React_RobotWeb/)

## About the project

This portfolio was created as a practical React project and is being developed incrementally. It includes dedicated pages for my professional introduction, technical skills, selected projects and contact information.

## Built with

- React
- Vite
- React Router
- Tailwind CSS
- CSS animations with reduced-motion support
- GitHub Pages

## Main features

- Responsive navigation for desktop and mobile
- Professional home and about pages
- Skills organised by technical area
- Project cards with technology stacks and links
- Web3Forms contact form, LinkedIn and GitHub links
- Downloadable CV

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Contact form (Web3Forms)

Create an access key for your receiving email address at [Web3Forms](https://web3forms.com/).
Paste it into `WEB3FORMS_ACCESS_KEY` in `src/config/contact.js`, then rebuild and deploy.
The access key is public and included in the frontend, as intended by Web3Forms.

The form submits directly without opening an email app or redirecting. It validates
fields, prevents duplicate submissions while sending, and keeps the message on failure.
An empty access key displays an unavailable message without sending a request.
After configuring the key, submit a test message and confirm delivery to your inbox.

Integration reference: [Web3Forms JavaScript guide](https://docs.web3forms.com/how-to-guides/html-and-javascript).

## Deployment

```bash
npm run deploy
```

## Checks

```bash
npm run lint
npm test
npm run build
```

Tests cover contact submission responses, analytics consent and chapter scrolling.
Contact requests are mocked; these tests do not send email.

## Analytics preferences

Google Analytics loads only after an explicit acceptance. Visitors can reopen the
preferences from the footer, withdraw consent, or close the panel without changing
their choice. Preferences synchronize across tabs; blocked storage does not crash
the page. Analytics cookies are cleared on withdrawal where accessible to this site.

Route pageviews are sent manually. In the Google Analytics web data stream, disable
Enhanced Measurement → Page views → “Page changes based on browser history events”
to avoid duplicate automatic pageviews. See [Google's pageview guide](https://developers.google.com/analytics/devguides/collection/ga4/views).

## Roadmap

- Add completed full-stack projects
- Add project screenshots and case studies
- Improve accessibility and automated testing
- Add a custom domain

## Author

**Konstantinos Sitaras**  
Applied Informatics Graduate and aspiring software engineer based in Thessaloniki, Greece.
