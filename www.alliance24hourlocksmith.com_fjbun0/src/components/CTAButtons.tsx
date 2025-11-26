export const CTAButtons = () => {
  return (
    <div className="items-center caret-transparent gap-x-3 flex flex-wrap gap-y-3">
      <a
        href="tel://+19144064474"
        aria-label="Tap to call now (914) 406-4474"
        className="font-extrabold items-center bg-gray-800 shadow-[rgba(30,42,54,0.15)_0px_10px_30px_0px] caret-transparent gap-x-2.5 flex gap-y-2.5 px-[18px] py-3 rounded-xl"
      >
        <img
          src="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-4.svg"
          alt="Icon"
          className="caret-transparent"
        />
        <span className="caret-transparent block">
          Call Now: (914) 406-4474
        </span>
      </a>
      <a
        href="#quote"
        className="text-gray-800 font-bold bg-white caret-transparent block border border-slate-200 px-4 py-3 rounded-xl border-solid"
      >
        Get a Quote
      </a>
      <span
        aria-label="licensed and insured"
        className="text-green-600 text-xs font-bold bg-emerald-50 caret-transparent block leading-[18px] border border-emerald-100 px-2.5 py-1.5 rounded-[999px] border-solid"
      >
        Licensed • Insured • 24/7
      </span>
    </div>
  );
};
