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

import EmergencyCTA from "@/components/layout/EmergencyCTA";
import ServiceQuestions from "@/components/service-page/ServiceQuestions";

const sewerBackupSituations = [
  {
    title: "Backed-Up Floor Drains",
    description:
      "Cleanup after sewage or contaminated water enters through basement, utility-room, bathroom, or commercial floor drains.",
    icon: "drain",
  },
  {
    title: "Overflowing Toilets",
    description:
      "Removal and cleanup when a toilet overflow contains sewage, wastewater, or other contaminated materials.",
    icon: "toilet",
  },
  {
    title: "Blocked Sewer Lines",
    description:
      "Property cleanup after an obstructed or damaged sewer line forces wastewater back through the plumbing system.",
    icon: "pipe",
  },
  {
    title: "Septic System Backups",
    description:
      "Contaminated-water cleanup following a septic-system failure or wastewater backup into the property.",
    icon: "septic",
  },
  {
    title: "Basement Sewage Damage",
    description:
      "Sewage removal, contaminated-material cleanup, and structural drying for affected basements and lower levels.",
    icon: "basement",
  },
  {
    title: "Commercial Sewer Backups",
    description:
      "Professional sewage cleanup for offices, rental properties, restaurants, retail spaces, and other commercial facilities.",
    icon: "building",
  },
];

const sewerBackupSigns = [
  {
    title: "Multiple Slow Drains",
    description:
      "Several plumbing fixtures draining slowly at the same time may indicate a blockage in the main sewer or drainage system.",
  },
  {
    title: "Gurgling Plumbing",
    description:
      "Bubbling or gurgling sounds from toilets, sinks, tubs, or floor drains may indicate restricted wastewater flow.",
  },
  {
    title: "Wastewater Around Drains",
    description:
      "Water rising through floor drains, showers, tubs, or lower-level plumbing fixtures may indicate an active sewer backup.",
  },
  {
    title: "Persistent Sewage Odors",
    description:
      "Strong wastewater or sewer odors may indicate a drainage problem, sewer-line failure, or concealed contamination.",
  },
  {
    title: "Changing Toilet Water Levels",
    description:
      "Toilets that repeatedly fail to flush or show unusual water-level changes may indicate a larger drainage problem.",
  },
  {
    title: "Dark or Contaminated Water",
    description:
      "Dirty, foul-smelling, or discolored water entering the property should be treated as potentially contaminated.",
  },
];

const sewerBackupProcess = [
  {
    number: "01",
    title: "Inspection and Safety Assessment",
    description:
      "We inspect the affected areas, evaluate the extent of contamination, and establish an appropriate cleanup plan.",
  },
  {
    number: "02",
    title: "Sewage and Water Removal",
    description:
      "Professional extraction equipment is used to remove sewage, wastewater, and standing water from the property.",
  },
  {
    number: "03",
    title: "Removal of Damaged Materials",
    description:
      "Porous materials that cannot be adequately cleaned may be removed from the affected area.",
  },
  {
    number: "04",
    title: "Cleaning and Sanitization",
    description:
      "Affected surfaces and salvageable materials are thoroughly cleaned and treated using professional restoration procedures.",
  },
  {
    number: "05",
    title: "Structural Drying",
    description:
      "Air movers, dehumidifiers, and moisture monitoring are used to dry walls, flooring, framing, and other affected materials.",
  },
  {
    number: "06",
    title: "Restoration Preparation",
    description:
      "After cleaning and drying are complete, the affected area is prepared for repairs or reconstruction as needed.",
  },
];

const sewerBackupUrgencyPoints = [
  "Limit contaminated water from spreading into additional areas",
  "Reduce damage to flooring, drywall, insulation, and framing",
  "Remove porous materials that cannot be adequately cleaned",
  "Clean and sanitize affected surfaces",
  "Dry moisture hidden inside structural materials",
  "Document affected areas for the insurance claim",
];

const sewerBackupDos = [
  "Keep children and pets away from the affected area",
  "Avoid direct contact with sewage and contaminated materials",
  "Restrict unnecessary movement through affected rooms",
  "Photograph visible damage when it is safe to do so",
  "Contact a plumber to address the source of the backup",
  "Contact Frontier Restoration for professional cleanup",
];

const sewerBackupDonts = [
  "Do not use a household vacuum to remove sewage water",
  "Do not walk through contaminated areas unnecessarily",
  "Do not use household fans that may spread contamination",
  "Do not handle heavily contaminated belongings without protection",
  "Do not use electrical equipment around standing water",
  "Do not assume the area is safe after visible water is removed",
];

const sewerBackupAudiences = [
  {
    title: "Residential Properties",
    description:
      "Sewer backup cleanup for homes, apartments, rental properties, basements, crawlspaces, and multi-family buildings.",
    imageSrc: "/images/sewer-backup/residential.jpg",
    imageAlt: "Residential sewer backup cleanup inside a home",
    href: "/contact",
  },
  {
    title: "Commercial Properties",
    description:
      "Professional sewage cleanup for offices, retail spaces, restaurants, rental properties, warehouses, and other commercial facilities.",
    imageSrc: "/images/sewer-backup/commercial.jpg",
    imageAlt: "Commercial sewer backup cleanup inside a business",
    href: "/commercial",
  },
];

const relatedSewerBackupServices = [
  {
    title: "Water Damage Restoration",
    description:
      "Professional water extraction and structural drying after leaks, flooding, and plumbing failures.",
    imageSrc: "/images/services/water-damage.jpg",
    imageAlt: "Water damage restoration equipment drying a room",
    href: "/water-damage",
  },
  {
    title: "Mold Remediation",
    description:
      "Professional remediation when prolonged moisture contributes to mold growth inside the property.",
    imageSrc: "/images/services/mold-remediation.jpg",
    imageAlt: "Professional mold remediation service",
    href: "/mold-remediation",
  },
  {
    title: "Contents Restoration",
    description:
      "Evaluation, documentation, cleaning, and restoration of belongings affected by contaminated water or moisture.",
    imageSrc: "/images/services/contents-restoration.jpg",
    imageAlt: "Contents restoration and cleaning service",
    href: "/contents-restoration",
  },
];

const sewerBackupQuestions = [
  {
    question: "Is sewage water dangerous?",
    answer:
      "Sewage water may contain bacteria, viruses, chemicals, and other contaminants. Avoid direct contact and keep children and pets away from the affected area.",
  },
  {
    question: "Can I clean up a sewer backup myself?",
    answer:
      "A small plumbing spill may be manageable in limited situations, but widespread sewage contamination generally requires protective equipment, extraction, material removal, cleaning, and structural drying.",
  },
  {
    question: "What materials may need to be removed?",
    answer:
      "Heavily contaminated porous materials such as carpet padding, insulation, drywall, and some upholstered items may need to be removed. The decision depends on the material and level of contamination.",
  },
  {
    question: "Can contaminated belongings be restored?",
    answer:
      "Some nonporous belongings may be cleanable, while heavily contaminated porous items may not be safely salvageable. Each item should be evaluated individually.",
  },
  {
    question: "How long does sewer backup cleanup take?",
    answer:
      "The timeline depends on the size of the affected area, the level of contamination, the materials involved, and the amount of structural drying and repair required.",
  },
  {
    question: "Will the sewage odor go away?",
    answer:
      "Proper removal of contaminated materials, detailed cleaning, sanitization, and structural drying should address the source of the odor. Additional treatment may be necessary depending on the damage.",
  },
  {
    question: "Does homeowners insurance cover sewer backups?",
    answer:
      "Coverage varies by policy. Sewer and drain backup damage may require a separate endorsement, and your insurance carrier makes the final coverage decision.",
  },
  {
    question: "Should I call a plumber or a restoration company?",
    answer:
      "A plumber should address the source of the blockage or plumbing failure. A restoration company handles sewage removal, contaminated-material cleanup, sanitization, drying, and property restoration.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Yes. We can document the damage, prepare estimates, and communicate with your insurance adjuster. Your insurance company makes the final decision regarding coverage and payment.",
  },
];

export const metadata = {
  title: "Sewer Backup Cleanup in Fairbanks, Alaska",
  description:
    "Professional sewer backup cleanup, sewage removal, sanitization, structural drying, and restoration services in Fairbanks, Alaska.",
};

export default function SewerBackupPage() {
  return (
    <main>
      <ServiceHero
        title="Sewer Backup Cleanup in Fairbanks, Alaska"
        description="Professional sewage removal, cleaning, sanitization, structural drying, and restoration for homes and businesses."
        imageSrc="/images/sewer-backup/hero.jpg"
        imageAlt="Restoration technicians performing professional sewer backup cleanup"
        primaryButtonText="Request Emergency Service"
        primaryButtonHref="/contact"
        secondaryButtonText="Call (907) 987-2916"
        secondaryButtonHref="tel:+19079872916"
      />

      <ServiceOverview
        eyebrow="Sewer Backup Services"
        heading="Professional Sewer Backup Cleanup and Restoration"
        paragraphs={[
          "A sewer backup can expose your property to contaminated water while damaging flooring, drywall, insulation, furniture, equipment, and personal belongings.",
          "Frontier Restoration removes sewage and standing water, cleans and sanitizes affected areas, removes materials that cannot be adequately restored, dries the structure, and prepares the property for repairs.",
        ]}
        imageSrc="/images/sewer-backup/sewage-cleanup.jpg"
        imageAlt="Restoration technician removing contaminated water from a property"
        imagePosition="right"
      />

      <ServiceSituations
        eyebrow="Damage We Handle"
        heading="Sewer Backup Problems We Address"
        description="Sewage and contaminated water can enter a property through several plumbing, sewer, septic, and drainage failures."
        items={sewerBackupSituations}
      />

      <ServiceSigns
        eyebrow="Warning Signs"
        heading="Signs of a Sewer or Drain Backup"
        description="Early drainage problems may appear before wastewater enters the property. Recognizing these signs can help limit additional damage."
        items={sewerBackupSigns}
      />

      <ServiceProcess
        eyebrow="Our Process"
        heading="Our Sewer Backup Cleanup Process"
        description="Every sewage loss is different, but professional cleanup and restoration generally follow these core stages."
        steps={sewerBackupProcess}
      />

      <ServiceUrgency
        eyebrow="Act Quickly"
        heading="Why Sewer Backup Damage Requires Immediate Attention"
        paragraphs={[
          "Sewer water may contain harmful contaminants and should not be handled like an ordinary plumbing leak.",
          "A prompt professional response can limit the spread of contamination, reduce additional property damage, and begin the cleaning and structural drying process sooner.",
        ]}
        points={sewerBackupUrgencyPoints}
        imageSrc="/images/sewer-backup/protective-equipment.jpg"
        imageAlt="Restoration technician wearing protective equipment during sewage cleanup"
      />

      <ServiceSafety
        eyebrow="What to Do"
        heading="What to Do After a Sewer Backup"
        description="Protect yourself and others by avoiding direct contact with contaminated water while arranging professional cleanup."
        dos={sewerBackupDos}
        donts={sewerBackupDonts}
      />

      <ServiceInsurance
        eyebrow="Insurance Assistance"
        heading="Help Documenting Your Sewer Backup Claim"
        paragraphs={[
          "Frontier Restoration can photograph affected areas, document damaged materials, prepare cleanup and restoration estimates, and communicate with your insurance adjuster.",
          "Sewer and drain backup coverage varies by policy and may require a specific endorsement. Your insurance carrier makes the final decision regarding coverage and payment.",
        ]}
        points={[
          "Photos of affected areas",
          "Documentation of contaminated materials",
          "Moisture readings and drying records",
          "Documentation of damaged belongings",
          "Detailed cleanup and restoration estimates",
          "Communication with insurance adjusters",
        ]}
        buttonText="Request Emergency Service"
        buttonHref="/contact"
      />

      <ServiceAudience
        eyebrow="Who We Serve"
        heading="Residential and Commercial Sewer Backup Cleanup"
        audiences={sewerBackupAudiences}
      />

      <RelatedServices
        eyebrow="Related Services"
        heading="Other Restoration Services"
        services={relatedSewerBackupServices}
      />

      <EmergencyCTA />

      <ServiceQuestions
        eyebrow="Common Questions"
        heading="Sewer Backup Cleanup FAQs"
        questions={sewerBackupQuestions}
      />
    </main>
  );
}
