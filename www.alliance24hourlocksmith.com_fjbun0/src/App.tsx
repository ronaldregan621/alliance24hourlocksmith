import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { WhyUs } from "@/sections/WhyUs";
import { HowItWorks } from "@/sections/HowItWorks";
import { CTA } from "@/sections/CTA";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
