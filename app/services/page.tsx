import {
  Building2,
  Layers,
  Truck,
  Hammer,
  Flame,
  Waves,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";

const allServices = [
  {
    icon: Building2,
    title: "Foundations",
    description:
      "Structural concrete designed to support your home or building for decades. We handle new construction foundations, basement pours, retaining walls, and foundation repair — all built to California code.",
    href: "/services/foundations",
    services: [
      "Foundation Installation",
      "Concrete Basements",
      "Retaining Walls",
      "Foundation Repair",
    ],
  },
  {
    icon: Layers,
    title: "Flat Concrete Work",
    description:
      "Clean, smooth, and durable flatwork for outdoor living and functional access — driveways, patios, walkways, and sidewalks done right from subgrade prep to final broom finish.",
    href: "/services/flat-concrete-work",
    services: ["Patio Slabs", "Driveways", "Walkways", "Sidewalk Repair"],
  },
  {
    icon: Truck,
    title: "Commercial Concrete",
    description:
      "Scaled-up expertise for commercial property owners, municipalities, and developers. We handle large pours, public works projects, and everything in between.",
    href: "/services/commercial-concrete",
    services: [
      "Parking Decks",
      "Parking Lots",
      "Public Works Projects",
      "Road Paving",
      "Piers",
      "Road Gutter Concrete",
      "Concrete Curbs",
      "Parking Striping",
    ],
  },
  {
    icon: Hammer,
    title: "Masonry Services",
    description:
      "Handcrafted masonry that combines structural integrity with visual appeal. Stone features, chimneys, fireplaces, mailboxes, and custom stairways built to your design.",
    href: "/services/masonry-services",
    services: [
      "Stone Work",
      "Chimney",
      "Fireplaces",
      "Mailboxes",
      "Custom Stairways",
    ],
  },
  {
    icon: Flame,
    title: "Asphalt Services",
    description:
      "New asphalt installation, resurfacing overlays, and slurry seal treatments to extend the life of your driveway or parking lot. We also handle thermoplastic and paint striping.",
    href: "/services",
    services: [
      "New Asphalt",
      "Asphalt Overlay",
      "Asphalt Slurry Sealer",
      "Parking Striping (thermo or paint)",
    ],
  },
  {
    icon: Waves,
    title: "Specialty & Other",
    description:
      "Pool concrete, new construction slabs, apartment complex concrete work, and concrete replacement projects — if it pours, we do it.",
    href: "/contact",
    services: [
      "Pool Concrete",
      "Concrete Replacement",
      "New Construction Concrete",
      "Apartment Complex Concrete",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="OUR SERVICES"
        subtitle="Concrete and asphalt solutions for residential and commercial projects across the South Bay."
        imageUrl="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=1920&q=80"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="h-1 w-12 bg-amber-brand mb-4" />
            <h2 className="font-display text-5xl md:text-6xl text-concrete-offwhite tracking-wide leading-none mb-4">
              WHAT WE DO
            </h2>
            <p className="text-concrete-gray max-w-2xl">
              Every job — from a single driveway to a full commercial parking
              structure — gets the same crew, the same materials, and the same
              commitment to quality. Browse our service categories below, or
              contact us with any project in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                services={service.services}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
