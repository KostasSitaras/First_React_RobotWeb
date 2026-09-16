import { Link } from 'react-router-dom';

const technologies = ['React', 'Node.js', 'JavaScript', 'MySQL', 'Git', 'Linux'];

const Hero = () => {
  return (
    <section className="site-gutter grid min-h-[calc(100vh-88px)] w-full items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,520px)] lg:gap-[clamp(3rem,7vw,8rem)] lg:py-16">
      <div data-reveal="up" className="max-w-[850px]">
        <div className="mb-5">
          <p className="text-base font-semibold uppercase tracking-[0.15em] text-orange-200 sm:text-lg">
            Konstantinos Sitaras
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.26em] text-orange-200 sm:text-sm">
            Junior Software Engineer · Thessaloniki
          </p>
        </div>

        <h1 className="text-[clamp(2.7rem,4.15vw,5rem)] font-semibold leading-[1.03] tracking-tight">
          I build practical,
          <span className="block text-gray-400">user-focused web experiences.</span>
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-gray-400 sm:text-[1.05rem] sm:leading-8">
          I am a final-year Applied Informatics student with hands-on experience in React,
          Node.js and relational databases. I enjoy turning ideas into clean, responsive
          applications and continuously improving the way I design and write software.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="micro-button rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-orange-200 sm:px-6 sm:py-3 sm:text-base"
          >
            View projects
          </Link>
          <Link
            to="/contact"
            className="micro-button rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium hover:border-white/50 hover:bg-white/5 sm:px-6 sm:py-3 sm:text-base"
          >
            Contact me
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span key={technology} className="skill-chip">
              {technology}
            </span>
          ))}
        </div>
      </div>

      <aside
        data-reveal="left"
        className="interactive-card delay-2 w-full max-w-[520px] justify-self-end rounded-3xl border border-white/10 bg-white/[0.035] p-6 lg:p-7"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 sm:text-sm">Currently</p>
        <h2 className="mt-4 text-xl font-semibold sm:text-2xl">Completing my B.Sc. in Applied Informatics</h2>
        <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
          Expected graduation in September 2026. Open to junior software engineering,
          front-end and full-stack opportunities.
        </p>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-sm text-gray-500">Focus</p>
          <p className="mt-2 text-base sm:text-lg">React interfaces · REST APIs · SQL databases</p>
        </div>
      </aside>
    </section>
  );
};

export default Hero;
