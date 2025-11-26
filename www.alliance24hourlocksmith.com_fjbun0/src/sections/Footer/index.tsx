export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t-4 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-xl border-4 border-white shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-black">ALLIANCE 24/7</div>
                <div className="text-sm font-black text-slate-400 uppercase">Car Lockout Pros</div>
              </div>
            </div>
            <p className="text-slate-400 font-semibold leading-relaxed mb-6">
              Professional mobile car lockout service across Westchester County, NY. Available 24/7 for all your automotive locksmith emergencies.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="bg-green-500/20 text-green-400 font-black px-4 py-2 rounded-full border-2 border-green-500 text-xs uppercase">
                ✓ Licensed
              </span>
              <span className="bg-green-500/20 text-green-400 font-black px-4 py-2 rounded-full border-2 border-green-500 text-xs uppercase">
                ✓ Insured
              </span>
              <span className="bg-green-500/20 text-green-400 font-black px-4 py-2 rounded-full border-2 border-green-500 text-xs uppercase">
                ✓ Background Checked
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-black mb-6 uppercase">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-slate-400 font-bold hover:text-blue-400 transition-colors">
                  Car Lockout Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-slate-400 font-bold hover:text-blue-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-slate-400 font-bold hover:text-blue-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 font-bold hover:text-blue-400 transition-colors">
                  Service Areas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-black mb-6 uppercase">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-slate-400 font-bold mb-1">CALL OR TEXT</div>
                <a href="tel://+19144064474" className="text-2xl font-black text-blue-400 hover:text-blue-300 transition-colors">
                  (914) 406-4474
                </a>
              </div>
              <div>
                <div className="text-sm text-slate-400 font-bold mb-1">SERVICE AREA</div>
                <div className="text-white font-bold">Westchester County, NY</div>
              </div>
              <div>
                <div className="text-sm text-slate-400 font-bold mb-1">HOURS</div>
                <div className="text-white font-bold">24/7 Emergency Service</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 font-bold text-sm">
            © 2025 Alliance 24hr Locksmith. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-slate-400 font-bold text-sm ml-2">Trusted by Westchester drivers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
