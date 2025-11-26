export const FloatingCTA = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
      <a
        href="tel://+19144064474"
        className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-black px-6 py-4 rounded-full shadow-[0_12px_0_0_rgba(15,23,42,1)] hover:shadow-[0_6px_0_0_rgba(15,23,42,1)] hover:translate-y-1 transition-all duration-200 border-4 border-slate-900"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <span>CAR LOCKOUT? CALL NOW</span>
      </a>
    </div>
  );
};
