const Terms = () => {
  return (
    <section className="page-shell">
      <div data-reveal="up" className="max-w-4xl">
        <p className="eyebrow">Legal</p>
        <h1 className="page-title">Terms of Use</h1>
        <p className="page-copy">Last updated: 4 September 2026</p>

        <div className="content-card mt-10 space-y-8 leading-7 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Purpose of this website</h2>
            <p className="mt-3 text-gray-400">
              This website is the personal portfolio of Konstantinos Sitaras. It is provided to
              present professional information, technical skills, projects, certifications and
              contact details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Informational content</h2>
            <p className="mt-3 text-gray-400">
              The content is provided for general informational and professional presentation
              purposes. While reasonable care is taken to keep the information accurate and up
              to date, no guarantee is made that every item will always be complete or current.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Intellectual property</h2>
            <p className="mt-3 text-gray-400">
              Unless otherwise stated, the original written content, portfolio design and project
              presentation on this website belong to Konstantinos Sitaras. Third-party names,
              trademarks and services remain the property of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. External links</h2>
            <p className="mt-3 text-gray-400">
              This portfolio links to third-party websites such as GitHub, LinkedIn and Google.
              Those websites operate under their own terms and privacy policies. This portfolio
              is not responsible for the availability or content of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Acceptable use</h2>
            <p className="mt-3 text-gray-400">
              Visitors should not attempt to interfere with the normal operation, security or
              availability of this website or use its content in a misleading or unlawful way.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Changes</h2>
            <p className="mt-3 text-gray-400">
              These terms may be updated when the website, its content or the services it uses
              change. The latest revision date is shown at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Contact</h2>
            <p className="mt-3 text-gray-400">
              Questions about these terms can be sent to{' '}
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

export default Terms;
