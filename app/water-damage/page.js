import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";
import ServiceSituations from "@/components/service-page/ServiceSituations";
import ServiceSigns from "@/components/service-page/ServiceSigns";
import ServiceProcess from "@/components/service-page/ServiceProcess";
import ServiceUrgency from "@/components/service-page/ServiceUrgency";
import ServiceAudience from "@/components/service-page/ServiceAudience";
import RelatedServices from "@/components/service-page/RelatedServices";

import InsuranceScroller from "@/components/InsuranceScroller";
import WhyChooseUs from "@/components/WhyChooseUs";
import EmergencyCTA from "@/components/EmergencyCTA";
import CommonQuestions from "@/components/CommonQuestions";

export default function WaterDamagePage() {
  return (
    <main>
      <ServiceHero
        title="Water Damage Restoration in Fairbanks, Alaska"
        description="Fast water extraction, structural drying, and restoration for homes and businesses."
        imageSrc="/images/water-damage/hero.jpg"
        imageAlt="Water damage restoration equipment drying a room"
        primaryButtonText="Request Emergency Service"
        primaryButtonHref="/contact"
      />

      <ServiceOverview
        eyebrow="Water Damage Services"
        heading="Professional Water Damage Cleanup and Restoration"
        paragraphs={[
          "Water can spread quickly through flooring, walls, insulation, and personal belongings.",
          "Frontier Restoration removes water, dries affected materials, and helps restore your property.",
        ]}
        imageSrc="/images/water-damage/water-removal.jpg"
        imageAlt="Technician performing water damage cleanup"
        imagePosition="right"
      />

      <ServiceSituations
        eyebrow="Common Causes"
        heading="Water Damage Problems We Handle"
        items={waterDamageSituations}
      />

      <ServiceSigns
        eyebrow="Warning Signs"
        heading="Signs You May Have Water Damage"
        items={waterDamageSigns}
      />

      <ServiceProcess
        eyebrow="Our Process"
        heading="Our Water Damage Restoration Process"
        steps={waterDamageProcess}
      />

      <ServiceUrgency
        eyebrow="Act Quickly"
        heading="Why Water Damage Should Be Addressed Immediately"
        paragraphs={waterDamageUrgencyParagraphs}
        points={waterDamageUrgencyPoints}
        imageSrc="/images/water-damage/moisture-inspection.jpg"
        imageAlt="Water damage moisture inspection"
      />

      <InsuranceScroller />

      <ServiceAudience
        eyebrow="Who We Serve"
        heading="Residential and Commercial Restoration"
        audiences={waterDamageAudiences}
      />

      <WhyChooseUs />

      <RelatedServices
        eyebrow="Related Services"
        heading="Other Restoration Services"
        services={relatedWaterServices}
      />

      <EmergencyCTA />

      <CommonQuestions
        eyebrow="Common Questions"
        heading="Water Damage Restoration FAQs"
        questions={waterDamageQuestions}
      />
    </main>
  );
}
