export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 text-white">
              <h2 className="text-4xl font-black mb-4">
                Locked Out Right Now?
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Our mobile technicians are standing by 24/7. We'll dispatch immediately to your location anywhere in Westchester County.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 font-semibold">Call or Text Now</div>
                    <a href="tel://+19144064474" className="text-2xl font-black hover:text-blue-400 transition-colors">
                      (914) 406-4474
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 font-semibold">Service Hours</div>
                    <div className="text-xl font-black">24/7 Mobile Service</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 font-semibold">Service Area</div>
                    <div className="text-xl font-black">All of Westchester County</div>
                  </div>
                </div>
              </div>

              <a
                href="tel://+19144064474"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-8 py-5 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 w-full justify-center"
              >
                <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-lg">Call for Immediate Dispatch</span>
              </a>
            </div>

            <div className="bg-white p-12">
              <h3 className="text-3xl font-black text-slate-900 mb-6">
                Request a Quote
              </h3>
              
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-slate-900 font-medium"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-slate-900 font-medium"
                    placeholder="(914) 555-0123"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Vehicle Make & Model
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-slate-900 font-medium"
                    placeholder="e.g., 2020 Honda Accord"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Service Needed
                  </label>
                  <select className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-slate-900 font-medium">
                    <option>Car Lockout</option>
                    <option>Lost Car Keys</option>
                    <option>Broken Key Extraction</option>
                    <option>Key Programming</option>
                    <option>Ignition Repair</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Your Location (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-slate-900 font-medium"
                    placeholder="City or address"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-8 py-5 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Submit Request
                </button>

                <p className="text-xs text-slate-500 text-center">
                  For immediate assistance, please call us directly at (914) 406-4474
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
