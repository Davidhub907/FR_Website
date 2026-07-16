import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceAudience({ eyebrow, heading, audiences = [] }) {
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
        </div>

        {/* Audience cards */}
        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-8">
          {audiences.map((audience) => (
            <Link
              key={audience.title}
              href={audience.href}
              className="group relative min-h-[420px] overflow-hidden rounded-2xl bg-gray-900 shadow-lg"
            >
              <Image
                src={audience.imageSrc}
                alt={audience.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Dark overlays */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-black/35 transition duration-300 group-hover:bg-black/45"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
              />

              {/* Card content */}
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  {audience.title}
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-gray-200">
                  {audience.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-bold text-orange-400">
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
