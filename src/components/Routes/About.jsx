const skillGroups = [
  { title: 'Languages', items: ['JavaScript', 'Java', 'Python', 'C', 'SQL'] },
  { title: 'Front end', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Back end & data', items: ['Node.js', 'Express.js', 'MySQL', 'MariaDB'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Linux', 'VS Code', 'BPMN'] },
];

const chapters = [
  {
    number: '01',
    label: 'Before software',
    title: 'Learning to work with people first.',
    text: 'Four years of customer-facing work taught me how to communicate clearly, stay calm under pressure, adapt quickly and take responsibility for the experience in front of me. Those skills now shape the way I approach technical problems and teamwork.',
  },
  {
    number: '02',
    label: 'The technical foundation',
    title: 'Applied Informatics gave the curiosity structure.',
    text: 'At the University of Macedonia, I built a foundation across programming, databases, software concepts and problem solving. Completing my B.Sc. helped me move from experimenting with technology to understanding how software systems are designed, built and improved.',
  },
  {
    number: '03',
    label: 'Where I am now',
    title: 'Building toward professional software engineering.',
    text: 'Today I focus on React, Node.js, APIs and relational databases through practical projects. I am looking for my first professional software engineering opportunity where I can contribute, learn from experienced engineers and grow through real product work.',
  },
];

const About = () => {
  return (
    <section className="page-shell">
      <div data-reveal="up" className="max-w-6xl">
        <p className="eyebrow">About / The longer version</p>
        <h1 className="page-title max-w-5xl">
          The path was not perfectly linear.
          <span className="block text-gray-500">That is part of what shaped it.</span>
        </h1>
        <p className="page-copy max-w-3xl">
          I am Konstantinos Sitaras, an Applied Informatics graduate from the University of
          Macedonia. My path into software combines a technical education with years of
          practical, people-focused work — and I see value in both sides of that story.
        </p>
      </div>

      <div className="mt-16 border-t border-white/10 lg:mt-24">
        {chapters.map((chapter, index) => (
          <article
            key={chapter.number}
            data-reveal="up"
            className={`grid gap-6 border-b border-white/10 py-10 md:grid-cols-[90px_minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-8 lg:py-14 delay-${Math.min(index + 1, 4)}`}
          >
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
              {chapter.number}
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-orange-200 sm:text-sm">
                {chapter.label}
              </p>
              <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                {chapter.title}
              </h2>
            </div>
            <p className="max-w-2xl self-end text-base leading-8 text-gray-400">
              {chapter.text}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-20 lg:mt-28">
        <div data-reveal="up" className="max-w-4xl">
          <p className="eyebrow">Toolbox</p>
          <h2 className="text-[clamp(2.2rem,4vw,4.7rem)] font-semibold leading-[1.02] tracking-tight">
            What I use to turn ideas
            <span className="block text-gray-500">into working software.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              data-reveal="up"
              className={`bg-black p-6 sm:p-7 delay-${Math.min(index + 1, 4)}`}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-20 lg:mt-28">
        <div data-reveal="up" className="max-w-4xl">
          <p className="eyebrow">Learning beyond the degree</p>
          <h2 className="text-[clamp(2.2rem,4vw,4.7rem)] font-semibold leading-[1.02] tracking-tight">
            Curiosity does not stop
            <span className="block text-gray-500">at the curriculum.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article data-reveal="up" className="content-card flex h-full flex-col delay-1">
            <div className="flex items-start justify-between gap-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange-200">
                2026 · Certificate of Completion
              </p>
              <span className="text-xs tracking-[0.15em] text-gray-600">01</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
              Introduction to Artificial Intelligence
            </h3>
            <p className="mt-2 text-gray-500">Founderz Business School · YMCA</p>
            <p className="mt-5 flex-1 leading-7 text-gray-400">
              Completed the academic and practical requirements of the Introduction to
              Artificial Intelligence program, expanding my understanding of AI fundamentals
              and practical applications.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
              {['Artificial Intelligence', 'AI Fundamentals', 'Practical AI'].map((item) => (
                <span key={item} className="skill-chip">{item}</span>
              ))}
            </div>
          </article>

          <article data-reveal="up" className="content-card flex h-full flex-col delay-2">
            <div className="flex items-start justify-between gap-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange-200">
                2025 · Certificate of Attendance
              </p>
              <span className="text-xs tracking-[0.15em] text-gray-600">02</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
              Google Built with AI
            </h3>
            <p className="mt-2 text-gray-500">Google · University of Macedonia</p>
            <p className="mt-5 flex-1 leading-7 text-gray-400">
              Worked with Google Colab and Gemini to explore practical generative AI workflows,
              including hands-on experimentation with AI models, prompt engineering and
              AI-powered solutions in a cloud-based environment.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
              {['Google Gemini', 'Google Colab', 'Generative AI'].map((item) => (
                <span key={item} className="skill-chip">{item}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
