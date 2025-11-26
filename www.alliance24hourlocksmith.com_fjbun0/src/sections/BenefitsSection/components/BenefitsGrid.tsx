import { BenefitCard } from "@/components/BenefitCard";

export const BenefitsGrid = () => {
  return (
    <div
      role="list"
      className="caret-transparent gap-x-3.5 grid grid-cols-[1fr] gap-y-3.5 md:grid-cols-[repeat(3,1fr)]"
    >
      <BenefitCard
        title="On Our Way Fast"
        description="Average arrival in about 30 minutes."
      />
      <BenefitCard
        title="Transparent Pricing"
        description="Quote given over the phone before dispatch."
      />
      <BenefitCard
        title="Experienced Technicians"
        description="Licensed, insured, and local locksmiths."
      />
    </div>
  );
};
