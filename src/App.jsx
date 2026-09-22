import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnalyticsConsent from './components/AnalyticsConsent';
import SEO from './components/SEO';
import Home from './components/Routes/Home';

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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });

    const getRevealElements = (root = document) =>
      Array.from(root.querySelectorAll?.('[data-reveal]') ?? []);

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const showRevealElements = () => {
        getRevealElements().forEach((element) => element.classList.add('is-visible'));
      };

      showRevealElements();

      const fallbackMutationObserver = new MutationObserver(showRevealElements);
      fallbackMutationObserver.observe(document.body, { childList: true, subtree: true });

      return () => fallbackMutationObserver.disconnect();
    }

    const isStory = ['/', '/about', '/projects', '/contact'].includes(location.pathname);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (isStory) {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.toggle('is-visible', entry.isIntersecting);
          }
        });
      },
      {
        threshold: isStory ? 0 : 0.13,
        rootMargin: isStory ? `0px 0px -${Math.round(window.innerHeight * 0.12)}px 0px` : '-2% 0px -8% 0px',
      },
    );

    const exitObserver = isStory ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) entry.target.classList.remove('is-visible');
      });
    }, { rootMargin: '64px 0px', threshold: 0 }) : null;

    const observeElement = (element) => {
      observer.observe(element);
      exitObserver?.observe(element);
    };

    const observeRevealElements = (root = document) => {
      if (root instanceof Element && root.matches('[data-reveal]')) {
        observeElement(root);
      }

      getRevealElements(root).forEach(observeElement);
    };

    observeRevealElements();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            observeRevealElements(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      exitObserver?.disconnect();
    };
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <SEO />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1" tabIndex="-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
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
