import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
import '../../story-motion.css';

const principles = [
  {
    number: '01',
    title: 'Useful over flashy',
    text: 'A feature matters when it makes something clearer, faster or easier for the person using it.',
  },
  {
    number: '02',
    title: 'Clarity in the details',
    text: 'Readable interfaces, understandable code and thoughtful structure make products easier to trust and maintain.',
  },
  {
    number: '03',
    title: 'Build, test, improve',
    text: 'I prefer shipping a solid version, learning from it and improving deliberately instead of chasing perfection.',
  },
  {
    number: '04',
    title: 'Keep learning',
    text: 'Software changes quickly. Curiosity, feedback and continuous learning are part of the job, not extras.',
  },
];

const Home = () => {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector('header');
    const updateHeaderHeight = () => {
      if (header) {
        root.style.setProperty('--story-header-height', `${header.getBoundingClientRect().height}px`);
      }
    };

    updateHeaderHeight();
    root.classList.add('story-motion-enabled');
    const headerObserver = new ResizeObserver(updateHeaderHeight);
    if (header) headerObserver.observe(header);

    return () => {
      headerObserver.disconnect();
      root.classList.remove('story-motion-enabled');
      root.style.removeProperty('--story-header-height');
    };
  }, []);

  return (
    <>
      <div className="story-chapter story-intro">
        <Hero />
      </div>

      <section className="story-section story-section-bordered story-chapter" aria-labelledby="origin-title">
        <div className="story-grid">
          <div data-reveal="up" className="story-chapter-heading">
            <p className="story-kicker">01 / Origin</p>
            <p className="story-ghost-word" aria-hidden="true">PEOPLE</p>
            <h2 id="origin-title" className="story-display">
              Before code,
              <span className="block text-gray-500">there were people.</span>
            </h2>
          </div>

          <div data-reveal="up" className="story-copy-column delay-1">
            <p className="story-lead">
              Four years in customer-facing work taught me something I still use every day:
              understand the person before trying to solve the problem.
            </p>
            <p className="story-body">
              Working in fast-paced environments built my communication, adaptability and
              responsibility. When I moved deeper into software, that mindset came with me.
              The tools changed. The goal did not: make something that genuinely helps.
            </p>

            <div className="story-facts" aria-label="Background highlights">
              <div className="story-fact">
                <span className="story-fact-value">4 years</span>
                <span className="story-fact-label">Customer-facing experience</span>
              </div>
              <div className="story-fact">
                <span className="story-fact-value">B.Sc.</span>
                <span className="story-fact-label">Applied Informatics</span>
              </div>
              <div className="story-fact">
                <span className="story-fact-value">Thessaloniki</span>
                <span className="story-fact-label">Based in Greece</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="story-section story-section-bordered story-chapter" aria-labelledby="transition-title">
        <div className="story-grid">
          <div data-reveal="up" className="story-chapter-heading">
            <p className="story-kicker">02 / Transition</p>
            <p className="story-ghost-word" aria-hidden="true">LEARN</p>
            <h2 id="transition-title" className="story-display">
              Then I learned to turn
              <span className="block text-orange-200">problems into systems.</span>
            </h2>
          </div>

          <div className="story-copy-column">
            <div data-reveal="up" className="story-milestone">
              <div className="story-milestone-topline">
                <span>2021 — 2026</span>
                <span>University of Macedonia</span>
              </div>
              <h3>B.Sc. in Applied Informatics</h3>
              <p>
                My degree gave me the foundation to move from curiosity to structured problem
                solving: programming, databases, software concepts and the discipline of learning
                technical subjects deeply enough to build with them.
              </p>
            </div>

            <div data-reveal="up" className="story-milestone delay-1">
              <div className="story-milestone-topline">
                <span>2025 — 2026</span>
                <span>Beyond the curriculum</span>
              </div>
              <h3>Introduction to Artificial Intelligence</h3>
              <p>
                Completed the Founderz · YMCA Introduction to Artificial Intelligence program, 
                gaining a structured introduction to AI fundamentals, 
                practical applications and the ways artificial intelligence 
                can be used to support real-world problem solving.
              </p>
            </div>

            <div data-reveal="up" className="pt-2 delay-2">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gray-500">
                Tools I Understood and Built With During My Studies
              </p>
              <div className="flex flex-wrap gap-2">
                {['Gemini', 'Google Colab', 'ChatGPT', 'Git'].map((item) => (
                  <span key={item} className="skill-chip">{item}</span>
                ))}
              </div>
               <br /> 
            </div>
            

            <div data-reveal="up" className="story-milestone delay-1">
              <div className="story-milestone-topline">
                <span>2025 — 2026</span>
                <span>Beyond the curriculum</span>
              </div>
              <h3>Built with AI</h3>
              <p>
                Participated in Google’s Built with AI program, 
                working with Google Gemini and Google Colab to explore 
                generative AI workflows, prompt engineering and the development 
                of practical AI-powered solutions in a cloud-based environment.
              </p>
            </div>

            <div data-reveal="up" className="pt-2 delay-2">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gray-500">
                Tools I build with today
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'Git', 'Linux'].map((item) => (
                  <span key={item} className="skill-chip">{item}</span>
                ))}
              </div>
              <Link className="story-text-link mt-6" to="/about">
                Read the longer story <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="story-section story-section-bordered story-chapter" aria-labelledby="building-title">
        <div data-reveal="up" className="mb-12 max-w-5xl lg:mb-16">
          <p className="story-kicker">03 / Building</p>
          <h2 id="building-title" className="story-display max-w-5xl">
            Ideas become useful
            <span className="block text-gray-500">when they ship.</span>
          </h2>
          <p className="story-lead mt-7 max-w-3xl">
            Projects are where everything connects: interface decisions, application logic,
            data, deployment and the small details that only appear once something becomes real.
          </p>
        </div>

        <div className="story-project-list">
          <article data-reveal="up" className="story-project">
            <div className="story-project-meta">
              <span>01</span>
              <span className="story-status story-status-live">Live</span>
            </div>

            <div className="story-project-content">
              <p className="story-project-label">Developer Portfolio</p>
              <h3>A portfolio treated like a product, not a template.</h3>
              <p>
                Built with React, Vite and Tailwind CSS, then improved around responsiveness,
                accessibility, SEO, analytics consent, routing and GitHub Pages deployment.
                The site you are viewing is also the project I keep refining.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['React', 'Vite', 'Tailwind CSS', 'SEO', 'GitHub Pages'].map((item) => (
                  <span key={item} className="skill-chip">{item}</span>
                ))}
              </div>
            </div>

            <div className="story-project-visual" aria-hidden="true">
              <div className="story-browser-bar">
                <span /><span /><span />
                <div className="story-browser-address">kostassitaras / portfolio</div>
              </div>
              <div className="story-browser-body">
                <p className="story-mini-kicker">KCODE.</p>
                <p className="story-mini-title">Build something useful.</p>
                <div className="story-code-lines">
                  <span className="w-[88%]" />
                  <span className="w-[68%]" />
                  <span className="w-[76%]" />
                </div>
              </div>
            </div>
          </article>

          <article data-reveal="up" className="story-project delay-1">
            <div className="story-project-meta">
              <span>02</span>
              <span className="story-status">In development</span>
            </div>

            <div className="story-project-content">
              <p className="story-project-label">Airbnb Property Management</p>
              <h3>Turning a real operational problem into one system.</h3>
              <p>
                A full-stack property management platform designed to bring listings,
                reservations, guests and availability into a single workflow. The project is
                helping me go deeper into API design, data modelling and full-stack application structure.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express.js', 'MySQL', 'REST API'].map((item) => (
                  <span key={item} className="skill-chip">{item}</span>
                ))}
              </div>
            </div>

            <div className="story-project-visual story-dashboard" aria-hidden="true">
              <div className="story-dashboard-sidebar">
                <span className="story-dashboard-logo" />
                <span /><span /><span /><span />
              </div>
              <div className="story-dashboard-main">
                <div className="story-dashboard-heading" />
                <div className="story-dashboard-cards">
                  <span /><span /><span />
                </div>
                <div className="story-dashboard-table">
                  <span /><span /><span /><span />
                </div>
              </div>
            </div>
          </article>
        </div>

        <div data-reveal="up" className="mt-10 flex justify-end">
          <Link className="story-text-link" to="/projects">
            Explore the projects in detail <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="story-section story-section-bordered story-chapter" aria-labelledby="approach-title">
        <div className="story-grid">
          <div data-reveal="up" className="story-chapter-heading">
            <p className="story-kicker">04 / Approach</p>
            <p className="story-ghost-word" aria-hidden="true">WHY</p>
            <h2 id="approach-title" className="story-display">
              The way I want
              <span className="block text-gray-500">to build.</span>
            </h2>
          </div>

          <div className="story-principles">
            {principles.map((principle, index) => (
              <article
                key={principle.number}
                data-reveal="up"
                className={`story-principle delay-${Math.min(index + 1, 4)}`}
              >
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section story-chapter" aria-labelledby="next-title">
        <div data-reveal="up" className="story-finale">
          <p className="story-kicker">05 / Next</p>
          <p className="story-ghost-word story-ghost-word-finale" aria-hidden="true">NEXT</p>
          <h2 id="next-title" className="story-display story-display-finale">
            Still building.
          </h2>
          <p className="story-lead mx-auto mt-7 max-w-3xl text-center">
            Completing my degree was a milestone, not a finish line. I am looking for the
            first professional environment where I can contribute, learn from experienced
            engineers and keep turning real problems into useful software.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="micro-button rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-orange-200 sm:text-base"
            >
              Start a conversation
            </Link>
            <Link
              to="/about"
              className="micro-button rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:border-white/40 hover:bg-white/5 sm:text-base"
            >
              More about me
            </Link>
          </div>

          <p className="mt-8 text-center text-xs uppercase tracking-[0.22em] text-gray-600 sm:text-sm">
            Available for junior software engineering opportunities
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
