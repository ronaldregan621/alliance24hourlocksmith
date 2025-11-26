export const ContactContent = () => {
  return (
    <div className="caret-transparent">
      <h2 className="text-[22px] font-bold caret-transparent leading-[33px] mb-2">
        We’re ready to help
      </h2>
      <p className="text-sky-100 caret-transparent">
        Tell us what you need—car, home, or business—and the best number to
        reach you. We’ll confirm pricing and send a local tech.
      </p>
      <div className="caret-transparent gap-x-2.5 flex flex-wrap gap-y-2.5 mt-3">
        <a
          href="tel://+19144064474"
          className="font-extrabold items-center bg-gray-800 shadow-[rgba(30,42,54,0.15)_0px_10px_30px_0px] caret-transparent gap-x-2.5 flex gap-y-2.5 px-[18px] py-3 rounded-xl"
        >
          Call (914) 406-4474
        </a>
        <span className="text-green-600 text-xs font-bold bg-emerald-50 caret-transparent block leading-[18px] border border-emerald-100 px-2.5 py-1.5 rounded-[999px] border-solid">
          Average arrival ≈ 30 mins
        </span>
      </div>
    </div>
  );
};
