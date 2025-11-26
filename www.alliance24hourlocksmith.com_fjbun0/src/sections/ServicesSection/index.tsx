export const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Car Lockout Service",
      description: "Keys locked inside? We provide fast, non-destructive entry for all vehicle makes and models.",
      urgent: true,
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      title: "Lost Car Keys",
      description: "Lost your only key? We can cut and program new keys on-site for most vehicles.",
      urgent: true,
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Broken Key Extraction",
      description: "Key broke off in the lock? We safely extract broken keys without damaging your vehicle.",
      urgent: false,
      gradient: "from-slate-700 to-slate-900"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Transponder Key Programming",
      description: "Need a new transponder key programmed? We handle chip keys and key fobs on location.",
      urgent: false,
      gradient: "from-slate-700 to-slate-900"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Car Key Duplication",
      description: "Need a spare car key? We cut and program duplicate keys while you wait.",
      urgent: false,
      gradient: "from-slate-700 to-slate-900"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Ignition Repair",
      description: "Ignition cylinder issues? We repair and replace ignition systems for all vehicle types.",
      urgent: false,
      gradient: "from-slate-700 to-slate-900"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 drop-shadow-lg">
            Mobile Car Lockout Services
          </h2>
          <p className="text-2xl text-slate-700 max-w-3xl mx-auto font-bold">
            Specialized in automotive lockouts and key services. We come to you — anywhere in Westchester County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border-4 border-slate-900 shadow-[8px_8px_0_0_rgba(15,23,42,1)] hover:shadow-[12px_12px_0_0_rgba(15,23,42,1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {service.urgent && (
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-black px-4 py-2 rounded-full shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    URGENT
                  </span>
                </div>
              )}
              
              <div className={`w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl border-4 border-slate-900`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-700 leading-relaxed mb-6 font-semibold">
                {service.description}
              </p>

              <a
                href="tel://+19144064474"
                className="inline-flex items-center gap-2 text-orange-600 font-black hover:gap-3 transition-all text-lg"
              >
                CALL FOR SERVICE
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="tel://+19144064474"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-black px-12 py-6 rounded-2xl shadow-[0_20px_60px_-15px_rgba(249,115,22,0.5)] hover:shadow-[0_20px_80px_-15px_rgba(249,115,22,0.7)] transition-all duration-300 hover:scale-105 text-xl"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            LOCKED OUT? CALL (914) 406-4474
          </a>
        </div>
      </div>
    </section>
  );
};
