import Hero from "@/components/home/Hero-Home";
import CallToAction from "@/components/home/CallToAction-Home";
import InsuranceScroller from "@/components/layout/InsuranceScroller";
import ServicesSection from "@/components/layout/ServiceSection";

export const metadata = {
  title: "Water Damage Restoration in Fairbanks, AK | Frontier Restoration LLC",
  description:
    "Frontier Restoration LLC provides water damage restoration, fire damage restoration, and mold remediation in Fairbanks, Alaska. Call (907) 987-2916 for emergency service.",
};

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <InsuranceScroller />
        <CallToAction />
        <ServicesSection />
      </main>
    </>
  );
}
