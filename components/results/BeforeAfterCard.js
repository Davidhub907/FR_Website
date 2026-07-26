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
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Before and after images */}
      <div className="grid grid-cols-2">
        <figure className="relative aspect-[4/3] overflow-hidden border-r border-white">
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <figcaption className="absolute bottom-3 left-3 rounded-full bg-slate-950/85 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-sm">
            Before
          </figcaption>
        </figure>

        <figure className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <figcaption className="absolute bottom-3 left-3 rounded-full bg-orange-600/95 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-sm">
            After
          </figcaption>
        </figure>
      </div>

      {/* Project information */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold tracking-tight text-slate-900">
          {title}
        </h3>

        {description && (
          <p className="mt-3 flex-1 leading-7 text-slate-600">{description}</p>
        )}

        {href && (
          <Link
            href={href}
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition hover:text-orange-700"
          >
            View service
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </article>
  );
}
