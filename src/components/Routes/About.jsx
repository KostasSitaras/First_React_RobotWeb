const skillGroups = [
  { title: 'Languages', items: ['JavaScript', 'Java', 'Python', 'C', 'SQL'] },
  { title: 'Front end', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Back end & data', items: ['Node.js', 'Express.js', 'MySQL', 'MariaDB'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Linux', 'VS Code', 'BPMN'] },
];

const journey = [
  {
    step: '01',
    label: 'Education',
    title: 'Applied Informatics · University of Macedonia',
    description:
      'Building a strong foundation in software development, databases, problem solving and modern web technologies while completing my degree.',
  },
  {
    step: '02',
    label: 'Professional background',
    title: 'Four years of customer-facing experience',
    description:
      'Developed communication, teamwork, responsibility and practical problem-solving skills through fast-paced, people-focused work.',
  },
  {
    step: '03',
    label: '2026',
    title: 'Introduction to Artificial Intelligence',
    description:
      'Completed the Founderz Business School · YMCA program, expanding my understanding of AI fundamentals and practical applications.',
  },
  {
    step: '04',
    label: 'Current direction',
    title: 'Building toward software engineering',
    description:
      'Developing React, Node.js and SQL-based projects while preparing for my first professional role in software development.',
  },
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

      <div className="mt-16 max-w-5xl">
        <div data-reveal="up" className="mb-9 max-w-3xl">
          <p className="eyebrow">Journey</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            From learning fundamentals to building real projects.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            A short view of the experiences that have shaped how I approach software,
            teamwork and continuous development.
          </p>
        </div>

        <div className="relative ml-3 border-l border-white/10 sm:ml-5">
          {journey.map((item, index) => (
            <article
              key={item.step}
              data-reveal="up"
              className={`relative pb-10 pl-8 last:pb-0 sm:pl-10 delay-${Math.min(index + 1, 4)}`}
            >
              <span
                className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border border-orange-200/50 bg-black ring-4 ring-black"
                aria-hidden="true"
              />

              <div className="content-card">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-200">
                      {item.label}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{item.title}</h3>
                    <p className="mt-3 leading-7 text-gray-400">{item.description}</p>
                  </div>

                  <span className="shrink-0 text-sm font-medium tracking-[0.18em] text-gray-600">
                    {item.step}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2">
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
