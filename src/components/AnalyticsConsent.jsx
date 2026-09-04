import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MEASUREMENT_ID = 'G-24TD66K0LY';
const CONSENT_KEY = 'kcode-analytics-consent';

const loadAnalytics = () => {
  window[`ga-disable-${MEASUREMENT_ID}`] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  if (!document.getElementById('kcode-google-analytics')) {
    const script = document.createElement('script');
    script.id = 'kcode-google-analytics';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID, { send_page_view: false });
  }
};

const disableAnalytics = () => {
  window[`ga-disable-${MEASUREMENT_ID}`] = true;

  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    if (name === '_ga' || name.startsWith('_ga_') || name === '_gid' || name === '_gat') {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    }
  });
};

const AnalyticsConsent = () => {
  const location = useLocation();
  const [consent, setConsent] = useState(() => localStorage.getItem(CONSENT_KEY));
  const [isVisible, setIsVisible] = useState(() => !localStorage.getItem(CONSENT_KEY));

  useEffect(() => {
    const openPreferences = () => setIsVisible(true);
    window.addEventListener('open-analytics-preferences', openPreferences);
    return () => window.removeEventListener('open-analytics-preferences', openPreferences);
  }, []);

  useEffect(() => {
    if (consent === 'granted') {
      loadAnalytics();
      window.gtag?.('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
      });
    }
  }, [consent, location.pathname]);

  const acceptAnalytics = () => {
    localStorage.setItem(CONSENT_KEY, 'granted');
    setConsent('granted');
    setIsVisible(false);
  };

  const rejectAnalytics = () => {
    localStorage.setItem(CONSENT_KEY, 'denied');
    disableAnalytics();
    setConsent('denied');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/95 p-5 shadow-2xl backdrop-blur-xl sm:p-6"
      role="dialog"
      aria-modal="false"
      aria-labelledby="analytics-consent-title"
      aria-describedby="analytics-consent-description"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p id="analytics-consent-title" className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
            Analytics preferences
          </p>
          <p id="analytics-consent-description" className="mt-2 text-sm leading-6 text-gray-400">
            This portfolio uses Google Analytics only with your permission to understand visits
            and improve the site. You can accept or reject analytics without affecting the
            website experience.{' '}
            <Link className="project-link" to="/privacy">
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={rejectAnalytics}
            className="micro-button rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:border-white/40 hover:bg-white/5"
          >
            Reject analytics
          </button>
          <button
            type="button"
            onClick={acceptAnalytics}
            className="micro-button rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-orange-200"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsConsent;
