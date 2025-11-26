export const WhyUs = () => {
  const reasons = [
    {
      icon: "⚡",
      title: "LIGHTNING FAST",
      description: "Average arrival time of 35-55 minutes across Westchester County"
    },
    {
      icon: "💪",
      title: "NO DAMAGE GUARANTEE",
      description: "Professional tools and techniques ensure zero damage to your vehicle"
    },
    {
      icon: "💰",
      title: "UPFRONT PRICING",
      description: "Clear quotes over the phone before we dispatch — no surprises"
    },
    {
      icon: "🛡️",
      title: "LICENSED & INSURED",
      description: "Fully certified professionals with comprehensive insurance coverage"
    },
    {
      icon: "✅",
      title: "BACKGROUND CHECKED",
      description: "All technicians are background checked for your safety and peace of mind"
    },
    {
      icon: "📱",
      title: "24/7 AVAILABILITY",
      description: "Day or night, weekends and holidays — we're always ready"
    },
    {
      icon: "🚐",
      title: "MOBILE SERVICE",
      description: "Fully equipped mobile units come directly to your location"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white font-black px-6 py-2 rounded-full border-4 border-slate-900 mb-6 text-sm uppercase tracking-wider shadow-[4px_4px_0_0_rgba(15,23,42,1)]">
            The Alliance Difference
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            WHY CHOOSE US?
          </h2>
          <p className="text-2xl text-slate-700 font-bold max-w-3xl mx-auto">
            We're not just fast — we're the best in Westchester County
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-4 border-slate-900 shadow-[6px_6px_0_0_rgba(15,23,42,1)] hover:shadow-[10px_10px_0_0_rgba(15,23,42,1)] hover:-translate-y-1 transition-all"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-700 font-semibold leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-950 rounded-3xl p-12 border-4 border-slate-900 shadow-[12px_12px_0_0_rgba(15,23,42,1)]">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
                24/7
              </div>
              <div className="text-white font-bold">Always Available</div>
            </div>
            <div>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                35-55
              </div>
              <div className="text-white font-bold">Min Arrival</div>
            </div>
            <div>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                100%
              </div>
              <div className="text-white font-bold">Licensed</div>
            </div>
            <div>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                LOCAL
              </div>
              <div className="text-white font-bold">Technicians</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
