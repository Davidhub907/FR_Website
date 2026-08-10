import EmploymentForm from "./EmploymentForm";
import Image from "next/image";

export const metadata = {
  title: "Employment | Frontier Restoration",
  description:
    "Apply for employment opportunities with Frontier Restoration in Fairbanks, Alaska.",
};

export default function EmploymentPage() {
  return (
    <main className="bg-slate-100">
      {/* Page heading */}
      <section className="bg-[#1f1f1c] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold tracking-widest text-orange-500 uppercase">
              Join Our Team
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight uppercase md:text-5xl">
              Employment Opportunities
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Interested in working with Frontier Restoration? Complete the
              application below and tell us a little about your experience.
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

      {/* Employment form */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold tracking-widest text-orange-600 uppercase">
              Work With Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 uppercase">
              Submit an Application
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              We are always interested in hearing from dependable, hard-working
              people who want to serve homeowners and businesses throughout
              Interior Alaska.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="font-bold text-slate-900">Before submitting</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Include your current contact information, relevant work
                experience, availability, and an optional résumé.
              </p>
            </div>
          </div>

          <EmploymentForm />
        </div>
      </section>
    </main>
  );
}
