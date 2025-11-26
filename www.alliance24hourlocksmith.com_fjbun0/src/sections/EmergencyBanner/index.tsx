export const EmergencyBanner = () => {
  return (
    <section className="relative py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 overflow-hidden border-y-4 border-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 text-white">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
          <p className="text-sm sm:text-lg font-black drop-shadow-lg">
            <span className="hidden sm:inline">CAR LOCKOUT EMERGENCY? </span>
            MOBILE TECHNICIAN DISPATCHING NOW — CALL (914) 406-4474
          </p>
        </div>
      </div>
    </section>
  );
};
