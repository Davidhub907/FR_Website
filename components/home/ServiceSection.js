import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "WATER DAMAGE",
    description:
      "Fast water extraction, structural drying, and cleanup to prevent further damage.",
    href: "/water-damage",
    image: "/images/services/water-damage1.webp",
    alt: "Water damage restoration equipment drying a property",
  },
  {
    title: "FIRE & SMOKE",
    description:
      "Complete cleanup and restoration for fire, smoke, soot, and odor damage.",
    href: "/fire-damage",
    image: "/images/services/fire-damage.jpg",
    alt: "Fire and smoke damage restoration work",
  },
  {
    title: "MOLD REMEDIATION",
    description:
      "Professional mold removal and moisture control to protect your property.",
    href: "/mold-remediation",
    image: "/images/services/mold-damage.webp",
    alt: "Professional mold remediation service",
  },

  /*
  {
    title: "SEWER BACKUP",
    description:
      "Safe removal, cleaning, and sanitization after sewage or contaminated water damage.",
    href: "/sewer-backup",
    image: "/images/services/sewer-backup.jpg",
    alt: "Sewer backup cleanup and sanitization",
  },
  */

  /*
  {
    title: "CONTENTS RESTORATION",
    description:
      "Careful cleaning and restoration of furniture, belongings, and other valuable contents.",
    href: "/content-restoration",
    image: "/images/services/content-restoration.jpg",
    alt: "Contents being cleaned after property damage",
  },
  */

  /* 

  {
    title: "COMMERICAL",
    description:
      "We work closely with businesses to get their commercial property restored.",
    href: "/commercial",
    image: "/images/services/commercial.jpg",
    alt: "Commercial building",
  },
  */
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
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
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Service image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Service information */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-slate-600">
                  {service.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition group-hover:text-orange-700">
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
