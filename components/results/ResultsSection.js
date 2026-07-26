import BeforeAfterCard from "./BeforeAfterCard";

export default function ResultsSection({
  eyebrow = "Our Work",
  heading = "Real Restoration Results",
  description,
  projects = [],
  background = "slate",
}) {
  if (!projects.length) {
    return null;
  }

  const backgroundClass = background === "white" ? "bg-white" : "bg-slate-50";

  return (
    <section className={`${backgroundClass} py-20 sm:py-24`}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-left md:text-center">
          <p className="text-sm font-bold tracking-widest text-orange-600 uppercase">
            {eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 uppercase sm:text-4xl">
            {heading}
          </h2>

          {description && (
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {description}
            </p>
          )}
        </div>

        {/* Results grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <BeforeAfterCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
