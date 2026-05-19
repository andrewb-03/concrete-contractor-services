import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Commercial Concrete Services | San Jose, CA | Vazquez Millan Concrete",
  description:
    "We install durable commercial concrete features in San Jose, CA. Email us right away for a free estimate on commercial concrete services.",
};

const subServices = [
  { label: "Parking Decks", href: "/services/commercial-concrete/parking-decks" },
  { label: "Parking Lots", href: "/services/commercial-concrete/parking-lots" },
  { label: "Public Works Project", href: "/services/commercial-concrete/public-works-project" },
  { label: "Road Paving", href: "/services/commercial-concrete/road-paving" },
  { label: "Piers", href: "/services/commercial-concrete/piers" },
];

const buildList = [
  "Driveways", "Foundations", "Parking lots", "Piers", "Retaining walls",
  "Roads", "Sidewalks",
];

export default function CommercialConcretePage() {
  return (
    <>
      <PageHero
        title="COMMERCIAL CONCRETE"
        subtitle="Large-scale concrete and asphalt work for businesses, developers, and municipalities."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-gallery+%289%29-1920w.jpg"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl text-concrete-offwhite tracking-wide leading-none mb-3">
                DIFFERENT BUILDINGS HAVE DIFFERENT FOUNDATION NEEDS
              </h2>
              <h3 className="font-display text-xl text-amber-brand tracking-wide mb-6">
                CALL VAZQUEZ MILLAN CONCRETE FOR A STRONG ADDITION FOR YOUR
                COMMERCIAL PROPERTY IN SAN JOSE, CA
              </h3>
              <p className="text-concrete-light leading-relaxed mb-4">
                A small home needs a different foundation than a single-story
                store or a multi-story office building. We&apos;ll plan your
                concrete foundation installation from scratch to suit your
                building plan.
              </p>
              <p className="text-concrete-gray leading-relaxed mb-4">
                Do you want to add something new to your commercial property?
                You can rely on Vazquez Millan Concrete for something as small
                as a retaining wall or as large as a new foundation. We install
                durable commercial concrete features in San Jose, CA.
              </p>

              <h4 className="font-display text-lg text-concrete-offwhite tracking-wide mb-3">
                YOU CAN WORK WITH US TO BUILD:
              </h4>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {buildList.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-concrete-light text-sm">
                    <span className="w-1.5 h-1.5 bg-amber-brand rounded-full flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-concrete-gray text-sm mb-8">
                Our team brings eight years of experience to your commercial
                concrete installation, as well as top-quality concrete and
                equipment. Email us right away for a free estimate.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-amber">
                  Request a Bid
                </Link>
                <a href="tel:4086908051" className="btn-outline">
                  Call Now
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-gallery+%289%29-1920w.jpg"
                  alt="Commercial concrete piers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Sub-services quick links */}
              <div className="grid grid-cols-1 gap-2">
                {subServices.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="bg-concrete-dark border-l-4 border-amber-brand px-4 py-3 text-sm text-concrete-light hover:text-amber-brand transition-colors"
                  >
                    → {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Section */}
      <section className="bg-concrete-dark py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="h-1 w-12 bg-amber-brand mb-4" />
            <h2 className="font-display text-4xl text-concrete-offwhite tracking-wide">
              DOES YOUR CURRENT CONCRETE NEED WORK?
            </h2>
          </div>
          <p className="text-concrete-gray leading-relaxed mb-8">
            You can get exceptional commercial concrete repair services from our
            team. Plus, if your concrete is beyond repair, we can remove it and
            complete a fresh commercial concrete installation. Your replacement
            will last for years to come, whether it&apos;s an ornamental
            feature, a hardscape structure or a foundation. Contact our local
            commercial concrete experts in San Jose, CA today.
          </p>
          <Link href="/contact" className="btn-amber">
            Learn More
          </Link>
        </div>
      </section>

      <CTABanner headline="HAVE A COMMERCIAL PROJECT?" />
    </>
  );
}
