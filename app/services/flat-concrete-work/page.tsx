import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Concrete Services | San Jose, CA | Vazquez Millan Concrete",
  description:
    "We can even repair sidewalks. If the city of San Jose, CA told you that your sidewalks need to be repaired, schedule an appointment for our concrete services today.",
};

const subServices = [
  { label: "Patio", href: "/services/flat-concrete-work/patio" },
  { label: "Driveway", href: "/services/flat-concrete-work/driveway" },
  { label: "Walkway", href: "/services/flat-concrete-work/walkway" },
  { label: "Sidewalk Repair", href: "/contact" },
];

export default function FlatConcreteWorkPage() {
  return (
    <>
      <PageHero
        title="FLAT CONCRETE WORK"
        subtitle="Replace old, damaged concrete — driveways, patios, walkways, and sidewalks done right."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-concrete-work2-1920w.jpg"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl text-concrete-offwhite tracking-wide leading-none mb-3">
                REPLACE OLD, DAMAGED CONCRETE
              </h2>
              <h3 className="font-display text-xl text-amber-brand tracking-wide mb-6">
                ARRANGE FOR CONCRETE SERVICES IN SAN JOSE, CA
              </h3>
              <p className="text-concrete-light leading-relaxed mb-4">
                Your exterior concrete elements can have a huge impact on your
                home&apos;s value and curb appeal. If they&apos;re looking a
                little worse for wear, turn to Vazquez Millan Concrete. We offer
                professional concrete services in San Jose, CA that will leave
                you with sturdy and stylish concrete.
              </p>
              <p className="text-concrete-gray leading-relaxed mb-6">
                We can even repair sidewalks. If the city of San Jose, CA told
                you that your sidewalks need to be repaired, schedule an
                appointment for our concrete services today.
              </p>

              <h3 className="font-display text-xl text-concrete-offwhite tracking-wide mb-4">
                CHOOSE THE RIGHT CONCRETE ELEMENTS FOR YOUR PROPERTY
              </h3>
              <p className="text-concrete-gray mb-4">
                There are a lot of ways concrete paving services can improve your
                home. Renovate your exterior by adding a:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
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
              <p className="text-concrete-gray text-sm mb-8">
                Ready to update your property? Get a free estimate for our
                concrete paving services today. For your convenience, we can
                deliver the estimate over the phone or in person.
              </p>
              <Link href="/contact" className="btn-amber">
                Get a Free Quote
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-concrete-work2-1920w.jpg"
                alt="Flat concrete work for residential area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-service showcase */}
      <section className="bg-concrete-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="h-1 w-12 bg-amber-brand mb-4" />
            <h2 className="font-display text-4xl md:text-5xl text-concrete-offwhite tracking-wide">
              FLATWORK SERVICES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Driveway Concrete",
                body: "New driveway installation or full replacement. We prepare the sub-base, form the borders, pour, and finish to your spec — broom finish, exposed aggregate, or stamped. Even add a marble finish to your concrete.",
                href: "/services/flat-concrete-work/driveway",
                img: "https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-solid-driveway-1920w.jpg",
              },
              {
                title: "Patio Slabs",
                body: "Outdoor living space starts with a solid slab. We pour patios to precise grades with the finish of your choice — from brushed to stamped concrete that mimics stone or tile.",
                href: "/services/flat-concrete-work/patio",
                img: "https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-concrete-work2-1920w.jpg",
              },
              {
                title: "Walkways",
                body: "Whether you're looking to add beauty or function to your landscape, a concrete walkway is a great choice. Straight, curved, stamped, or colored — we do it all.",
                href: "/services/flat-concrete-work/walkway",
                img: "https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-walkway-1920w.jpg",
              },
              {
                title: "Sidewalk Repair",
                body: "Lifted, cracked, or uneven sidewalks are a liability. We saw-cut, remove, and repour damaged sections to city standards — matching texture and grade to surrounding surfaces.",
                href: "/contact",
                img: "https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-concrete-work2-1920w.jpg",
              },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-concrete-black border-l-4 border-amber-brand p-6 hover:-translate-y-1 transition-transform duration-200 group"
              >
                <h3 className="font-display text-2xl text-concrete-offwhite tracking-wide mb-3 group-hover:text-amber-brand transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-concrete-gray leading-relaxed">
                  {s.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="READY TO UPGRADE YOUR CONCRETE?" />
    </>
  );
}
