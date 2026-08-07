import { Link } from 'react-router-dom';

const technologies = ['React', 'Node.js', 'JavaScript', 'MySQL', 'Git', 'Linux'];

const Hero = () => {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-96px)] w-full max-w-7xl items-center gap-14 px-5 py-14 lg:grid-cols-[1.25fr_0.75fr] lg:px-8">
      <div data-reveal="up" className="max-w-3xl">
        <div className="mb-6">
          <p className="text-lg font-semibold uppercase tracking-[0.16em] text-orange-200 sm:text-xl">
            Konstantinos Sitaras
          </p>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.28em] text-orange-200">
            Junior Software Engineer · Thessaloniki
          </p>
        </div>

        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          I build practical,
          <span className="block text-gray-400">user-focused web experiences.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
          I am a final-year Applied Informatics student with hands-on experience in React,
          Node.js and relational databases. I enjoy turning ideas into clean, responsive
          applications and continuously improving the way I design and write software.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-orange-200"
          >
            View projects
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-white/20 px-6 py-3 font-medium transition hover:border-white/50 hover:bg-white/5"
          >
            Contact me
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <aside data-reveal="left" className="delay-2 rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl backdrop-blur">
        <p className="text-sm uppercase tracking-[0.22em] text-gray-500">Currently</p>
        <h2 className="mt-4 text-2xl font-semibold">Completing my B.Sc. in Applied Informatics</h2>
        <p className="mt-4 leading-7 text-gray-400">
          Expected graduation in September 2026. Open to junior software engineering,
          front-end and full-stack opportunities.
        </p>

        <div className="mt-7 border-t border-white/10 pt-6">
          <p className="text-sm text-gray-500">Focus</p>
          <p className="mt-2 text-lg">React interfaces · REST APIs · SQL databases</p>
        </div>
      </aside>
    </section>
  );
};

export default Hero;
