import {
  Building2,
  Droplets,
  Home,
  Layers,
  WashingMachine,
  Wrench,
} from "lucide-react";

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

import ServiceQuestions from "@/components/service-page/ServiceQuestions";

const waterDamageSituations = [
  {
    title: "Burst and Frozen Pipes",
    description:
      "Water removal and structural drying after frozen, leaking, or broken plumbing lines.",
    icon: Wrench,
  },
  {
    title: "Appliance Leaks",
    description:
      "Cleanup after washing machines, dishwashers, refrigerators, water heaters, and other appliances leak or overflow.",
    icon: WashingMachine,
  },
  {
    title: "Roof and Ceiling Leaks",
    description:
      "Moisture removal and drying when water enters through roofs, ceilings, ice dams, or exterior openings.",
    icon: Home,
  },
  {
    title: "Basement and Crawlspace Flooding",
    description:
      "Water extraction and drying for flooded basements, crawlspaces, utility rooms, and lower levels.",
    icon: Layers,
  },
  {
    title: "Plumbing Overflows",
    description:
      "Cleanup after sinks, tubs, toilets, or plumbing fixtures overflow and damage surrounding materials.",
    icon: Droplets,
  },
  {
    title: "Commercial Water Damage",
    description:
      "Water extraction and drying for offices, retail spaces, rental properties, warehouses, and other commercial buildings.",
    icon: Building2,
  },
];

const waterDamageSigns = [
  {
    title: "Standing Water",
    description:
      "Visible water around floors, basements, crawlspaces, appliances, or plumbing fixtures requires immediate attention.",
  },
  {
    title: "Water Stains",
    description:
      "Discoloration, dark spots, or water rings on walls and ceilings may indicate an active or previous leak.",
  },
  {
    title: "Warped Flooring",
    description:
      "Buckled hardwood, lifting laminate, loose tile, or swollen flooring may indicate moisture underneath the surface.",
  },
  {
    title: "Soft or Damaged Drywall",
    description:
      "Drywall that feels soft, swollen, cracked, or crumbly may have absorbed water.",
  },
  {
    title: "Peeling Paint or Wallpaper",
    description:
      "Bubbling paint, peeling wallpaper, or damaged finishes can indicate moisture trapped behind the surface.",
  },
  {
    title: "Musty Odors",
    description:
      "Persistent musty smells may indicate hidden moisture inside walls, flooring, insulation, or other building materials.",
  },
];

const waterDamageProcess = [
  {
    number: "01",
    title: "Inspection and Assessment",
    description:
      "We inspect the affected areas, identify visible and hidden moisture, and determine the extent of the damage.",
  },
  {
    number: "02",
    title: "Water Extraction",
    description:
      "Professional extraction equipment removes standing water and excess moisture from the property.",
  },
  {
    number: "03",
    title: "Removal of Damaged Materials",
    description:
      "Materials that cannot be dried or restored may be removed to expose affected areas and prevent additional damage.",
  },
  {
    number: "04",
    title: "Structural Drying",
    description:
      "Air movers and dehumidifiers are strategically placed to dry walls, floors, framing, and other affected materials.",
  },
  {
    number: "05",
    title: "Moisture Monitoring",
    description:
      "Moisture levels are monitored throughout the drying process to verify that affected materials are drying properly.",
  },
  {
    number: "06",
    title: "Cleaning and Restoration",
    description:
      "The affected area is cleaned and prepared for repairs, reconstruction, or replacement of damaged materials as needed.",
  },
];

const waterDamageUrgencyPoints = [
  "Limit moisture from spreading into unaffected areas",
  "Reduce damage to flooring, drywall, and insulation",
  "Improve the likelihood that materials can be saved",
  "Lower the risk of mold and microbial growth",
  "Shorten the structural drying process",
  "Document affected areas for an insurance claim",
];

const waterDamageDos = [
  "Stop the water source when it is safe and possible",
  "Move undamaged belongings away from the affected area",
  "Place containers beneath active leaks when safe",
  "Avoid walking through standing water unnecessarily",
  "Contact Frontier Restoration for professional water removal and drying",
];

const waterDamageDonts = [
  "Do not enter areas with possible electrical hazards",
  "Do not use a household vacuum to remove standing water",
  "Do not assume surfaces are dry because visible water is gone",
  "Do not remove structural materials without understanding the affected area",
  "Do not delay professional drying when walls, floors, or insulation are wet",
];

const waterDamageAudiences = [
  {
    title: "Residential Properties",
    description:
      "Water damage restoration for homes, apartments, rental properties, basements, crawlspaces, and multi-family buildings.",
    imageSrc: "/images/water-damage/residential.jpg",
    imageAlt: "Residential water damage restoration inside a home",
    href: "/contact",
  },
  {
    title: "Commercial Properties",
    description:
      "Water extraction and structural drying for offices, retail spaces, warehouses, rental properties, and other commercial facilities.",
    imageSrc: "/images/water-damage/commercial.jpg",
    imageAlt: "Commercial water damage restoration inside a business",
    href: "/commercial",
  },
];

const relatedWaterDamageServices = [
  {
    title: "Mold Remediation",
    description:
      "Professional remediation when prolonged moisture contributes to mold growth inside the property.",
    imageSrc: "/images/services/mold-remediation.jpg",
    imageAlt: "Professional mold remediation service",
    href: "/mold-remediation",
  },
  {
    title: "Sewer Backup Cleanup",
    description:
      "Professional removal, cleaning, sanitization, and drying after sewage or contaminated water enters a property.",
    imageSrc: "/images/services/sewer-backup.jpg",
    imageAlt: "Professional sewer backup cleanup",
    href: "/sewer-backup",
  },
  {
    title: "Contents Restoration",
    description:
      "Documentation, cleaning, and restoration of furniture, belongings, and other contents affected by water.",
    imageSrc: "/images/services/contents-restoration.jpg",
    imageAlt: "Contents restoration and cleaning service",
    href: "/contents-restoration",
  },
];

const waterDamageQuestions = [
  {
    question: "How quickly should I respond to water damage?",
    answer:
      "You should respond as soon as it is safe to do so. Water can continue spreading through flooring, drywall, insulation, and other porous materials after the visible source has stopped.",
  },
  {
    question: "Can water damage dry on its own?",
    answer:
      "Some surface moisture may evaporate, but water can remain trapped beneath floors, behind walls, and inside insulation. Professional moisture detection and drying may be necessary to verify that affected materials are dry.",
  },
  {
    question: "How long does structural drying take?",
    answer:
      "Drying time depends on the amount of water, the materials affected, indoor temperature and humidity, and how quickly the restoration process begins.",
  },
  {
    question: "Will wet drywall need to be removed?",
    answer:
      "Not all wet drywall automatically requires removal. The decision depends on the amount of water absorbed, the type of water involved, the condition of the material, and whether it can be dried effectively.",
  },
  {
    question: "Can water damage cause mold?",
    answer:
      "Prolonged moisture can create conditions that support mold growth. Removing water and drying affected materials quickly can reduce that risk.",
  },
  {
    question: "Does homeowners insurance cover water damage?",
    answer:
      "Coverage depends on the source of the water, the cause of the damage, and the terms of your policy. Your insurance carrier makes the final decision regarding coverage and payment.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Yes. We can document the damage, prepare estimates, and communicate with your insurance adjuster. Your insurance company makes the final decision regarding coverage and payment.",
  },
];

export const metadata = {
  title: "Water Damage Restoration in Fairbanks, Alaska",
  description:
    "Professional water extraction, structural drying, cleanup, and restoration services for homes and businesses in Fairbanks, Alaska.",
};

export default function WaterDamagePage() {
  return (
    <main>
      <ServiceHero
        title="Water Damage Restoration in Fairbanks, Alaska"
        description="Professional water extraction, structural drying, cleanup, and restoration for homes and businesses."
        imageSrc="/images/water-damage/hero.jpg"
        imageAlt="Professional drying equipment inside a water-damaged property"
        primaryButtonText="Request Emergency Service"
        primaryButtonHref="/contact"
        secondaryButtonText="Call (907) 987-2916"
        secondaryButtonHref="tel:+19079872916"
      />

      <ServiceOverview
        eyebrow="Water Damage Services"
        heading="Professional Water Damage Cleanup and Restoration"
        paragraphs={[
          "Water can quickly spread through flooring, drywall, insulation, framing, and personal belongings. Even after visible water is removed, moisture may remain trapped beneath surfaces or inside structural materials.",
          "Frontier Restoration identifies affected areas, removes standing water, dries the structure, monitors moisture levels, and prepares damaged areas for restoration.",
        ]}
        imageSrc="/images/water-damage/water-extraction.jpg"
        imageAlt="Restoration technician extracting water from a damaged floor"
        imagePosition="right"
      />

      <ServiceSituations
        eyebrow="Common Causes"
        heading="Water Damage Problems We Handle"
        description="Our team responds to residential and commercial water damage caused by plumbing failures, leaks, flooding, and other unexpected events."
        items={waterDamageSituations}
      />

      <ServiceSigns
        eyebrow="Warning Signs"
        heading="Signs You May Have Water Damage"
        description="Some water damage is immediately visible, while other moisture can remain hidden beneath floors, behind walls, or inside insulation."
        items={waterDamageSigns}
      />

      <ServiceProcess
        eyebrow="Our Process"
        heading="Our Water Damage Restoration Process"
        description="Every water loss is different, but professional restoration generally follows these core stages."
        steps={waterDamageProcess}
      />

      <ServiceUrgency
        eyebrow="Act Quickly"
        heading="Why Water Damage Should Be Addressed Immediately"
        paragraphs={[
          "Water can continue moving through porous building materials after the original leak or flooding event has stopped.",
          "A fast professional response can reduce additional property damage, shorten drying time, and improve the likelihood that affected materials can be saved.",
        ]}
        points={waterDamageUrgencyPoints}
        imageSrc="/images/water-damage/moisture-inspection.jpg"
        imageAlt="Restoration technician checking a wall with a moisture meter"
      />

      <ServiceSafety
        eyebrow="What to Do"
        heading="What to Do After Discovering Water Damage"
        description="Protect yourself and limit additional property damage while arranging professional water removal and drying."
        dos={waterDamageDos}
        donts={waterDamageDonts}
      />

      <ServiceInsurance
        eyebrow="Insurance Assistance"
        heading="Help Documenting Your Water Damage Claim"
        paragraphs={[
          "Frontier Restoration can document affected areas, take moisture readings, prepare restoration estimates, and communicate with your insurance adjuster.",
          "Insurance coverage depends on the cause of the water damage and the terms of your policy. Your insurance carrier makes the final decision regarding coverage and payment.",
        ]}
        points={[
          "Photos of affected areas",
          "Moisture readings and drying records",
          "Documentation of damaged materials",
          "Detailed restoration estimates",
          "Communication with insurance adjusters",
        ]}
        buttonText="Request Service"
        buttonHref="/contact"
      />

      <ServiceAudience
        eyebrow="Who We Serve"
        heading="Residential and Commercial Water Damage Restoration"
        audiences={waterDamageAudiences}
      />

      <RelatedServices
        eyebrow="Related Services"
        heading="Other Restoration Services"
        services={relatedWaterDamageServices}
      />

      <ServiceQuestions
        eyebrow="Common Questions"
        heading="Water Damage Restoration FAQs"
        questions={waterDamageQuestions}
      />
    </main>
  );
}
