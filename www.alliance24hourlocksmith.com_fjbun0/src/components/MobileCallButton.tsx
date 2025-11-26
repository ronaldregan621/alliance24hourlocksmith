export const MobileCallButton = () => {
  return (
    <div
      aria-label="mobile call bar"
      className="fixed caret-transparent grid justify-center pointer-events-none z-[60] px-2.5 bottom-2.5 inset-x-0 md:hidden"
    >
      <a
        href="tel://+19144064474"
        className="text-white font-black items-center bg-gray-800 shadow-[rgba(30,42,54,0.28)_0px_12px_30px_0px] caret-transparent gap-x-2.5 flex justify-center min-h-[auto] min-w-[auto] pointer-events-auto gap-y-2.5 px-5 py-3.5 rounded-[999px] md:inline-flex md:min-h-0 md:min-w-0"
      >
        <img
          src="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-16.svg"
          alt="Icon"
          className="caret-transparent h-[18px] w-[18px]"
        />
        <span className="caret-transparent block min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
          Call Now
        </span>
        <span className="caret-transparent block min-h-[auto] min-w-[auto] opacity-85 md:min-h-0 md:min-w-0">
          (914) 406-4474
        </span>
      </a>
    </div>
  );
};
