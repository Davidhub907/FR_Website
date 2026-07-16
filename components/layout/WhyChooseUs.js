import { ShieldCheck, BadgeCheck, Award, Clock } from "lucide-react";

const reasons = [
  {
    title: "100% Insurance Backed",
    description:
      "We work closely with insurance companies to ensure a seamless claims process and provide insurance-backed services.",
    icon: ShieldCheck,
  },
  {
    title: "Satisfaction Guarantee",
    description:
      "We stand behind the quality of our work and make sure each restoration is completed correctly.",
    icon: BadgeCheck,
  },
  {
    title: "Professional Experience",
    description:
      "Our experienced restoration team knows how to assess damage, create a clear plan, and restore your property efficiently.",
    icon: Award,
  },
  {
    title: "Fast, Reliable Response",
    description:
      "Property damage can become worse quickly. We respond promptly and keep you informed throughout the restoration process.",
    icon: Clock,
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "Frontier Restoration came out to our place for a Mold remediation, and they did an amazing job! They also helped us bag up all our clothes and hangers, which was such a huge help. Josh was very friendly and professional, and his worker Bodie was wonderful too. They knocked it out in 30 mins! I highly recommend Frontier Restoration to anyone who needs help with mold cleanup, they made a stressful situation so much easier!",
    name: "Kelsey",
    location: "Fairbanks, Alaska",
    service: "Mold inspection & remediation",
  },
  {
    id: 2,
    quote:
      "Frontier Restoration LLC is truly exceptional! Josh and his team are punctual and deliver great results. Their attention to detail is impeccable and they communicate every step of the way. I was completely impressed by their professionalism and dedication to quality work. Their outstanding customer service is second to none. Highly recommend!",
    name: "Robert",
    location: "Fairbanks Alaska",
    service: "Restoration",
  },
  {
    id: 3,
    quote:
      'Ross and his team of professionals did an excellent job of cleaning up a "crappy" situation in our crawl space. They had to take the entire vapor barrier out and also haul out a solid 600lbs of stuff we stored in the space. All areas were cleaned professionally. This job took his team of three just four hours. Frontier needs to be the first phone call you make when you discover a leak that has caused damage. This was covered by my homeowners policy.',
    name: "Eric",
    location: "Fairbanks, Alaska",
    service: "Water damage repair & Sewage cleanup",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-100 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main why-choose-us content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Reasons */}
          <div>
            <p className="text-m font-bold tracking-widest text-orange-600 uppercase">
              Why Choose Frontier Restoration?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 uppercase sm:text-4xl">
              Local restoration professionals you can depend on
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              When your property is damaged, you need a restoration company that
              responds quickly, communicates clearly, and completes the work
              properly.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div key={reason.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                      <Icon
                        className="h-6 w-6"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {reason.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team image placeholder */}
          <div className="overflow-hidden rounded-2xl bg-slate-200 shadow-sm">
            <div className="flex aspect-[4/3] items-center justify-center px-8 text-center">
              <div>
                <p className="text-lg font-bold text-slate-700">
                  Frontier Restoration Team Photo
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Replace this placeholder with a professional photo of the
                  team.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 border-t border-slate-200 pt-16">
          <div className="mx-auto max-w-3xl text-left md:text-center">
            <p className="text-sm font-bold tracking-widest text-orange-600 uppercase">
              Customer Testimonials
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 uppercase sm:text-4xl">
              Trusted by homeowners and businesses
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              See what customers have to say about working with Frontier
              Restoration.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                {/* Temporary star rating */}
                <p
                  className="text-lg tracking-wide text-orange-500"
                  aria-label="Five-star review"
                >
                  ★★★★★
                </p>

                <blockquote className="mt-5 flex-1 leading-7 text-slate-700">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold tracking-wide text-orange-700 uppercase">
                    {testimonial.service}
                  </span>

                  <p className="mt-4 font-bold text-slate-900">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {testimonial.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
