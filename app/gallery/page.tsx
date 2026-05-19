import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    alt: "Concrete driveway pour",
    category: "Flatwork",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    alt: "Foundation construction",
    category: "Foundations",
  },
  {
    src: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800&q=80",
    alt: "Commercial concrete project",
    category: "Commercial",
  },
  {
    src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    alt: "Backyard patio slab",
    category: "Flatwork",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    alt: "Retaining wall construction",
    category: "Foundations",
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    alt: "Stone masonry work",
    category: "Masonry",
  },
  {
    src: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&q=80",
    alt: "Residential concrete work",
    category: "Flatwork",
  },
  {
    src: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?w=800&q=80",
    alt: "Parking lot concrete",
    category: "Commercial",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Asphalt paving project",
    category: "Asphalt",
  },
  {
    src: "https://images.unsplash.com/photo-1461175827210-5ceac3e39dd2?w=800&q=80",
    alt: "Concrete finishing work",
    category: "Flatwork",
  },
  {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    alt: "Concrete sidewalk installation",
    category: "Flatwork",
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    alt: "Custom stairway masonry",
    category: "Masonry",
  },
];

const categories = [
  "All",
  "Flatwork",
  "Foundations",
  "Commercial",
  "Masonry",
  "Asphalt",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="OUR WORK"
        subtitle="A look at concrete and asphalt projects completed across the South Bay."
        imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="h-1 w-12 bg-amber-brand mb-4" />
            <h2 className="font-display text-5xl md:text-6xl text-concrete-offwhite tracking-wide leading-none mb-4">
              PROJECT GALLERY
            </h2>
            <p className="text-concrete-gray max-w-2xl">
              These are placeholder images while we compile our full project
              portfolio. Real project photos from completed South Bay jobs will
              be uploaded soon. Contact us to discuss work similar to what
              you&apos;re looking for.
            </p>
          </div>

          {/* Category Filter (static display — no JS filtering needed for now) */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`text-xs font-body tracking-widest uppercase px-4 py-2 border cursor-default ${
                  cat === "All"
                    ? "bg-amber-brand text-concrete-black border-amber-brand"
                    : "border-concrete-charcoal text-concrete-gray"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden group bg-concrete-dark"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-concrete-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <span className="text-xs text-amber-brand font-display tracking-widest uppercase">
                    {img.category}
                  </span>
                  <p className="text-sm text-concrete-offwhite mt-1 px-4 text-center">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-concrete-gray text-sm mt-10">
            Interested in seeing more? Call{" "}
            <a
              href="tel:4086908051"
              className="text-amber-brand hover:underline"
            >
              (408) 690-8051
            </a>{" "}
            to discuss your project.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
