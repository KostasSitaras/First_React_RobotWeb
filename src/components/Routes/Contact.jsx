import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validateForm = () => {
    const nextErrors = {};

    if (formData.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (formData.message.trim().length < 10) {
      nextErrors.message = 'Please enter a message of at least 10 characters.';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: '',
      }));
    }

    if (status) {
      setStatus('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('Please check the highlighted fields.');
      return;
    }

    const subject = `Portfolio contact from ${formData.name.trim()}`;
    const body = [
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      '',
      'Message:',
      formData.message.trim(),
    ].join('\n');

    const mailtoLink = `mailto:kostassitaras1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setErrors({});
    setStatus('Opening your email app…');
    window.location.href = mailtoLink;
  };

  return (
    <section className="page-shell">
      <div data-reveal="up" className="max-w-4xl">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Let’s build something useful.</h1>
        <p className="page-copy">
          I am currently open to junior software engineering, front-end and full-stack
          opportunities in Thessaloniki or remote. You can contact me directly by email,
          LinkedIn or through the form below.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">
        <a
          data-reveal="up"
          href="mailto:kostassitaras1@gmail.com?subject=Portfolio%20Contact"
          className="content-card delay-1 transition hover:-translate-y-1 hover:border-white/25"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500 sm:text-sm">Email</p>
          <p className="mt-3 break-all text-base sm:text-lg">kostassitaras1@gmail.com</p>
        </a>

        <a
          data-reveal="up"
          href="https://www.linkedin.com/in/konstantinos-sitaras-731407253/"
          target="_blank"
          rel="noreferrer"
          className="content-card delay-2 transition hover:-translate-y-1 hover:border-white/25"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500 sm:text-sm">LinkedIn</p>
          <p className="mt-3 text-base sm:text-lg">Connect professionally ↗</p>
        </a>

        <a
          data-reveal="up"
          href="https://github.com/KostasSitaras"
          target="_blank"
          rel="noreferrer"
          className="content-card delay-3 transition hover:-translate-y-1 hover:border-white/25"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500 sm:text-sm">GitHub</p>
          <p className="mt-3 text-base sm:text-lg">View my code ↗</p>
        </a>
      </div>

      <div
        data-reveal="up"
        className="content-card mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12"
      >
        <div>
          <p className="eyebrow">Send a message</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Get in touch directly.</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a role, project or collaboration in mind? Leave your details and a short
            message. The form will prepare an email addressed directly to me.
          </p>
          <p className="mt-5 text-sm leading-6 text-gray-500">
            Your information is not stored by this website.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`w-full rounded-2xl border bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-200/60 ${
                errors.name ? 'border-red-400/70' : 'border-white/10'
              }`}
              placeholder="Your name"
              maxLength={80}
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-sm text-red-300">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full rounded-2xl border bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-200/60 ${
                errors.email ? 'border-red-400/70' : 'border-white/10'
              }`}
              placeholder="you@example.com"
              maxLength={120}
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-300">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`w-full resize-y rounded-2xl border bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-200/60 ${
                errors.message ? 'border-red-400/70' : 'border-white/10'
              }`}
              placeholder="Tell me a little about the opportunity or project…"
              maxLength={2000}
            />
            <div className="mt-2 flex items-start justify-between gap-4">
              <div>
                {errors.message && (
                  <p id="message-error" className="text-sm text-red-300">
                    {errors.message}
                  </p>
                )}
              </div>
              <p className="shrink-0 text-xs text-gray-600">{formData.message.length}/2000</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              type="submit"
              className="micro-button rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-orange-200 sm:text-base"
            >
              Send message
            </button>

            {status && (
              <p
                className={`text-sm ${Object.keys(errors).length > 0 ? 'text-red-300' : 'text-gray-400'}`}
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
