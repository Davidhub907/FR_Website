import Hero from "@/components/home/Hero-Home";
import InsuranceScroller from "@/components/home/InsuranceScroller";
import ServicesSection from "@/components/home/ServiceSection";
import CommonQuestions from "@/components/home/CommonQuestions";
import EmergencyCTA from "@/components/layout/EmergencyCTA";
import InsuranceAssistance from "@/components/home/InsuranceAssistance";
import Testimonials from "@/components/layout/Testimonials";

import ResultsSection from "@/components/results/ResultsSection";
import { homeResults } from "@/data/results";

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
        <ServicesSection />
        <ResultsSection
          eyebrow="Our Work"
          heading="Real Restoration Results"
          description="See examples of damaged homes and businesses before and after professional restoration by Frontier Restoration."
          projects={homeResults}
        />
        <Testimonials />
        <EmergencyCTA />
        <InsuranceAssistance />
        <CommonQuestions />
      </main>
    </>
  );
}
