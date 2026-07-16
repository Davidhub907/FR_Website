import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";
import ServiceSituations from "@/components/service-page/ServiceSituations";
import ServiceSigns from "@/components/service-page/ServiceSigns";
import ServiceProcess from "@/components/service-page/ServiceProcess";
import ServiceUrgency from "@/components/service-page/ServiceUrgency";
import ServiceSafety from "@/components/service-page/ServiceSafety";
import ServiceInsurance from "@/components/service-page/ServiceInsurance";
import ServiceAudience from "@/components/service-page/ServiceAudience";
import RelatedServices from "@/components/service-page/RelatedServices";

import WhyChooseUs from "@/components/layout/WhyChooseUs";
import EmergencyCTA from "@/components/layout/EmergencyCTA";
import CommonQuestions from "@/components/layout/CommonQuestions";

const sewerBackupSituations = [
  {
    title: "Backed-Up Floor Drains",
    description:
      "Cleanup after sewage or contaminated water enters through basement, utility-room, or commercial floor drains.",
    icon: "drain",
  },
  {
    title: "Overflowing Toilets",
    description:
      "Removal and cleanup when a toilet overflow contains sewage or other contaminated materials.",
    icon: "toilet",
  },
  {
    title: "Blocked Sewer Lines",
    description:
      "Property cleanup after a damaged or obstructed sewer line causes wastewater to return through the plumbing system.",
    icon: "pipe",
  },
  {
    title: "Septic System Backups",
    description:
      "Contaminated-water cleanup following a septic system failure or backup into the property.",
    icon: "septic",
  },
];

const sewerBackupSigns = [
  {
    title: "Multiple Slow Drains",
    description:
      "Several fixtures draining slowly at the same time may indicate a problem in the main drainage system.",
  },
  {
    title: "Gurgling Plumbing",
    description:
      "Unusual bubbling or gurgling sounds can indicate restricted wastewater flow.",
  },
  {
    title: "Wastewater Around Drains",
    description:
      "Water rising through drains, tubs, or lower-level fixtures may indicate a sewer backup.",
  },
  {
    title: "Persistent Sewage Odors",
    description:
      "Strong wastewater odors can indicate a drainage, sewer-line, or contamination problem.",
  },
];

const sewerBackupProcess = [
  {
    number: "01",
    title: "Inspection and Safety Assessment",
    description:
      "We inspect the affected areas, evaluate the contamination, and develop an appropriate cleanup plan.",
  },
  {
    number: "02",
    title: "Sewage and Water Removal",
    description:
      "Professional extraction equipment removes sewage, wastewater, and standing water.",
  },
  {
    number: "03",
    title: "Material Removal",
    description:
      "Porous materials that cannot be safely cleaned may be removed from the affected area.",
  },
  {
    number: "04",
    title: "Cleaning and Sanitization",
    description:
      "Affected surfaces and remaining materials are cleaned using professional restoration procedures.",
  },
  {
    number: "05",
    title: "Structural Drying",
    description:
      "Air movers, dehumidifiers, and moisture monitoring are used to dry the structure.",
  },
  {
    number: "06",
    title: "Restoration Preparation",
    description:
      "The cleaned and dried area is prepared for repairs or reconstruction as needed.",
  },
];

export const metadata = {
  title: "Sewer Backup Cleanup in Fairbanks, Alaska",
  description:
    "Professional sewer backup and sewage cleanup services for homes and businesses in Fairbanks, Alaska.",
};

export default function SewerBackupPage() {
  return (
    <main>
      <ServiceHero
        title="Sewer Backup Cleanup in Fairbanks, Alaska"
        description="Professional sewage removal, cleaning, sanitization, structural drying, and restoration for homes and businesses."
        imageSrc="/images/sewer-backup/hero.jpg"
        imageAlt="Restoration equipment being used during sewer backup cleanup"
        primaryButtonText="Request Emergency Service"
        primaryButtonHref="/contact"
        secondaryButtonText="Call (907) 987-2916"
        secondaryButtonHref="tel:+19079872916"
      />

      <ServiceOverview
        eyebrow="Sewer Backup Services"
        heading="Professional Sewer Backup Cleanup and Restoration"
        paragraphs={[
          "A sewer backup can expose your property to contaminated water while damaging flooring, drywall, insulation, furniture, and personal belongings.",
          "Frontier Restoration removes contaminated water and affected materials, cleans and sanitizes the damaged area, dries the structure, and prepares the property for restoration.",
        ]}
        imageSrc="/images/sewer-backup/sewage-cleanup.jpg"
        imageAlt="Restoration technicians performing sewer backup cleanup"
        imagePosition="right"
      />

      <ServiceSituations
        eyebrow="Common Causes"
        heading="Sewer Backup Problems We Handle"
        description="Sewage and contaminated water can enter a property through several plumbing and drainage failures."
        items={sewerBackupSituations}
      />

      <ServiceSigns
        eyebrow="Warning Signs"
        heading="Signs of a Sewer or Drain Backup"
        description="Early drainage problems may appear before wastewater enters the property."
        items={sewerBackupSigns}
      />

      <ServiceProcess
        eyebrow="Our Process"
        heading="Our Sewer Backup Cleanup Process"
        description="Every sewage loss is different, but professional cleanup generally follows these core stages."
        steps={sewerBackupProcess}
      />

      <ServiceUrgency
        eyebrow="Protect Your Property"
        heading="Why Sewer Backup Damage Requires Immediate Attention"
        paragraphs={[
          "Sewer water may contain harmful contaminants and should not be handled like an ordinary plumbing leak.",
          "A fast professional response can limit the spread of contamination, reduce additional property damage, and begin the cleaning and drying process sooner.",
        ]}
        points={[
          "Limit the spread of contaminated water",
          "Reduce damage to structural materials",
          "Remove unsalvageable porous materials",
          "Clean and sanitize impacted surfaces",
          "Dry hidden moisture inside the structure",
        ]}
        imageSrc="/images/sewer-backup/protective-equipment.jpg"
        imageAlt="Technician wearing protective equipment during sewage cleanup"
      />

      <WhyChooseUs />

      <RelatedServices
        eyebrow="Related Services"
        heading="Other Restoration Services"
        services={[
          {
            title: "Water Damage Restoration",
            description:
              "Water extraction and structural drying for leaks and plumbing failures.",
            imageSrc: "/images/services/water-damage.jpg",
            imageAlt: "Water damage restoration equipment",
            href: "/water-damage",
          },
          {
            title: "Mold Remediation",
            description:
              "Professional remediation when prolonged moisture contributes to mold growth.",
            imageSrc: "/images/services/mold-remediation.jpg",
            imageAlt: "Professional mold remediation service",
            href: "/mold-remediation",
          },
          {
            title: "Contents Restoration",
            description:
              "Cleaning and restoration of belongings affected by contaminated water.",
            imageSrc: "/images/services/contents-restoration.jpg",
            imageAlt: "Contents restoration service",
            href: "/contents-restoration",
          },
        ]}
      />

      <EmergencyCTA />

      <CommonQuestions
        eyebrow="Common Questions"
        heading="Sewer Backup Cleanup FAQs"
        questions={[
          {
            question: "Is sewage water dangerous?",
            answer:
              "Sewage water may contain bacteria, viruses, chemicals, and other contaminants. Avoid direct contact and keep children and pets away from the affected area.",
          },
          {
            question: "Can I clean up a sewer backup myself?",
            answer:
              "Widespread sewage contamination requires appropriate protective equipment, extraction, cleaning, material removal, and drying procedures.",
          },
          {
            question: "What materials may need to be removed?",
            answer:
              "Heavily contaminated porous materials such as carpet padding, insulation, drywall, and some upholstered items may need to be removed.",
          },
          {
            question: "Does homeowners insurance cover sewer backups?",
            answer:
              "Coverage varies by policy. Sewer and drain backup damage may require an additional endorsement, and your insurance carrier makes the final coverage decision.",
          },
          {
            question: "Do you work with insurance companies?",
            answer:
              "Yes. We can document the damage, prepare estimates, and communicate with your insurance adjuster. Your insurance company makes the final decision regarding coverage and payment.",
          },
        ]}
      />
    </main>
  );
}
