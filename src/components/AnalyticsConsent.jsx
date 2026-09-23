import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONSENT_KEY, disableAnalytics, loadAnalytics, readAnalyticsConsent, saveAnalyticsConsent } from '../analytics';

const AnalyticsConsent = () => {
  const location = useLocation();
  const [consent, setConsent] = useState(readAnalyticsConsent);
  const [isVisible, setIsVisible] = useState(() => !readAnalyticsConsent());
  const lastPageView = useRef(null);
  const returnFocus = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isVisible && returnFocus.current) dialogRef.current?.focus();
  }, [isVisible]);

  useEffect(() => {
    const openPreferences = () => {
      returnFocus.current = document.activeElement;
      setIsVisible(true);
    };
    const syncConsent = (event) => {
      if (event.key !== CONSENT_KEY && event.key !== null) return;
      const nextConsent = readAnalyticsConsent();
      if (nextConsent !== 'granted') disableAnalytics();
      setConsent(nextConsent);
      setIsVisible(!nextConsent);
    };
    window.addEventListener('open-analytics-preferences', openPreferences);
    window.addEventListener('storage', syncConsent);
    return () => {
      window.removeEventListener('open-analytics-preferences', openPreferences);
      window.removeEventListener('storage', syncConsent);
    };
  }, []);

  useEffect(() => {
    if (consent === 'granted') {
      loadAnalytics();
      if (lastPageView.current === location.pathname) return;
      lastPageView.current = location.pathname;
      window.gtag?.('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
      });
    } else {
      disableAnalytics();
      lastPageView.current = null;
    }
  }, [consent, location.pathname]);

  const closePreferences = () => {
    setIsVisible(false);
    returnFocus.current?.focus();
    returnFocus.current = null;
  };

  const chooseConsent = (value) => {
    if (value === 'denied') disableAnalytics();
    saveAnalyticsConsent(value);
    setConsent(value);
    closePreferences();
  };

  if (!isVisible) return null;

  return (
    <div
      ref={dialogRef}
      tabIndex={-1}
      className="fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[100] mx-auto max-h-[calc(100dvh-2rem)] max-w-3xl overflow-y-auto overscroll-contain rounded-3xl border border-white/10 bg-black/95 p-5 shadow-xl sm:p-6"
      role="dialog"
      aria-modal="false"
      aria-labelledby="analytics-consent-title"
      aria-describedby="analytics-consent-description"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
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
          {consent && (
            <p className="mt-2 text-sm text-gray-400">
              Current choice: analytics {consent === 'granted' ? 'enabled' : 'disabled'}.
            </p>
          )}
        </div>

        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={() => chooseConsent('denied')}
            className="micro-button rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:border-white/40 hover:bg-white/5"
          >
            Reject analytics
          </button>
          <button
            type="button"
            onClick={() => chooseConsent('granted')}
            className="micro-button rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-orange-200"
          >
            Accept analytics
          </button>
          {consent && (
            <button type="button" onClick={closePreferences} className="min-h-11 px-3 text-sm text-gray-300 underline underline-offset-4">
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsConsent;
