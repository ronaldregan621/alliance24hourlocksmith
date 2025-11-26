export const FeatureList = () => {
  return (
    <div
      aria-label="service highlights"
      className="text-slate-100 text-sm caret-transparent gap-x-4 flex flex-wrap leading-[21px] gap-y-4 mt-2.5"
    >
      <div className="items-center caret-transparent gap-x-2 flex gap-y-2">
        <img
          src="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-5.svg"
          alt="Icon"
          className="caret-transparent h-7 w-7"
        />
        <span className="caret-transparent block">We’re on our way</span>
      </div>
      <div className="items-center caret-transparent gap-x-2 flex gap-y-2">
        <img
          src="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-6.svg"
          alt="Icon"
          className="caret-transparent h-7 w-7"
        />
        <span className="caret-transparent block">Upfront pricing</span>
      </div>
      <div className="items-center caret-transparent gap-x-2 flex gap-y-2">
        <img
          src="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-7.svg"
          alt="Icon"
          className="caret-transparent h-7 w-7"
        />
        <span className="caret-transparent block">Local technicians</span>
      </div>
    </div>
  );
};
