export default function ServiceSituations({
  eyebrow,
  heading,
  description,
  items = [],
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

        {/* Situation cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
