export const MEASUREMENT_ID = 'G-24TD66K0LY';
export const CONSENT_KEY = 'kcode-analytics-consent';

export function readAnalyticsConsent() {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

export function saveAnalyticsConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // The current choice still applies if persistent storage is blocked.
  }
}

export function loadAnalytics() {
  window[`ga-disable-${MEASUREMENT_ID}`] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  if (document.getElementById('kcode-google-analytics')) return;

  const script = document.createElement('script');
  script.id = 'kcode-google-analytics';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.addEventListener('error', () => script.remove(), { once: true });
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, {
    send_page_view: false,
    cookie_domain: window.location.hostname,
    cookie_path: '/',
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
}

export function disableAnalytics() {
  window[`ga-disable-${MEASUREMENT_ID}`] = true;

  // Expire both host-only cookies and cookies set with an explicit domain/path.
  const labels = window.location.hostname.split('.');
  const domains = [''];
  for (let index = 0; index < labels.length - 1; index += 1) {
    domains.push(labels.slice(index).join('.'));
  }
  if (labels.length === 1) domains.push(window.location.hostname);

  const paths = new Set(['/']);
  const segments = window.location.pathname.split('/').filter(Boolean);
  segments.forEach((_, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`;
    paths.add(path);
    paths.add(`${path}/`);
  });

  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    if (!/^(_ga(?:_|$)|_gid$|_gat(?:_|$))/.test(name)) return;
    for (const domain of domains) {
      for (const path of paths) {
        document.cookie = `${name}=; Max-Age=0; path=${path}; SameSite=Lax${domain ? `; domain=${domain}` : ''}`;
      }
    }
  });
}
