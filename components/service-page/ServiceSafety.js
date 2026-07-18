import { Check, ShieldAlert, X } from "lucide-react";

export default function ServiceSafety({
  eyebrow,
  heading,
  description,
  dos = [],
  donts = [],
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
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 uppercase sm:text-4xl">
              {heading}
            </h2>
          )}

          {description && (
            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Do and don't columns */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {/* Do */}
          <article className="overflow-hidden rounded-2xl border border-green-200 bg-white shadow-sm">
            <div className="flex items-center gap-4 border-b border-green-100 bg-green-50 px-6 py-5 sm:px-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                <Check aria-hidden="true" className="h-6 w-6" strokeWidth={3} />
              </div>

              <div>
                <p className="text-sm font-bold tracking-wider text-green-700 uppercase">
                  Recommended
                </p>

                <h3 className="text-xl font-bold text-gray-900">
                  What You Should Do
                </h3>
              </div>
            </div>

            <ul className="space-y-5 p-6 sm:p-8">
              {dos.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Check
                      aria-hidden="true"
                      className="h-4 w-4"
                      strokeWidth={3}
                    />
                  </span>

                  <span className="leading-7 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Don't */}
          <article className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
            <div className="flex items-center gap-4 border-b border-red-100 bg-red-50 px-6 py-5 sm:px-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                <ShieldAlert
                  aria-hidden="true"
                  className="h-6 w-6"
                  strokeWidth={2}
                />
              </div>

              <div>
                <p className="text-sm font-bold tracking-wider text-red-700 uppercase">
                  Avoid
                </p>

                <h3 className="text-xl font-bold text-gray-900">
                  What You Should Not Do
                </h3>
              </div>
            </div>

            <ul className="space-y-5 p-6 sm:p-8">
              {donts.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
                    <X aria-hidden="true" className="h-4 w-4" strokeWidth={3} />
                  </span>

                  <span className="leading-7 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
