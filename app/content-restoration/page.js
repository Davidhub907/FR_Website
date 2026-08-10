import {
  Armchair,
  Biohazard,
  Building2,
  Droplets,
  Flame,
  Microscope,
} from "lucide-react";

import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";
import ServiceSituations from "@/components/service-page/ServiceWarningSigns";
import ServiceSigns from "@/components/service-page/ServiceCommonCauses";
import ServiceProcess from "@/components/service-page/ServiceProcess";
import ServiceSafety from "@/components/service-page/ServiceSafety";
import ServiceInsurance from "@/components/service-page/ServiceInsurance";
import ServiceQuestions from "@/components/service-page/ServiceQuestions";

import EmergencyCTA from "@/components/layout/EmergencyCTA";
import WhyChooseUs from "@/components/layout/WhyChooseUs";

const contentsRestorationSituations = [
  {
    title: "Water-Damaged Belongings",
    description:
      "Evaluation and cleaning of furniture, household items, equipment, and other belongings affected by leaks, flooding, or plumbing failures.",
    icon: Droplets,
  },
  {
    title: "Fire and Smoke Damage",
    description:
      "Cleaning and restoration of salvageable belongings affected by smoke, soot, fire residue, or lingering odors.",
    icon: Flame,
  },
  {
    title: "Sewer Backup Damage",
    description:
      "Evaluation and documentation of belongings exposed to sewage or other contaminated water.",
    icon: Biohazard,
  },
  {
    title: "Mold and Moisture Damage",
    description:
      "Assessment and cleaning of appropriate contents affected by prolonged moisture or mold contamination.",
    icon: Microscope,
  },
  {
    title: "Residential Contents",
    description:
      "Contents services for furniture, clothing, household goods, decorations, personal belongings, and other residential property.",
    icon: Armchair,
  },
  {
    title: "Commercial Contents",
    description:
      "Documentation and restoration support for office furniture, equipment, inventory, records, and other commercial property.",
    icon: Building2,
  },
];

const contentsRestorationSigns = [
  {
    title: "Visible Water or Moisture",
    description:
      "Furniture, boxes, fabrics, equipment, or personal belongings that are wet or damp may require immediate evaluation.",
  },
  {
    title: "Smoke or Soot Residue",
    description:
      "Black, gray, oily, or powdery residue may settle on furniture, decorations, equipment, and belongings throughout the property.",
  },
  {
    title: "Persistent Odors",
    description:
      "Smoke, sewage, mildew, and other odors may remain trapped inside fabrics, furniture, boxes, and porous materials.",
  },
  {
    title: "Staining or Discoloration",
    description:
      "Water lines, soot stains, yellowing, dark spots, or color changes can indicate damage to the material.",
  },
  {
    title: "Warping or Swelling",
    description:
      "Wood furniture, cabinets, books, boxes, and other absorbent materials may swell, warp, separate, or lose their shape.",
  },
  {
    title: "Contamination Exposure",
    description:
      "Belongings exposed to sewage, mold, chemicals, or heavy fire residue should be professionally evaluated before reuse.",
  },
];

const contentsRestorationProcess = [
  {
    number: "01",
    title: "Inspection and Evaluation",
    description:
      "Affected belongings are inspected to determine the type and extent of damage and whether individual items may be salvageable.",
  },
  {
    number: "02",
    title: "Documentation and Inventory",
    description:
      "Items may be photographed, categorized, and documented to support restoration planning and the insurance claim.",
  },
  {
    number: "03",
    title: "Sorting and Prioritization",
    description:
      "Contents are separated based on condition, material, contamination level, restoration potential, and customer priorities.",
  },
  {
    number: "04",
    title: "Cleaning and Odor Treatment",
    description:
      "Salvageable items are cleaned using methods appropriate for their materials and the type of damage involved.",
  },
  {
    number: "05",
    title: "Drying and Condition Review",
    description:
      "Wet or damp contents are dried when appropriate and reviewed to determine whether additional cleaning or treatment is needed.",
  },
  {
    number: "06",
    title: "Return or Restoration Coordination",
    description:
      "Cleaned contents are prepared for return after the affected building areas are safe, clean, and ready to receive them.",
  },
];

const contentsDos = [
  "Photograph damaged rooms and belongings when it is safe",
  "Move dry, unaffected items away from the damaged area when possible",
  "Separate wet fabrics and clothing from dry belongings",
  "Create a list of especially important or valuable items",
  "Contact Frontier Restoration for a professional contents evaluation",
];

const contentsDonts = [
  "Do not discard damaged belongings before documenting them",
  "Do not place wet items into sealed bags or containers",
  "Do not wipe soot-covered items with household cleaners",
  "Do not use visibly contaminated belongings before evaluation",
  "Do not assume an item is unsalvageable based only on its appearance",
];

const contentsQuestions = [
  {
    question: "What does contents restoration include?",
    answer:
      "Contents restoration involves evaluating, documenting, cleaning, drying, deodorizing, and coordinating the return of belongings affected by water, fire, smoke, soot, mold, or other property damage.",
  },
  {
    question: "What types of belongings can be restored?",
    answer:
      "Restoration may be possible for certain furniture, clothing, household goods, decorations, equipment, and personal belongings. The outcome depends on the material, condition, contamination, and type of damage.",
  },
  {
    question: "How do you decide whether an item is salvageable?",
    answer:
      "The decision depends on the item's material, value, condition, level of contamination, replacement cost, sentimental importance, and likelihood of successful cleaning or restoration.",
  },
  {
    question: "Should I throw damaged belongings away?",
    answer:
      "Do not discard damaged belongings before photographing and documenting them unless they present an immediate safety hazard. Premature disposal may make the insurance claim more difficult.",
  },
  {
    question: "Can smoke odors be removed from belongings?",
    answer:
      "Smoke odors can often be reduced or removed from appropriate salvageable items, but results depend on the material, amount of residue, heat exposure, and length of exposure.",
  },
  {
    question: "Can sewage-contaminated belongings be restored?",
    answer:
      "Some nonporous items may be cleanable, but heavily contaminated porous belongings may not be safely salvageable. Each item should be evaluated based on its material and level of exposure.",
  },
  {
    question: "What happens to my belongings during building repairs?",
    answer:
      "Depending on the project, affected belongings may be documented, moved to a protected area, cleaned, or prepared for temporary storage until the property is ready for their return.",
  },
  {
    question: "How long does contents restoration take?",
    answer:
      "The timeline depends on the number of items, the type of damage, the cleaning methods required, the building-restoration schedule, and whether items must remain away from the property during repairs.",
  },
  {
    question: "Does insurance cover contents restoration?",
    answer:
      "Coverage depends on the cause of the loss and the personal-property or business-property provisions in your policy. Your insurance carrier makes the final decision regarding coverage and payment.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Yes. We can document affected belongings, prepare estimates, and communicate with your insurance adjuster. Your insurance company makes the final decision regarding coverage and payment.",
  },
];

export const metadata = {
  title: "Contents Restoration in Fairbanks, Alaska",

  description:
    "Professional contents evaluation, documentation, cleaning, drying, and restoration services for homes and businesses in Fairbanks, Alaska.",

  alternates: {
    canonical: "/content-restoration",
  },
};

export default function ContentsRestorationPage() {
  return (
    <main>
      <ServiceHero
        eyebrow="CONTENTS CLEANING AND RECOVERY · FAIRBANKS, ALASKA"
        title="FAIRBANKS CONTENT"
        highlightedTitle="RESTORATION."
        description="Furniture, electronics, documents, clothing, and personal belongings may be recoverable after water, fire, smoke, or mold damage. Our team carefully inventories, packs, cleans, deodorizes, stores, and returns restorable contents."
        imageSrc="/images/services/content-restoration.jpg"
        imageAlt="Restoration professionals cleaning and organizing damaged personal belongings"
        service="Content restoration"
        primaryButtonText="Request Content Restoration"
      />

      <ServiceOverview
        eyebrow="Contents Restoration Services"
        heading="Helping Restore the Belongings Inside Your Property"
        paragraphs={[
          "Property damage affects more than walls, floors, and ceilings. Furniture, clothing, household goods, equipment, inventory, and personal belongings may also be exposed to water, smoke, soot, mold, or contamination.",
          "Frontier Restoration evaluates affected belongings, documents their condition, identifies items that may be salvageable, and uses appropriate cleaning and restoration procedures based on the material and type of damage.",
        ]}
        imageSrc="/images/services/content-restoration.jpg"
        imageAlt="Technician documenting and evaluating damaged belongings"
        imagePosition="right"
      />

      <ServiceSituations
        eyebrow="Damage We Handle"
        heading="Contents Damage Problems We Address"
        description="Our team evaluates residential and commercial belongings affected by several types of property damage."
        items={contentsRestorationSituations}
      />

      <ServiceSigns
        eyebrow="When to Call"
        heading="Signs Your Belongings May Need Professional Restoration"
        description="Damage may not always be limited to visible staining. Moisture, odors, residues, and contamination can remain inside or on affected items."
        items={contentsRestorationSigns}
      />

      <EmergencyCTA />

      <ServiceProcess
        eyebrow="Our Process"
        heading="Our Contents Restoration Process"
        description="Every contents loss is different, but professional restoration generally follows these core stages."
        steps={contentsRestorationProcess}
      />

      <ServiceSafety
        eyebrow="What to Do"
        heading="What to Do With Damaged Belongings"
        description="Protect your belongings and insurance claim by documenting the damage and avoiding cleaning methods that could cause additional harm."
        dos={contentsDos}
        donts={contentsDonts}
      />

      <ServiceInsurance
        eyebrow="Insurance Assistance"
        heading="Help Documenting Your Contents Claim"
        paragraphs={[
          "Frontier Restoration can photograph affected belongings, document their condition, prepare restoration estimates, and communicate with your insurance adjuster.",
          "Coverage for belongings depends on the cause of the damage, policy limits, deductibles, exclusions, and whether the property is covered under residential or commercial contents provisions.",
        ]}
        points={[
          "Photographs of affected belongings",
          "Itemized contents documentation",
          "Condition and damage notes",
          "Cleaning and restoration estimates",
          "Documentation of unsalvageable items",
          "Communication with insurance adjusters",
        ]}
        buttonText="Request Service"
        buttonHref="/ "
      />

      <WhyChooseUs />

      <ServiceQuestions
        eyebrow="Common Questions"
        heading="Contents Restoration FAQs"
        questions={contentsQuestions}
      />
    </main>
  );
}
