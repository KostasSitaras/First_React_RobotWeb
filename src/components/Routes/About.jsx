const skillGroups = [
  { title: 'Languages', items: ['JavaScript', 'Java', 'Python', 'C', 'SQL'] },
  { title: 'Front end', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Back end & data', items: ['Node.js', 'Express.js', 'MySQL', 'MariaDB'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Linux', 'VS Code', 'BPMN'] },
];

const About = () => {
  return (
    <section className="page-shell">
      <div data-reveal="up" className="max-w-3xl">
        <p className="eyebrow">About me</p>
        <h1 className="page-title">Technology, problem solving and continuous learning.</h1>
        <p className="page-copy">
          I am a final-year Applied Informatics student at the University of Macedonia.
          My main interest is software engineering, with a focus on modern web development
          and full-stack applications. I have worked with React, Node.js, SQL databases and
          Git-based workflows through personal learning and development.
        </p>
        <p className="page-copy mt-5">
          Alongside my technical background, four years of customer-facing work have helped
          me build strong communication, teamwork and problem-solving skills. I am looking
          for my first professional opportunity in software development, where I can contribute,
          learn from experienced engineers and grow through real-world projects.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <article
            key={group.title}
            data-reveal="up"
            className={`content-card delay-${Math.min(index + 1, 4)}`}
          >
            <h2 className="text-xl font-semibold">{group.title}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="skill-chip">{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <div data-reveal="up" className="mb-7">
          <p className="eyebrow">Certifications</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Learning beyond the classroom.
          </h2>
        </div>

        <article data-reveal="up" className="content-card max-w-3xl delay-1">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-orange-200">
                Certificate of Completion · 2026
              </p>
              <h3 className="mt-3 text-2xl font-semibold">Introduction to Artificial Intelligence</h3>
              <p className="mt-2 text-gray-400">Founderz Business School · YMCA</p>
              <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                Successfully completed the academic and practical requirements of the
                Introduction to Artificial Intelligence – YMCA program.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="skill-chip">Artificial Intelligence</span>
                <span className="skill-chip">AI Fundamentals</span>
                <span className="skill-chip">Practical AI</span>
              </div>
            </div>
            <div className="shrink-0 rounded-full border border-orange-300/20 bg-orange-300/10 px-4 py-2 text-sm font-medium text-orange-200">
              Class of 2026
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
