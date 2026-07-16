import Link from "next/link";

const assistanceItems = [
  {
    title: "Damage Documentation",
    description:
      "We photograph affected areas and document the visible damage found during our inspection.",
    icon: CameraIcon,
  },
  {
    title: "Detailed Estimates",
    description:
      "We prepare a clear restoration estimate outlining the work needed to return the property to its pre-loss condition.",
    icon: DocumentIcon,
  },
  {
    title: "Adjuster Communication",
    description:
      "We can communicate with your insurance adjuster and provide supporting documentation when requested.",
    icon: MessageIcon,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Contact Frontier",
    description:
      "Tell us what happened so we can determine the appropriate next steps.",
  },
  {
    number: "02",
    title: "Inspect and Document",
    description:
      "Our team evaluates the damage and gathers the information needed for the restoration process.",
  },
  {
    number: "03",
    title: "Coordinate the Work",
    description:
      "We explain the scope of work and help keep communication organized throughout the project.",
  },
];

export default function InsuranceAssistance({
  contactHref = "/contact",
  contactButtonText = "Request Insurance Assistance",
}) {
  return (
    <section
      aria-labelledby="insurance-assistance-heading"
      className="bg-gray-100 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Main content */}
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.18em] text-orange-600 uppercase">
              Insurance Assistance
            </p>

            <h2
              id="insurance-assistance-heading"
              className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 uppercase sm:text-4xl lg:text-5xl"
            >
              We make the insurance process easier
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Property damage is already stressful. Frontier Restoration can
              help document the loss, prepare restoration estimates, and provide
              information to your insurance adjuster so you do not have to
              manage every detail alone.
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {assistanceItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-9">
              <Link
                href={contactHref}
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                {contactButtonText}
              </Link>
            </div>

            <p className="mt-5 max-w-2xl text-xs leading-5 text-gray-500">
              Insurance coverage varies by policy. Your insurance provider
              determines whether a loss is covered and what costs are eligible
              for payment.
            </p>
          </div>

          {/* Process card */}
          <div className="overflow-hidden rounded-3xl bg-gray-900 shadow-xl">
            <div className="border-b border-white/10 p-7 sm:p-9">
              <p className="text-sm font-bold tracking-[0.16em] text-orange-400 uppercase">
                What to Expect
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Clear support from inspection through restoration
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                We help organize the restoration side of the claim while keeping
                you informed about the work being performed.
              </p>
            </div>

            <ol className="p-7 sm:p-9">
              {processSteps.map((step, index) => (
                <li
                  key={step.number}
                  className={`relative flex gap-5 ${
                    index !== processSteps.length - 1
                      ? "pb-8 after:absolute after:top-12 after:bottom-0 after:left-5 after:w-px after:bg-white/15"
                      : ""
                  }`}
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                    {step.number}
                  </div>

                  <div className="pt-1">
                    <h4 className="text-lg font-bold text-white">
                      {step.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="border-t border-white/10 bg-white/5 px-7 py-6 sm:px-9">
              <p className="text-sm leading-6 text-gray-300">
                <span className="font-bold text-white">
                  You remain in control.
                </span>{" "}
                We explain the recommended restoration work before the project
                moves forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CameraIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.379a2 2 0 0 0 1.414-.586l.828-.828A2 2 0 0 1 11.536 4h.928a2 2 0 0 1 1.415.586l.828.828A2 2 0 0 0 16.12 6H17.5A2.5 2.5 0 0 1 20 8.5v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-8Z"
      />
      <circle cx="12" cy="12.5" r="3.25" />
    </svg>
  );
}

function DocumentIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3.75h6.75L18 8v12.25H7V3.75Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 3.75V8h4.25M9.5 12h6M9.5 15.5h6"
      />
    </svg>
  );
}

function MessageIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 5.5h14A2.5 2.5 0 0 1 21.5 8v7A2.5 2.5 0 0 1 19 17.5h-7l-4.5 3v-3H5A2.5 2.5 0 0 1 2.5 15V8A2.5 2.5 0 0 1 5 5.5Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 9.5h9M7.5 13h6"
      />
    </svg>
  );
}
