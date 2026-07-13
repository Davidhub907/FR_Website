import { ShieldCheck, BadgeCheck, Award, Clock } from "lucide-react";

const reasons = [
  {
    title: "Insurance Backed",
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
      "Add a real customer testimonial here describing their experience with Frontier Restoration.",
    name: "Customer Name",
    location: "Fairbanks, Alaska",
  },
  {
    id: 2,
    quote:
      "Add another testimonial focusing on communication, professionalism, or the quality of the completed work.",
    name: "Customer Name",
    location: "Interior Alaska",
  },
  {
    id: 3,
    quote:
      "Add a testimonial explaining how the team helped during a stressful water, fire, mold, or sewer damage situation.",
    name: "Customer Name",
    location: "Fairbanks, Alaska",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main why-choose-us content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
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

          {/* Reasons */}
          <div>
            <p className="text-sm font-bold tracking-widest text-orange-600 uppercase">
              Why Choose Frontier Restoration?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
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
        </div>

        {/* Testimonials */}
        <div className="mt-20 border-t border-slate-200 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-widest text-orange-600 uppercase">
              Customer Testimonials
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
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
                  <p className="font-bold text-slate-900">{testimonial.name}</p>

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
