import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="page-shell flex min-h-[65vh] items-center">
      <div data-reveal="up" className="max-w-3xl">
        <p className="eyebrow">404</p>
        <h1 className="page-title">This page does not exist.</h1>
        <p className="page-copy">
          The link may be outdated or the page may have moved. You can return home or continue
          exploring my projects.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link to="/" className="micro-button rounded-full bg-white px-6 py-3 font-medium text-black hover:bg-orange-200">
            Back home
          </Link>
          <Link
            to="/projects"
            className="micro-button rounded-full border border-white/20 px-6 py-3 font-medium hover:border-white/50 hover:bg-white/5"
          >
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
