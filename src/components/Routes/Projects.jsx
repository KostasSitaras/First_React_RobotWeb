const projects = [
  {
    number: '01',
    title: 'Developer Portfolio',
    status: 'Live',
    statement: 'A portfolio treated like a product, not a template.',
    intro:
      'The goal was not just to publish a résumé online. I wanted a portfolio that feels intentional, works smoothly across devices and communicates how I think as much as what I know.',
    challenge:
      'Create a personal site that is visually distinctive without becoming heavy, distracting or difficult to navigate.',
    approach:
      'Build the experience in React, keep the interface responsive and accessible, structure routing cleanly and add the details a production-facing site needs: SEO metadata, analytics consent, error handling and GitHub Pages deployment.',
    takeaway:
      'This project became a place to practise iteration itself — every improvement in performance, content, accessibility and storytelling becomes part of the product.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'GitHub Pages'],
    repository: 'https://github.com/KostasSitaras/First_React_RobotWeb',
    demo: 'https://kostassitaras.github.io/First_React_RobotWeb/',
    type: 'portfolio',
  },
  {
    number: '02',
    title: 'Airbnb Property Management',
    status: 'In development',
    statement: 'One dashboard for a workflow that usually lives in too many places.',
    intro:
      'Short-term rental operations involve listings, reservations, guests, availability and day-to-day decisions. The project starts from that operational problem and turns it into a single full-stack application.',
    challenge:
      'Model several connected parts of the hosting workflow in a way that remains understandable as the application grows.',
    approach:
      'Use React for the interface, Node.js and Express.js for the application layer, MySQL for relational data and REST APIs to connect the pieces into one structured workflow.',
    takeaway:
      'The project is helping me move beyond isolated front-end features and think more deeply about application architecture, API boundaries and data modelling.',
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'REST API'],
    type: 'dashboard',
  },
];

const ProjectVisual = ({ type }) => {
  if (type === 'dashboard') {
    return (
      <div className="story-project-visual story-dashboard min-h-[320px]" aria-hidden="true">
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
    );
  }

  return (
    <div className="story-project-visual min-h-[320px]" aria-hidden="true">
      <div className="story-browser-bar">
        <span /><span /><span />
        <div className="story-browser-address">kostassitaras / portfolio</div>
      </div>
      <div className="story-browser-body min-h-[270px]">
        <p className="story-mini-kicker">KCODE.</p>
        <p className="story-mini-title">From working with people to building for people.</p>
        <div className="story-code-lines">
          <span className="w-[88%]" />
          <span className="w-[68%]" />
          <span className="w-[76%]" />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="page-shell">
      <div data-reveal="up" className="max-w-6xl">
        <p className="eyebrow">Selected work / Case studies</p>
        <h1 className="page-title max-w-5xl">
          I learn fastest when an idea
          <span className="block text-gray-500">has to become real.</span>
        </h1>
        <p className="page-copy max-w-3xl">
          These projects are not here only to show a stack. They show the problem I started
          with, the decisions I made and what each build is teaching me about software.
        </p>
      </div>

      <div className="mt-16 space-y-24 lg:mt-24 lg:space-y-32">
        {projects.map((project, index) => (
          <article key={project.title} data-reveal="up" className={`delay-${Math.min(index + 1, 4)}`}>
            <div className="grid gap-8 border-t border-white/10 pt-7 lg:grid-cols-[90px_minmax(0,1fr)] lg:gap-10">
              <div className="flex items-start justify-between gap-4 lg:block">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
                  {project.number}
                </span>
                <span className={`story-status mt-0 lg:mt-6 ${project.status === 'Live' ? 'story-status-live' : ''}`}>
                  {project.status}
                </span>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-orange-200 sm:text-sm">
                  {project.title}
                </p>
                <h2 className="mt-4 max-w-5xl text-[clamp(2.4rem,5.8vw,6.8rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
                  {project.statement}
                </h2>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400">
                  {project.intro}
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-10">
              <ProjectVisual type={project.type} />

              <div className="grid content-start gap-0">
                <div className="border-t border-white/10 py-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">The challenge</p>
                  <p className="mt-3 leading-7 text-gray-300">{project.challenge}</p>
                </div>
                <div className="border-t border-white/10 py-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">The approach</p>
                  <p className="mt-3 leading-7 text-gray-300">{project.approach}</p>
                </div>
                <div className="border-y border-white/10 py-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">What it is teaching me</p>
                  <p className="mt-3 leading-7 text-gray-300">{project.takeaway}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="skill-chip">{technology}</span>
                ))}
              </div>

              {(project.repository || project.demo) && (
                <div className="flex flex-wrap gap-5 text-sm">
                  {project.demo && (
                    <a className="story-text-link" href={project.demo} target="_blank" rel="noreferrer">
                      Live project <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.repository && (
                    <a className="story-text-link" href={project.repository} target="_blank" rel="noreferrer">
                      Source code <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
