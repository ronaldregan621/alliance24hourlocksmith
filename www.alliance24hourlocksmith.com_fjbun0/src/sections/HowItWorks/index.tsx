export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "CALL US",
      description: "Tell us your location and what you need",
      icon: "📞"
    },
    {
      number: "02",
      title: "GET QUOTE",
      description: "Receive transparent pricing before dispatch",
      icon: "💵"
    },
    {
      number: "03",
      title: "WE ARRIVE",
      description: "Mobile technician arrives in 20-30 minutes",
      icon: "🚐"
    },
    {
      number: "04",
      title: "BACK IN!",
      description: "Professional entry without damage",
      icon: "✅"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-slate-900 text-white font-black px-6 py-2 rounded-full border-4 border-slate-900 mb-6 text-sm uppercase tracking-wider">
            Simple Process
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            HOW IT WORKS
          </h2>
          <p className="text-2xl text-slate-700 font-bold max-w-3xl mx-auto">
            From locked out to back in — in 4 easy steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-1 bg-slate-900 -translate-x-1/2 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-slate-900"></div>
                </div>
              )}

              <div className="relative bg-white rounded-2xl p-8 border-4 border-slate-900 shadow-[8px_8px_0_0_rgba(15,23,42,1)] hover:shadow-[12px_12px_0_0_rgba(15,23,42,1)] hover:-translate-y-1 transition-all">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white font-black text-2xl border-4 border-slate-900 shadow-lg">
                  {step.number}
                </div>

                <div className="text-6xl mb-6 mt-4">{step.icon}</div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-slate-700 font-semibold leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Time Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-green-100 text-green-700 font-black px-8 py-4 rounded-full border-4 border-green-600 text-lg shadow-[4px_4px_0_0_rgba(22,163,74,1)]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            AVERAGE TOTAL TIME: 40-60 MINUTES
          </div>
        </div>
      </div>
    </section>
  );
};
