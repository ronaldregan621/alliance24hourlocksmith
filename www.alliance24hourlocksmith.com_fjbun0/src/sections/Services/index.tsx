export const Services = () => {
  const services = [
    {
      title: "CAR LOCKOUT",
      description: "Keys locked inside? We'll get you back in your vehicle fast without any damage.",
      icon: "🚗",
      urgent: true
    },
    {
      title: "LOST CAR KEYS",
      description: "Lost your only key? We cut and program new keys on-site for most vehicles.",
      icon: "🔑",
      urgent: true
    },
    {
      title: "BROKEN KEY EXTRACTION",
      description: "Key snapped in the lock? We safely extract it without damaging your car.",
      icon: "🔧",
      urgent: false
    },
    {
      title: "KEY PROGRAMMING",
      description: "Need a transponder key programmed? We handle chip keys and fobs on location.",
      icon: "💻",
      urgent: false
    },
    {
      title: "IGNITION REPAIR",
      description: "Ignition cylinder problems? We repair and replace ignition systems.",
      icon: "🔥",
      urgent: false
    },
    {
      title: "KEY DUPLICATION",
      description: "Need a spare? We cut and program duplicate keys while you wait.",
      icon: "📋",
      urgent: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 font-black px-6 py-2 rounded-full border-2 border-blue-600 mb-6 text-sm uppercase tracking-wider">
            What We Do
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            CAR LOCKOUT SERVICES
          </h2>
          <p className="text-2xl text-slate-700 font-bold max-w-3xl mx-auto">
            Mobile service across Westchester County — We come to you!
            <span className="block mt-2 text-lg text-green-600">All technicians are background checked for your safety</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border-4 border-slate-900 shadow-[8px_8px_0_0_rgba(15,23,42,1)] hover:shadow-[12px_12px_0_0_rgba(15,23,42,1)] hover:-translate-y-1 transition-all"
            >
              {service.urgent && (
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-black px-4 py-2 rounded-full border-4 border-slate-900 text-xs uppercase shadow-lg">
                    <span className="relative flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      URGENT
                    </span>
                  </div>
                </div>
              )}

              <div className="text-6xl mb-6">{service.icon}</div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-700 font-semibold leading-relaxed mb-6">
                {service.description}
              </p>

              <a
                href="tel://+19144064474"
                className="inline-flex items-center gap-2 text-blue-600 font-black hover:gap-3 transition-all text-lg"
              >
                CALL NOW
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="tel://+19144064474"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-black px-12 py-6 rounded-2xl border-4 border-slate-900 shadow-[8px_8px_0_0_rgba(15,23,42,1)] hover:shadow-[4px_4px_0_0_rgba(15,23,42,1)] hover:translate-x-1 hover:translate-y-1 transition-all text-xl"
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
