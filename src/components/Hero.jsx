import { Link } from 'react-router-dom';

const technologies = ['React', 'Node.js', 'JavaScript', 'MySQL', 'Git', 'Linux'];

const Hero = () => {
  return (
    <section className="story-hero site-gutter relative flex min-h-[calc(100vh-88px)] w-full items-center overflow-hidden py-14 lg:py-20">
      <div className="story-hero-grid w-full">
        <div data-reveal="up" className="relative z-10 max-w-[980px]">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-3 py-1.5 text-xs font-medium text-emerald-200 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              Available for junior opportunities
            </div>
            <span className="text-xs uppercase tracking-[0.22em] text-gray-600 sm:text-sm">
              Thessaloniki · Greece
            </span>
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-orange-200 sm:text-base">
            Konstantinos Sitaras · Junior Software Engineer
          </p>

          <h1 className="story-hero-title">
            From working
            <span className="block text-gray-500">with people</span>
            <span className="block">to building</span>
            <span className="block text-orange-200">for people.</span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            I am an Applied Informatics graduate who enjoys turning real problems into clear,
            practical software. My background taught me how to understand people first;
            software gave me the tools to build for them.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="micro-button rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-orange-200 sm:text-base"
            >
              Explore my work
            </Link>
            <Link
              to="/contact"
              className="micro-button rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:border-white/40 hover:bg-white/5 sm:text-base"
            >
              Start a conversation
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-2">
            {technologies.map((technology) => (
              <span key={technology} className="skill-chip">
                {technology}
              </span>
            ))}
          </div>
        </div>

        <aside data-reveal="left" className="story-hero-side delay-2">
          <div className="story-hero-side-top">
            <span>Current chapter</span>
            <span>2026</span>
          </div>
          <p className="story-hero-side-title">Graduate. Building. Looking for the first professional chapter.</p>
          <p className="story-hero-side-copy">
            B.Sc. in Applied Informatics · University of Macedonia
          </p>
          <div className="story-hero-side-rule" />
          <div className="story-hero-side-bottom">
            <div>
              <span>Focus</span>
              <p>React interfaces · REST APIs · SQL databases</p>
            </div>
            <div>
              <span>Mindset</span>
              <p>Useful software · clear thinking · continuous improvement</p>
            </div>
          </div>
        </aside>
      </div>

      <div className="story-scroll-cue" aria-hidden="true">
        <span>Scroll to begin</span>
        <span className="story-scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
