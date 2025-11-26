import { FeatureGrid } from "@/sections/WhyChooseSection/components/FeatureGrid";

export const WhyChooseSection = () => {
  return (
    <section className="caret-transparent py-7">
      <div className="caret-transparent max-w-[1120px] w-full mx-auto px-4">
        <h2 className="text-[22px] font-bold caret-transparent leading-[33px] mb-4">
          Why Choose Us
        </h2>
        <FeatureGrid />
      </div>
    </section>
  );
};
