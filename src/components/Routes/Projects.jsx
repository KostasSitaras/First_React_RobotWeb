const projects = [
  {
    title: 'Developer Portfolio',
    status: 'Live project',
    description:
      'A responsive personal portfolio built to present my skills, background and software projects in a clear and accessible way.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'GitHub Pages'],
    repository: 'https://github.com/KostasSitaras/First_React_RobotWeb',
    demo: 'https://kostassitaras.github.io/First_React_RobotWeb/',
  },
  {
    title: 'Airbnb Property Management',
    status: 'In development',
    description:
      'A full-stack property management platform for short-term rentals, designed to manage listings, reservations, guests, availability and day-to-day hosting operations from a single dashboard.',
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'REST API'],
  },
];

const Projects = () => {
  return (
    <section className="page-shell">
      <div data-reveal="up" className="max-w-4xl">
        <p className="eyebrow">Selected work</p>
        <h1 className="page-title">Projects that show how I learn and build.</h1>
        <p className="page-copy">
          I am developing my portfolio through practical projects that combine interface
          design, application logic, databases and deployment. Each project is documented
          and improved incrementally through Git.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
        {projects.map((project, index) => (
          <article
            key={project.title}
            data-reveal="up"
            className={`content-card flex min-h-[280px] flex-col delay-${Math.min(index + 1, 4)}`}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <h2 className="text-xl font-semibold sm:text-2xl">{project.title}</h2>
              <span className="w-fit shrink-0 rounded-full border border-orange-200/20 bg-orange-200/10 px-3 py-1 text-xs text-orange-100">
                {project.status}
              </span>
            </div>

            <p className="mt-4 max-w-3xl flex-1 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="skill-chip">{technology}</span>
              ))}
            </div>

            {(project.repository || project.demo) && (
              <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-5 text-sm">
                {project.demo && (
                  <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
                    Live demo ↗
                  </a>
                )}
                {project.repository && (
                  <a className="project-link" href={project.repository} target="_blank" rel="noreferrer">
                    GitHub repository ↗
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
