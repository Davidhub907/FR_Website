import {
  Bath,
  Building2,
  Droplets,
  Layers,
  Snowflake,
  Wrench,
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

const moldSituations = [
  {
    title: "Water Damage",
    description:
      "Mold remediation after leaks, flooding, or incomplete structural drying leaves building materials damp.",
    icon: Droplets,
  },
  {
    title: "Plumbing and Roof Leaks",
    description:
      "Remediation for mold growth associated with leaking pipes, damaged plumbing, roof leaks, or water entering through the building exterior.",
    icon: Wrench,
  },
  {
    title: "Basements and Crawlspaces",
    description:
      "Assessment and remediation of mold growth in damp basements, crawlspaces, utility rooms, and other lower areas.",
    icon: Layers,
  },
  {
    title: "Attics and Ice Dams",
    description:
      "Mold remediation where roof leaks, ice dams, condensation, or ventilation problems have affected attic materials.",
    icon: Snowflake,
  },
  {
    title: "Bathrooms and Kitchens",
    description:
      "Remediation where persistent moisture, leaks, or poor ventilation have contributed to mold growth.",
    icon: Bath,
  },
  {
    title: "Commercial Properties",
    description:
      "Mold remediation for offices, rental properties, retail spaces, warehouses, and other commercial facilities.",
    icon: Building2,
  },
];

const moldSigns = [
  {
    title: "Visible Growth",
    description:
      "Discoloration, spotting, or fuzzy growth on drywall, wood, ceilings, flooring, or other building materials may indicate mold.",
  },
  {
    title: "Musty Odors",
    description:
      "A persistent earthy or musty odor may indicate moisture or concealed mold growth, even when no growth is immediately visible.",
  },
  {
    title: "Recurring Water Stains",
    description:
      "Water stains that return or continue expanding may indicate an unresolved leak or moisture problem.",
  },
  {
    title: "Peeling or Bubbling Surfaces",
    description:
      "Peeling paint, bubbling drywall, damaged wallpaper, or swollen materials can indicate moisture behind the surface.",
  },
  {
    title: "Condensation and High Humidity",
    description:
      "Frequent condensation on windows, walls, pipes, or other surfaces may indicate excess indoor moisture.",
  },
  {
    title: "Previous Water Damage",
    description:
      "Areas affected by leaks, flooding, or prolonged dampness may develop mold if they were not dried completely.",
  },
];

const moldProcess = [
  {
    number: "01",
    title: "Inspection and Assessment",
    description:
      "We inspect the affected area, evaluate visible mold and moisture conditions, and determine the appropriate scope of remediation.",
  },
  {
    number: "02",
    title: "Moisture Source Identification",
    description:
      "The source of moisture must be identified and corrected so mold is less likely to return after remediation.",
  },
  {
    number: "03",
    title: "Containment",
    description:
      "Containment and controlled work practices may be used to reduce the movement of dust and mold particles into unaffected areas.",
  },
  {
    number: "04",
    title: "Material Removal and Cleaning",
    description:
      "Affected porous materials that cannot be adequately cleaned may be removed, while appropriate remaining surfaces are cleaned.",
  },
  {
    number: "05",
    title: "Detailed Cleaning",
    description:
      "The work area is carefully cleaned using professional equipment and procedures appropriate for the affected materials.",
  },
  {
    number: "06",
    title: "Drying and Final Evaluation",
    description:
      "Affected areas are dried and evaluated to confirm that the remediation scope has been completed before repairs begin.",
  },
];

const moldDos = [
  "Address active leaks or moisture sources as soon as possible",
  "Keep children and pets away from visibly affected areas",
  "Limit unnecessary movement through the affected space",
  "Photograph visible damage before moving affected belongings",
  "Contact Frontier Restoration for a professional assessment",
];

const moldDonts = [
  "Do not paint or seal directly over visible mold growth",
  "Do not disturb large affected areas without appropriate containment",
  "Do not direct household fans across visible mold growth",
  "Do not mix bleach, ammonia, or other cleaning chemicals",
  "Do not assume the problem is resolved without correcting the moisture source",
];

const moldQuestions = [
  {
    question: "What causes mold to grow inside a building?",
    answer:
      "Mold growth is generally associated with excess moisture. Common sources include plumbing leaks, roof leaks, flooding, condensation, high humidity, and building materials that were not dried completely.",
  },
  {
    question: "Can I remove mold myself?",
    answer:
      "Small areas on certain hard surfaces may sometimes be manageable, but larger, recurring, concealed, or water-damaged areas may require professional containment, material removal, cleaning, and moisture correction.",
  },
  {
    question: "Does mold always need to be tested?",
    answer:
      "Not necessarily. When visible mold and a moisture problem are already present, remediation may be more useful than identifying the specific type. Testing may be appropriate in certain situations and should be interpreted by a qualified professional.",
  },
  {
    question: "Can mold be painted over?",
    answer:
      "Painting or sealing over visible mold does not correct the underlying moisture problem or remove contamination. The affected area should be properly cleaned or removed before finishes are restored.",
  },
  {
    question: "Will all affected materials need to be removed?",
    answer:
      "No. The decision depends on the type of material, the amount of contamination, its physical condition, and whether it can be adequately cleaned and dried. Some porous materials may need to be removed.",
  },
  {
    question: "How long does mold remediation take?",
    answer:
      "The timeline depends on the size and location of the affected area, the materials involved, containment requirements, moisture conditions, and the repairs needed afterward.",
  },
  {
    question: "Will mold return after remediation?",
    answer:
      "Mold can return if the underlying moisture source remains. Correcting leaks, condensation, humidity, or other moisture problems is a critical part of preventing future growth.",
  },
  {
    question: "Does homeowners insurance cover mold remediation?",
    answer:
      "Coverage depends on the cause of the moisture and the terms, limits, and exclusions in your policy. Your insurance carrier makes the final decision regarding coverage and payment.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Yes. We can document affected areas, prepare estimates, and communicate with your insurance adjuster. Your insurance company makes the final decision regarding coverage and payment.",
  },
];

export const metadata = {
  title: "Mold Remediation in Fairbanks, Alaska",

  description:
    "Professional mold remediation, containment, material removal, cleaning, and moisture-control services for homes and businesses in Fairbanks, Alaska.",

  alternates: {
    canonical: "/mold-remediation",
  },
};

export default function MoldRemediationPage() {
  return (
    <main>
      <ServiceHero
        eyebrow="PROFESSIONAL MOLD REMEDIATION · FAIRBANKS, ALASKA"
        title="FAIRBANKS MOLD"
        highlightedTitle="REMEDIATION."
        description="Mold can spread through building materials and affect indoor air quality when moisture problems are not corrected. Our team identifies affected areas, contains the workspace, removes damaged materials, cleans the structure, and addresses the underlying moisture source."
        imageSrc="/images/services/mold-damage.webp"
        imageAlt="Mold remediation professional inspecting and treating an affected property"
        service="Mold remediation"
        primaryButtonText="Request Mold Inspection"
      />

      <ServiceOverview
        eyebrow="Mold Remediation Services"
        heading="Professional Mold Removal and Remediation"
        paragraphs={[
          "Mold can develop when drywall, wood, insulation, flooring, or other building materials remain damp. Visible growth may represent only part of the affected area when moisture has traveled behind walls or beneath surfaces.",
          "Frontier Restoration evaluates the affected area, helps identify moisture conditions, establishes containment when appropriate, removes materials that cannot be adequately cleaned, and prepares the property for restoration.",
        ]}
        imageSrc="/images/services/mold-damage.webp"
        imageAlt="Technician inspecting a property for visible mold and moisture damage"
        imagePosition="right"
      />

      <ServiceSituations
        eyebrow="Common Moisture Sources"
        heading="Mold Problems We Handle"
        description="Indoor mold is typically connected to an unresolved or previous moisture problem. Identifying that moisture source is an essential part of remediation."
        items={moldSituations}
      />

      <ServiceSigns
        eyebrow="Warning Signs"
        heading="Signs You May Have a Mold Problem"
        description="Mold is sometimes clearly visible, but concealed moisture and musty odors may also indicate a problem behind building materials."
        items={moldSigns}
      />

      <EmergencyCTA />

      <ServiceProcess
        eyebrow="Our Process"
        heading="Our Mold Remediation Process"
        description="Every property is different, but professional mold remediation generally follows these core stages."
        steps={moldProcess}
      />

      <ServiceSafety
        eyebrow="What to Do"
        heading="What to Do After Discovering Mold"
        description="Avoid disturbing the affected area while taking reasonable steps to control moisture and arrange a professional assessment."
        dos={moldDos}
        donts={moldDonts}
      />

      <ServiceInsurance
        eyebrow="Insurance Assistance"
        heading="Help Documenting Your Mold Remediation Claim"
        paragraphs={[
          "Frontier Restoration can document affected areas, prepare remediation estimates, and communicate with your insurance adjuster.",
          "Insurance coverage for mold depends heavily on the cause of the moisture, the timing of the damage, and the limits and exclusions in your policy. Your insurance carrier makes the final decision regarding coverage and payment.",
        ]}
        points={[
          "Photos of affected areas",
          "Documentation of visible damage",
          "Moisture readings when applicable",
          "Documentation of removed materials",
          "Detailed remediation estimates",
          "Communication with insurance adjusters",
        ]}
        buttonText="Request an Assessment"
        buttonHref="/ "
      />

      <WhyChooseUs />

      <ServiceQuestions
        eyebrow="Common Questions"
        heading="Mold Remediation FAQs"
        questions={moldQuestions}
      />
    </main>
  );
}
