import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Water Damage Restoration",
    description:
      "Fast water extraction, structural drying, and cleanup to prevent further damage.",
    href: "/water-damage",
    image: "/images/services/water-damage1.jpg",
    alt: "Water damage restoration equipment drying a property",
  },
  {
    title: "Fire & Smoke Restoration",
    description:
      "Complete cleanup and restoration for fire, smoke, soot, and odor damage.",
    href: "/fire-damage",
    image: "/images/services/fire-damage.jpg",
    alt: "Fire and smoke damage restoration work",
  },
  {
    title: "Mold Remediation",
    description:
      "Professional mold removal and moisture control to protect your property.",
    href: "/mold-remediation",
    image: "/images/services/mold-damage.jpg",
    alt: "Professional mold remediation service",
  },
  {
    title: "Sewer Backup Cleanup",
    description:
      "Safe removal, cleaning, and sanitization after sewage or contaminated water damage.",
    href: "/sewer-backup",
    image: "/images/services/sewer-backup.jpg",
    alt: "Sewer backup cleanup and sanitization",
  },
  {
    title: "Contents Restoration",
    description:
      "Careful cleaning and restoration of furniture, belongings, and other valuable contents.",
    href: "/content-restoration",
    image: "/images/services/content-restoration.jpg",
    alt: "Contents being cleaned after property damage",
  },

  {
    title: "Commercial",
    description:
      "We work closely with businesses to get their commercial property restored.",
    href: "/commercial",
    image: "/images/services/about-us.jpg",
    alt: "Commercial building",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-slate-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mx-left mb-10 max-w-3xl text-left md:mb-14">
          <p className="mb-3 text-sm font-bold tracking-widest text-orange-500 uppercase">
            What We Do
          </p>

          <h2 className="text-3xl font-bold text-slate-900 uppercase md:text-4xl">
            Professional
            <br />
            Restoration Services
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Frontier Restoration provides professional cleanup and restoration
            services for homes and businesses throughout Interior Alaska.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative min-h-[340px] overflow-hidden rounded-xl shadow-lg"
            >
              {/* Background image */}
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-colors duration-300 group-hover:from-black/95 group-hover:via-black/60" />

              {/* Card text */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 leading-6 text-slate-200">
                  {service.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 font-bold text-orange-400 transition-all duration-300 group-hover:gap-3">
                  Learn More
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
