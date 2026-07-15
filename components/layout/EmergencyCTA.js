export default function EmergencyCTA() {
  return (
    <section className="relative overflow-hidden bg-orange-600 px-6 py-10 md:py-14">
      {/* Decorative dark corner */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-28 w-32 bg-neutral-900 md:h-52 md:w-60"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center text-neutral-950">
        {/* Small upper label */}
        <p className="text-xs font-bold tracking-[0.35em] uppercase md:text-sm">
          Don't Wait
        </p>

        {/* Small underline */}
        <div className="mx-auto mt-3 h-0.5 w-28 bg-neutral-950" />

        {/* Main heading */}
        <h2 className="mt-7 text-3xl leading-tight font-black tracking-tight uppercase md:text-5xl">
          Don't Let the Damage Spread.
        </h2>

        {/* Supporting text */}
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 md:text-xl md:leading-9">
          Water and fire damage spreads every hour. Acting now means less
          damage, a faster restoration, and a smaller insurance claim.
        </p>

        {/* Call button */}
        <a
          href="tel:+19079872916"
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-md bg-neutral-900 px-7 py-4 text-base font-extrabold tracking-wide text-white uppercase shadow-lg transition hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-xl focus:ring-4 focus:ring-neutral-900/30 focus:outline-none md:px-10 md:py-5 md:text-xl"
          aria-label="Call Frontier Restoration at 907-987-2916"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
          </svg>
          Call (907) 987-2916
        </a>
      </div>
    </section>
  );
}
