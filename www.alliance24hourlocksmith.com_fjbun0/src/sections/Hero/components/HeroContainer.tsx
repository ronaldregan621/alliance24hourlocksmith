import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroCard } from "@/sections/Hero/components/HeroCard";

export const HeroContainer = () => {
  return (
    <div className="relative [align-items:normal] caret-transparent gap-x-[18px] grid grid-cols-[1fr] max-w-[1120px] gap-y-[18px] w-full mx-auto pt-7 pb-5 md:items-center md:grid-cols-[1.2fr_0.8fr] md:pt-10 md:pb-7">
      <HeroContent />
      <HeroCard />
    </div>
  );
};
