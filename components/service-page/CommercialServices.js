import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CommercialServices({
  eyebrow,
  heading,
  description,
  services = [],
}) {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="text-sm font-bold tracking-[0.18em] text-orange-600 uppercase">
              {eyebrow}
            </p>
          )}

          {heading && (
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {heading}
            </h2>
          )}

          {description && (
            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Commercial service cards */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 lg:mt-14">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"
                />
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-600">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-gray-600">
                  {service.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-bold text-orange-600">
                  Learn More
                  <ArrowRight
                    aria-hidden="true"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
