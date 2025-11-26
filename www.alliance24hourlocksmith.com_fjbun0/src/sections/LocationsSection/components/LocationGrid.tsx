export const LocationGrid = () => {
  return (
    <div
      role="list"
      className="caret-transparent gap-x-2.5 grid grid-cols-[repeat(2,1fr)] gap-y-2.5 md:grid-cols-[repeat(3,1fr)]"
    >
      <a
        role="listitem"
        href="/white-plains-locksmith/"
        className="text-slate-700 font-semibold bg-slate-50 caret-transparent block border border-slate-200 px-3 py-2.5 rounded-[10px] border-solid"
      >
        White Plains
      </a>
      <div
        role="listitem"
        className="text-slate-700 font-semibold bg-slate-50 caret-transparent border border-slate-200 px-3 py-2.5 rounded-[10px] border-solid"
      >
        Purchase
      </div>
      <div
        role="listitem"
        className="text-slate-700 font-semibold bg-slate-50 caret-transparent border border-slate-200 px-3 py-2.5 rounded-[10px] border-solid"
      >
        Rye
      </div>
      <div
        role="listitem"
        className="text-slate-700 font-semibold bg-slate-50 caret-transparent border border-slate-200 px-3 py-2.5 rounded-[10px] border-solid"
      >
        Scarsdale
      </div>
      <a
        role="listitem"
        href="/tarrytown-locksmith/"
        className="text-slate-700 font-semibold bg-slate-50 caret-transparent block border border-slate-200 px-3 py-2.5 rounded-[10px] border-solid"
      >
        Tarrytown
      </a>
      <a
        role="listitem"
        href="/new-rochelle-locksmith/"
        className="text-slate-700 font-semibold bg-slate-50 caret-transparent block border border-slate-200 px-3 py-2.5 rounded-[10px] border-solid"
      >
        New Rochelle
      </a>
      <a
        role="listitem"
        href="/yonkers-locksmith/"
        className="text-slate-700 font-semibold bg-slate-50 caret-transparent block border border-slate-200 px-3 py-2.5 rounded-[10px] border-solid"
      >
        Yonkers
      </a>
    </div>
  );
};
