import { TestimonialCard } from "@/components/TestimonialCard";
import { ServiceCard } from "@/components/ServiceCard";

export const TestimonialGrid = () => {
  return (
    <div
      role="list"
      className="caret-transparent gap-x-3.5 grid grid-cols-[1fr] gap-y-3.5 md:grid-cols-[repeat(3,1fr)]"
    >
      <TestimonialCard
        quote="Locked myself out at midnight—they were calm, quick, and courteous."
        author="Isabella L."
      />
      <ServiceCard
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-8.svg"
        title="Car Key Replacement"
        description="Mobile cutting and programming for many keys and fobs."
        phoneNumber="+19144064474"
        readMoreUrl="/car-key-replacement/"
      />
      <TestimonialCard
        quote="Upfront price on the phone. Tech arrived in ~25 minutes. Smooth."
        author="Nicolas V."
      />
      <TestimonialCard
        quote="Rekeyed our storefront same‑day. Professional tools, zero downtime."
        author="Valeria C."
      />
    </div>
  );
};
