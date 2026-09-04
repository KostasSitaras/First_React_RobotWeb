import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnalyticsConsent from './components/AnalyticsConsent';
import SEO from './components/SEO';
import Hero from './components/Hero';

const About = lazy(() => import('./components/Routes/About'));
const Projects = lazy(() => import('./components/Routes/Projects'));
const Contact = lazy(() => import('./components/Routes/Contact'));
const PrivacyPolicy = lazy(() => import('./components/Routes/PrivacyPolicy'));
const Terms = lazy(() => import('./components/Routes/Terms'));
const FAQ = lazy(() => import('./components/Routes/FAQ'));
const NotFound = lazy(() => import('./components/Routes/NotFound'));

const PageLoader = () => (
  <div className="page-shell" role="status" aria-live="polite">
    <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Loading page…</p>
  </div>
);

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });

    const revealElements = Array.from(document.querySelectorAll('[data-reveal]'));

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '-6% 0px -8% 0px',
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <SEO />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <div className="ambient-background pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <Header />

      <main id="main-content" className="flex-1" tabIndex="-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <AnalyticsConsent />
    </div>
  );
}
