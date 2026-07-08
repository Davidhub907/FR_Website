export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-orange-400">
            24/7 Emergency Restoration in Fairbanks, AK
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Water, Fire, and Mold Damage Restoration When You Need Help Fast
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Frontier Restoration LLC helps Fairbanks homeowners and businesses
            recover after water damage, fire damage, mold problems, and other
            property emergencies.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:19079872916"
              className="rounded-md bg-orange-500 px-6 py-3 text-center font-bold text-white hover:bg-orange-600"
            >
              Call Now: (907) 987-2916
            </a>

            <a
              href="#services"
              className="rounded-md border border-white px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-slate-950"
            >
              See Services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Emergency restoration services for Interior Alaska
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Water Damage Restoration</h3>
              <p className="mt-3 text-slate-600">
                Fast response for leaks, flooding, extraction, drying, and
                moisture control.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Fire Damage Restoration</h3>
              <p className="mt-3 text-slate-600">
                Cleanup and restoration support after smoke, soot, and fire
                damage.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Mold Remediation</h3>
              <p className="mt-3 text-slate-600">
                Mold inspection, containment, removal, and prevention-focused
                remediation.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}