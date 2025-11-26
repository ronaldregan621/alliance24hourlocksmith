export const HeroCard = () => {
  return (
    <div className="caret-transparent">
      <div className="bg-white shadow-[rgba(2,21,69,0.04)_0px_2px_8px_0px] caret-transparent border border-slate-200 p-4 rounded-[14px] border-solid">
        <h3 className="text-lg font-bold caret-transparent leading-[27px] mt-1.5 mb-2">
          Immediate Help
        </h3>
        <p className="text-slate-700 text-[15px] caret-transparent leading-[22.5px]">
          Tap to connect with a dispatcher now. We cover all of Westchester
          County—day or night.
        </p>
        <div className="caret-transparent gap-x-2.5 flex flex-wrap gap-y-2.5 mt-3">
          <a
            href="tel://+19144064474"
            className="text-gray-800 font-bold bg-white caret-transparent block border border-slate-200 px-4 py-3 rounded-xl border-solid"
          >
            Call (914) 406-4474
          </a>
          <a
            href="#services"
            className="text-gray-800 font-bold bg-white caret-transparent block border border-slate-200 px-4 py-3 rounded-xl border-solid"
          >
            See Services
          </a>
        </div>
      </div>
    </div>
  );
};
