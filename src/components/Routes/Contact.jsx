const Contact = () => {
  return (
    <section className="page-shell">
      <div data-reveal="up" className="max-w-3xl">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Let’s build something useful.</h1>
        <p className="page-copy">
          I am currently open to junior software engineering, front-end and full-stack
          opportunities in Thessaloniki or remote. The best way to contact me is by email
          or through LinkedIn.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <a
          data-reveal="up"
          href="mailto:kostassitaras1@gmail.com?subject=Portfolio%20Contact"
          className="content-card delay-1 transition hover:-translate-y-1 hover:border-white/25"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Email</p>
          <p className="mt-4 break-all text-lg">kostassitaras1@gmail.com</p>
        </a>

        <a
          data-reveal="up"
          href="https://www.linkedin.com/in/konstantinos-sitaras-731407253/"
          target="_blank"
          rel="noreferrer"
          className="content-card delay-2 transition hover:-translate-y-1 hover:border-white/25"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">LinkedIn</p>
          <p className="mt-4 text-lg">Connect professionally ↗</p>
        </a>

        <a
          data-reveal="up"
          href="https://github.com/KostasSitaras"
          target="_blank"
          rel="noreferrer"
          className="content-card delay-3 transition hover:-translate-y-1 hover:border-white/25"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">GitHub</p>
          <p className="mt-4 text-lg">View my code ↗</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
