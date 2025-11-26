export const DesktopNav = () => {
  return (
    <nav
      aria-label="primary"
      className="font-semibold caret-transparent gap-x-4 hidden min-h-0 min-w-0 gap-y-4 md:flex md:min-h-[auto] md:min-w-[auto]"
    >
      <a
        href="#services"
        className="caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
      >
        Services
      </a>
      <a
        href="#areas"
        className="caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
      >
        Locations
      </a>
      <a
        href="/contact/"
        className="caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
      >
        Contact
      </a>
    </nav>
  );
};
