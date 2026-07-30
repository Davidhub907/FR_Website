const questions = [
  {
    question: "Do you provide emergency restoration services?",
    answer:
      "Yes. Frontier Restoration responds to urgent water, fire, smoke, mold, sewer backup, and property damage situations. Contact us as soon as possible so we can assess the situation and explain the next steps.",
  },
  {
    question: "How quickly can you respond?",
    answer:
      "Response time depends on your location, current conditions, and crew availability. Emergency situations are prioritized, and we will give you the clearest possible arrival estimate when you call.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Yes. We can document the damage, provide estimates, and communicate with your insurance adjuster. Your insurance company makes the final decision regarding coverage and payment.",
  },
  {
    question: "Should I call my insurance company first?",
    answer:
      "For active water, fire, smoke, or sewer damage, contact a restoration company immediately to help prevent additional damage. You should also notify your insurance company as soon as reasonably possible.",
  },
  {
    question: "Can I remain in my home during the restoration process?",
    answer:
      "That depends on the type and severity of the damage. Some projects allow portions of the property to remain occupied, while fire, mold, sewage, or major structural damage may require temporary relocation.",
  },
  {
    question: "How long does the restoration process take?",
    answer:
      "Every property is different. Smaller drying or cleanup projects may take several days, while major reconstruction can take much longer. After inspecting the damage, we will provide a clearer scope and projected timeline.",
  },
];

export default function CommonQuestions() {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 text-left">
          <p className="mb-3 text-sm font-bold tracking-widest text-orange-500 uppercase">
            Frequently Asked Questions
          </p>

          <h2 className="text-3xl font-bold text-slate-900 uppercase md:text-5xl">
            Common Questions,
            <br />
            Answered
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
          {questions.map((item) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-7 py-6 text-left">
                <span className="text-lg leading-snug font-bold text-slate-900">
                  {item.question}
                </span>

                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="h-5 w-5 shrink-0 text-orange-500 transition-transform duration-200 group-open:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </summary>

              <div className="border-t border-slate-200 px-7 py-5">
                <p className="leading-7 text-slate-600">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
