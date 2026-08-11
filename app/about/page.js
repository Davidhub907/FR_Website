import Image from "next/image";

const services = [
  "Water Damage Restoration",
  "Fire & Smoke Damage Restoration",
  "Mold Remediation",
  "Contents Pack-Out & Storage",
  "Contents Cleaning & Restoration",
  "Structural Drying",
  "Reconstruction & Rebuild Services",
];

const team = [
  {
    name: "Candace Hawkes",
    role: "Office Manager",
    image: "/images/services/Candance-headshot.jpeg",
    certifications: [],
  },
  {
    name: "Ross Matherly",
    role: "Operations Manager",
    image: "/images/services/Ross-headshot.jpeg",
    certifications: [
      "IICRC Water Restoration Technician",
      "Certified Mold Inspector",
      "Certified Mold Remediation",
    ],
  },
  {
    name: "Jenna Gelines",
    role: "Mitigation Manager",
    image: "/images/services/Jenna-headshot.jpeg",
    certifications: ["lead-Based Paint Renovation & Repair"],
  },
];

export const metadata = {
  title: "About Us | Frontier Restoration",

  description:
    "Learn more about Frontier Restoration, a Fairbanks restoration company serving homeowners, businesses, property managers, and insurance professionals throughout the Fairbanks North Star Borough.",

  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1f1f1c] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-widest text-orange-500 uppercase">
              About Frontier Restoration
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
              <span className="block">Restoring Property.</span>
              <span className="block text-orange-500">
                Rebuilding Confidence.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Frontier Restoration provides professional property restoration
              services throughout Fairbanks and the surrounding communities. We
              help homeowners and businesses recover from water, fire, smoke,
              mold, and other types of property damage.
            </p>
          </div>

          {/* Team image */}
          <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-xl sm:h-[380px]">
            <Image
              src="/images/services/group-picture.jpeg"
              alt="Frontier Restoration team"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-widest text-orange-600 uppercase">
              Meet Our Team
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frontier Leadership
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Meet the people helping lead Frontier Restoration and serve
              property owners throughout the Fairbanks community.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((person) => (
              <article key={person.name}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-200">
                  <Image
                    src={person.image}
                    alt={`${person.name}, ${person.role} at Frontier Restoration`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="pt-5">
                  <h3 className="text-xl font-bold text-slate-900">
                    {person.name}
                  </h3>

                  <p className="mt-1 font-semibold text-orange-600">
                    {person.role}
                  </p>

                  {person.certifications.length > 0 && (
                    <div className="mt-5">
                      <p className="text-sm font-bold tracking-wide text-slate-900 uppercase">
                        Certifications
                      </p>

                      <ul className="mt-2 space-y-1 text-sm text-slate-600">
                        {person.certifications.map((certification) => (
                          <li key={certification}>{certification}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* More About Us */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-bold tracking-widest text-orange-600 uppercase">
                More About Us
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Local Restoration Professionals You Can Rely On
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Frontier Restoration was established in 2025 with a mission to
                  serve the Fairbanks community by providing professional
                  restoration services with integrity, urgency, and clear
                  communication.
                </p>

                <p>
                  We proudly serve homeowners, businesses, property managers,
                  and insurance professionals throughout the Fairbanks North
                  Star Borough.
                </p>

                <p>
                  Whether responding to water damage, fire and smoke damage,
                  mold contamination, or contents restoration needs, our goal is
                  to restore not only the property, but also confidence and
                  peace of mind throughout the restoration process.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
              <h3 className="text-3xl font-bold text-slate-900">
                Our Restoration Services
              </h3>

              <ul className="mt-6 space-y-4">
                {services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 text-xl font-semibold text-slate-950"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
