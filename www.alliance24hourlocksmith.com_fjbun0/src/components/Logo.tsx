export const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-3 group">
      <div className="relative">
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-xl shadow-xl border-4 border-slate-900">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-black text-slate-900 leading-tight drop-shadow-sm">ALLIANCE 24/7</span>
        <span className="text-xs text-slate-700 font-black uppercase tracking-wide">Mobile Car Lockout</span>
      </div>
    </a>
  );
};
