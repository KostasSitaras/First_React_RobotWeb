const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-7 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-medium text-orange-200">Konstantinos Sitaras</p>
          <p className="mt-1">Junior Software Engineer · Thessaloniki</p>
        </div>
        <p>© {new Date().getFullYear()} Konstantinos Sitaras. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
