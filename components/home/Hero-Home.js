import Image from "next/image";
import Link from "next/link";

const phoneNumber = "(907) 987-2916";
const phoneHref = "tel:+19079872916";

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[650px] items-center overflow-hidden md:min-h-[620px] lg:min-h-[920px]">
      {/* Background image */}
      <Image
        src="/Downtown-Fairbanks3.png"
        alt="Frontier Restoration water damage restoration project"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_60%] blur-[1px]"
      />

      {/* Dark filter */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 text-center text-white lg:px-8">
        <p className="mb-6 text-sm font-bold tracking-wider uppercase sm:text-base lg:text-lg">
          Frontier Restoration of Fairbanks
        </p>

        <h1 className="mx-auto max-w-7xl text-4xl leading-none font-extrabold tracking-wide uppercase sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">24/7 water & fire damage</span>
          <span className="mt-2 block">Restoration</span>
        </h1>

        <p className="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
          Professional water damage restoration for homes and businesses
          throughout Fairbanks and the surrounding areas. Our experienced team
          is ready to help you recover quickly and safely.
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <a
            href={phoneHref}
            className="bg-orange-500 px-8 py-5 text-lg font-extrabold uppercase transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-xl"
          >
            Call {phoneNumber}
          </a>

          <Link
            href="/water-damage"
            className="bg-white px-8 py-5 text-lg font-bold text-slate-950 uppercase transition-colors hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
