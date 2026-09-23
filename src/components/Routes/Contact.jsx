import { useRef, useState } from 'react';
import ChapterPage, { Chapter } from '../ChapterPage';
import { WEB3FORMS_ACCESS_KEY } from '../../config/contact';
import { submitContact } from '../../submitContact';

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
  const [isSending, setIsSending] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);
  const sendingRef = useRef(false);

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
      setSubmitFailed(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sendingRef.current) return;

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitFailed(true);
      setStatus('Please check the highlighted fields.');
      event.currentTarget.elements.namedItem(Object.keys(nextErrors)[0])?.focus();
      return;
    }

    const botcheck = event.currentTarget.elements.namedItem('botcheck').checked;
    setErrors({});
    setSubmitFailed(false);
    sendingRef.current = true;
    setIsSending(true);
    setStatus('Sending your message…');

    try {
      await submitContact({ ...formData, botcheck }, WEB3FORMS_ACCESS_KEY);
      setFormData(initialForm);
      setStatus('Thank you! Your message has been sent. I will get back to you soon.');
    } catch (error) {
      setSubmitFailed(true);
      setStatus(error.message);
    } finally {
      sendingRef.current = false;
      setIsSending(false);
    }
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
          <div
            data-reveal="up"
            className="bg-black p-6 sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Email</p>
            </div>
            <p className="mt-7 break-all text-base sm:text-lg">kostassitaras1@gmail.com</p>
          </div>

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
              Leave your details and a short message. Send it directly from this page,
              and I will get back to you by email.
            </p>
            <p className="mt-5 text-sm leading-6 text-gray-600">
              Your name, email and message are sent through Web3Forms to deliver your enquiry.
            </p>
          </div>

          <form data-reveal="up" onSubmit={handleSubmit} noValidate aria-busy={isSending} className="space-y-5">
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                disabled={isSending}
                required
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
                disabled={isSending}
                required
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
                disabled={isSending}
                required
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
                disabled={isSending}
                className="micro-button rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-orange-200 disabled:cursor-wait disabled:opacity-60 sm:text-base"
              >
                {isSending ? 'Sending…' : 'Send message'}
              </button>

              {status && (
                <p
                  className={`text-sm ${submitFailed ? 'text-red-300' : 'text-gray-400'}`}
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
