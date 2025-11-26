import { ContactContent } from "@/sections/ContactSection/components/ContactContent";
import { ContactForm } from "@/sections/ContactSection/components/ContactForm";

export const ContactContainer = () => {
  return (
    <div className="text-white bg-gray-800 shadow-[rgba(30,42,54,0.15)_0px_10px_30px_0px] caret-transparent p-[18px] rounded-2xl">
      <div className="[align-items:normal] caret-transparent gap-x-3.5 grid grid-cols-none gap-y-3.5 md:items-start md:grid-cols-[1fr_0.9fr]">
        <ContactContent />
        <ContactForm />
      </div>
    </div>
  );
};
