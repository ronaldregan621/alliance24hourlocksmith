import { TrustItem } from "@/sections/TrustSection/components/TrustItem";

export const TrustGrid = () => {
  return (
    <div className="caret-transparent gap-x-2.5 grid grid-cols-[1fr] gap-y-2.5 md:grid-cols-[repeat(3,1fr)]">
      <TrustItem
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-10.svg"
        title="Licensed & Insured"
        description="Professional service you can trust—fully licensed and insured technicians."
      />
      <TrustItem
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-3.svg"
        title="Fast Response"
        description="Average dispatch under 30 minutes across Westchester County."
      />
      <TrustItem
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-9.svg"
        title="Upfront Pricing"
        description="Clear quotes before dispatch. No surprises on arrival."
      />
      <TrustItem
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-13.svg"
        title="Professional Tools"
        description="Modern unlocking, key cutting, and programming equipment."
      />
    </div>
  );
};
