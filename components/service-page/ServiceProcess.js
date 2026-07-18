export default function ServiceProcess({
  eyebrow,
  heading,
  description,
  steps = [],
}) {
  return (
    <section className="bg-[#1f1f1c] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="text-sm font-bold tracking-[0.18em] text-orange-500 uppercase">
              {eyebrow}
            </p>
          )}

          {heading && (
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {heading}
            </h2>
          )}

          {description && (
            <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Process steps */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={`${step.number}-${step.title}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-[#454545] p-7"
            >
              {/* Large background number */}
              <span
                aria-hidden="true"
                className="absolute top-2 right-5 text-7xl font-black text-white/[0.04] transition duration-300 group-hover:text-orange-500/[0.08]"
              >
                {step.number || String(index + 1).padStart(2, "0")}
              </span>

              {/* Step number */}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                {step.number || String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="relative mt-6 text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="relative mt-3 leading-7 text-gray-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
