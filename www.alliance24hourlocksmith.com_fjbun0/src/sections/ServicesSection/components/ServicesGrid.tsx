import { ServiceCard } from "@/components/ServiceCard";

export const ServicesGrid = () => {
  return (
    <div
      role="list"
      className="caret-transparent gap-x-3.5 grid grid-cols-[1fr] gap-y-3.5 md:grid-cols-[repeat(3,1fr)]"
    >
      <ServiceCard
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-11.svg"
        title="Car Lockouts"
        description="Fast, non‑destructive entry for most makes and models."
        phoneNumber="+19144064474"
        readMoreUrl="/car-lockout/"
      />
      <ServiceCard
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-12.svg"
        title="Home Lockouts"
        description="Get back inside safely with licensed, insured techs."
        phoneNumber="+19144064474"
        readMoreUrl="/house-lockout/"
      />
      <ServiceCard
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-13.svg"
        title="Business Lockouts"
        description="Storefronts, offices, and commercial doors."
        phoneNumber="+19144064474"
        readMoreUrl="/emergency-locksmith/"
      />
      <ServiceCard
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-14.svg"
        title="Lock Replacement"
        description="Change, repair, or upgrade locks and deadbolts."
        phoneNumber="+19144064474"
        readMoreUrl="/high-security-locks/"
      />
      <ServiceCard
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-8.svg"
        title="Key Duplication"
        description="On‑site key cutting for many lock types."
        phoneNumber="+19144064474"
        readMoreUrl="/key-duplication/"
      />
      <ServiceCard
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-15.svg"
        title="Safe Opening"
        description="Professional, non‑destructive safe access."
        phoneNumber="+19144064474"
        readMoreUrl="/emergency-locksmith/"
      />
      <ServiceCard
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-14.svg"
        title="Smart Lock Installation"
        description="Keyless entry setup, app pairing, and access codes."
        phoneNumber="+19144064474"
        readMoreUrl="/smart-lock-installation/"
      />
      <ServiceCard
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-9.svg"
        title="Lock Rekey"
        description="New keys, same locks—ideal after a move or turnover."
        phoneNumber="+19144064474"
        readMoreUrl="/lock-rekey/"
      />
      <ServiceCard
        iconSrc="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-13.svg"
        title="Master Key Systems"
        description="One master opens all; sub‑keys for authorized doors."
        phoneNumber="+19144064474"
        readMoreUrl="/master-key-system/"
      />
    </div>
  );
};
