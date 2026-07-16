"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ServiceQuestions({ eyebrow, heading, questions = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleQuestion(index) {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  }

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          {/* Section heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {eyebrow && (
              <p className="text-sm font-bold tracking-[0.18em] text-orange-600 uppercase">
                {eyebrow}
              </p>
            )}

            {heading && (
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {heading}
              </h2>
            )}

            <p className="mt-5 max-w-md text-base leading-8 text-gray-600 sm:text-lg">
              Find answers to common questions about our restoration process,
              response times, property damage, and insurance documentation.
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {questions.map((item, index) => {
              const isOpen = openIndex === index;
              const questionId = `service-question-${index}`;
              const answerId = `service-answer-${index}`;

              return (
                <article
                  key={item.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition duration-300 ${
                    isOpen
                      ? "border-orange-300 shadow-md"
                      : "border-gray-200 shadow-sm"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={questionId}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggleQuestion(index)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7 sm:py-6"
                    >
                      <span className="text-lg font-bold text-gray-900">
                        {item.question}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                          isOpen
                            ? "bg-orange-600 text-white"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-gray-100 px-6 py-5 leading-7 text-gray-600 sm:px-7 sm:py-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
