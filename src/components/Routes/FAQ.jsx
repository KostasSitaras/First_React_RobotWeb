const faqs = [
  {
    question: 'What roles are you currently open to?',
    answer:
      'I am open to Junior Software Engineer, front-end and full-stack development opportunities in Thessaloniki or remote.',
  },
  {
    question: 'What technologies do you work with?',
    answer:
      'My current stack includes JavaScript, React, Node.js, Express.js, SQL, MySQL, MariaDB, Git, GitHub and Linux, alongside academic experience with Java, Python and C.',
  },
  {
    question: 'Are your projects available online?',
    answer:
      'My developer portfolio is live and linked from the Projects page. Other projects are added as they reach a presentable development stage.',
  },
  {
    question: 'Can I view or download your CV?',
    answer:
      'Yes. The Download CV button in the navigation provides the latest public version of my Junior Software Engineer CV.',
  },
  {
    question: 'What is the best way to contact you?',
    answer:
      'Email is the fastest option. You can also connect with me through LinkedIn or review my work on GitHub from the Contact page.',
  },
];

const FAQ = () => {
  return (
    <section className="page-shell">
      <div data-reveal="up" className="max-w-3xl">
        <p className="eyebrow">FAQ</p>
        <h1 className="page-title">A few quick answers.</h1>
        <p className="page-copy">
          Common questions about my availability, technical background and portfolio.
        </p>
      </div>

      <div className="mt-12 max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            data-reveal="up"
            className={`content-card group delay-${Math.min(index + 1, 4)}`}
          >
            <summary className="cursor-pointer list-none pr-8 text-lg font-semibold marker:hidden">
              <span className="flex items-center justify-between gap-4">
                {faq.question}
                <span aria-hidden="true" className="text-orange-200 transition-transform group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-4 max-w-3xl leading-7 text-gray-400">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
