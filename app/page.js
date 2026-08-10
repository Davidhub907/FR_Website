import Hero from "@/components/home/Hero-Home";
import ServicesSection from "@/components/home/ServiceSection";
import CommonQuestions from "@/components/home/CommonQuestions";
import InsuranceAssistance from "@/components/home/InsuranceAssistance";

import EmergencyCTA from "@/components/layout/EmergencyCTA";
import Testimonials from "@/components/layout/Testimonials";
import WhyChooseUs from "@/components/layout/WhyChooseUs";

export const metadata = {
  title: "Emergency Restoration in Fairbanks, AK | Frontier Restoration LLC",
  description:
    "24/7 water, fire, mold, sewer, and content restoration services for homes and businesses in Fairbanks, Alaska. Call (907) 987-2916 for emergency service.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />

        <ServicesSection />
        <Testimonials />
        {/*     <ResultsSection
          eyebrow="Our Work"
          heading="Real Restoration Results"
          description="See examples of damaged homes and businesses before and after professional restoration by Frontier Restoration."
          projects={homeResults}
        />

        */}
        <EmergencyCTA />
        <InsuranceAssistance />
        <WhyChooseUs />
        <CommonQuestions />
      </main>
    </>
  );
}
