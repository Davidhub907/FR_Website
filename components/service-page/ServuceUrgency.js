import Image from "next/image";
import { Check } from "lucide-react";

export default function ServiceUrgency({
  eyebrow,
  heading,
  paragraphs = [],
  points = [],
  imageSrc,
  imageAlt,
}) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"
            />
          </div>

          {/* Content */}
          <div>
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

            {paragraphs.length > 0 && (
              <div className="mt-6 space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
                {paragraphs.map((paragraph, index) => (
                  <p key={`${index}-${paragraph.slice(0, 25)}`}>{paragraph}</p>
                ))}
              </div>
            )}

            {points.length > 0 && (
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <Check
                        aria-hidden="true"
                        className="h-4 w-4"
                        strokeWidth={3}
                      />
                    </span>

                    <span className="leading-7 font-medium text-gray-800">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
