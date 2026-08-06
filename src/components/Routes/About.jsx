const skillGroups = [
  { title: 'Languages', items: ['JavaScript', 'Java', 'Python', 'C', 'SQL'] },
  { title: 'Front end', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Back end & data', items: ['Node.js', 'Express.js', 'MySQL', 'MariaDB'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Linux', 'VS Code', 'BPMN'] },
];

const About = () => {
  return (
    <section className="page-shell">
      <div data-aos="fade-up" className="max-w-3xl">
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
        {skillGroups.map((group) => (
          <article key={group.title} data-aos="fade-up" className="content-card">
            <h2 className="text-xl font-semibold">{group.title}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="skill-chip">{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
