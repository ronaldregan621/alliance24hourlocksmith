export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(249,115,22,.2) 35px, rgba(249,115,22,.2) 70px)'
        }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            LOCKED OUT
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              RIGHT NOW?
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-slate-200 font-bold mb-12">
            We're dispatching a mobile technician to your location!
          </p>

          <a
            href="tel://+19144064474"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-black px-16 py-8 rounded-2xl border-4 border-slate-900 shadow-[12px_12px_0_0_rgba(15,23,42,1)] hover:shadow-[6px_6px_0_0_rgba(15,23,42,1)] hover:translate-x-1.5 hover:translate-y-1.5 transition-all text-2xl"
          >
            <svg className="w-10 h-10 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            CALL NOW: (914) 406-4474
          </a>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-2xl p-6 border-2 border-blue-500">
            <div className="text-4xl mb-3">📍</div>
            <div className="text-white font-black text-lg mb-2">SERVICE AREA</div>
            <div className="text-slate-300 font-semibold">All of Westchester County</div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 border-2 border-orange-500">
            <div className="text-4xl mb-3">⏰</div>
            <div className="text-white font-black text-lg mb-2">HOURS</div>
            <div className="text-slate-300 font-semibold">24/7 Emergency Service</div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 border-2 border-orange-500">
            <div className="text-4xl mb-3">⚡</div>
            <div className="text-white font-black text-lg mb-2">RESPONSE TIME</div>
            <div className="text-slate-300 font-semibold">35-55 Minutes Average</div>
          </div>
        </div>
      </div>
    </section>
  );
};
