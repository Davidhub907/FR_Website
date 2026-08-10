import {
  Building2,
  CloudFog,
  CookingPot,
  Flame,
  Heater,
  Zap,
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

const fireDamageSituations = [
  {
    title: "Structural Fire Damage",
    description:
      "Cleanup and restoration preparation after fire damages walls, ceilings, flooring, framing, and other building materials.",
    icon: Flame,
  },
  {
    title: "Smoke and Soot Damage",
    description:
      "Professional cleaning for smoke residue and soot that spreads throughout rooms and settles on surfaces.",
    icon: CloudFog,
  },
  {
    title: "Kitchen and Grease Fires",
    description:
      "Cleanup after cooking and grease fires leave soot, smoke residue, odors, and damaged materials.",
    icon: CookingPot,
  },
  {
    title: "Electrical Fires",
    description:
      "Cleanup and restoration preparation after electrical equipment, wiring, outlets, or appliances cause fire damage.",
    icon: Zap,
  },
  {
    title: "Heating and Fireplace Incidents",
    description:
      "Cleaning and restoration after furnaces, fireplaces, wood stoves, or heating equipment produce fire or smoke damage.",
    icon: Heater,
  },
  {
    title: "Commercial Fire Damage",
    description:
      "Fire, smoke, soot, and odor cleanup for offices, rental properties, retail spaces, warehouses, and other businesses.",
    icon: Building2,
  },
];

const fireDamageSigns = [
  {
    title: "Visible Soot Residue",
    description:
      "Black, gray, or oily residue on walls, ceilings, furniture, fixtures, and personal belongings may require professional cleaning.",
  },
  {
    title: "Persistent Smoke Odors",
    description:
      "Smoke odors can remain inside porous materials, concealed spaces, contents, and ventilation systems after the fire is extinguished.",
  },
  {
    title: "Wall and Ceiling Discoloration",
    description:
      "Yellow, brown, gray, or black staining may indicate smoke and soot deposits across affected surfaces.",
  },
  {
    title: "Damaged Building Materials",
    description:
      "Charred, blistered, warped, cracked, or weakened materials may need to be removed or prepared for repair.",
  },
  {
    title: "Residue in Unaffected Rooms",
    description:
      "Smoke and fine soot particles may travel beyond the room where the fire occurred and settle throughout the property.",
  },
  {
    title: "Water Damage After Firefighting",
    description:
      "Water used to extinguish a fire can leave flooring, drywall, insulation, and structural materials wet.",
  },
];

const fireDamageProcess = [
  {
    number: "01",
    title: "Safety Assessment and Inspection",
    description:
      "Once the property is safe to enter, we inspect affected areas and evaluate fire, smoke, soot, odor, and water damage.",
  },
  {
    number: "02",
    title: "Damage Documentation",
    description:
      "Affected rooms, surfaces, materials, and contents are documented to help establish the scope of cleanup and restoration.",
  },
  {
    number: "03",
    title: "Debris and Material Removal",
    description:
      "Burned or unsalvageable materials may be removed so remaining areas can be accessed and cleaned.",
  },
  {
    number: "04",
    title: "Smoke and Soot Cleaning",
    description:
      "Affected surfaces and salvageable materials are cleaned using methods appropriate for the type of residue and surface involved.",
  },
  {
    number: "05",
    title: "Odor Treatment and Structural Drying",
    description:
      "Smoke odors are addressed, and moisture from firefighting or suppression efforts is dried when necessary.",
  },
  {
    number: "06",
    title: "Restoration Preparation",
    description:
      "After cleanup is complete, affected areas are prepared for repairs, reconstruction, or replacement of damaged materials.",
  },
];

const fireDamageDos = [
  "Wait until fire officials confirm that the property is safe to enter",
  "Contact your insurance company and begin documenting the loss",
  "Photograph visible damage when it is safe to do so",
  "Keep people and pets away from heavily affected areas",
  "Contact Frontier Restoration for professional cleanup and assessment",
];

const fireDamageDonts = [
  "Do not enter a property that has not been declared safe",
  "Do not touch soot-covered surfaces unnecessarily",
  "Do not wash walls or painted surfaces with household cleaners",
  "Do not use upholstered furniture or fabrics affected by heavy smoke",
  "Do not turn on HVAC equipment if it may spread soot through the property",
];

const fireDamageQuestions = [
  {
    question: "When is it safe to enter a fire-damaged property?",
    answer:
      "Do not enter until the fire department or another appropriate authority confirms that the property is safe. Fire can weaken structural materials and create electrical, chemical, and air-quality hazards.",
  },
  {
    question: "Why does soot need professional cleaning?",
    answer:
      "Soot composition varies depending on what burned. Incorrect cleaning methods can smear residue, set stains, damage finishes, or spread contamination to additional surfaces.",
  },
  {
    question: "Can smoke damage rooms that were not near the fire?",
    answer:
      "Yes. Smoke and fine soot particles can travel through doorways, wall cavities, ventilation systems, and open areas before settling throughout the property.",
  },
  {
    question: "Will smoke odor disappear on its own?",
    answer:
      "Ventilation may reduce some odors, but smoke can remain inside porous materials, concealed spaces, furniture, fabrics, and personal belongings. Professional cleaning and odor treatment may be necessary.",
  },
  {
    question: "Can soot-covered belongings be restored?",
    answer:
      "Some belongings can be cleaned and restored, while others may be permanently damaged. Salvageability depends on the material, heat exposure, residue type, and extent of contamination.",
  },
  {
    question: "What happens to water used to extinguish the fire?",
    answer:
      "Firefighting water can spread into flooring, drywall, insulation, and structural cavities. Water extraction and structural drying may be needed in addition to fire and smoke cleanup.",
  },
  {
    question: "How long does fire damage restoration take?",
    answer:
      "The timeline depends on the size of the fire, the amount of smoke and soot, the materials affected, water damage, contents cleaning, and the extent of repairs required.",
  },
  {
    question: "Does homeowners insurance cover fire and smoke damage?",
    answer:
      "Many property policies include fire and smoke damage coverage, but limits, deductibles, exclusions, and claim decisions vary. Your insurance carrier makes the final decision regarding coverage and payment.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Yes. We can document the damage, prepare estimates, and communicate with your insurance adjuster. Your insurance company makes the final decision regarding coverage and payment.",
  },
];

export const metadata = {
  title: "Fire and Smoke Damage Restoration in Fairbanks, Alaska",
  description:
    "Professional fire, smoke, soot, odor, and water damage cleanup services for homes and businesses in Fairbanks, Alaska.",
};

export default function FireDamagePage() {
  return (
    <main>
      <ServiceHero
        eyebrow="24/7 FIRE DAMAGE RESPONSE · FAIRBANKS, ALASKA"
        title="FAIRBANKS FIRE AND SMOKE"
        highlightedTitle="RESTORATION."
        description="Fire, smoke, soot, and firefighting water can damage structural materials, finishes, furniture, and personal belongings. Our team provides emergency cleanup, smoke and soot removal, odor treatment, structural drying, content restoration, and reconstruction support."
        imageSrc="/images/services/fire-damage.jpg"
        imageAlt="Restoration professional cleaning smoke and fire damage inside a property"
        service="Fire and smoke damage"
        primaryButtonText="Request Emergency Service"
      />

      <ServiceOverview
        eyebrow="Fire Damage Services"
        heading="Professional Fire and Smoke Damage Cleanup"
        paragraphs={[
          "Fire damage often extends beyond the visibly burned area. Smoke and soot can spread throughout a property, settle on surfaces, enter concealed spaces, and affect furniture and personal belongings.",
          "Frontier Restoration evaluates the damage, removes unsalvageable materials, cleans smoke and soot residue, addresses odors, dries water-damaged areas, and prepares the property for restoration.",
        ]}
        imageSrc="/images/services/fire-damage1.jpg"
        imageAlt="Technician inspecting smoke and soot damage inside a property"
        imagePosition="right"
      />

      <ServiceSituations
        eyebrow="Damage We Handle"
        heading="Fire and Smoke Damage Problems We Address"
        description="Our team responds to residential and commercial losses involving direct fire damage, smoke, soot, odor, and water used during firefighting."
        items={fireDamageSituations}
      />

      <ServiceSigns
        eyebrow="Hidden Damage"
        heading="Signs of Smoke, Soot, and Fire Damage"
        description="Damage may extend beyond burned materials. Smoke residue, odors, and firefighting water can affect rooms throughout the property."
        items={fireDamageSigns}
      />

      <EmergencyCTA />

      <ServiceProcess
        eyebrow="Our Process"
        heading="Our Fire and Smoke Damage Restoration Process"
        description="Every fire loss is different, but professional cleanup and restoration generally follow these core stages."
        steps={fireDamageProcess}
      />

      <ServiceSafety
        eyebrow="What to Do"
        heading="What to Do After a Fire"
        description="Your safety comes first. Do not enter or disturb the property until appropriate authorities confirm that it is safe."
        dos={fireDamageDos}
        donts={fireDamageDonts}
      />

      <ServiceInsurance
        eyebrow="Insurance Assistance"
        heading="Help Documenting Your Fire Damage Claim"
        paragraphs={[
          "Frontier Restoration can document affected areas, prepare cleanup and restoration estimates, and communicate with your insurance adjuster.",
          "Insurance coverage depends on the cause of the fire and the terms, limits, deductibles, and exclusions in your policy. Your insurance carrier makes the final decision regarding coverage and payment.",
        ]}
        points={[
          "Photos of affected rooms and materials",
          "Documentation of fire, smoke, soot, and water damage",
          "Documentation of removed materials",
          "Detailed cleanup and restoration estimates",
          "Contents damage documentation",
          "Communication with insurance adjusters",
        ]}
        buttonText="Request Emergency Service"
        buttonHref="/ "
      />

      <WhyChooseUs />

      <ServiceQuestions
        eyebrow="Common Questions"
        heading="Fire and Smoke Damage Restoration FAQs"
        questions={fireDamageQuestions}
      />
    </main>
  );
}
