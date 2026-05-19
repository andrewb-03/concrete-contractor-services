import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Areas We Serve | Vazquez Millan Concrete",
  description:
    "Vazquez Millan Concrete services San Jose and surrounding South Bay areas including Sunnyvale, Cupertino, Santa Clara, Milpitas, Campbell, Los Gatos, and more.",
};

const primaryAreas = [
  {
    name: "San Jose",
    description:
      "Our home base — CA 95127. We serve all San Jose neighborhoods: Almaden Valley, Willow Glen, Blossom Hill, East San Jose, North San Jose, Berryessa, Rose Garden, Japantown, Edenvale, Evergreen, Downtown, and more.",
    zip: "95101–95173",
  },
  {
    name: "Sunnyvale",
    description:
      "Full coverage across Sunnyvale — driveways, patios, commercial concrete, and more. One of our most active service areas.",
    zip: "94085–94089",
  },
  {
    name: "Santa Clara",
    description:
      "Residential and commercial concrete throughout Santa Clara — close to our crew and a quick mobilization zone.",
    zip: "95050–95056",
  },
  {
    name: "Cupertino",
    description:
      "Serving Cupertino homeowners and commercial properties with flatwork, foundation, and masonry services.",
    zip: "95014",
  },
  {
    name: "Milpitas",
    description:
      "Regular service in Milpitas for driveways, sidewalks, parking lots, and commercial concrete projects.",
    zip: "95035",
  },
  {
    name: "Campbell",
    description:
      "Serving Campbell with patios, retaining walls, and masonry work for residential properties in the area.",
    zip: "95008",
  },
  {
    name: "Los Gatos",
    description:
      "Hillside properties and retaining walls are a specialty here. We&apos;ve completed many grading and wall projects throughout Los Gatos.",
    zip: "95030–95033",
  },
  {
    name: "Alum Rock",
    description:
      "Serving the Alum Rock community with residential flatwork, driveway, and foundation services.",
    zip: "95116",
  },
];

// The exact city list from the original website
const allServiceAreas = [
  "Alum Rock, CA",
  "Fruitdale, CA",
  "San Jose, CA",
  "Santa Clara, CA",
  "East San Jose, CA",
  "North San Jose, CA",
  "Los Gatos, CA",
  "Milpitas, CA",
  "Edenvale, CA",
  "Japantown, CA",
  "Campbell, CA",
  "Willow Glen, CA",
  "Sunnyvale, CA",
  "Rose Garden, CA",
  "Evergreen, CA",
  "Cupertino, CA",
  "Berryessa, CA",
];

export default function AreasWeServePage() {
  return (
    <>
      <PageHero
        title="AREAS WE SERVE"
        subtitle="Vazquez Millan Concrete serves San Jose and surrounding South Bay communities."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcret-concrete-service-1152w.jpg"
      />

      {/* Intro */}
      <section className="bg-concrete-black py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-1 w-12 bg-amber-brand mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl text-concrete-offwhite tracking-wide mb-4">
            SOUTH BAY COVERAGE
          </h2>
          <p className="text-concrete-gray text-lg leading-relaxed">
            Based in San Jose, CA (95127), we mobilize quickly throughout Santa
            Clara County and surrounding areas. If your project is in the South
            Bay, there&apos;s a good chance we serve your neighborhood.
            Don&apos;t see your city? Call us — we take jobs outside our core
            area for larger projects.
          </p>
        </div>
      </section>

      {/* Embedded Google Map */}
      <section className="bg-concrete-dark py-0">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1X4NyXR0xFFSlINCrKlMx5HzV9z4dk8U&ehbc=2E312F"
            width="100%"
            height="480"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vazquez Millan Concrete service area map"
          />
        </div>
      </section>

      {/* City grid — exact list from original site */}
      <section className="bg-concrete-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="h-1 w-12 bg-amber-brand mb-4" />
            <h2 className="font-display text-4xl text-concrete-offwhite tracking-wide">
              CITIES WE SERVE
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {allServiceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2.5 bg-concrete-black border-l-4 border-amber-brand px-4 py-3"
              >
                <MapPin size={14} className="text-amber-brand flex-shrink-0" />
                <span className="text-concrete-light text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Areas detail */}
      <section className="bg-concrete-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="h-1 w-12 bg-amber-brand mb-4" />
            <h2 className="font-display text-4xl text-concrete-offwhite tracking-wide">
              PRIMARY SERVICE AREAS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {primaryAreas.map((area) => (
              <div
                key={area.name}
                className="bg-concrete-dark border-l-4 border-amber-brand p-6 hover:-translate-y-0.5 transition-transform duration-200"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-amber-brand flex-shrink-0" />
                    <h3 className="font-display text-2xl text-concrete-offwhite tracking-wide">
                      {area.name}
                    </h3>
                  </div>
                  <span className="text-xs text-concrete-gray font-mono mt-1 flex-shrink-0">
                    {area.zip}
                  </span>
                </div>
                <p className="text-sm text-concrete-gray leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not in list? */}
      <section className="bg-concrete-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-3xl text-concrete-offwhite tracking-wide mb-3">
            DON&apos;T SEE YOUR CITY?
          </h3>
          <p className="text-concrete-gray mb-8">
            We take on projects throughout the Bay Area for the right job. Call
            us and we&apos;ll let you know if we can make it work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:4086908051"
              className="btn-amber flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              (408) 690-8051
            </a>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
