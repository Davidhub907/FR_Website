import {
  Building,
  ClipboardList,
  School,
  Store,
  UtensilsCrossed,
  Warehouse,
} from "lucide-react";

import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";
import ServiceSituations from "@/components/service-page/ServiceSituations";
import ServiceSigns from "@/components/service-page/ServiceSigns";
import ServiceProcess from "@/components/service-page/ServiceProcess";
import ServiceUrgency from "@/components/service-page/ServiceUrgency";
import ServiceSafety from "@/components/service-page/ServiceSafety";
import ServiceInsurance from "@/components/service-page/ServiceInsurance";
import CommercialServices from "@/components/service-page/CommercialServices";

import EmergencyCTA from "@/components/layout/EmergencyCTA";
import ServiceQuestions from "@/components/service-page/ServiceQuestions";

const commercialPropertyTypes = [
  {
    title: "Offices and Retail Spaces",
    description:
      "Restoration services for offices, stores, shopping spaces, professional buildings, and other customer-facing properties.",
    icon: Store,
  },
  {
    title: "Rental and Multi-Family Properties",
    description:
      "Damage cleanup and restoration support for apartment buildings, rental properties, condominiums, and multi-unit housing.",
    icon: Building,
  },
  {
    title: "Warehouses and Industrial Buildings",
    description:
      "Restoration services for warehouses, workshops, production areas, storage facilities, and other industrial properties.",
    icon: Warehouse,
  },
  {
    title: "Restaurants and Hospitality",
    description:
      "Cleanup and restoration for restaurants, lodging properties, kitchens, dining spaces, and hospitality facilities.",
    icon: UtensilsCrossed,
  },
  {
    title: "Schools and Public Facilities",
    description:
      "Restoration support for schools, community buildings, nonprofit facilities, and other shared or publicly used spaces.",
    icon: School,
  },
  {
    title: "Property Management Portfolios",
    description:
      "Restoration coordination for property managers responsible for multiple residential or commercial locations.",
    icon: ClipboardList,
  },
];

const commercialServices = [
  {
    title: "Commercial Water Damage",
    description:
      "Water extraction, structural drying, moisture monitoring, and restoration preparation after leaks, flooding, frozen pipes, and plumbing failures.",
    imageSrc: "/images/services/water-damage.jpg",
    imageAlt: "Commercial water damage restoration equipment inside a business",
    href: "/water-damage",
  },
  {
    title: "Commercial Fire and Smoke Damage",
    description:
      "Cleanup of fire damage, smoke residue, soot, odors, and water left behind during firefighting efforts.",
    imageSrc: "/images/services/fire-damage.jpg",
    imageAlt: "Commercial fire and smoke damage restoration inside a building",
    href: "/fire-damage",
  },
  {
    title: "Commercial Mold Remediation",
    description:
      "Assessment, containment, material removal, cleaning, and moisture correction for affected commercial areas.",
    imageSrc: "/images/services/mold-remediation.jpg",
    imageAlt: "Commercial mold remediation inside a business",
    href: "/mold-remediation",
  },
  {
    title: "Commercial Sewer Backup Cleanup",
    description:
      "Professional sewage removal, contaminated-material cleanup, sanitization, and structural drying.",
    imageSrc: "/images/services/sewer-backup.jpg",
    imageAlt: "Commercial sewer backup cleanup",
    href: "/sewer-backup",
  },
  {
    title: "Commercial Contents Restoration",
    description:
      "Documentation, evaluation, cleaning, and restoration support for furniture, equipment, inventory, records, and other business property.",
    imageSrc: "/images/services/contents-restoration.jpg",
    imageAlt:
      "Commercial equipment and inventory being evaluated for contents restoration",
    href: "/contents-restoration",
  },
];

const commercialDamageSigns = [
  {
    title: "Standing Water or Active Leaks",
    description:
      "Water around floors, walls, equipment, storage areas, plumbing fixtures, or mechanical systems requires prompt attention.",
  },
  {
    title: "Smoke, Soot, or Fire Odors",
    description:
      "Smoke residue and odors can travel beyond the original fire area and affect offices, inventory, equipment, and ventilation systems.",
  },
  {
    title: "Visible Mold or Musty Odors",
    description:
      "Visible growth, recurring moisture, or persistent musty odors may indicate a mold or concealed moisture problem.",
  },
  {
    title: "Sewer or Drain Backups",
    description:
      "Wastewater entering through toilets, floor drains, plumbing fixtures, or lower areas should be treated as potentially contaminated.",
  },
  {
    title: "Wet Inventory or Equipment",
    description:
      "Water, smoke, soot, or contamination affecting business contents may require immediate documentation and evaluation.",
  },
  {
    title: "Interrupted Business Operations",
    description:
      "Damage that closes rooms, restricts access, affects tenants, or prevents normal operations requires a coordinated restoration plan.",
  },
];

const commercialRestorationProcess = [
  {
    number: "01",
    title: "Initial Response and Site Coordination",
    description:
      "We collect information about the loss, affected areas, site access, operational concerns, and the appropriate points of contact.",
  },
  {
    number: "02",
    title: "Safety and Damage Assessment",
    description:
      "Affected areas are inspected to identify safety concerns, damage conditions, contamination, moisture, and immediate priorities.",
  },
  {
    number: "03",
    title: "Documentation and Scope Development",
    description:
      "Damage is photographed and documented so a cleanup and restoration scope can be established.",
  },
  {
    number: "04",
    title: "Mitigation and Cleanup",
    description:
      "Water, debris, soot, contaminated materials, or other damage is addressed using procedures appropriate for the type of loss.",
  },
  {
    number: "05",
    title: "Drying, Cleaning, and Monitoring",
    description:
      "Affected areas and salvageable materials are dried, cleaned, monitored, and evaluated throughout the restoration process.",
  },
  {
    number: "06",
    title: "Restoration and Reopening Coordination",
    description:
      "Completed areas are prepared for repairs or return to use, with project priorities coordinated around the property's operational needs.",
  },
];

const commercialUrgencyPoints = [
  "Limit damage from spreading into additional rooms or units",
  "Protect equipment, inventory, records, and business property",
  "Document affected areas for the commercial insurance claim",
  "Coordinate access with owners, managers, tenants, and adjusters",
  "Prioritize areas that are important to continued operations",
  "Prepare affected areas for repairs and safe return to use",
];

const commercialDos = [
  "Restrict access to damaged or contaminated areas",
  "Stop the source of water when it is safe and possible",
  "Notify the property owner, manager, or responsible decision-maker",
  "Photograph visible damage when conditions are safe",
  "Identify equipment, inventory, or records requiring priority attention",
  "Contact Frontier Restoration to begin the damage assessment",
];

const commercialDonts = [
  "Do not allow employees or tenants into unsafe areas",
  "Do not use electrical equipment around standing water",
  "Do not have staff clean sewage or heavily contaminated materials",
  "Do not discard inventory or equipment before documenting it",
  "Do not spread soot or contamination with uncontrolled fans",
  "Do not restart affected building systems without appropriate evaluation",
];

const commercialQuestions = [
  {
    question: "What types of commercial properties do you serve?",
    answer:
      "We provide restoration services for offices, retail spaces, rental properties, apartment buildings, warehouses, restaurants, lodging facilities, and other commercial properties.",
  },
  {
    question: "How quickly should we call after discovering damage?",
    answer:
      "Call as soon as it is safe to do so. Water, smoke, soot, sewage, and moisture can continue spreading and damaging materials after the original incident.",
  },
  {
    question: "Can restoration work be coordinated around business operations?",
    answer:
      "When site conditions permit, project priorities and access can be coordinated with owners or managers to reduce unnecessary disruption. Safety and the type of damage determine which areas can remain occupied.",
  },
  {
    question: "Do you work with commercial property managers?",
    answer:
      "Yes. We can coordinate with property owners, managers, tenants, maintenance personnel, insurance adjusters, and other project contacts.",
  },
  {
    question: "Can you handle damage affecting multiple units?",
    answer:
      "Yes, affected units and common areas can be evaluated as part of the same loss. The project scope depends on the number of areas involved and the type and extent of damage.",
  },
  {
    question: "What happens to damaged inventory or equipment?",
    answer:
      "Affected business property can be documented and evaluated to determine whether cleaning or restoration may be appropriate. Salvageability depends on the material, condition, contamination, and type of damage.",
  },
  {
    question: "How long does commercial restoration take?",
    answer:
      "The timeline depends on the size of the affected area, the type of damage, materials involved, drying or cleaning requirements, property access, and repairs needed afterward.",
  },
  {
    question: "Does commercial insurance cover restoration?",
    answer:
      "Coverage depends on the cause of the loss and the terms, limits, deductibles, and exclusions in the commercial property policy. Your insurance carrier makes the final decision regarding coverage and payment.",
  },
  {
    question: "Does insurance cover lost business income?",
    answer:
      "Business-income or business-interruption coverage is separate from physical property restoration and varies by policy. Questions about that coverage should be directed to your insurance agent or adjuster.",
  },
  {
    question: "Do you work with insurance adjusters?",
    answer:
      "Yes. We can document affected areas, prepare estimates, and communicate with your insurance adjuster. Your insurance company makes the final decision regarding coverage and payment.",
  },
];

export const metadata = {
  title: "Commercial Restoration Services in Fairbanks, Alaska",
  description:
    "Commercial water, fire, smoke, mold, sewer backup, and contents restoration services for businesses and property managers in Fairbanks, Alaska.",
};

export default function CommercialPage() {
  return (
    <main>
      <ServiceHero
        title="Commercial Restoration Services in Fairbanks, Alaska"
        description="Professional damage cleanup and restoration support for businesses, rental properties, commercial facilities, and property managers."
        imageSrc="/images/commercial/hero.jpg"
        imageAlt="Commercial restoration technicians working inside a business"
        primaryButtonText="Request Commercial Service"
        primaryButtonHref="/contact"
        secondaryButtonText="Call (907) 987-2916"
        secondaryButtonHref="tel:+19079872916"
      />

      <ServiceOverview
        eyebrow="Commercial Restoration"
        heading="Helping Businesses Recover From Property Damage"
        paragraphs={[
          "Water, fire, smoke, mold, sewer backups, and damaged contents can interrupt operations while affecting employees, tenants, customers, equipment, and inventory.",
          "Frontier Restoration evaluates affected areas, documents the damage, performs appropriate cleanup and mitigation, and coordinates the restoration process with owners, property managers, tenants, and insurance representatives.",
        ]}
        imageSrc="/images/commercial/assessment.jpg"
        imageAlt="Restoration technician assessing damage inside a commercial property"
        imagePosition="right"
      />

      <CommercialServices
        eyebrow="Our Commercial Services"
        heading="Commercial Damage Restoration Services"
        description="Frontier Restoration provides cleanup and restoration support for several types of commercial property damage."
        services={commercialServices}
      />

      <ServiceSituations
        eyebrow="Properties We Serve"
        heading="Commercial Properties and Facilities"
        description="Our restoration services support businesses, property owners, and managers responsible for a variety of commercial environments."
        items={commercialPropertyTypes}
      />

      <ServiceSigns
        eyebrow="When to Call"
        heading="Commercial Property Damage That Requires Attention"
        description="Prompt evaluation helps establish the scope of the loss, protect business property, and begin planning for cleanup and restoration."
        items={commercialDamageSigns}
      />

      <ServiceProcess
        eyebrow="Our Process"
        heading="Our Commercial Restoration Process"
        description="Commercial restoration requires clear communication, damage documentation, and coordination between multiple stakeholders."
        steps={commercialRestorationProcess}
      />

      <ServiceUrgency
        eyebrow="Limit Business Disruption"
        heading="Why Commercial Property Damage Should Be Addressed Quickly"
        paragraphs={[
          "Damage can spread into additional rooms, units, inventory, equipment, and building materials while disrupting normal business operations.",
          "A prompt professional response can establish priorities, begin mitigation, protect potentially salvageable property, and create a documented plan for recovery.",
        ]}
        points={commercialUrgencyPoints}
        imageSrc="/images/commercial/damage-documentation.jpg"
        imageAlt="Technician documenting damage inside a commercial facility"
      />

      <ServiceSafety
        eyebrow="What to Do"
        heading="What to Do After Commercial Property Damage"
        description="Protect employees, tenants, customers, and business property while arranging a professional assessment."
        dos={commercialDos}
        donts={commercialDonts}
      />

      <ServiceInsurance
        eyebrow="Commercial Insurance Assistance"
        heading="Help Documenting Your Commercial Property Claim"
        paragraphs={[
          "Frontier Restoration can photograph affected areas, document damaged materials and business contents, prepare restoration estimates, and communicate with your insurance adjuster.",
          "Commercial coverage varies based on the cause of the loss and the terms, deductibles, limits, endorsements, and exclusions in the policy. Your insurance carrier makes the final decision regarding coverage and payment.",
        ]}
        points={[
          "Photos of affected areas",
          "Documentation of damaged building materials",
          "Moisture readings and drying records when applicable",
          "Documentation of equipment, inventory, and contents",
          "Detailed cleanup and restoration estimates",
          "Communication with insurance adjusters",
        ]}
        buttonText="Request Commercial Service"
        buttonHref="/contact"
      />

      <EmergencyCTA />

      <ServiceQuestions
        eyebrow="Common Questions"
        heading="Commercial Restoration FAQs"
        questions={commercialQuestions}
      />
    </main>
  );
}
