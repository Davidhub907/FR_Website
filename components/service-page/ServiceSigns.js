import { AlertTriangle } from "lucide-react";

export default function ServiceSigns({
  eyebrow,
  heading,
  description,
  items = [],
}) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
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

        {/* Warning-sign cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <AlertTriangle
                  aria-hidden="true"
                  className="h-5 w-5"
                  strokeWidth={2}
                />
              </div>

              <h3 className="relative mt-5 pr-12 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="relative mt-3 leading-7 text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
