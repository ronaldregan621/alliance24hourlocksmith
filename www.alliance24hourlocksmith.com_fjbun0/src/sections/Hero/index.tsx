export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(249,115,22,.1) 35px, rgba(249,115,22,.1) 70px)'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full border-4 border-slate-900 shadow-[6px_6px_0_0_rgba(15,23,42,1)] mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="font-black text-sm uppercase tracking-wider">24/7 Emergency • Westchester County</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-none">
            LOCKED OUT
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400">
              OF YOUR CAR?
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-slate-200 font-bold mb-12 max-w-4xl mx-auto">
            We'll Get You Back In — FAST!
            <span className="block mt-2 text-blue-400">Average Arrival: 35-55 Minutes</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="tel://+19144064474"
              className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white font-black px-10 py-6 rounded-2xl border-4 border-slate-900 shadow-[8px_8px_0_0_rgba(15,23,42,1)] hover:shadow-[4px_4px_0_0_rgba(15,23,42,1)] hover:translate-x-1 hover:translate-y-1 transition-all text-xl"
            >
              <div className="flex items-center gap-3">
                <svg className="w-7 h-7 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                CALL NOW: (914) 406-4474
              </div>
            </a>

            <a
              href="#services"
              className="bg-white text-slate-900 font-black px-10 py-6 rounded-2xl border-4 border-slate-900 shadow-[8px_8px_0_0_rgba(15,23,42,1)] hover:shadow-[4px_4px_0_0_rgba(15,23,42,1)] hover:translate-x-1 hover:translate-y-1 transition-all text-xl"
            >
              VIEW SERVICES
            </a>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: '⚡', text: 'FAST RESPONSE' },
              { icon: '✓', text: 'NO DAMAGE' },
              { icon: '$', text: 'FAIR PRICING' },
              { icon: '🔒', text: 'BACKGROUND CHECKED' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 text-white px-6 py-3 rounded-full border-2 border-blue-500 font-black text-sm"
              >
                <span className="mr-2">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
