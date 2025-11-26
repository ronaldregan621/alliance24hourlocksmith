import { StatsContent } from "@/sections/StatsSection/components/StatsContent";

export const StatsContainer = () => {
  return (
    <div className="bg-white shadow-[rgba(2,21,69,0.04)_0px_2px_8px_0px] caret-transparent gap-x-4 grid grid-cols-[1fr] gap-y-4 border border-slate-200 p-4 rounded-[14px] border-solid">
      <StatsContent />
      <div className="caret-transparent">
        <img
          src="https://images.unsplash.com/photo-1520975954732-35dd222996f6?q=80&w=1200&auto=format&fit=crop"
          alt="Technician assisting a customer"
          className="caret-transparent max-w-full rounded-[14px]"
        />
      </div>
    </div>
  );
};
