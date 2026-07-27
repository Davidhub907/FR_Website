import Image from "next/image";
import Link from "next/link";

export default function BeforeAfterCard({
  title,
  description,
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  href,
}) {
  const cardContent = (
    <>
      {/* Before and after images */}
      <div className="absolute inset-0 grid grid-cols-2">
        <figure className="relative overflow-hidden border-r border-white/40">
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <figcaption className="absolute top-4 left-4 z-20 bg-black/80 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
            Before
          </figcaption>
        </figure>

        <figure className="relative overflow-hidden">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <figcaption className="absolute top-4 left-4 z-20 bg-orange-600 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
            After
          </figcaption>
        </figure>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-colors duration-300 group-hover:from-black/95 group-hover:via-black/40" />

      {/* Project information */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>

        {description && (
          <p className="mt-3 leading-6 text-slate-200">{description}</p>
        )}

        {href && (
          <span className="mt-5 inline-flex items-center gap-2 font-bold text-orange-400 transition-all duration-300 group-hover:gap-3">
            View Service
            <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group relative block min-h-[340px] overflow-hidden rounded-xl shadow-lg"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <article className="group relative min-h-[340px] overflow-hidden rounded-xl shadow-lg">
      {cardContent}
    </article>
  );
}
