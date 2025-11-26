import { LocationGrid } from "@/sections/LocationsSection/components/LocationGrid";

export const LocationsSection = () => {
  return (
    <section className="caret-transparent py-7">
      <div className="caret-transparent max-w-[1120px] w-full mx-auto px-4">
        <h2 className="text-[22px] font-bold caret-transparent leading-[33px] mb-4">
          Serving All of Westchester County
        </h2>
        <p className="text-slate-700 text-base caret-transparent leading-6 -mt-1.5 mb-[18px] md:text-lg md:leading-[27px]">
          Local, rapid response to these areas and beyond:
        </p>
        <LocationGrid />
        <div className="caret-transparent mt-3.5">
          <a
            href="tel://+19144064474"
            className="text-gray-800 font-bold bg-white caret-transparent border border-slate-200 px-4 py-3 rounded-xl border-solid"
          >
            Call Westchester Dispatch: (914) 406-4474
          </a>
        </div>
      </div>
    </section>
  );
};
