import Image from "next/image";
import { testimonials } from "@/data/testimonials";

// Testimonials

const googleReviewsUrl =
  "https://www.google.com/search?q=water+damage+restoration+fairbanks&sca_esv=1bfee9744c1a1100&sxsrf=APpeQnvHFp7fXKJeaW6KG3N6hmjgD6yegA:1785136976534&udm=1&lsack=UAdnaqubILiq0PEPo8ONoQc&sa=X&ved=2ahUKEwirg_K6qfKVAxU4FTQIHaNhI3QQjGp6BAg0EAA&biw=1241&bih=1298&dpr=1.5#sv=CAESzQEKuQEStgEKd0FKaVQ0dEtNcHZNQlExX2JibWs4aTZlTjlxMGRiZGhVVTBEa1BreEMtQnJJNDZ1S1lZUlhjaXFObU5UbzdvNG5SeXNlMEh6MjIyYlJUcVBfSFZ3VWFSeTk0VGU2bjBHZE1HWmtmdVkwQkVVQ2FxdVUxX3hzVzdVEhdvZ2RuYXZIMEd0elkwUEVQeWZtNzRBOBoiQURzcjlmUjIycFJBX2ZiLVR2d2tYSzUxNmJLQWQyLVFFQRIEODA1MRoBMyoAMAA4AUAAGAAg1anZ9AY6AEoCEAI";

export default function Testimonials() {
  return (
    <section className="border-t border-slate-200 bg-slate-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

        {/* Google reviews button */}
        <div className="mt-10 flex justify-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-white px-6 py-4 text-sm font-bold text-slate-900 shadow-sm ring-1 ring-slate-300 transition-colors hover:bg-orange-500 hover:text-white hover:ring-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:text-base"
          >
            <Image
              src="/images/google-logo.webp"
              alt="Google logo"
              width={24}
              height={24}
              aria-hidden="true"
            />

            <span>See All of Our Reviews</span>
          </a>
        </div>
      </div>
    </section>
  );
}
