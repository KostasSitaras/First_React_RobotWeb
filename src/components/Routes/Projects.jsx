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
    title: 'TechMatch',
    status: 'In development',
    description:
      'A full-stack technology product comparison platform with authentication, filtering, favourites and an administration dashboard.',
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'REST API'],
  },
];

const Projects = () => {
  return (
    <section className="page-shell">
      <div data-reveal="up" className="max-w-3xl">
        <p className="eyebrow">Selected work</p>
        <h1 className="page-title">Projects that show how I learn and build.</h1>
        <p className="page-copy">
          I am developing my portfolio through practical projects that combine interface
          design, application logic, databases and deployment. Each project is documented
          and improved incrementally through Git.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            data-reveal="up"
            className={`content-card flex flex-col delay-${Math.min(index + 1, 4)}`}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <span className="rounded-full border border-orange-200/20 bg-orange-200/10 px-3 py-1 text-xs text-orange-100">
                {project.status}
              </span>
            </div>

            <p className="mt-5 flex-1 leading-7 text-gray-400">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="skill-chip">{technology}</span>
              ))}
            </div>

            {(project.repository || project.demo) && (
              <div className="mt-7 flex flex-wrap gap-4 border-t border-white/10 pt-5 text-sm">
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
