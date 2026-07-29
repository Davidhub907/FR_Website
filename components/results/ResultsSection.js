"use client";

import { useState } from "react";
import BeforeAfterCard from "./BeforeAfterCard";

export default function ResultsSection({
  eyebrow = "Our Work",
  heading = "Real Restoration Results",
  description,
  projects = [],
  background = "slate",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!projects.length) {
    return null;
  }

  const backgroundClass = background === "white" ? "bg-white" : "bg-slate-50";
  const hasMultipleProjects = projects.length > 1;

  function showPreviousProject() {
    setCurrentIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    );
  }

  function showNextProject() {
    setCurrentIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <section className={`${backgroundClass} py-20 sm:py-24`}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-left md:text-center">
          <p className="text-sm font-bold tracking-widest text-orange-600 uppercase">
            {eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 uppercase sm:text-4xl">
            {heading}
          </h2>
        </div>

        {/* Results carousel */}
        <div className="relative mx-auto mt-12 max-w-6xl px-12 sm:px-16">
          {/* Current result card */}
          <div className="mx-auto max-w-5xl">
            <BeforeAfterCard
              key={projects[currentIndex].id}
              {...projects[currentIndex]}
            />
          </div>

          {hasMultipleProjects && (
            <>
              {/* Previous button */}
              <button
                type="button"
                onClick={showPreviousProject}
                aria-label="Show previous restoration project"
                className="absolute top-1/2 left-0 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 text-2xl text-white transition-colors hover:bg-orange-600 focus:outline-none"
              >
                <span aria-hidden="true">‹</span>
              </button>

              {/* Next button */}
              <button
                type="button"
                onClick={showNextProject}
                aria-label="Show next restoration project"
                className="absolute top-1/2 right-0 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 text-2xl text-white transition-colors hover:bg-orange-600 focus:outline-none"
              >
                <span aria-hidden="true">›</span>
              </button>
            </>
          )}
        </div>

        {hasMultipleProjects && (
          <div className="mt-6 flex flex-col items-center gap-3">
            {/* Navigation dots */}
            <div className="flex items-center justify-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Show project ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-orange-600"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
