import { Link } from 'react-router-dom';

const Footer = () => {
  const openAnalyticsPreferences = () => {
    window.dispatchEvent(new Event('open-analytics-preferences'));
  };

  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="flex w-full flex-col gap-4 px-4 py-7 text-sm text-gray-500 sm:flex-row sm:items-end sm:justify-between sm:px-5 lg:px-8 2xl:px-10">
        <div>
          <p className="font-medium text-orange-200">Konstantinos Sitaras</p>
          <p className="mt-1">Junior Software Engineer · Thessaloniki</p>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <p>© {new Date().getFullYear()} Konstantinos Sitaras. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer navigation">
            <Link className="transition hover:text-white" to="/faq">
              FAQ
            </Link>
            <Link className="transition hover:text-white" to="/privacy">
              Privacy Policy
            </Link>
            <Link className="transition hover:text-white" to="/terms">
              Terms of Use
            </Link>
            <button
              type="button"
              onClick={openAnalyticsPreferences}
              className="transition hover:text-white"
            >
              Analytics preferences
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
