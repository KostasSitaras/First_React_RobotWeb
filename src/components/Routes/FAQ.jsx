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
      'Use the form on the Contact page to send me a message directly, without opening an email app. I will reply by email. You can also connect with me through LinkedIn.',
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
            <summary className="flex min-h-11 cursor-pointer list-none items-center text-base font-semibold marker:hidden sm:text-lg">
              <span className="flex w-full items-center justify-between gap-4">
                <span className="min-w-0">{faq.question}</span>
                <span aria-hidden="true" className="shrink-0 text-orange-200 transition-transform group-open:rotate-45 motion-reduce:transition-none">
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
