import Image from "next/image";
import Link from "next/link";

export default function ServiceHero({
  title,
  description,
  imageSrc,
  imageAlt,
}) {
  return (
    <section className="relative min-h-[550px] overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero content */}
      <div className="relative mx-auto flex min-h-[550px] max-w-7xl items-center px-6 py-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl font-bold md:text-6xl">{title}</h1>

          <p className="mt-6 text-lg leading-relaxed md:text-xl">
            {description}
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded bg-orange-500 px-6 py-3 font-bold transition hover:bg-orange-600"
          >
            Request Service
          </Link>
        </div>
      </div>
    </section>
  );
}
