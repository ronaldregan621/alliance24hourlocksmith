import { ProcessStep } from "@/sections/ProcessSection/components/ProcessStep";

export const ProcessGrid = () => {
  return (
    <div className="caret-transparent gap-x-3.5 grid grid-cols-[1fr] gap-y-3.5 md:grid-cols-[repeat(4,1fr)]">
      <ProcessStep
        stepNumber="1"
        title="Call Us"
        description="Tap to call and share your location and situation."
      />
      <ProcessStep
        stepNumber="2"
        title="Get a Quote"
        description="We confirm clear pricing before dispatch."
      />
      <ProcessStep
        stepNumber="3"
        title="Rapid Arrival"
        description="Local tech heads your way—typically under 30 minutes."
      />
      <ProcessStep
        stepNumber="4"
        title="Professional Entry"
        description="Non‑destructive methods first. You’re back in quickly."
      />
    </div>
  );
};
