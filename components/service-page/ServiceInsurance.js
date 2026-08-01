import Link from "next/link";
import { Check, FileText, ShieldCheck } from "lucide-react";

export default function ServiceInsurance({
  eyebrow,
  heading,
  paragraphs = [],
  points = [],
  buttonText,
  buttonHref = "\ ",
}) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-[#1f1f1c] text-white shadow-xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Main content */}
            <div className="p-8 sm:p-10 lg:p-14">
              {eyebrow && (
                <p className="text-sm font-bold tracking-[0.18em] text-orange-500 uppercase">
                  {eyebrow}
                </p>
              )}

              {heading && (
                <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                  {heading}
                </h2>
              )}

              {paragraphs.length > 0 && (
                <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-gray-300 sm:text-lg">
                  {paragraphs.map((paragraph, index) => (
                    <p key={`${index}-${paragraph.slice(0, 25)}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {buttonText && buttonHref && (
                <Link
                  href={buttonHref}
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  {buttonText}
                </Link>
              )}
            </div>

            {/* Documentation panel */}
            <div className="border-t border-gray-800 bg-[#454545] p-8 sm:p-10 lg:border-t-0 lg:border-l lg:p-14">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <ShieldCheck
                    aria-hidden="true"
                    className="h-6 w-6"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <p className="text-sm font-bold tracking-wider text-orange-500 uppercase">
                    Claim Support
                  </p>

                  <h3 className="text-xl font-bold">
                    Documentation We Can Provide
                  </h3>
                </div>
              </div>

              {points.length > 0 && (
                <ul className="mt-8 space-y-5">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-4">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-500">
                        <Check
                          aria-hidden="true"
                          className="h-4 w-4"
                          strokeWidth={3}
                        />
                      </span>

                      <span className="leading-7 text-gray-200">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex items-start gap-3 border-t border-gray-800 pt-6">
                <FileText
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-orange-500"
                />

                <p className="text-sm leading-6 text-gray-400">
                  Coverage and payment decisions are made by the insurance
                  carrier according to the terms of the property owner&apos;s
                  policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
