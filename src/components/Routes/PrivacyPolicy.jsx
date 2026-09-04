const PrivacyPolicy = () => {
  return (
    <section className="page-shell">
      <div data-reveal="up" className="max-w-4xl">
        <p className="eyebrow">Privacy</p>
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-copy">Last updated: 4 September 2026</p>

        <div className="content-card mt-10 space-y-8 leading-7 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white">1. About this website</h2>
            <p className="mt-3 text-gray-400">
              This website is the personal portfolio of Konstantinos Sitaras. It is used to
              present professional information, projects, skills and contact details. The site
              does not require visitors to create an account or sign in.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Analytics</h2>
            <p className="mt-3 text-gray-400">
              Google Analytics 4 is disabled by default and is loaded only after you choose
              “Accept” in the analytics consent notice. When enabled, it helps measure how the
              portfolio is used, including information such as visitor and session statistics,
              approximate location, and browser or device information.
            </p>
            <p className="mt-3 text-gray-400">
              Google Analytics may use first-party cookies, including the <code className="text-orange-100">_ga</code>
              cookie, to distinguish visitors and sessions. The Google Analytics measurement ID
              used by this website is <code className="text-orange-100">G-24TD66K0LY</code>.
            </p>
            <p className="mt-3 text-gray-400">
              You can learn more about Google Analytics data collection in the{' '}
              <a
                className="project-link"
                href="https://support.google.com/analytics/answer/11593727"
                target="_blank"
                rel="noreferrer"
              >
                Google Analytics documentation ↗
              </a>{' '}
              and review Google’s{' '}
              <a
                className="project-link"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy ↗
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Your analytics choice</h2>
            <p className="mt-3 text-gray-400">
              If you select “Reject”, Google Analytics is not loaded by this portfolio. Your
              preference is stored locally in your browser so the website can remember your
              choice. You can reopen the analytics preferences at any time from the footer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Hosting</h2>
            <p className="mt-3 text-gray-400">
              This website is hosted using GitHub Pages. GitHub may process technical information
              related to visits to GitHub Pages for security and service operation. For more
              information, see the{' '}
              <a
                className="project-link"
                href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Privacy Statement ↗
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Contact</h2>
            <p className="mt-3 text-gray-400">
              The portfolio displays an email address so visitors can contact Konstantinos
              Sitaras directly. If you send an email, the information you choose to include is
              processed for the purpose of responding to your message.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Data sharing</h2>
            <p className="mt-3 text-gray-400">
              Personal information is not sold through this website. When analytics is accepted,
              Google acts as the analytics service provider. GitHub provides the website hosting
              infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Changes to this policy</h2>
            <p className="mt-3 text-gray-400">
              This Privacy Policy may be updated when the website, analytics setup or services
              used by the portfolio change. The latest revision date is shown at the top of this
              page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">8. Privacy questions</h2>
            <p className="mt-3 text-gray-400">
              For questions about this website or its privacy practices, contact{' '}
              <a className="project-link" href="mailto:kostassitaras1@gmail.com">
                kostassitaras1@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
