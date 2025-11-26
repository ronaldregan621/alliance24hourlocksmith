export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-xl border-4 border-slate-900 shadow-[4px_4px_0_0_rgba(15,23,42,1)]">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 leading-tight">ALLIANCE 24/7</div>
              <div className="text-xs font-black text-slate-700 uppercase tracking-wider">Car Lockout Pros</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-900 font-black text-lg hover:text-blue-600 transition-colors">
              SERVICES
            </a>
            <a href="#why-us" className="text-slate-900 font-black text-lg hover:text-blue-600 transition-colors">
              WHY US
            </a>
            <a href="#how-it-works" className="text-slate-900 font-black text-lg hover:text-blue-600 transition-colors">
              HOW IT WORKS
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="tel://+19144064474"
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-black px-6 py-4 rounded-full border-4 border-slate-900 shadow-[4px_4px_0_0_rgba(15,23,42,1)] hover:shadow-[2px_2px_0_0_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            <span className="hidden sm:inline">CALL NOW: </span>(914) 406-4474
          </a>
        </div>
      </div>
    </header>
  );
};
