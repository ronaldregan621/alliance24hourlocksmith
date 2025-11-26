import { Badge } from "@/components/Badge";
import { CTAButtons } from "@/components/CTAButtons";
import { FeatureList } from "@/components/FeatureList";

export const HeroContent = () => {
  return (
    <div className="caret-transparent">
      <Badge />
      <h1 className="text-[32px] font-bold caret-transparent leading-[38.4px] mt-2 mb-3 md:text-[38px] md:leading-[45.6px]">
        24/7 Emergency Locksmith — Westchester County, NY
      </h1>
      <p className="text-base caret-transparent leading-6 mt-4 mb-[18px] md:text-lg md:leading-[27px] md:mt-[18px]">
        Locked Out? We’re on our way. Calm, professional help with clear pricing
        and no‑damage entry. Average dispatch under 30 minutes.
      </p>
      <CTAButtons />
      <FeatureList />
    </div>
  );
};
