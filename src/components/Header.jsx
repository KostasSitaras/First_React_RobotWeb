import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const linkClasses = ({ isActive }) =>
    `nav-link text-sm tracking-[0.18em] uppercase ${
      isActive ? 'is-active text-white' : 'text-gray-400 hover:text-white'
    }`;

  const openMenu = () => {
    setIsClosing(false);
    setIsOpen(true);
  };

  const closeMenu = () => {
    if (!isOpen || isClosing) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsOpen(false);
      setIsClosing(false);
      return;
    }

    setIsClosing(true);
    window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 220);
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const cvPath = `${import.meta.env.BASE_URL}Sitaras_Konstantinos_Junior_Software_Engineer_CV.pdf`;

  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
      <NavLink to="/" className="brand-link text-2xl font-semibold tracking-[0.2em]">
        KCODE<span className="text-orange-300">.</span>
      </NavLink>

      <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
        {navigation.map((item) => (
          <NavLink key={item.to} to={item.to} className={linkClasses}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <a
        href={cvPath}
        download="Sitaras_Konstantinos_Junior_Software_Engineer_CV.pdf"
        className="micro-button hidden rounded-full border border-white/20 bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-orange-200 md:inline-flex"
      >
        Download CV
      </a>

      <button
        type="button"
        className={`rounded-lg border p-2 text-2xl transition-all duration-300 md:hidden ${
          isOpen && !isClosing ? 'border-orange-200/40 bg-white/10' : 'border-white/15'
        }`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={isOpen && !isClosing}
      >
        <span
          className={`inline-block transition-transform duration-300 ${isOpen && !isClosing ? 'rotate-90' : 'rotate-0'}`}
        >
          {isOpen && !isClosing ? '×' : '☰'}
        </span>
      </button>

      {isOpen && (
        <div
          className={`mobile-menu-panel absolute left-5 right-5 top-20 z-50 rounded-2xl border border-white/10 bg-black/95 p-6 shadow-2xl backdrop-blur md:hidden ${
            isClosing ? 'is-closing' : ''
          }`}
        >
          <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `${linkClasses({ isActive })} mobile-menu-item`}
                style={{ animationDelay: `${90 + index * 70}ms` }}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={cvPath}
              download="Sitaras_Konstantinos_Junior_Software_Engineer_CV.pdf"
              onClick={closeMenu}
              className="micro-button mobile-menu-item mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black"
              style={{ animationDelay: '370ms' }}
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
