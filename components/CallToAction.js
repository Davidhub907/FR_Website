const phoneNumber = "(907) 987-2916";
const phoneHref = "tel:+19079872916";

const services = [
  "Water Damage",
  "Fire & Smoke Damage",
  "Mold Remediation",
  "Storm Damage",
  "Other",
];

export default function CallToAction() {
  return (
    <section id="request-service" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* CTA information */}
          <div className="lg:sticky lg:top-8">
            <p className="text-sm font-bold tracking-widest text-orange-500 uppercase">
              Request restoration services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Tell us how we can help
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
              Describe the damage and provide your contact information. A member
              of the Frontier Restoration team will follow up to discuss the
              situation and the next steps.
            </p>

            <div className="mt-8 border-l-4 border-orange-500 pl-5">
              <p className="font-bold text-zinc-950">
                Need immediate assistance?
              </p>

              <p className="mt-1 text-sm leading-6 text-zinc-600">
                Calling is the fastest way to reach us for urgent water, fire,
                mold, or storm damage.
              </p>

              <a
                href={phoneHref}
                className="mt-3 inline-block text-lg font-bold text-orange-600 transition hover:text-orange-700"
              >
                {phoneNumber}
              </a>
            </div>
          </div>

          {/* Service request form */}
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm sm:p-8">
            <form>
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-bold text-zinc-900"
                  >
                    Full name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    className="mt-2 block w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-950 transition outline-none placeholder:text-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="John Smith"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-zinc-900"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="mt-2 block w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-950 transition outline-none placeholder:text-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="(907) 555-1234"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-zinc-900"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-2 block w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-950 transition outline-none placeholder:text-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-bold text-zinc-900"
                  >
                    Service needed
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="mt-2 block w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-950 transition outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Property address */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="propertyAddress"
                    className="block text-sm font-bold text-zinc-900"
                  >
                    Property address
                  </label>

                  <input
                    id="propertyAddress"
                    name="propertyAddress"
                    type="text"
                    autoComplete="street-address"
                    className="mt-2 block w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-950 transition outline-none placeholder:text-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="Street address, city, and ZIP code"
                  />
                </div>

                {/* Damage description */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-zinc-900"
                  >
                    What happened?
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 block w-full resize-y rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-950 transition outline-none placeholder:text-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="Describe the type of damage, when it happened, and any other important details."
                  />
                </div>
              </div>

              {/* Emergency checkbox */}
              <div className="mt-6 flex items-start gap-3">
                <input
                  id="isEmergency"
                  name="isEmergency"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 accent-orange-500"
                />

                <label
                  htmlFor="isEmergency"
                  className="text-sm leading-6 text-zinc-700"
                >
                  This is an urgent situation requiring immediate assistance.
                </label>
              </div>

              <button
                type="button"
                className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
              >
                Request Service
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-zinc-500">
                For emergencies, please call rather than waiting for a form
                response.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
