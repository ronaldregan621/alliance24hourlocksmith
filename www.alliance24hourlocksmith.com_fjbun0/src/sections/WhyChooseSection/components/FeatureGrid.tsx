import { FeatureCard } from "@/components/FeatureCard";

export const FeatureGrid = () => {
  return (
    <div
      role="list"
      className="caret-transparent gap-x-3.5 grid grid-cols-[1fr] gap-y-3.5 md:grid-cols-[repeat(3,1fr)]"
    >
      <FeatureCard
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-9.svg"
        title="Reliable Service"
        description="24/7 coverage with clear communication from dispatch to door."
      />
      <FeatureCard
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-10.svg"
        title="Professional Team"
        description="Licensed, insured techs using modern tools and non‑destructive methods."
      />
      <FeatureCard
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-3.svg"
        title="Fast & Local"
        description="Average arrival in about 30 minutes across Westchester County."
      />
    </div>
  );
};
