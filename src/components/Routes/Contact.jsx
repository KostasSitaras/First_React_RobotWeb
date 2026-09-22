import { useState } from 'react';
import ChapterPage, { Chapter } from '../ChapterPage';

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
      event.currentTarget.elements.namedItem(Object.keys(nextErrors)[0])?.focus();
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
    <ChapterPage>
      <Chapter label="Contact — get in touch">
      <div data-reveal="up" className="max-w-6xl">
        <p className="eyebrow">Contact / The next chapter</p>
        <h1 className="page-title max-w-5xl">
          Good opportunities usually
          <span className="block text-gray-500">start with a conversation.</span>
        </h1>
        <p className="page-copy max-w-3xl">
          I am open to junior software engineering, front-end and full-stack opportunities
          in Thessaloniki or remote. If you have a role, project or idea that could be a good
          fit, I would be glad to hear about it.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
        <a
          data-reveal="up"
          href="mailto:kostassitaras1@gmail.com?subject=Portfolio%20Contact"
          className="group bg-black p-6 transition hover:bg-white/[0.04] sm:p-7"
        >
          <div className="flex items-start justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Email</p>
            <span className="text-gray-600 transition group-hover:text-orange-200" aria-hidden="true">↗</span>
          </div>
          <p className="mt-7 break-all text-base sm:text-lg">kostassitaras1@gmail.com</p>
        </a>

        <a
          data-reveal="up"
          href="https://www.linkedin.com/in/konstantinos-sitaras-731407253/"
          target="_blank"
          rel="noreferrer"
          className="group bg-black p-6 transition hover:bg-white/[0.04] sm:p-7 delay-1"
        >
          <div className="flex items-start justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.18em] text-gray-500">LinkedIn</p>
            <span className="text-gray-600 transition group-hover:text-orange-200" aria-hidden="true">↗</span>
          </div>
          <p className="mt-7 text-base sm:text-lg">Connect professionally</p>
        </a>

        <a
          data-reveal="up"
          href="https://github.com/KostasSitaras"
          target="_blank"
          rel="noreferrer"
          className="group bg-black p-6 transition hover:bg-white/[0.04] sm:p-7 delay-2"
        >
          <div className="flex items-start justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.18em] text-gray-500">GitHub</p>
            <span className="text-gray-600 transition group-hover:text-orange-200" aria-hidden="true">↗</span>
          </div>
          <p className="mt-7 text-base sm:text-lg">Explore my code</p>
        </a>
      </div>

      </Chapter>
      <Chapter label="Send a message">
      <div
        className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16"
      >
        <div data-reveal="up">
          <p className="eyebrow">Send a message</p>
          <h2 className="text-[clamp(1.75rem,3vw,3.4rem)] font-semibold leading-[1.1] tracking-tight">
            Tell me what you are building — or who you are looking for.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Leave your details and a short message. The form prepares an email addressed
            directly to me, so you stay in control of what is sent.
          </p>
          <p className="mt-5 text-sm leading-6 text-gray-600">
            Your information is not stored by this website.
          </p>
        </div>

        <form data-reveal="up" onSubmit={handleSubmit} noValidate className="space-y-5">
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
              className={`w-full rounded-2xl border bg-white/[0.025] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-200/60 ${
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
              inputMode="email"
              autoCapitalize="none"
              spellCheck={false}
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full rounded-2xl border bg-white/[0.025] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-200/60 ${
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
              rows={7}
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`w-full resize-y rounded-2xl border bg-white/[0.025] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-200/60 ${
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
      </Chapter>
    </ChapterPage>
  );
};

export default Contact;
