import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Parking Lot Installation, Parking Lot Paving | San Jose, CA | Vazquez Millan Concrete",
  description:
    "A poorly built parking lot can turn away potential clients or employees before they even enter your building. You can turn to Vazquez Millan Concrete to install a solid parking lot!",
};

const installPromises = [
  "Bring over eight years of experience to your service",
  "Use a careful installation process for seamless results",
  "Ensure your new parking lot is ready for years of use",
];

export default function ParkingLotsPage() {
  return (
    <>
      <PageHero
        title="PARKING LOTS"
        subtitle="Commercial and residential parking lot installation in San Jose, CA."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-car-slot-1920w.jpg"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl text-concrete-offwhite tracking-wide leading-none mb-3">
                DOES YOUR BUSINESS NEED A PARKING LOT?
              </h2>
              <h3 className="font-display text-xl text-amber-brand tracking-wide mb-6">
                GET AN EXCELLENT CONCRETE COMMERCIAL PARKING LOT FROM OUR TEAM
                IN SAN JOSE, CA
              </h3>
              <p className="text-concrete-light leading-relaxed mb-4">
                The parking lot at your business needs to be attractive, durable
                and easy to drive on. A poorly built parking lot can turn away
                potential clients or employees before they even enter your
                building. You can turn to Vazquez Millan Concrete to install a
                solid parking lot on your property in San Jose, CA.
              </p>
              <p className="text-concrete-gray mb-4">
                When we install a concrete commercial parking lot, we&apos;ll:
              </p>
              <ul className="space-y-3 mb-8">
                {installPromises.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-concrete-light text-sm">
                    <span className="w-1.5 h-1.5 bg-amber-brand rounded-full flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="text-concrete-gray text-sm mb-8">
                You can count on our experienced team to do the job right. Call{" "}
                <a href="tel:4086908051" className="text-amber-brand hover:underline">
                  (408) 690-8051
                </a>{" "}
                now to arrange for concrete commercial parking lot installation
                services.
              </p>
              <Link href="/contact" className="btn-amber">
                Request a Bid
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-car-slot-1920w.jpg"
                alt="Commercial parking lot"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-concrete-dark py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="h-1 w-12 bg-amber-brand mb-4" />
            <h2 className="font-display text-4xl text-concrete-offwhite tracking-wide">
              ADD A PARKING LOT TO RESIDENTIAL PROPERTY
            </h2>
          </div>
          <p className="text-concrete-gray leading-relaxed mb-8">
            Maybe you own an apartment complex. Maybe you&apos;re developing a
            townhome community. Either way, when you need a concrete residential
            parking lot, you can count on us to take on the project.
            We&apos;ll install a parking lot that&apos;s easy for your residents
            to use and suits your neighborhood&apos;s look. Contact us today to
            plan your concrete residential parking lot.
          </p>
          <Link href="/contact" className="btn-amber">
            Learn More
          </Link>
        </div>
      </section>

      <CTABanner headline="NEED A PARKING LOT ESTIMATE?" />
    </>
  );
}
