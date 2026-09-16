const Contact = () => {
  return (
    <section className="page-shell">
      <div data-reveal="up" className="max-w-4xl">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Let’s build something useful.</h1>
        <p className="page-copy">
          I am currently open to junior software engineering, front-end and full-stack
          opportunities in Thessaloniki or remote. The best way to contact me is by email
          or through LinkedIn.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">
        <a
          data-reveal="up"
          href="mailto:kostassitaras1@gmail.com?subject=Portfolio%20Contact"
          className="content-card delay-1 transition hover:-translate-y-1 hover:border-white/25"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500 sm:text-sm">Email</p>
          <p className="mt-3 break-all text-base sm:text-lg">kostassitaras1@gmail.com</p>
        </a>

        <a
          data-reveal="up"
          href="https://www.linkedin.com/in/konstantinos-sitaras-731407253/"
          target="_blank"
          rel="noreferrer"
          className="content-card delay-2 transition hover:-translate-y-1 hover:border-white/25"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500 sm:text-sm">LinkedIn</p>
          <p className="mt-3 text-base sm:text-lg">Connect professionally ↗</p>
        </a>

        <a
          data-reveal="up"
          href="https://github.com/KostasSitaras"
          target="_blank"
          rel="noreferrer"
          className="content-card delay-3 transition hover:-translate-y-1 hover:border-white/25"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500 sm:text-sm">GitHub</p>
          <p className="mt-3 text-base sm:text-lg">View my code ↗</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
