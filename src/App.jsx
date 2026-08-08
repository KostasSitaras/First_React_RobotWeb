import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/Routes/About';
import Projects from './components/Routes/Projects';
import Contact from './components/Routes/Contact';

export default function App() {
  const location = useLocation();

  useEffect(() => {
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
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-orange-400/20 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-amber-300/10 blur-[140px]" />
      </div>

      <Header />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Hero />} />
        </Routes>
      </div>

      <Footer />
    </main>
  );
}
