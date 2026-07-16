import Image from "next/image";

export default function ServiceOverview({
  eyebrow,
  heading,
  paragraphs = [],
  imageSrc,
  imageAlt,
  imagePosition = "right",
}) {
  const imageIsLeft = imagePosition === "left";

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className={imageIsLeft ? "lg:order-2" : "lg:order-1"}>
            {eyebrow && (
              <p className="mb-3 text-sm font-bold tracking-[0.18em] text-orange-600 uppercase">
                {eyebrow}
              </p>
            )}

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {heading}
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
              {paragraphs.map((paragraph, index) => (
                <p key={`${index}-${paragraph.slice(0, 20)}`}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ${
              imageIsLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
